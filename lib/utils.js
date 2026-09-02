import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatNumber(val, decimals = 1) {
  if (val === undefined || val === null) return "0";
  return Number(val).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function calculateStructuralSpecs(dimensions, profile, material) {
  const { width = 4000, depth = 3000, height = 2800, baysX = 2, baysZ = 2 } = dimensions;
  
  // Total linear meters of structural members
  // Columns = (baysX + 1) * (baysZ + 1) * height
  const columnCount = (baysX + 1) * (baysZ + 1);
  const totalColumnLength = (columnCount * height) / 1000;
  
  // Beams in X = (baysZ + 1) * width * 2 (top & bottom/mid)
  const totalBeamsXLength = ((baysZ + 1) * width * 2) / 1000;
  
  // Beams in Z = (baysX + 1) * depth * 2
  const totalBeamsZLength = ((baysX + 1) * depth * 2) / 1000;
  
  // Cross bracing
  const bracingLength = (baysX * baysZ * Math.sqrt(width * width + height * height)) / 2000;
  
  const totalLinearMeters = totalColumnLength + totalBeamsXLength + totalBeamsZLength + bracingLength;
  
  // Weight calculation based on profile linear density (kg/m) and material density factor
  const profileWeightPerMeter = profile?.weightPerMeter || 25.4; // kg/m for default steel
  const materialDensityFactor = material?.densityFactor || 1.0; // 1.0 for Steel, 0.35 for Aluminum, 1.02 for SS316
  
  const totalWeightKg = totalLinearMeters * profileWeightPerMeter * materialDensityFactor;
  
  // Max safe distributed load in kN (simplified Euler / bending approximation)
  const yieldStrengthMPa = material?.yieldStrength || 355; // MPa
  const momentOfInertia = profile?.momentOfInertia || 1800; // cm4
  const spanMeters = Math.max(width / baysX, depth / baysZ) / 1000;
  
  // Estimated safe uniform load (kN)
  const maxSafeLoadKN = Math.round((yieldStrengthMPa * momentOfInertia) / (spanMeters * 80));
  
  // Max deflection in mm under standard working load
  const maxDeflectionMm = Number(((spanMeters * spanMeters * 3.2) / (momentOfInertia / 100)).toFixed(2));
  
  // Estimated fabrication cost ($ USD)
  const baseCostPerKg = material?.costPerKg || 4.2;
  const jointCost = columnCount * 4 * 35; // $35 per welded/bolted node
  const estimatedCost = Math.round(totalWeightKg * baseCostPerKg + jointCost + 450);

  return {
    totalLinearMeters: Math.round(totalLinearMeters * 10) / 10,
    totalWeightKg: Math.round(totalWeightKg),
    maxSafeLoadKN: Math.max(12, maxSafeLoadKN),
    maxDeflectionMm: Math.max(0.4, maxDeflectionMm),
    jointCount: columnCount * 4,
    memberCount: columnCount + (baysZ + 1) * baysX + (baysX + 1) * baysZ + Math.round(baysX * baysZ * 1.5),
    estimatedCost,
  };
}
