export const PROFILE_TYPES = [
  {
    id: "hea-200",
    name: "HEA 200 European I-Beam",
    category: "Wide Flange Beams",
    description: "Standard structural wide-flange beam for main load-bearing frames.",
    dimensions: "190 × 200 × 6.5 × 10 mm",
    weightPerMeter: 42.3, // kg/m
    momentOfInertia: 3690, // cm4
    badge: "Most Popular",
  },
  {
    id: "ipe-240",
    name: "IPE 240 Parallel Flange I-Beam",
    category: "I-Beams",
    description: "High bending resistance ratio, ideal for long span roof and floor joists.",
    dimensions: "240 × 120 × 6.2 × 9.8 mm",
    weightPerMeter: 30.7,
    momentOfInertia: 3892,
    badge: "High Efficiency",
  },
  {
    id: "shs-120",
    name: "SHS 120×120 Square Hollow Section",
    category: "Hollow Sections",
    description: "Equal dual-axis structural column resistance with clean modern aesthetics.",
    dimensions: "120 × 120 × 6.0 mm",
    weightPerMeter: 20.8,
    momentOfInertia: 512,
    badge: "Clean Aesthetics",
  },
  {
    id: "rhs-160",
    name: "RHS 160×80 Rectangular Hollow Section",
    category: "Hollow Sections",
    description: "Torsional stiffness with directional strength for perimeter facade framing.",
    dimensions: "160 × 80 × 5.0 mm",
    weightPerMeter: 17.5,
    momentOfInertia: 645,
    badge: "Facade Standard",
  },
  {
    id: "alu-4590",
    name: "Aluminum T-Slot 45×90 Heavy",
    category: "Modular Extrusions",
    description: "Anodized modular framing with continuous 10mm T-slots for fast assembly.",
    dimensions: "45 × 90 mm Extrusion",
    weightPerMeter: 5.6,
    momentOfInertia: 125,
    badge: "Rapid Assembly",
  },
];

export const MATERIAL_GRADES = [
  {
    id: "s355jr",
    name: "Structural Steel S355JR",
    standard: "EN 10025-2",
    yieldStrength: 355, // MPa
    tensileStrength: "470 - 630 MPa",
    densityFactor: 1.0, // base
    costPerKg: 3.8,
    color: "#64748b",
    tag: "Industry Standard",
  },
  {
    id: "alu-6061",
    name: "Aluminum 6061-T6",
    standard: "ASTM B221",
    yieldStrength: 276,
    tensileStrength: "310 MPa",
    densityFactor: 0.345, // 2.7g/cm3 vs 7.85g/cm3
    costPerKg: 7.9,
    color: "#94a3b8",
    tag: "Ultralight",
  },
  {
    id: "ss-316l",
    name: "Stainless Steel 316L (Marine)",
    standard: "AISI 316L / 1.4404",
    yieldStrength: 290,
    tensileStrength: "580 MPa",
    densityFactor: 1.02,
    costPerKg: 11.5,
    color: "#cbd5e1",
    tag: "Corrosion Proof",
  },
  {
    id: "s460nh",
    name: "High-Strength Steel S460NH",
    standard: "EN 10210",
    yieldStrength: 460,
    tensileStrength: "560 - 720 MPa",
    densityFactor: 1.0,
    costPerKg: 4.9,
    color: "#475569",
    tag: "Heavy Payload",
  },
];

export const EXPORT_FORMATS = [
  {
    id: "step",
    name: "STEP AP214 / AP242",
    ext: ".step",
    desc: "Universal 3D CAD solid model with precise B-Rep surfaces for SolidWorks, Inventor, and Rhino.",
    icon: "Boxes",
    popular: true,
  },
  {
    id: "dxf",
    name: "AutoCAD 2D / 3D DXF",
    ext: ".dxf",
    desc: "Vector wireframe, dimensioned elevations, and CNC laser/plasma cut-paths.",
    icon: "FileCode",
    popular: true,
  },
  {
    id: "ifc",
    name: "IFC4 BIM Standard",
    ext: ".ifc",
    desc: "Building Information Modeling exchange with embedded structural load metadata for Revit & Tekla.",
    icon: "Building2",
    popular: true,
  },
  {
    id: "gcode",
    name: "CNC Milling & Saw Toolpaths",
    ext: ".nc",
    desc: "Machine-ready G-Code with automated hole drilling, mitre cuts, and coping operations.",
    icon: "Cpu",
    popular: false,
  },
  {
    id: "pdf",
    name: "Engineering Cut-Sheet PDF",
    ext: ".pdf",
    desc: "Automated fabrication drawing package with bill of materials (BOM), weld symbols, and part IDs.",
    icon: "FileText",
    popular: false,
  },
];

export const CAD_TEMPLATES = [
  {
    id: "warehouse-portal",
    title: "Industrial Portal Frame 12m",
    category: "Industrial Buildings",
    dimensions: { width: 12000, depth: 8000, height: 5500, baysX: 4, baysZ: 3 },
    profile: "hea-200",
    material: "s355jr",
    image: "portal_frame",
    highlights: ["Clear span 12m", "Pitched roof rafters", "Haunched knee joints"],
  },
  {
    id: "modular-mezzanine",
    title: "Heavy Storage Mezzanine Floor",
    category: "Warehouse Logistics",
    dimensions: { width: 6000, depth: 4000, height: 3200, baysX: 3, baysZ: 2 },
    profile: "ipe-240",
    material: "s355jr",
    image: "mezzanine",
    highlights: ["5 kN/m² live load", "Bolt-together joints", "Drop-in joist hangers"],
  },
  {
    id: "robotics-gantry",
    title: "Precision XYZ Robotics Gantry",
    category: "Automation & Robotics",
    dimensions: { width: 3500, depth: 2500, height: 2200, baysX: 2, baysZ: 1 },
    profile: "alu-4590",
    material: "alu-6061",
    image: "gantry",
    highlights: ["Linear rail ready", "Sub-millimeter deflection", "Lightweight frame"],
  },
  {
    id: "canopy-cantilever",
    title: "Architectural Cantilever Canopy",
    category: "Architecture & Facades",
    dimensions: { width: 5000, depth: 3000, height: 3600, baysX: 2, baysZ: 1 },
    profile: "rhs-160",
    material: "ss-316l",
    image: "canopy",
    highlights: ["Marine-grade SS316", "Hidden internal fasteners", "Integrated drainage"],
  },
];

export const FEATURE_LIST = [
  {
    icon: "Cpu",
    title: "Parametric Frame Engine",
    description: "Instantly generate complete structural frameworks in milliseconds with mathematically verified joint geometry and member alignments.",
  },
  {
    icon: "Layers",
    title: "Automated BOM & Cut-Lists",
    description: "Every beam, column, purlin, gusset plate, and bolt is indexed in real time into production-ready bill of materials.",
  },
  {
    icon: "Activity",
    title: "Real-Time FEA Deflection",
    description: "Live finite element analysis solver detects stress concentrations, maximum shear, and Eurocode/AISC deflection limits instantly.",
  },
  {
    icon: "Share2",
    title: "Direct CNC & BIM Sync",
    description: "Export directly to STEP solid geometry, IFC4 architectural models, DXF flat patterns, or CNC automated saw toolpaths.",
  },
  {
    icon: "ShieldCheck",
    title: "Code Compliant Standards",
    description: "Pre-configured verification for Eurocode 3 (EN 1993), AISC 360-16, and AS 4100 structural steel design specifications.",
  },
  {
    icon: "CloudLightning",
    title: "Cloud Collaboration",
    description: "Share live interactive 3D WebGL links with structural engineers, fabricators, and clients with zero plugin installs.",
  },
];

export const FAQS = [
  {
    question: "How does CAD FAMES generate STEP and CAD files?",
    answer: "CAD FAMES runs a cloud-native parametric CAD kernel that compiles geometric boundary representations (B-Rep) directly from your structural parameters. Exported STEP files include full solid geometry, hole placements, and chamfers compatible with SolidWorks, Autodesk Inventor, Fusion 360, and Rhino.",
  },
  {
    question: "Can I import custom steel sections and regional profiles?",
    answer: "Yes! CAD FAMES includes pre-loaded European (HEA, HEB, IPE, UPN), American (W-Beam, HSS), British (UB, UC), and metric Aluminum extrusion catalogs. You can also define custom parametric hollow and open profiles with custom wall thicknesses.",
  },
  {
    question: "Is the stress and deflection analysis verified?",
    answer: "Our interactive viewer provides a real-time 1D/2D beam element FEA solver that calculates shear, bending moments, and deflection under uniform distributed loads (UDL) and point loads, benchmarked against Eurocode 3 and AISC 360 calculations.",
  },
  {
    question: "Can fabricators directly load the cut-sheets and G-Code into CNC saws?",
    answer: "Absolutely. Exported packages contain nested cut-lists with optimized bar lengths to minimize scrap, mitre angle data (±45°), bolt hole drilling coordinates, and standardized DSTV/NC files for automated structural fabrication machinery.",
  },
  {
    question: "How does Stitch AI MCP connect with CAD FAMES?",
    answer: "Through the Stitch AI Model Context Protocol integration, AI agents can dynamically query project parameters, generate custom structural frame variations, run automated design-rule checks, and sync geometry straight to your engineering workspace.",
  },
];
