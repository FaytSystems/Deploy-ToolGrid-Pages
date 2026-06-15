const normalize = (value) => String(value ?? "").trim();
const lower = (value) => normalize(value).toLowerCase();
const slugify = (value) => lower(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const unique = (values) => [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
export const NEXT_FRONTIER_TOOL_EXPANSION_VERSION = "2026-06-13-next-frontier-unrepeated-tools-v1";
export const NEXT_FRONTIER_TOOL_LABEL = "Next Frontier Functional Tool";
export const NEXT_FRONTIER_DOMAIN_TARGET_COUNT = 600;
export const NEXT_FRONTIER_OPERATION_TARGET_COUNT = 61;
export const NEXT_FRONTIER_SUPPORT_TOOL_TARGET_COUNT = 61;
export const NEXT_FRONTIER_TOOL_TARGET_COUNT = (NEXT_FRONTIER_DOMAIN_TARGET_COUNT * NEXT_FRONTIER_OPERATION_TARGET_COUNT) + NEXT_FRONTIER_SUPPORT_TOOL_TARGET_COUNT;
const NEXT_MACRO_DOMAINS = Object.freeze([
  {
    "macro": "Cultural Heritage & Archives",
    "tags": [
      "cultural",
      "heritage",
      "archives",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Oral History Collection",
      "Artifact Loan Desk",
      "Museum Exhibit Rotation",
      "Archival Box Intake",
      "Manuscript Digitization",
      "Provenance Review",
      "Restoration Queue",
      "Visitor Comment Analysis",
      "Public Program Packet",
      "Donor Object Intake",
      "Catalog Metadata Cleanup",
      "Rights Clearance Folder",
      "Collection Insurance File",
      "Exhibition Label Draft",
      "Storage Condition Round",
      "Historic Photograph Metadata",
      "Cultural Site Tour",
      "Curator Handoff Board",
      "Conservation Treatment Record",
      "Traveling Exhibit Crate"
    ]
  },
  {
    "macro": "Aviation & Aerospace Ops",
    "tags": [
      "aviation",
      "aerospace",
      "ops",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Drone Flight Mission",
      "Runway Inspection Round",
      "Hangar Tool Checkout",
      "Pilot Currency Tracker",
      "Aircraft Logbook Review",
      "Flight School Lesson",
      "Payload Balance Check",
      "Maintenance Discrepancy Note",
      "Aerospace Test Article",
      "Ground Crew Briefing",
      "Weather Delay Desk",
      "Airport Ramp Safety",
      "Parts Traceability Packet",
      "Simulator Session",
      "Flight Manifest Review",
      "Airworthiness Document Set",
      "Avionics Update Window",
      "Fuel Burn Estimate",
      "Crew Duty Handoff",
      "Preflight Equipment Pack"
    ]
  },
  {
    "macro": "Marine Port & Vessel Ops",
    "tags": [
      "marine",
      "port",
      "vessel",
      "ops",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Dock Slip Assignment",
      "Mooring Inspection",
      "Harbor Work Order",
      "Vessel Maintenance Log",
      "Bilge Check Routine",
      "Marina Guest Packet",
      "Ferry Passenger Flow",
      "Sailing Regatta Board",
      "Boat Winterization",
      "Fishery Landing Note",
      "Ship Chandlery Order",
      "Dry Dock Punchlist",
      "Tide Window Planner",
      "Navigation Aid Report",
      "Crew Watch Rotation",
      "Marine Fuel Ledger",
      "Container Berth Update",
      "Shore Power Checklist",
      "Boat Rental Turnover",
      "Water Taxi Manifest"
    ]
  },
  {
    "macro": "Specialty Agriculture",
    "tags": [
      "specialty",
      "agriculture",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Apiary Honey Pull",
      "Vineyard Canopy Pass",
      "Orchard Thinning Round",
      "Aquaponics Nutrient Cycle",
      "Seed Saving Lot",
      "Microgreen Tray Audit",
      "Saffron Harvest Tray",
      "Lavender Drying Batch",
      "Maple Syrup Boil",
      "Grain Bin Inspection",
      "Hops Trellis Walk",
      "Tea Garden Pluck",
      "Berry U-Pick Rotation",
      "Heirloom Tomato Trial",
      "Floriculture Stem Count",
      "Green Manure Turn-In",
      "Vermicompost Harvest",
      "Pasture Paddock Move",
      "Soil Block Seeding",
      "Irrigation Emitter Test"
    ]
  },
  {
    "macro": "Forestry Land & Habitat",
    "tags": [
      "forestry",
      "land",
      "habitat",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Timber Cruise Sheet",
      "Trailhead Sign Check",
      "Invasive Species Pull",
      "Habitat Restoration Plot",
      "Controlled Burn Prep",
      "Tree Planting Crew",
      "Forest Road Repair",
      "Wildlife Corridor Note",
      "Erosion Control Swale",
      "Riparian Buffer Survey",
      "Seedling Survival Count",
      "Canopy Cover Estimate",
      "Prescribed Fire Briefing",
      "Boundary Marker Walk",
      "Forest Product Permit",
      "Woodlot Harvest Plan",
      "Habitat Camera Review",
      "Pollinator Meadow Pass",
      "Wetland Boardwalk Check",
      "Recreation Impact Note"
    ]
  },
  {
    "macro": "Public Works & Utilities",
    "tags": [
      "public",
      "works",
      "utilities",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Pothole Repair Ticket",
      "Streetlight Outage Route",
      "Snow Plow Sector",
      "Water Meter Reading",
      "Hydrant Flush List",
      "Sidewalk Hazard Note",
      "Storm Drain Inlet Pass",
      "Traffic Sign Replacement",
      "Park Bench Repair",
      "Trash Route Exception",
      "Recycling Cart Audit",
      "Culvert Inspection",
      "Bus Shelter Maintenance",
      "Road Striping Window",
      "Utility Locate Packet",
      "Municipal Notice Draft",
      "Fleet Yard Queue",
      "Meter Tamper Review",
      "Public Counter Request",
      "Infrastructure Photo Log"
    ]
  },
  {
    "macro": "Sports Team Operations",
    "tags": [
      "sports",
      "team",
      "operations",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Roster Rotation Board",
      "Practice Drill Block",
      "Game Film Clip List",
      "Tournament Seeding Board",
      "Scouting Note Packet",
      "Athlete Availability Sheet",
      "Equipment Bag Check",
      "Travel Roster Packet",
      "Postgame Review Log",
      "Conditioning Circuit",
      "Tryout Evaluation Card",
      "Playbook Install Day",
      "Injury Status Note",
      "Coach Meeting Agenda",
      "Referee Incident Note",
      "Sponsor Scoreboard Mention",
      "Youth League Snack List",
      "Team Banquet Plan",
      "Ticket Allotment Sheet",
      "Field Setup Checklist"
    ]
  },
  {
    "macro": "Arts Performance & Stagecraft",
    "tags": [
      "arts",
      "performance",
      "stagecraft",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Rehearsal Call Sheet",
      "Costume Fitting Rack",
      "Stage Cue Sequence",
      "Lighting Plot Note",
      "Audition Packet",
      "Props Table Map",
      "Set Change Plan",
      "Sound Check Round",
      "Green Room Rider",
      "Ticketing Comp List",
      "Front Of House Brief",
      "Usher Station Plan",
      "Scene Breakdown Board",
      "Makeup Look Sheet",
      "Dance Formation Grid",
      "Orchestra Chair Map",
      "Backstage Safety Walk",
      "Matinee Turnover",
      "Cast Communication Tree",
      "Load-In Truck Plan"
    ]
  },
  {
    "macro": "Hospitality Lodging & Guest Ops",
    "tags": [
      "hospitality",
      "lodging",
      "guest",
      "ops",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Hotel Room Block",
      "Banquet Event Order",
      "Concierge Request Board",
      "Guest Recovery Case",
      "Housekeeping Zone Turn",
      "Lost Item Claim",
      "Amenity Stock Round",
      "Late Checkout Queue",
      "Front Desk Shift Brief",
      "Breakfast Service Count",
      "Maintenance Room Ticket",
      "Group Arrival Packet",
      "Valet Key Log",
      "Pool Inspection Round",
      "Lobby Refresh Plan",
      "Guest Review Response",
      "Linen Par Count",
      "Room Move Note",
      "Vip Arrival Prep",
      "Night Audit Packet"
    ]
  },
  {
    "macro": "Personal Wellness & Coaching Admin",
    "tags": [
      "personal",
      "wellness",
      "coaching",
      "admin",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Habit Streak Review",
      "Hydration Challenge Board",
      "Mindfulness Session Plan",
      "Coach Client Check-In",
      "Goal Accountability Note",
      "Meal Rhythm Map",
      "Stretch Routine Card",
      "Journaling Prompt Set",
      "Screen Break Schedule",
      "Energy Level Log",
      "Focus Block Planner",
      "Recovery Day Guide",
      "Wellness Resource Packet",
      "Walking Route Journal",
      "Sleep Winddown Card",
      "Habit Friction Note",
      "Monthly Reflection Pack",
      "Stress Trigger Log",
      "Personal Reward Menu",
      "Wellbeing Progress Note"
    ]
  },
  {
    "macro": "Technical Engineering & Hardware",
    "tags": [
      "technical",
      "engineering",
      "hardware",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Pcb Assembly Batch",
      "Firmware Release Note",
      "Cad Revision Sheet",
      "Bom Change Record",
      "Bench Calibration Pass",
      "Prototype Smoke Test",
      "Thermal Chamber Run",
      "Connector Pinout Check",
      "Hardware Bringup Log",
      "Component Substitute Review",
      "Solder Station Setup",
      "Schematic Review Packet",
      "Test Jig Checklist",
      "Enclosure Fit Audit",
      "Engineering Change Order",
      "Field Failure Packet",
      "Oscilloscope Capture Note",
      "Sensor Noise Run",
      "Assembly Traveler",
      "Design Verification Matrix"
    ]
  },
  {
    "macro": "Interior Design & Architecture",
    "tags": [
      "interior",
      "design",
      "architecture",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Moodboard Comparison",
      "Space Programming Sheet",
      "Finish Selection Board",
      "Site Survey Note",
      "Furniture Layout Pass",
      "Lighting Concept Board",
      "Material Sample Tracker",
      "Client Style Interview",
      "Room Measurement Log",
      "Accessibility Circulation Check",
      "Permit Drawing List",
      "Vendor Showroom Visit",
      "Punchlist Walk",
      "Color Palette Review",
      "Tile Layout Plan",
      "Fixture Schedule Note",
      "Render Feedback Round",
      "Scope Allowance Sheet",
      "Install Day Sequence",
      "Presentation Board Prep"
    ]
  },
  {
    "macro": "Publishing Editorial & Writing",
    "tags": [
      "publishing",
      "editorial",
      "writing",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Manuscript Query Pack",
      "Editorial Calendar Lane",
      "Copyedit Pass List",
      "Proofreading Mark Sheet",
      "Chapter Continuity Note",
      "Book Launch Asset List",
      "Author Bio Refresh",
      "Blurb Variant Set",
      "Citation Cleanup Queue",
      "Newsletter Section Plan",
      "Cover Brief Packet",
      "Beta Reader Feedback",
      "Submission Tracker",
      "Rights Reversion Note",
      "Style Guide Update",
      "Index Term Pass",
      "Press Kit Copy",
      "Serial Episode Plan",
      "Reader Question Bank",
      "Translation Note Pack"
    ]
  },
  {
    "macro": "Game Interactive & Worldbuilding",
    "tags": [
      "game",
      "interactive",
      "worldbuilding",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Level Layout Critique",
      "Npc Dialogue Branch",
      "Loot Table Balance",
      "Map Objective Pass",
      "Tutorial Step Check",
      "Quest Dependency Map",
      "Boss Mechanic Note",
      "Economy Sink Review",
      "Playtest Feedback Grid",
      "Control Remap Guide",
      "Ui Flow Capture",
      "Achievement Set Draft",
      "Lore Bible Entry",
      "Faction Relationship Map",
      "Difficulty Curve Pass",
      "Sound Cue Board",
      "Accessibility Option Note",
      "Mod Support Checklist",
      "Patch Note Frame",
      "Community Event Quest"
    ]
  },
  {
    "macro": "Clinical Research Admin",
    "tags": [
      "clinical",
      "research",
      "admin",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Study Visit Packet",
      "Participant Follow-Up Log",
      "Consent Version Tracker",
      "Protocol Deviation Note",
      "Case Report Form Review",
      "Site Monitor Query",
      "Recruitment Funnel Sheet",
      "Lab Kit Shipment Note",
      "Adverse Event Admin Log",
      "Regulatory Binder Tab",
      "Irb Submission Checklist",
      "Data Query Queue",
      "Visit Window Calendar",
      "Screening Script Card",
      "Source Document Index",
      "Investigator Meeting Notes",
      "Study Closeout Binder",
      "Sample Chain Note",
      "Training Delegation Log",
      "Participant Reminder Set"
    ]
  },
  {
    "macro": "Civic Campaign & Advocacy",
    "tags": [
      "civic",
      "campaign",
      "advocacy",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Petition Signature Batch",
      "Canvass Turf Packet",
      "Phone Bank Script Set",
      "Public Comment Tracker",
      "Coalition Meeting Board",
      "Volunteer Onboarding Lane",
      "Yard Sign Route",
      "Donor Call Note",
      "Press Statement Draft",
      "Policy Brief Outline",
      "Event Permit Packet",
      "Speaker Request Queue",
      "District Contact Sheet",
      "Issue Explainer Card",
      "Rapid Response Note",
      "Endorsement Tracker",
      "Ballot Measure Faq",
      "Letter Campaign Packet",
      "Town Hall Question List",
      "Campaign Compliance Binder"
    ]
  },
  {
    "macro": "Safety Security & Loss Prevention",
    "tags": [
      "safety",
      "security",
      "loss",
      "prevention",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Camera Coverage Note",
      "Access Log Review",
      "Safety Drill Card",
      "Incident Witness Packet",
      "Lost Badge Ticket",
      "Asset Recovery Note",
      "Guard Post Order",
      "Visitor Badge Queue",
      "Alarm Event Triage",
      "Key Control Ledger",
      "Security Patrol Route",
      "Lock Inspection Pass",
      "Restricted Area Brief",
      "Threat Observation Note",
      "Safe Opening Checklist",
      "Cash Escort Plan",
      "After-Hours Access Review",
      "Contractor Security Brief",
      "Emergency Door Audit",
      "Loss Pattern Snapshot"
    ]
  },
  {
    "macro": "Import Export & Trade",
    "tags": [
      "import",
      "export",
      "trade",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Customs Invoice Pack",
      "Hs Code Research Note",
      "Freight Booking Lane",
      "Certificate Of Origin Set",
      "Commercial Sample Shipment",
      "Incoterms Comparison",
      "Export Control Screen",
      "Broker Question List",
      "Packing Declaration",
      "Port Delay Notice",
      "Duty Estimate Note",
      "Trade Document Binder",
      "Container Seal Log",
      "Supplier Declaration Request",
      "Import Arrival Packet",
      "Bonded Warehouse Note",
      "Inspection Hold Response",
      "Tariff Change Watch",
      "Trade Lane Checklist",
      "Landed Cost Memo"
    ]
  },
  {
    "macro": "Knowledge Management Systems",
    "tags": [
      "knowledge",
      "management",
      "systems",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Taxonomy Mapping Board",
      "Wiki Article Refresh",
      "Glossary Governance Note",
      "Content Owner Matrix",
      "Search Synonym List",
      "Knowledge Gap Scan",
      "Archive Deprecation Note",
      "Faq Merge Pass",
      "Support Article Split",
      "Tag Hierarchy Review",
      "Onboarding Knowledge Trail",
      "Retention Category Map",
      "Source-Of-Truth Register",
      "Decision Record Index",
      "Knowledge Base Health Score",
      "Internal Link Audit",
      "Expert Locator Card",
      "Documentation Freshness Queue",
      "Knowledge Transfer Pack",
      "Semantic Label Review"
    ]
  },
  {
    "macro": "Customer Research & Insights",
    "tags": [
      "customer",
      "research",
      "insights",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Interview Guide Ladder",
      "Survey Logic Review",
      "Persona Evidence Board",
      "Usability Session Plan",
      "Research Consent Note",
      "Synthesis Wall Tags",
      "Quote Repository Cleanup",
      "Insight Confidence Card",
      "Participant Screener",
      "Journey Pain Map",
      "Sample Balance Check",
      "Concept Test Frame",
      "Diary Study Prompt",
      "Moderator Script Pass",
      "Research Readout Packet",
      "Feedback Coding Round",
      "Segment Definition Note",
      "Product Discovery Lane",
      "Voice Of Customer Digest",
      "Stakeholder Insight Brief"
    ]
  },
  {
    "macro": "Environmental Monitoring",
    "tags": [
      "environmental",
      "monitoring",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Water Sample Round",
      "Air Quality Station Check",
      "Waste Audit Batch",
      "Soil Erosion Photo Point",
      "Noise Meter Reading",
      "Greenhouse Gas Ledger",
      "Stormwater Outfall Note",
      "Recycling Contamination Pass",
      "Habitat Transect Record",
      "Tree Canopy Heat Note",
      "Energy Meter Snapshot",
      "Indoor Air Survey",
      "Compost Temperature Log",
      "Landfill Diversion Memo",
      "Chemical Storage Walk",
      "Spill Prevention Packet",
      "Sustainability Badge Review",
      "Environmental Permit Calendar",
      "Field Sensor Maintenance",
      "Resource Reduction Plan"
    ]
  },
  {
    "macro": "Specialty Animal Operations",
    "tags": [
      "specialty",
      "animal",
      "operations",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Aviary Breeding Note",
      "Aquarium Water Change",
      "Kennel Rotation Board",
      "Equine Feed Adjustment",
      "Dairy Sanitation Pass",
      "Alpaca Fleece Sort",
      "Animal Enrichment Schedule",
      "Zoo Keeper Handoff",
      "Wildlife Rehab Intake",
      "Hatchery Tank Check",
      "Livestock Show Packet",
      "Farrier Appointment Board",
      "Feed Conversion Log",
      "Pasture Parasite Note",
      "Shelter Kennel Card",
      "Animal Transport Crate",
      "Barn Ventilation Check",
      "Nest Box Observation",
      "Biosecurity Footbath Log",
      "Animal Adoption Match"
    ]
  },
  {
    "macro": "Robotics Automation & Sensors",
    "tags": [
      "robotics",
      "automation",
      "sensors",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Robot Path Waypoint",
      "Sensor Calibration Map",
      "Edge Device Heartbeat",
      "Vision Model Capture",
      "Actuator Test Sweep",
      "Robot Arm Job Card",
      "Autonomous Route Fence",
      "Fleet Robot Charger",
      "Lidar Coverage Note",
      "Telemetry Anomaly Board",
      "Payload Swap Checklist",
      "Automation Cell Reset",
      "Plc Tag Note",
      "Machine Vision Defect Set",
      "Sensor Fusion Snapshot",
      "Robot Safety Stop Test",
      "Autonomous Task Queue",
      "Cobot Work Instruction",
      "Firmware Rollback Plan",
      "Digital Twin Update"
    ]
  },
  {
    "macro": "Academic Program Administration",
    "tags": [
      "academic",
      "program",
      "administration",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Course Equivalency Sheet",
      "Syllabus Policy Check",
      "Grading Rubric Pass",
      "Capstone Review Board",
      "Advising Note Queue",
      "Lecture Capture Schedule",
      "Lab Section Roster",
      "Academic Appeal Packet",
      "Assessment Outcome Map",
      "Curriculum Change Memo",
      "Faculty Workload Table",
      "Program Accreditation Evidence",
      "Student Portfolio Review",
      "Internship Placement Tracker",
      "Exam Accommodation Note",
      "Course Catalog Update",
      "Learning Objective Alignment",
      "Committee Minutes Packet",
      "Textbook Adoption Sheet",
      "Semester Readiness Board"
    ]
  },
  {
    "macro": "Craft Production Studios",
    "tags": [
      "craft",
      "production",
      "studios",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Pottery Kiln Load",
      "Glass Fusing Schedule",
      "Metal Casting Pour",
      "Printmaking Edition Log",
      "Woodturning Blank List",
      "Ceramic Glaze Test",
      "Fiber Dye Bath",
      "Blacksmith Heat Pass",
      "Screenprint Registration",
      "Studio Safety Cleanup",
      "Craft Inventory Batch",
      "Commission Intake Card",
      "Material Scrap Plan",
      "Tool Sharpening Round",
      "Artist Booth Packing",
      "Custom Order Proof",
      "Workshop Supply Kit",
      "Prototype Swatch Board",
      "Shipping Fragile Item",
      "Studio Membership Orientation"
    ]
  },
  {
    "macro": "Beauty Wellness Studio Ops",
    "tags": [
      "beauty",
      "wellness",
      "studio",
      "ops",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Spa Room Turnover",
      "Barber Chair Schedule",
      "Esthetician Treatment Note",
      "Nail Art Design Board",
      "Massage Intake Update",
      "Wellness Package Bundle",
      "Salon Color Formula Card",
      "Lash Fill Cycle",
      "Retail Product Shelf",
      "Client Patch Test Log",
      "Appointment No-Show Review",
      "Gift Card Redemption Note",
      "Stylist Portfolio Update",
      "Sanitation Station Audit",
      "Membership Upsell Prompt",
      "Rebooking Script Set",
      "Service Timing Study",
      "Treatment Consent Packet",
      "Studio Ambiance Check",
      "Client Preference Card"
    ]
  },
  {
    "macro": "Neighborhood Real Asset Ops",
    "tags": [
      "neighborhood",
      "real",
      "asset",
      "ops",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Easement File Review",
      "Parcel Photo Packet",
      "Hoa Violation Note",
      "Tenant Welcome Binder",
      "Unit Turnover Punch",
      "Roof Warranty Lookup",
      "Storm Damage Photo Set",
      "Utility Transfer Queue",
      "Parking Assignment Map",
      "Landlord Inspection Card",
      "Short-Term Rental Guest Book",
      "Lease Clause Comparison",
      "Common Area Notice",
      "Property Tax Appeal Note",
      "Neighbor Access Agreement",
      "Trash Enclosure Rotation",
      "Pool Gate Code Log",
      "Mailroom Package Issue",
      "Move-In Elevator Calendar",
      "Resident Amenity Request"
    ]
  },
  {
    "macro": "Faith Community Operations",
    "tags": [
      "faith",
      "community",
      "operations",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Service Volunteer Roster",
      "Sermon Series Board",
      "Children Check-In Plan",
      "Hospitality Coffee Count",
      "Prayer Request Digest",
      "Donation Statement Packet",
      "Small Group Launch",
      "Facility Use Request",
      "Holiday Service Flow",
      "Outreach Meal Route",
      "Member Care Note",
      "Worship Set Handoff",
      "Livestream Volunteer Queue",
      "Youth Trip Packet",
      "Benevolence Request Intake",
      "Event Cleanup Team",
      "Visitor Follow-Up Card",
      "Ministry Budget Note",
      "Policy Acknowledgment",
      "Community Partner List"
    ]
  },
  {
    "macro": "Maker Education Labs",
    "tags": [
      "maker",
      "education",
      "labs",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Makerspace Tool Checkout",
      "Student Project Badge",
      "Laser Cutter Queue",
      "3D Printer Filament Log",
      "Robotics Club Kit",
      "Lab Safety Orientation",
      "Equipment Reservation Map",
      "Material Shelf Reset",
      "Project Showcase Board",
      "Mentor Office Hour Plan",
      "Fabrication Quote Sheet",
      "Prototype Critique Card",
      "Electronics Parts Bin",
      "Design Challenge Prompt",
      "Team Role Rotation",
      "Cleanup Duty Roster",
      "Skill Badge Rubric",
      "Maker Fair Booth",
      "Tool Training Record",
      "Lab Incident Note"
    ]
  },
  {
    "macro": "Special Event Experience Design",
    "tags": [
      "special",
      "event",
      "experience",
      "design",
      "next frontier",
      "unrepeated domain"
    ],
    "fields": [
      "Immersive Room Cue",
      "Festival Zone Map",
      "Sponsor Activation Plan",
      "Guest Badge Flow",
      "Vip Lounge Prep",
      "Speaker Greenroom Packet",
      "Food Truck Layout",
      "Event App Content",
      "Onsite Signage Audit",
      "Stage Transition Cue",
      "Ticket Scanning Lane",
      "Crowd Flow Observation",
      "Experience Feedback Card",
      "Temporary Power Map",
      "Volunteer Radio Channel",
      "Lost Child Protocol",
      "Merch Booth Replenishment",
      "Photobooth Prop Kit",
      "Rain Plan Switch",
      "Post-Event Asset Wrap"
    ]
  }
]);
export const NEXT_FRONTIER_OPERATION_FAMILIES = Object.freeze([
  {
    "id": "signal-pattern-mapper",
    "label": "Signal Pattern Mapper",
    "verb": "map patterns in",
    "schema": "signal_pattern_mapper",
    "accepts": [
      "prompt",
      "notes",
      "events"
    ],
    "produces": [
      "pattern-map",
      "signal-summary"
    ],
    "tags": [
      "patterns",
      "signals",
      "mapping",
      "trend",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "friction-point-finder",
    "label": "Friction Point Finder",
    "verb": "find friction points in",
    "schema": "friction_point_finder",
    "accepts": [
      "prompt",
      "process",
      "feedback"
    ],
    "produces": [
      "friction-list",
      "fix-options"
    ],
    "tags": [
      "friction",
      "blocker",
      "pain point",
      "fix",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "context-capsule-generator",
    "label": "Context Capsule Generator",
    "verb": "create a context capsule for",
    "schema": "context_capsule_generator",
    "accepts": [
      "prompt",
      "notes",
      "files"
    ],
    "produces": [
      "context-capsule",
      "handoff-summary"
    ],
    "tags": [
      "context",
      "capsule",
      "brief",
      "handoff",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "assumption-ledger-builder",
    "label": "Assumption Ledger Builder",
    "verb": "build an assumption ledger for",
    "schema": "assumption_ledger_builder",
    "accepts": [
      "prompt",
      "plan",
      "constraints"
    ],
    "produces": [
      "assumption-ledger",
      "validation-queue"
    ],
    "tags": [
      "assumptions",
      "unknowns",
      "validation",
      "risk",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "red-flag-scanner",
    "label": "Red Flag Scanner",
    "verb": "scan red flags for",
    "schema": "red_flag_scanner",
    "accepts": [
      "prompt",
      "notes",
      "policy"
    ],
    "produces": [
      "red-flags",
      "review-list"
    ],
    "tags": [
      "red flag",
      "risk",
      "warning",
      "review",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "opportunity-radar",
    "label": "Opportunity Radar",
    "verb": "spot opportunities in",
    "schema": "opportunity_radar",
    "accepts": [
      "prompt",
      "data",
      "notes"
    ],
    "produces": [
      "opportunities",
      "next-actions"
    ],
    "tags": [
      "opportunity",
      "growth",
      "idea",
      "action",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "trigger-rule-designer",
    "label": "Trigger Rule Designer",
    "verb": "design trigger rules for",
    "schema": "trigger_rule_designer",
    "accepts": [
      "prompt",
      "conditions",
      "events"
    ],
    "produces": [
      "trigger-rules",
      "automation-plan"
    ],
    "tags": [
      "trigger",
      "rules",
      "automation",
      "conditions",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "threshold-tuner",
    "label": "Threshold Tuner",
    "verb": "tune thresholds for",
    "schema": "threshold_tuner",
    "accepts": [
      "prompt",
      "metrics",
      "targets"
    ],
    "produces": [
      "threshold-plan",
      "tuning-notes"
    ],
    "tags": [
      "threshold",
      "tuning",
      "metrics",
      "limits",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "batch-split-planner",
    "label": "Batch Split Planner",
    "verb": "split batches for",
    "schema": "batch_split_planner",
    "accepts": [
      "prompt",
      "items",
      "capacity"
    ],
    "produces": [
      "batch-plan",
      "sequence"
    ],
    "tags": [
      "batch",
      "split",
      "capacity",
      "sequence",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "annotation-layer-builder",
    "label": "Annotation Layer Builder",
    "verb": "build annotation layers for",
    "schema": "annotation_layer_builder",
    "accepts": [
      "prompt",
      "document",
      "image"
    ],
    "produces": [
      "annotations",
      "review-layer"
    ],
    "tags": [
      "annotation",
      "markup",
      "notes",
      "review",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "traceability-mapper",
    "label": "Traceability Mapper",
    "verb": "map traceability for",
    "schema": "traceability_mapper",
    "accepts": [
      "prompt",
      "items",
      "sources"
    ],
    "produces": [
      "trace-map",
      "audit-trail"
    ],
    "tags": [
      "traceability",
      "audit",
      "source",
      "chain",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "evidence-quality-grader",
    "label": "Evidence Quality Grader",
    "verb": "grade evidence quality for",
    "schema": "evidence_quality_grader",
    "accepts": [
      "prompt",
      "sources",
      "claims"
    ],
    "produces": [
      "evidence-grade",
      "citation-checklist"
    ],
    "tags": [
      "evidence",
      "quality",
      "citation",
      "source",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "storage-slot-planner",
    "label": "Storage Slot Planner",
    "verb": "plan storage slots for",
    "schema": "storage_slot_planner",
    "accepts": [
      "prompt",
      "items",
      "space"
    ],
    "produces": [
      "storage-map",
      "slot-list"
    ],
    "tags": [
      "storage",
      "slots",
      "space",
      "inventory",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "packaging-spec-builder",
    "label": "Packaging Spec Builder",
    "verb": "build packaging specs for",
    "schema": "packaging_spec_builder",
    "accepts": [
      "prompt",
      "product",
      "dimensions"
    ],
    "produces": [
      "packaging-spec",
      "material-list"
    ],
    "tags": [
      "packaging",
      "dimensions",
      "materials",
      "shipping",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "chain-step-verifier",
    "label": "Chain Step Verifier",
    "verb": "verify chain steps for",
    "schema": "chain_step_verifier",
    "accepts": [
      "prompt",
      "process",
      "outputs"
    ],
    "produces": [
      "step-verification",
      "gap-list"
    ],
    "tags": [
      "verify",
      "chain",
      "steps",
      "process",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "human-review-gate",
    "label": "Human Review Gate",
    "verb": "create a human review gate for",
    "schema": "human_review_gate",
    "accepts": [
      "prompt",
      "task",
      "output"
    ],
    "produces": [
      "review-gate",
      "approval-prompt"
    ],
    "tags": [
      "human review",
      "approval",
      "gate",
      "checkpoint",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "drift-detector",
    "label": "Drift Detector",
    "verb": "detect drift in",
    "schema": "drift_detector",
    "accepts": [
      "prompt",
      "baseline",
      "current"
    ],
    "produces": [
      "drift-report",
      "correction-plan"
    ],
    "tags": [
      "drift",
      "baseline",
      "change",
      "monitor",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "baseline-benchmark",
    "label": "Baseline Benchmark",
    "verb": "benchmark baselines for",
    "schema": "baseline_benchmark",
    "accepts": [
      "prompt",
      "metrics",
      "samples"
    ],
    "produces": [
      "benchmark",
      "baseline-summary"
    ],
    "tags": [
      "benchmark",
      "baseline",
      "metrics",
      "compare",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "noise-filter-planner",
    "label": "Noise Filter Planner",
    "verb": "filter noise from",
    "schema": "noise_filter_planner",
    "accepts": [
      "prompt",
      "data",
      "signals"
    ],
    "produces": [
      "noise-filter",
      "clean-signal"
    ],
    "tags": [
      "noise",
      "filter",
      "signal",
      "clean",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "action-sequence-writer",
    "label": "Action Sequence Writer",
    "verb": "write action sequences for",
    "schema": "action_sequence_writer",
    "accepts": [
      "prompt",
      "goal",
      "tasks"
    ],
    "produces": [
      "action-sequence",
      "task-order"
    ],
    "tags": [
      "sequence",
      "steps",
      "actions",
      "order",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "safety-margin-calculator",
    "label": "Safety Margin Calculator",
    "verb": "calculate safety margins for",
    "schema": "safety_margin_calculator",
    "accepts": [
      "prompt",
      "measurements",
      "limits"
    ],
    "produces": [
      "safety-margin",
      "recommendation"
    ],
    "tags": [
      "safety margin",
      "limits",
      "calculate",
      "buffer",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "flow-state-diagrammer",
    "label": "Flow State Diagrammer",
    "verb": "diagram flow states for",
    "schema": "flow_state_diagrammer",
    "accepts": [
      "prompt",
      "states",
      "events"
    ],
    "produces": [
      "state-diagram",
      "transition-list"
    ],
    "tags": [
      "flow",
      "state",
      "diagram",
      "transition",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "route-variant-simulator",
    "label": "Route Variant Simulator",
    "verb": "simulate route variants for",
    "schema": "route_variant_simulator",
    "accepts": [
      "prompt",
      "route",
      "constraints"
    ],
    "produces": [
      "route-variants",
      "scenario-results"
    ],
    "tags": [
      "route",
      "variant",
      "simulate",
      "scenario",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "demand-spike-forecaster",
    "label": "Demand Spike Forecaster",
    "verb": "forecast demand spikes for",
    "schema": "demand_spike_forecaster",
    "accepts": [
      "prompt",
      "history",
      "calendar"
    ],
    "produces": [
      "demand-spike-forecast",
      "prep-actions"
    ],
    "tags": [
      "demand",
      "forecast",
      "spike",
      "calendar",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "signal-noise-scorecard",
    "label": "Signal Noise Scorecard",
    "verb": "score signal versus noise for",
    "schema": "signal_noise_scorecard",
    "accepts": [
      "prompt",
      "signals",
      "data"
    ],
    "produces": [
      "signal-scorecard",
      "noise-notes"
    ],
    "tags": [
      "signal",
      "noise",
      "score",
      "quality",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "exception-path-architect",
    "label": "Exception Path Architect",
    "verb": "architect exception paths for",
    "schema": "exception_path_architect",
    "accepts": [
      "prompt",
      "exceptions",
      "workflow"
    ],
    "produces": [
      "exception-paths",
      "routing-plan"
    ],
    "tags": [
      "exception",
      "path",
      "workflow",
      "routing",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "interdependency-board",
    "label": "Interdependency Board",
    "verb": "map interdependencies for",
    "schema": "interdependency_board",
    "accepts": [
      "prompt",
      "tasks",
      "teams"
    ],
    "produces": [
      "interdependency-board",
      "blocked-items"
    ],
    "tags": [
      "dependency",
      "interdependency",
      "teams",
      "tasks",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "capacity-stress-test",
    "label": "Capacity Stress Test",
    "verb": "stress test capacity for",
    "schema": "capacity_stress_test",
    "accepts": [
      "prompt",
      "capacity",
      "load"
    ],
    "produces": [
      "stress-test-report",
      "capacity-warning"
    ],
    "tags": [
      "capacity",
      "stress test",
      "load",
      "limit",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "handoff-contract-writer",
    "label": "Handoff Contract Writer",
    "verb": "write handoff contracts for",
    "schema": "handoff_contract_writer",
    "accepts": [
      "prompt",
      "roles",
      "outputs"
    ],
    "produces": [
      "handoff-contract",
      "handoff-rules"
    ],
    "tags": [
      "handoff",
      "contract",
      "roles",
      "rules",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "field-form-designer",
    "label": "Field Form Designer",
    "verb": "design field forms for",
    "schema": "field_form_designer",
    "accepts": [
      "prompt",
      "data",
      "conditions"
    ],
    "produces": [
      "field-form",
      "data-schema"
    ],
    "tags": [
      "form",
      "field",
      "data capture",
      "schema",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "photo-evidence-sorter",
    "label": "Photo Evidence Sorter",
    "verb": "sort photo evidence for",
    "schema": "photo_evidence_sorter",
    "accepts": [
      "prompt",
      "photos",
      "labels"
    ],
    "produces": [
      "photo-index",
      "evidence-groups"
    ],
    "tags": [
      "photo",
      "evidence",
      "sort",
      "index",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "material-substitution-checker",
    "label": "Material Substitution Checker",
    "verb": "check substitutions for",
    "schema": "material_substitution_checker",
    "accepts": [
      "prompt",
      "materials",
      "constraints"
    ],
    "produces": [
      "substitution-options",
      "risk-notes"
    ],
    "tags": [
      "material",
      "substitute",
      "compatibility",
      "risk",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "loadout-optimizer",
    "label": "Loadout Optimizer",
    "verb": "optimize loadouts for",
    "schema": "loadout_optimizer",
    "accepts": [
      "prompt",
      "gear",
      "capacity"
    ],
    "produces": [
      "loadout-plan",
      "packing-order"
    ],
    "tags": [
      "loadout",
      "gear",
      "packing",
      "optimize",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "sequence-risk-analyzer",
    "label": "Sequence Risk Analyzer",
    "verb": "analyze sequence risks for",
    "schema": "sequence_risk_analyzer",
    "accepts": [
      "prompt",
      "sequence",
      "constraints"
    ],
    "produces": [
      "sequence-risk-report",
      "mitigation-steps"
    ],
    "tags": [
      "sequence",
      "risk",
      "mitigation",
      "timing",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "quality-sampling-planner",
    "label": "Quality Sampling Planner",
    "verb": "plan quality sampling for",
    "schema": "quality_sampling_planner",
    "accepts": [
      "prompt",
      "lots",
      "criteria"
    ],
    "produces": [
      "sampling-plan",
      "inspection-lots"
    ],
    "tags": [
      "quality",
      "sampling",
      "inspection",
      "criteria",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "coverage-gap-finder",
    "label": "Coverage Gap Finder",
    "verb": "find coverage gaps for",
    "schema": "coverage_gap_finder",
    "accepts": [
      "prompt",
      "coverage",
      "requirements"
    ],
    "produces": [
      "coverage-gaps",
      "fill-plan"
    ],
    "tags": [
      "coverage",
      "gap",
      "requirements",
      "fill",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "handoff-brief-compressor",
    "label": "Handoff Brief Compressor",
    "verb": "compress handoff briefs for",
    "schema": "handoff_brief_compressor",
    "accepts": [
      "prompt",
      "notes",
      "audience"
    ],
    "produces": [
      "compressed-brief",
      "key-points"
    ],
    "tags": [
      "compress",
      "brief",
      "handoff",
      "summary",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "variant-brief-generator",
    "label": "Variant Brief Generator",
    "verb": "generate variant briefs for",
    "schema": "variant_brief_generator",
    "accepts": [
      "prompt",
      "base",
      "variants"
    ],
    "produces": [
      "variant-briefs",
      "comparison-notes"
    ],
    "tags": [
      "variant",
      "brief",
      "options",
      "compare",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "rule-conflict-detector",
    "label": "Rule Conflict Detector",
    "verb": "detect rule conflicts for",
    "schema": "rule_conflict_detector",
    "accepts": [
      "prompt",
      "rules",
      "policy"
    ],
    "produces": [
      "rule-conflicts",
      "resolution-options"
    ],
    "tags": [
      "rule",
      "conflict",
      "policy",
      "resolve",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "scenario-branch-pruner",
    "label": "Scenario Branch Pruner",
    "verb": "prune scenario branches for",
    "schema": "scenario_branch_pruner",
    "accepts": [
      "prompt",
      "scenarios",
      "goal"
    ],
    "produces": [
      "pruned-scenarios",
      "focus-list"
    ],
    "tags": [
      "scenario",
      "branch",
      "prune",
      "focus",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "review-comment-clusterer",
    "label": "Review Comment Clusterer",
    "verb": "cluster review comments for",
    "schema": "review_comment_clusterer",
    "accepts": [
      "prompt",
      "comments",
      "feedback"
    ],
    "produces": [
      "comment-clusters",
      "theme-summary"
    ],
    "tags": [
      "comments",
      "cluster",
      "feedback",
      "themes",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "decision-rationale-writer",
    "label": "Decision Rationale Writer",
    "verb": "write decision rationale for",
    "schema": "decision_rationale_writer",
    "accepts": [
      "prompt",
      "decision",
      "options"
    ],
    "produces": [
      "decision-rationale",
      "tradeoff-notes"
    ],
    "tags": [
      "decision",
      "rationale",
      "tradeoff",
      "why",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "readiness-drill-script",
    "label": "Readiness Drill Script",
    "verb": "write readiness drill scripts for",
    "schema": "readiness_drill_script",
    "accepts": [
      "prompt",
      "team",
      "scenario"
    ],
    "produces": [
      "drill-script",
      "roles"
    ],
    "tags": [
      "drill",
      "script",
      "readiness",
      "roles",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "constraint-negotiator",
    "label": "Constraint Negotiator",
    "verb": "negotiate constraints for",
    "schema": "constraint_negotiator",
    "accepts": [
      "prompt",
      "constraints",
      "options"
    ],
    "produces": [
      "constraint-tradeoffs",
      "recommendation"
    ],
    "tags": [
      "constraint",
      "tradeoff",
      "negotiate",
      "options",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "milestone-integrity-check",
    "label": "Milestone Integrity Check",
    "verb": "check milestone integrity for",
    "schema": "milestone_integrity_check",
    "accepts": [
      "prompt",
      "milestones",
      "deliverables"
    ],
    "produces": [
      "milestone-check",
      "repair-actions"
    ],
    "tags": [
      "milestone",
      "integrity",
      "deliverables",
      "check",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "impact-trace-writer",
    "label": "Impact Trace Writer",
    "verb": "write impact traces for",
    "schema": "impact_trace_writer",
    "accepts": [
      "prompt",
      "change",
      "stakeholders"
    ],
    "produces": [
      "impact-trace",
      "affected-areas"
    ],
    "tags": [
      "impact",
      "trace",
      "change",
      "stakeholders",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "resource-friction-estimator",
    "label": "Resource Friction Estimator",
    "verb": "estimate resource friction for",
    "schema": "resource_friction_estimator",
    "accepts": [
      "prompt",
      "resources",
      "tasks"
    ],
    "produces": [
      "friction-estimate",
      "resource-plan"
    ],
    "tags": [
      "resource",
      "friction",
      "estimate",
      "capacity",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "microcopy-pack-builder",
    "label": "Microcopy Pack Builder",
    "verb": "build microcopy packs for",
    "schema": "microcopy_pack_builder",
    "accepts": [
      "prompt",
      "audience",
      "actions"
    ],
    "produces": [
      "microcopy-pack",
      "copy-variants"
    ],
    "tags": [
      "microcopy",
      "copy",
      "buttons",
      "messages",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "navigator-card-builder",
    "label": "Navigator Card Builder",
    "verb": "build navigator cards for",
    "schema": "navigator_card_builder",
    "accepts": [
      "prompt",
      "steps",
      "audience"
    ],
    "produces": [
      "navigator-cards",
      "step-cards"
    ],
    "tags": [
      "navigation",
      "cards",
      "guide",
      "steps",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "data-retention-mapper",
    "label": "Data Retention Mapper",
    "verb": "map data retention for",
    "schema": "data_retention_mapper",
    "accepts": [
      "prompt",
      "records",
      "policy"
    ],
    "produces": [
      "retention-map",
      "disposal-cues"
    ],
    "tags": [
      "data retention",
      "records",
      "policy",
      "dispose",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "handoff-rehearsal-planner",
    "label": "Handoff Rehearsal Planner",
    "verb": "plan handoff rehearsals for",
    "schema": "handoff_rehearsal_planner",
    "accepts": [
      "prompt",
      "roles",
      "tasks"
    ],
    "produces": [
      "rehearsal-plan",
      "questions"
    ],
    "tags": [
      "handoff",
      "rehearsal",
      "roles",
      "questions",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "edge-case-hunter",
    "label": "Edge Case Hunter",
    "verb": "hunt edge cases for",
    "schema": "edge_case_hunter",
    "accepts": [
      "prompt",
      "workflow",
      "rules"
    ],
    "produces": [
      "edge-cases",
      "test-cases"
    ],
    "tags": [
      "edge case",
      "test",
      "workflow",
      "rules",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "operator-console-card",
    "label": "Operator Console Card",
    "verb": "create operator console cards for",
    "schema": "operator_console_card",
    "accepts": [
      "prompt",
      "status",
      "actions"
    ],
    "produces": [
      "console-card",
      "status-fields"
    ],
    "tags": [
      "operator",
      "console",
      "status",
      "actions",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "outcome-ladder-builder",
    "label": "Outcome Ladder Builder",
    "verb": "build outcome ladders for",
    "schema": "outcome_ladder_builder",
    "accepts": [
      "prompt",
      "goals",
      "levels"
    ],
    "produces": [
      "outcome-ladder",
      "success-levels"
    ],
    "tags": [
      "outcome",
      "ladder",
      "success",
      "levels",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "source-freshness-auditor",
    "label": "Source Freshness Auditor",
    "verb": "audit source freshness for",
    "schema": "source_freshness_auditor",
    "accepts": [
      "prompt",
      "sources",
      "dates"
    ],
    "produces": [
      "freshness-audit",
      "update-list"
    ],
    "tags": [
      "source",
      "freshness",
      "dates",
      "audit",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "handoff-receipt-maker",
    "label": "Handoff Receipt Maker",
    "verb": "make handoff receipts for",
    "schema": "handoff_receipt_maker",
    "accepts": [
      "prompt",
      "handoff",
      "recipient"
    ],
    "produces": [
      "handoff-receipt",
      "acknowledgment"
    ],
    "tags": [
      "receipt",
      "handoff",
      "acknowledge",
      "proof",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "multi-output-selector",
    "label": "Multi-Output Selector",
    "verb": "select multi outputs for",
    "schema": "multi_output_selector",
    "accepts": [
      "prompt",
      "outputs",
      "criteria"
    ],
    "produces": [
      "selected-outputs",
      "selection-reasons"
    ],
    "tags": [
      "multi output",
      "select",
      "criteria",
      "rank",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "prompt-clarity-meter",
    "label": "Prompt Clarity Meter",
    "verb": "measure prompt clarity for",
    "schema": "prompt_clarity_meter",
    "accepts": [
      "prompt",
      "details",
      "constraints"
    ],
    "produces": [
      "clarity-score",
      "questions"
    ],
    "tags": [
      "prompt",
      "clarity",
      "questions",
      "details",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "library-collision-checker",
    "label": "Library Collision Checker",
    "verb": "check library collisions for",
    "schema": "library_collision_checker",
    "accepts": [
      "prompt",
      "assets",
      "names"
    ],
    "produces": [
      "collision-report",
      "rename-plan"
    ],
    "tags": [
      "library",
      "collision",
      "names",
      "assets",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "downstream-fit-scorer",
    "label": "Downstream Fit Scorer",
    "verb": "score downstream fit for",
    "schema": "downstream_fit_scorer",
    "accepts": [
      "prompt",
      "output",
      "next-tool"
    ],
    "produces": [
      "fit-score",
      "handoff-adjustments"
    ],
    "tags": [
      "downstream",
      "fit",
      "toolbox",
      "handoff",
      "next frontier operation",
      "unrepeated operation"
    ]
  },
  {
    "id": "finish-line-packager",
    "label": "Finish Line Packager",
    "verb": "package final outcomes for",
    "schema": "finish_line_packager",
    "accepts": [
      "prompt",
      "artifacts",
      "audience"
    ],
    "produces": [
      "final-package",
      "delivery-notes"
    ],
    "tags": [
      "finish",
      "package",
      "final",
      "deliver",
      "next frontier operation",
      "unrepeated operation"
    ]
  }
]);

export const NEXT_FRONTIER_DOMAINS = Object.freeze(
  NEXT_MACRO_DOMAINS.flatMap((group) => group.fields.map((field) => ({
    macro: group.macro,
    field,
    id: slugify(field),
    tags: unique([...(group.tags || []), field, ...String(field).split(/\s+/), group.macro, "unrepeated", "new tool", "next frontier"])
  })))
);

function skeletonPatternForOperation(operation) {
  return {
    id: `next-frontier-${operation.id}`,
    label: `Generic ${operation.label} Skeleton`,
    accepts: unique(["prompt", "project-input", ...(operation.accepts || [])]),
    produces: unique(["project-artifact", ...(operation.produces || [])]),
    keywords: unique([operation.label, operation.id, ...(operation.tags || [])])
  };
}

function commonToolTags(domain, operation) {
  return unique([
    "next frontier", "unrepeated tool", "not in previous files", "functional mini app", "daily use", "project tool", "toolbox instrument", "waterfall ready", "paid multitask ready", "skeleton ready", "prompt searchable", "generic-ready", "64 cell capable", "project artifact", "dependency aware", "tool genome", "shared library aware", "downstream fit", "batch expansion", "non duplicate", "original in-house metadata", domain.field, domain.macro, ...(domain.tags || []), operation.label, operation.id, ...(operation.tags || [])
  ]);
}

function commonSearchPhrases(domain, operation) {
  const field = lower(domain.field);
  const op = lower(operation.label);
  return unique([
    `${field} ${op}`,
    `${field} ${operation.verb}`,
    `${field} workflow ${op}`,
    `${field} project ${op}`,
    `${field} template ${op}`,
    `${field} ai tool ${op}`,
    `${field} daily use ${op}`,
    `${field} waterfall ${op}`,
    `${field} toolbox ${op}`,
    `${field} skeleton ${op}`,
    `${domain.macro} ${op}`,
    `new unrepeated ${field} tool`
  ]);
}

function buildNextFrontierTool(domain, operation, domainIndex, operationIndex) {
  const accepts = unique(["prompt", "project-goal", "notes", ...(operation.accepts || []), domain.id]);
  const produces = unique(["project-artifact", ...(operation.produces || []), `${domain.id}-${operation.id}-output`]);
  return {
    id: `next-frontier-${domain.id}-${operation.id}`,
    name: `${domain.field} ${operation.label}`,
    category: `Next Frontier: ${domain.macro}`,
    engine: "mini_app",
    systemLabel: NEXT_FRONTIER_TOOL_LABEL,
    toolKind: "next-frontier-specific-tool",
    nextFrontierGenerated: true,
    duplicatePolicy: "reject-exact-id-or-name-collisions",
    description: `Unrepeated next-frontier functional mini-app for ${domain.field.toLowerCase()}. It can ${operation.verb} this project area, publish project artifacts, and generate a generic skeleton for other domains without duplicating earlier tools.`,
    tags: commonToolTags(domain, operation),
    searchPhrases: commonSearchPhrases(domain, operation),
    config: {
      domain: domain.field,
      macro: domain.macro,
      operationId: operation.id,
      operationName: operation.label,
      operationVerb: operation.verb,
      schema: operation.schema,
      accepts,
      produces,
      requiredTools: [`next-frontier-support-${operation.id}`],
      skeletonPattern: skeletonPatternForOperation(operation),
      downstreamUse: ["waterfall queue", "paid multitask", "toolbox sync", "project artifact history", "downstream fit scoring"],
      maxCells: 64,
      nextFrontierDomainIndex: domainIndex,
      nextFrontierOperationIndex: operationIndex
    },
    compatibility: {
      accepts,
      produces,
      output: produces[0] || "next-frontier-output",
      parallelSafe: !/review|gate|approval|retention|safety|evidence|conflict|collision|final/i.test(operation.id),
      requiresApproval: /review|gate|approval|retention|safety|evidence|conflict|collision|final|freshness/i.test(operation.id),
      publishesToLibraries: ["next-frontier-output-library", "project-artifacts", "toolbox-sync", "shared-project-libraries"]
    }
  };
}

function buildNextFrontierSupportTool(operation, index) {
  const accepts = unique(["prompt", "project-context", ...(operation.accepts || [])]);
  const produces = unique(["support-output", "prepared-context", ...(operation.produces || [])]);
  return {
    id: `next-frontier-support-${operation.id}`,
    name: `Next Frontier Support: ${operation.label}`,
    category: "Next Frontier Support Tools",
    engine: "mini_app",
    systemLabel: NEXT_FRONTIER_TOOL_LABEL,
    toolKind: "next-frontier-support-tool",
    nextFrontierGenerated: true,
    duplicatePolicy: "reject-exact-id-or-name-collisions",
    description: `Unrepeated dependency support tool that prepares shared context for every next-frontier mini-app using ${operation.label.toLowerCase()}.`,
    tags: unique(["next frontier support", "unrepeated support tool", "dependency tool", "support toolkit", "waterfall support", "prompt searchable", "skeleton ready", "project support", "shared context", "input normalizer", "handoff helper", "parallel safe", "daily use", "wide project use", "generic support", "mini app support", "toolbox instrument", "not in previous files", operation.label, operation.id, ...(operation.tags || [])]),
    searchPhrases: unique([`next frontier support ${operation.label}`, `${operation.label} dependency support`, `${operation.label} shared context prep`, `${operation.label} next frontier setup`, `${operation.label} waterfall support`, `${operation.label} skeleton support`, `${operation.label} toolbox support`, `${operation.label} unrepeated support tool`]),
    config: {
      domain: "Next Frontier Support",
      macro: "Next Frontier Support Tools",
      operationId: `support-${operation.id}`,
      operationName: `Support: ${operation.label}`,
      operationVerb: `support ${operation.verb}`,
      schema: "support",
      accepts,
      produces,
      requiredTools: [],
      skeletonPattern: skeletonPatternForOperation({ ...operation, id: `support-${operation.id}`, label: `Support ${operation.label}` }),
      downstreamUse: ["dependency", "waterfall queue", "toolbox sync", "shared project libraries"],
      maxCells: 64,
      nextFrontierSupportIndex: index
    },
    compatibility: {
      accepts,
      produces,
      output: produces[0] || "support-output",
      parallelSafe: true,
      requiresApproval: false,
      publishesToLibraries: ["next-frontier-support-library", "project-artifacts", "shared-project-libraries"]
    }
  };
}

export const NEXT_FRONTIER_TOOL_RECORDS = Object.freeze([
  ...NEXT_FRONTIER_DOMAINS.flatMap((domain, domainIndex) =>
    NEXT_FRONTIER_OPERATION_FAMILIES.map((operation, operationIndex) =>
      buildNextFrontierTool(domain, operation, domainIndex, operationIndex)
    )
  ),
  ...NEXT_FRONTIER_OPERATION_FAMILIES.map((operation, index) => buildNextFrontierSupportTool(operation, index))
]);

export function searchNextFrontierTools(query = "", { limit = 32, macro = "all" } = {}) {
  const q = lower(query);
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  return NEXT_FRONTIER_TOOL_RECORDS.map((tool) => {
    const haystack = lower(`${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`);
    let score = q ? 0 : 1;
    if (q && haystack.includes(q)) score += 24;
    for (const token of tokens) if (haystack.includes(token)) score += token.length > 5 ? 4 : 1;
    if (/unrepeated|new|not already|not previous|skeleton|generic|wide|reusable/.test(q)) score += 8;
    if (tool.toolKind === "next-frontier-support-tool") score += 1;
    return { tool, score };
  }).filter((item) => item.score > 0 && (macro === "all" || item.tool.config?.macro === macro))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}

export function findNextFrontierCollisions(existingTools = []) {
  const existingIds = new Set(existingTools.map((tool) => tool?.id).filter(Boolean));
  const existingNames = new Set(existingTools.map((tool) => lower(tool?.name)).filter(Boolean));
  const localIds = new Set();
  const localNames = new Set();
  const collisions = [];
  for (const tool of NEXT_FRONTIER_TOOL_RECORDS) {
    if (existingIds.has(tool.id)) collisions.push({ type: "existing-id", id: tool.id, name: tool.name });
    if (existingNames.has(lower(tool.name))) collisions.push({ type: "existing-name", id: tool.id, name: tool.name });
    if (localIds.has(tool.id)) collisions.push({ type: "local-id", id: tool.id, name: tool.name });
    if (localNames.has(lower(tool.name))) collisions.push({ type: "local-name", id: tool.id, name: tool.name });
    localIds.add(tool.id);
    localNames.add(lower(tool.name));
  }
  return collisions;
}

export function buildNextFrontierToolSummary() {
  const byMacro = new Map();
  const byOperation = new Map();
  for (const tool of NEXT_FRONTIER_TOOL_RECORDS) {
    byMacro.set(tool.config?.macro || tool.category, (byMacro.get(tool.config?.macro || tool.category) || 0) + 1);
    byOperation.set(tool.config?.operationId || "unknown", (byOperation.get(tool.config?.operationId || "unknown") || 0) + 1);
  }
  return {
    version: NEXT_FRONTIER_TOOL_EXPANSION_VERSION,
    toolCount: NEXT_FRONTIER_TOOL_RECORDS.length,
    targetCount: NEXT_FRONTIER_TOOL_TARGET_COUNT,
    domainCount: NEXT_FRONTIER_DOMAINS.length,
    operationFamilyCount: NEXT_FRONTIER_OPERATION_FAMILIES.length,
    supportToolCount: NEXT_FRONTIER_OPERATION_FAMILIES.length,
    macroCount: byMacro.size,
    topMacros: [...byMacro.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([macro, count]) => ({ macro, count })),
    topOperations: [...byOperation.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([operation, count]) => ({ operation, count })),
    summary: `${NEXT_FRONTIER_TOOL_RECORDS.length.toLocaleString()} unrepeated next-frontier tools created from ${NEXT_FRONTIER_DOMAINS.length} new domains and ${NEXT_FRONTIER_OPERATION_FAMILIES.length} new operation families, plus ${NEXT_FRONTIER_OPERATION_FAMILIES.length} support tools.`
  };
}

export function verifyNextFrontierToolSuite({ knownEngines = ["mini_app"], existingTools = [] } = {}) {
  const known = new Set(knownEngines);
  const errors = [];
  const ids = new Set();
  const names = new Set();
  for (const tool of NEXT_FRONTIER_TOOL_RECORDS) {
    if (!tool.id) errors.push("next frontier tool missing id");
    if (ids.has(tool.id)) errors.push(`duplicate next frontier tool id ${tool.id}`);
    ids.add(tool.id);
    const normalizedName = lower(tool.name);
    if (names.has(normalizedName)) errors.push(`duplicate next frontier tool name ${tool.name}`);
    names.add(normalizedName);
    if (!known.has(tool.engine)) errors.push(`${tool.id} uses unknown engine ${tool.engine}`);
    if (tool.systemLabel !== NEXT_FRONTIER_TOOL_LABEL) errors.push(`${tool.id} missing next frontier system label`);
    if (!tool.nextFrontierGenerated) errors.push(`${tool.id} missing nextFrontierGenerated flag`);
    if ((tool.tags || []).length < 20) errors.push(`${tool.id} needs at least 20 tags`);
    if ((tool.searchPhrases || []).length < 8) errors.push(`${tool.id} needs at least 8 search phrases`);
    if (!tool.config?.skeletonPattern?.id) errors.push(`${tool.id} missing skeleton pattern`);
    if (!tool.compatibility?.accepts?.length || !tool.compatibility?.produces?.length) errors.push(`${tool.id} missing compatibility contracts`);
  }
  if (NEXT_FRONTIER_DOMAINS.length !== NEXT_FRONTIER_DOMAIN_TARGET_COUNT) errors.push(`expected ${NEXT_FRONTIER_DOMAIN_TARGET_COUNT} next frontier domains, got ${NEXT_FRONTIER_DOMAINS.length}`);
  if (NEXT_FRONTIER_OPERATION_FAMILIES.length !== NEXT_FRONTIER_OPERATION_TARGET_COUNT) errors.push(`expected ${NEXT_FRONTIER_OPERATION_TARGET_COUNT} next frontier operation families, got ${NEXT_FRONTIER_OPERATION_FAMILIES.length}`);
  if (NEXT_FRONTIER_TOOL_RECORDS.length !== NEXT_FRONTIER_TOOL_TARGET_COUNT) errors.push(`expected ${NEXT_FRONTIER_TOOL_TARGET_COUNT} next frontier tools, got ${NEXT_FRONTIER_TOOL_RECORDS.length}`);
  const collisions = findNextFrontierCollisions(existingTools);
  if (collisions.length) errors.push(`found ${collisions.length} exact collisions with existing tools; first: ${JSON.stringify(collisions[0])}`);
  return { ok: errors.length === 0, errors, stats: buildNextFrontierToolSummary(), collisionCount: collisions.length };
}
