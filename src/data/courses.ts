// ─── Course Data ──────────────────────────────────────────────────────────────
// Adapted from monikamehta/monikamehta repo
// Extended with study guide fields for SEO-rich topic pages

export interface Slide {
  slug: string;          // URL segment, e.g. "2-2"
  title: string;         // Display title
  subtitle: string;      // Short descriptor shown on card
  htmlFile?: string;     // Path relative to /public, e.g. "/slides/ess-2-2.html" (absent if coming-soon)
  youtubeUrl?: string;   // Companion YouTube video
  level: string;         // e.g. "SL & HL", "HL Only"
  unit: string;          // IB unit label, e.g. "Unit 2"
  status?: "published" | "coming-soon";
  // Extended fields for enhanced topic pages
  keyTerms?: string[];           // Key vocabulary for the topic
  commonMisconceptions?: string[]; // Common student misconceptions
  examTips?: string[];           // Exam-specific advice
  studyGuide?: string;           // Path to MDX study guide (e.g. "/study-guides/ess-2-2.mdx")
}

export interface Course {
  slug: string;        // URL segment, e.g. "ess"
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  accentColor: string;
  slides: Slide[];
}

export const COURSES: Course[] = [
  {
    slug: "ess",
    title: "Environmental Systems & Societies",
    shortTitle: "ESS",
    description: "IBDP Environmental Systems & Societies — interactive slide-based lesson materials aligned to the 2026 guide.",
    icon: "🌍",
    accentColor: "#1C1C1C",
    slides: [
      {
        slug: "1-1",
        title: "Topic 1.1",
        subtitle: "Perspectives",
        htmlFile: "/slides/ess-1-1.html",
        youtubeUrl: "https://www.youtube.com/watch?v=NiF5Yfp3Fns",
        level: "SL",
        unit: "Unit 1: Foundations of ESS",
        keyTerms: ["Environmental value systems", "Anthropocentrism", "Ecocentrism", "Technocentrism"],
        commonMisconceptions: ["All environmentalists share the same perspective", "EVS are fixed and unchanging"],
        examTips: ["Be able to contrast two EVS for any given issue", "Use specific examples (e.g., climate change, deforestation)"]
      },
      {
        slug: "1-2",
        title: "Topic 1.2",
        subtitle: "Systems Thinking",
        htmlFile: "/slides/ess-1-2.html",
        youtubeUrl: "https://www.youtube.com/watch?v=WGdslettM9k",
        level: "SL & HL",
        unit: "Unit 1: Foundations of ESS",
        keyTerms: ["System", "Open/closed/isolated systems", "Feedback loops", "Equilibrium", "Emergent properties"],
        commonMisconceptions: ["Negative feedback is 'bad'", "Systems are static"],
        examTips: ["Draw system diagrams with stocks and flows", "Distinguish positive vs negative feedback with examples"]
      },
      {
        slug: "1-3",
        title: "Topic 1.3",
        subtitle: "Sustainability",
        htmlFile: "/slides/ess-1-3.html",
        youtubeUrl: "https://www.youtube.com/watch?v=nkun-Rk5YL0",
        level: "SL & HL",
        unit: "Unit 1: Foundations of ESS",
        keyTerms: ["Sustainable development", "Natural capital", "Ecological footprint", "Carrying capacity", "SDGs"],
        commonMisconceptions: ["Sustainability = environmental protection only", "Infinite growth is possible on a finite planet"],
        examTips: ["Know the 3 pillars: environmental, social, economic", "Calculate ecological footprint from given data"]
      },
      {
        slug: "2-1",
        title: "Topic 2.1",
        subtitle: "Ecology & Organization",
        htmlFile: "/slides/ess-2-1.html",
        youtubeUrl: "https://www.youtube.com/watch?v=l_qYLmm9C0s",
        level: "SL & HL",
        unit: "Unit 2: Ecology",
        keyTerms: ["Species", "Population", "Community", "Ecosystem", "Biome", "Biosphere", "Niche", "Habitat"],
        commonMisconceptions: ["Niche and habitat are the same", "All organisms in a community interact directly"],
        examTips: ["Memorize the hierarchy: individual → population → community → ecosystem → biome → biosphere", "Fundamental vs realized niche distinction is frequently tested"]
      },
      {
        slug: "2-2",
        title: "Topic 2.2",
        subtitle: "Ecosystems & Ecology",
        htmlFile: "/slides/ess-2-2.html",
        youtubeUrl: "https://youtu.be/gHWhLeqs-7U?si=1_EfXzXw6OtknFR4",
        level: "SL & HL",
        unit: "Unit 2: Ecology",
        keyTerms: ["Photosynthesis", "Respiration", "Producer", "Consumer", "Decomposer", "Trophic level", "Food chain", "Food web"],
        commonMisconceptions: ["Energy cycles like nutrients", "Decomposers are not important"],
        examTips: ["Energy flows one way (10% rule), nutrients cycle", "Be able to construct food webs from species lists"]
      },
      {
        slug: "2-3",
        title: "Topic 2.3",
        subtitle: "Flows of Energy & Matter",
        htmlFile: "/slides/ess-2-3.html",
        youtubeUrl: "https://youtu.be/3tX8NchXihg?si=eR36QNpoXMScZYpz",
        level: "SL & HL",
        unit: "Unit 2: Ecology",
        keyTerms: ["GPP", "NPP", "R", "Biomass", "Ecological efficiency", "Pyramid of numbers/biomass/energy", "Carbon cycle", "Nitrogen cycle"],
        commonMisconceptions: ["GPP = NPP", "Energy pyramids are always upright (they are)", "Biomass pyramids can be inverted"],
        examTips: ["NPP = GPP - R", "Know the 10% ecological efficiency rule", "Draw and label carbon/nitrogen cycles"]
      },
      {
        slug: "2-4",
        title: "Topic 2.4",
        subtitle: "Climate & Biomes",
        htmlFile: "/slides/ess-2-4.html",
        youtubeUrl: "https://youtu.be/2uGQIZCOBx4?si=oDMbZOx10YPqERUB",
        level: "SL & HL",
        unit: "Unit 2: Ecology",
        keyTerms: ["Climate", "Weather", "Biome", "Latitude", "Altitude", "Ocean currents", "Rain shadow", "Hadley cells"],
        commonMisconceptions: ["Climate and weather are interchangeable", "Biomes are determined only by temperature"],
        examTips: ["Explain how Hadley cells create deserts at 30°N/S", "Match climate graphs to biomes"]
      },
      {
        slug: "2-5",
        title: "Topic 2.5",
        subtitle: "Zonation, Succession & Change",
        htmlFile: "/slides/ess-2-5.html",
        youtubeUrl: "https://youtu.be/r40pdaKo2AU",
        level: "SL & HL",
        unit: "Unit 2: Ecology",
        keyTerms: ["Zonation", "Succession", "Primary succession", "Secondary succession", "Pioneer species", "Climax community", "Facilitation", "Inhibition", "Tolerance"],
        commonMisconceptions: ["Succession always leads to the same climax community", "Primary succession is faster than secondary"],
        examTips: ["Contrast primary vs secondary succession", "Know facilitation/inhibition/tolerance models"]
      },
      {
        slug: "3-1",
        title: "Topic 3.1",
        subtitle: "Biodiversity & Evolution",
        htmlFile: "/slides/ess-3-1.html",
        youtubeUrl: "https://youtu.be/ONCWFSQzZrk",
        level: "SL & HL",
        unit: "Unit 3: Biodiversity & Conservation",
        keyTerms: ["Biodiversity", "Genetic diversity", "Species diversity", "Ecosystem diversity", "Speciation", "Extinction", "Endemic species", "Keystone species"],
        commonMisconceptions: ["Biodiversity = number of species only", "Extinction is always unnatural"],
        examTips: ["Know 3 levels of biodiversity", "Explain speciation mechanisms (allopatric, sympatric)"]
      },
      {
        slug: "3-2",
        title: "Topic 3.2",
        subtitle: "Human Impact on Biodiversity",
        htmlFile: "/slides/ess-3-2.html",
        youtubeUrl: "https://youtu.be/nOHQOqK72NQ",
        level: "SL & HL",
        unit: "Unit 3: Biodiversity & Conservation",
        keyTerms: ["HIPPO", "Habitat loss", "Invasive species", "Pollution", "Population growth", "Overexploitation", "IUCN Red List", "CITES"],
        commonMisconceptions: ["All invasive species are harmful", "Climate change is the #1 threat to biodiversity (it's habitat loss)"],
        examTips: ["Use HIPPO framework for threats", "Know IUCN categories (EX, EW, CR, EN, VU, NT, LC)"]
      },
      {
        slug: "3-3",
        title: "Topic 3.3",
        subtitle: "Conservation & Regeneration",
        htmlFile: "/slides/ess-3-3.html",
        youtubeUrl: "https://youtu.be/GxDQwi2mUVY",
        level: "SL & HL",
        unit: "Unit 3: Biodiversity & Conservation",
        keyTerms: ["In-situ conservation", "Ex-situ conservation", "Protected areas", "Seed banks", "Captive breeding", "Rewilding", "Corridors", "Community-based conservation"],
        commonMisconceptions: ["Protected areas always work", "Ex-situ is a substitute for in-situ"],
        examTips: ["Compare in-situ vs ex-situ with examples", "Know arguments for/against rewilding"]
      },
      {
        slug: "4-1",
        title: "Topic 4.1",
        subtitle: "Water Systems",
        htmlFile: "/slides/ess-4-1.html",
        level: "SL & HL",
        unit: "Unit 4: Water",
        keyTerms: ["Hydrological cycle", "Evaporation", "Transpiration", "Condensation", "Precipitation", "Infiltration", "Runoff", "Aquifer", "Water table"],
        commonMisconceptions: ["Groundwater is an infinite resource", "The water cycle is a closed loop globally but open locally"],
        examTips: ["Draw and label the hydrological cycle", "Calculate water budget: P = ET + R + ΔS"]
      },
      {
        slug: "4-2",
        title: "Topic 4.2",
        subtitle: "Water Access, Use & Security",
        htmlFile: "/slides/ess-4-2.html",
        level: "SL & HL",
        unit: "Unit 4: Water",
        keyTerms: ["Water scarcity", "Physical scarcity", "Economic scarcity", "Water stress", "Virtual water", "Water footprint", "Transboundary water"],
        commonMisconceptions: ["Water scarcity only affects arid regions", "Virtual water is negligible"],
        examTips: ["Distinguish physical vs economic scarcity", "Calculate water footprint of common products"]
      },
      {
        slug: "4-3",
        title: "Topic 4.3",
        subtitle: "Aquatic Food Production Systems",
        htmlFile: "/slides/ess-4-3.html",
        level: "SL & HL",
        unit: "Unit 4: Water",
        keyTerms: ["Aquaculture", "Mariculture", "Capture fisheries", "Bycatch", "Overfishing", "Trophic level of farmed fish", "Feed conversion ratio", "Integrated multi-trophic aquaculture"],
        commonMisconceptions: ["All aquaculture is sustainable", "Farmed fish don't affect wild populations"],
        examTips: ["Compare capture fisheries vs aquaculture impacts", "Know FCR for salmon vs tilapia"]
      },
      {
        slug: "4-4",
        title: "Topic 4.4",
        subtitle: "Water Pollution",
        htmlFile: "/slides/ess-4-4.html",
        level: "SL & HL",
        unit: "Unit 4: Water",
        keyTerms: ["Point source", "Non-point source", "BOD", "COD", "Eutrophication", "Dead zone", "Heavy metals", "Microplastics", "Thermal pollution"],
        commonMisconceptions: ["BOD measures oxygen in water (it measures oxygen demand)", "Eutrophication only happens in lakes"],
        examTips: ["Explain BOD test procedure", "Link eutrophication to dead zones"]
      },
      {
        slug: "5-1",
        title: "Topic 5.1",
        subtitle: "Soils",
        htmlFile: "/slides/ess-5-1.html",
        level: "SL & HL",
        unit: "Unit 5: Land",
        keyTerms: ["Soil profile", "Horizons (O, A, E, B, C, R)", "Parent material", "Weathering", "Humus", "Cation exchange capacity", "Soil texture", "Soil pH"],
        commonMisconceptions: ["Soil is just dirt", "All soils have the same horizons"],
        examTips: ["Draw and label a soil profile", "Explain how CEC affects fertility"]
      },
      {
        slug: "5-2",
        title: "Topic 5.2",
        subtitle: "Agriculture & Food",
        htmlFile: "/slides/ess-5-2.html",
        level: "SL & HL",
        unit: "Unit 5: Land",
        keyTerms: ["Subsistence vs commercial", "Intensive vs extensive", "Green Revolution", "GMOs", "Soil degradation", "Desertification", "Salinization", "Food security", "Food sovereignty"],
        commonMisconceptions: ["Organic farming can't feed the world", "Green Revolution had no negative impacts"],
        examTips: ["Compare intensive vs extensive systems", "Evaluate Green Revolution: yields vs environment"]
      },
      {
        slug: "6-1",
        title: "Topic 6.1",
        subtitle: "Introduction to the Atmosphere",
        htmlFile: "/slides/ess-6-1.html",
        level: "SL & HL",
        unit: "Unit 6: Atmospheric Systems & Society",
        keyTerms: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere", "Ozone layer", "Greenhouse gases", "Albedo", "Insolation", "Latent heat"],
        commonMisconceptions: ["Ozone hole = global warming", "Greenhouse effect is entirely bad"],
        examTips: ["Know atmospheric layers and key features", "Distinguish ozone depletion vs greenhouse effect"]
      },
      {
        slug: "6-2",
        title: "Topic 6.2",
        subtitle: "Climate Change – Causes & Impacts",
        htmlFile: "/slides/ess-6-2.html",
        level: "SL & HL",
        unit: "Unit 6: Atmospheric Systems & Society",
        keyTerms: ["Anthropogenic", "Radiative forcing", "CO2", "CH4", "N2O", "Feedback loops", "Sea level rise", "Ocean acidification", "Extreme weather", "Tipping points"],
        commonMisconceptions: ["Climate change is natural cycle", "CO2 is the only greenhouse gas that matters"],
        examTips: ["Know major GHGs and their GWPs", "Explain positive feedback loops (ice-albedo, permafrost)"]
      },
      {
        slug: "6-3",
        title: "Topic 6.3",
        subtitle: "Climate Change – Mitigation & Adaptation",
        htmlFile: "/slides/ess-6-3.html",
        level: "SL & HL",
        unit: "Unit 6: Atmospheric Systems & Society",
        keyTerms: ["Mitigation", "Adaptation", "Renewable energy", "Carbon capture", "Reforestation", "Paris Agreement", "NDCs", "Carbon pricing", "Climate justice"],
        commonMisconceptions: ["Adaptation = giving up on mitigation", "Renewables alone can solve climate change"],
        examTips: ["Categorize strategies as mitigation vs adaptation", "Evaluate carbon tax vs cap-and-trade"]
      },
      {
        slug: "6-4",
        title: "Topic 6.4",
        subtitle: "Stratospheric Ozone",
        htmlFile: "/slides/ess-6-4.html",
        level: "SL & HL",
        unit: "Unit 6: Atmospheric Systems & Society",
        keyTerms: ["CFCs", "Montreal Protocol", "Ozone depletion potential", "Polar stratospheric clouds", "UV-B radiation", "Skin cancer", "Cataracts", "Phytoplankton damage"],
        commonMisconceptions: ["Ozone hole is over the whole world", "Montreal Protocol solved it completely (recovery is slow)"],
        examTips: ["Explain catalytic destruction of ozone by Cl", "Know Montreal Protocol success story"]
      },
      {
        slug: "7-1",
        title: "Topic 7.1",
        subtitle: "Resource Use in Society",
        htmlFile: "/slides/ess-7-1.html",
        level: "SL & HL",
        unit: "Unit 7: Natural Resources",
        keyTerms: ["Renewable", "Non-renewable", "Recyclable", "Finite", "Resource curse", "Ecological footprint", "Material flow analysis", "Circular economy"],
        commonMisconceptions: ["Renewable = unlimited", "Recycling solves resource depletion"],
        examTips: ["Classify resources correctly", "Explain circular economy principles"]
      },
      {
        slug: "7-2",
        title: "Topic 7.2",
        subtitle: "Energy Sources",
        htmlFile: "/slides/ess-7-2.html",
        level: "SL & HL",
        unit: "Unit 7: Natural Resources",
        keyTerms: ["Fossil fuels", "Nuclear fission", "Nuclear fusion", "Solar", "Wind", "Hydro", "Geothermal", "Biomass", "EROI", "Energy density", "Intermittency"],
        commonMisconceptions: ["Nuclear is renewable", "All renewables have low EROI"],
        examTips: ["Compare EROI of energy sources", "Know pros/cons table for each source"]
      },
      {
        slug: "7-3",
        title: "Topic 7.3",
        subtitle: "Solid Waste",
        htmlFile: "/slides/ess-7-3.html",
        level: "SL & HL",
        unit: "Unit 7: Natural Resources",
        keyTerms: ["Waste hierarchy", "Reduce", "Reuse", "Recycle", "Recovery", "Disposal", "Landfill", "Incineration", "Composting", "E-waste", "Plastic pollution", "Circular economy"],
        commonMisconceptions: ["Recycling is the best solution", "Biodegradable plastics solve plastic pollution"],
        examTips: ["Apply waste hierarchy to case studies", "Know waste management hierarchy order"]
      },
      {
        slug: "8-1",
        title: "Topic 8.1",
        subtitle: "Human Population Dynamics",
        htmlFile: "/slides/ess-8-1.html",
        level: "SL & HL",
        unit: "Unit 8: Human Populations & Urban Systems",
        keyTerms: ["Crude birth rate", "Crude death rate", "Natural increase rate", "Demographic transition model", "Population pyramids", "Dependency ratio", "Replacement fertility", "TFR", "Carrying capacity"],
        commonMisconceptions: ["Population growth is exponential everywhere", "DTM applies to all countries equally"],
        examTips: ["Draw and label DTM stages", "Interpret population pyramids"]
      },
      {
        slug: "8-2",
        title: "Topic 8.2",
        subtitle: "Urban Systems & Planning",
        htmlFile: "/slides/ess-8-2.html",
        level: "SL & HL",
        unit: "Unit 8: Human Populations & Urban Systems",
        keyTerms: ["Urbanization", "Megacity", "Urban sprawl", "Smart growth", "Transit-oriented development", "Green belts", "Brownfield vs greenfield", "Informal settlements", "Urban heat island"],
        commonMisconceptions: ["Urbanization is always bad", "High density = poor quality of life"],
        examTips: ["Evaluate urban planning strategies", "Know causes/consequences of urban heat island"]
      },
      {
        slug: "8-3",
        title: "Topic 8.3",
        subtitle: "Urban Air Pollution",
        htmlFile: "/slides/ess-8-3.html",
        level: "SL & HL",
        unit: "Unit 8: Human Populations & Urban Systems",
        keyTerms: ["Primary pollutants", "Secondary pollutants", "NOx", "SOx", "CO", "VOCs", "PM2.5", "PM10", "Ozone", "Photochemical smog", "Thermal inversion", "Acid rain"],
        commonMisconceptions: ["Ozone is always bad (stratospheric vs tropospheric)", "CO2 is an air pollutant in this context"],
        examTips: ["Distinguish primary vs secondary pollutants", "Explain photochemical smog formation"]
      },
      {
        slug: "hl-a",
        title: "HL.a",
        subtitle: "Environmental Law",
        htmlFile: "/slides/ess-hl-a.html",
        level: "HL Only",
        unit: "HL Lenses",
        keyTerms: ["International law", "Treaty", "Protocol", "Convention", "Precautionary principle", "Polluter pays", "Common but differentiated responsibilities", "Transboundary harm", "EIA", "SEA"],
        commonMisconceptions: ["International law is enforceable like domestic law", "Precautionary principle = ban everything risky"],
        examTips: ["Know key principles: precautionary, polluter pays, CBDR", "Contrast EIA vs SEA"]
      },
      {
        slug: "hl-b",
        title: "HL.b",
        subtitle: "Environmental Economics",
        htmlFile: "/slides/ess-hl-b.html",
        level: "HL Only",
        unit: "HL Lenses",
        keyTerms: ["Externalities", "Public goods", "Tragedy of the commons", "Valuation methods", "Contingent valuation", "Travel cost", "Hedonic pricing", "Discount rate", "Cost-benefit analysis", "Natural capital accounting"],
        commonMisconceptions: ["Externalities are always negative", "CBA captures all environmental values"],
        examTips: ["Graph negative/positive externalities", "Know limitations of monetary valuation"]
      },
      {
        slug: "hl-c",
        title: "HL.c",
        subtitle: "Environmental Ethics",
        htmlFile: "/slides/ess-hl-c.html",
        level: "HL Only",
        unit: "HL Lenses",
        keyTerms: ["Anthropocentrism", "Biocentrism", "Ecocentrism", "Deep ecology", "Shallow ecology", "Animal rights", "Intrinsic value", "Instrumental value", "Environmental justice", "Intergenerational equity"],
        commonMisconceptions: ["Environmental ethics = personal opinion", "All environmentalists are ecocentric"],
        examTips: ["Contrast ethical frameworks with examples", "Apply to case studies (e.g., dam building, species reintroduction)"]
      },
    ],
  },
  {
    slug: "biology",
    title: "Biology",
    shortTitle: "Biology",
    description: "IBDP Biology — interactive slide-based lesson materials for SL and HL, aligned to the 2025 guide.",
    icon: "🧬",
    accentColor: "#0A6EBD",
    slides: [
      {
        slug: "a1-1",
        title: "Topic A1.1",
        subtitle: "Water",
        htmlFile: "/slides/bio-a1-1.html",
        level: "SL & HL",
        unit: "Theme A: Form and Function",
        keyTerms: ["Polarity", "Hydrogen bonding", "Cohesion", "Adhesion", "Surface tension", "Specific heat capacity", "Latent heat of vaporization", "Universal solvent"],
        commonMisconceptions: ["Hydrogen bonds are covalent bonds", "Water's density increases continuously as it cools"],
        examTips: ["Link water's properties to hydrogen bonding", "Explain biological significance of each property"]
      },
      {
        slug: "a1-2",
        title: "Topic A1.2",
        subtitle: "Nucleic Acids",
        htmlFile: "/slides/bio-a1-2.html",
        level: "SL & HL",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["Nucleotide", "Phosphate", "Ribose/Deoxyribose", "Nitrogenous base", "Purine", "Pyrimidine", "Phosphodiester bond", "Complementary base pairing", "Antiparallel", "Double helix"],
        commonMisconceptions: ["DNA and RNA have the same sugar", "Base pairing is random"],
        examTips: ["Draw nucleotide structure", "Know Chargaff's rules (A=T, G=C)"]
      },
      {
        slug: "a2-1",
        title: "Topic A2.1",
        subtitle: "Origins of Cells",
        htmlFile: "/slides/bio-a2-1.html",
        level: "HL Only",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["LUCA", "Abiogenesis", "Miller-Urey", "RNA world hypothesis", "Endosymbiosis", "Prokaryote", "Eukaryote", "Last universal common ancestor"],
        commonMisconceptions: ["Endosymbiosis explains all organelles", "LUCA was a simple organism"],
        examTips: ["Evidence for endosymbiosis (mitochondria/chloroplasts)", "Sequence of events in origin of life"]
      },
      {
        slug: "a2-2",
        title: "Topic A2.2",
        subtitle: "Cell Structure",
        htmlFile: "/slides/bio-a2-2.html",
        level: "SL & HL",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["Cell membrane", "Nucleus", "Mitochondria", "Chloroplast", "Ribosome", "ER", "Golgi", "Lysosome", "Vacuole", "Cell wall", "Cytoskeleton", "Microtubules", "Microfilaments"],
        commonMisconceptions: ["All cells have all organelles", "Plant cells don't have mitochondria"],
        examTips: ["Compare plant vs animal vs prokaryotic cells", "Know function of each organelle"]
      },
      {
        slug: "a2-3",
        title: "Topic A2.3",
        subtitle: "Viruses",
        htmlFile: "/slides/bio-a2-3.html",
        level: "HL Only",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["Capsid", "Genome", "Envelope", "Lytic cycle", "Lysogenic cycle", "Retrovirus", "Reverse transcriptase", "Provirus", "Bacteriophage", "Host range"],
        commonMisconceptions: ["Viruses are living", "Antibiotics work on viruses"],
        examTips: ["Contrast lytic vs lysogenic cycles", "Know retrovirus replication (HIV example)"]
      },
      {
        slug: "a3-1",
        title: "Topic A3.1",
        subtitle: "Diversity of Organisms",
        htmlFile: "/slides/bio-a3-1.html",
        level: "SL & HL",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["Domain", "Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species", "Binomial nomenclature", "Archaea", "Bacteria", "Eukarya"],
        commonMisconceptions: ["Species is a fixed category", "Archaea are just ancient bacteria"],
        examTips: ["Know 3 domains and key differences", "Apply binomial nomenclature rules"]
      },
      {
        slug: "a3-2",
        title: "Topic A3.2",
        subtitle: "Classification & Cladistics",
        htmlFile: "/slides/bio-a3-2.html",
        level: "HL Only",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["Clade", "Cladogram", "Node", "Outgroup", "Synapomorphy", "Plesiomorphy", "Homology", "Analogy", "Convergent evolution", "Molecular clock"],
        commonMisconceptions: ["Cladograms show time", "Similarity = relatedness"],
        examTips: ["Interpret cladograms", "Distinguish homology vs analogy"]
      },
      {
        slug: "a4-1",
        title: "Topic A4.1",
        subtitle: "Evolution & Speciation",
        htmlFile: "/slides/bio-a4-1.html",
        level: "SL & HL",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["Natural selection", "Variation", "Inheritance", "Differential survival", "Adaptation", "Speciation", "Allopatric", "Sympatric", "Polyploidy", "Reproductive isolation", "Prezygotic", "Postzygotic"],
        commonMisconceptions: ["Evolution has a goal", "Individuals evolve"],
        examTips: ["Explain natural selection steps", "Contrast allopatric vs sympatric speciation"]
      },
      {
        slug: "a4-2",
        title: "Topic A4.2",
        subtitle: "Conservation of Biodiversity",
        htmlFile: "/slides/bio-a4-2.html",
        level: "SL & HL",
        unit: "Theme A: Unity & Diversity",
        keyTerms: ["Biodiversity hotspot", "Endemic species", "Keystone species", "Flagship species", "Umbrella species", "In-situ", "Ex-situ", "CITES", "IUCN", "Protected areas", "Corridors", "Rewilding"],
        commonMisconceptions: ["Conservation = saving cute animals", "Protected areas are always effective"],
        examTips: ["Know conservation categories", "Evaluate in-situ vs ex-situ strategies"]
      },
      {
        slug: "b1-1",
        title: "Topic B1.1",
        subtitle: "Carbohydrates & Lipids",
        htmlFile: "/slides/bio-b1-1.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Monosaccharide", "Disaccharide", "Polysaccharide", "Glycosidic bond", "Alpha/beta glucose", "Starch", "Glycogen", "Cellulose", "Triglyceride", "Fatty acid", "Saturated", "Unsaturated", "Phospholipid", "Steroid"],
        commonMisconceptions: ["All fats are bad", "Cellulose and starch are the same"],
        examTips: ["Draw glycosidic bond formation", "Compare starch/glycogen/cellulose structure-function"]
      },
      {
        slug: "b1-2",
        title: "Topic B1.2",
        subtitle: "Proteins",
        htmlFile: "/slides/bio-b1-2.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Amino acid", "Peptide bond", "Primary structure", "Secondary structure", "Alpha helix", "Beta sheet", "Tertiary structure", "Quaternary structure", "Denaturation", "Enzyme", "Active site", "Substrate", "Cofactor", "Coenzyme"],
        commonMisconceptions: ["Denaturation = breaking peptide bonds", "All proteins are enzymes"],
        examTips: ["Know 4 levels of protein structure", "Explain denaturation causes and effects"]
      },
      {
        slug: "b2-1",
        title: "Topic B2.1",
        subtitle: "Membranes & Membrane Transport",
        htmlFile: "/slides/bio-b2-1.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Fluid mosaic model", "Phospholipid bilayer", "Cholesterol", "Integral protein", "Peripheral protein", "Glycoprotein", "Glycolipid", "Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis", "Water potential", "Endocytosis", "Exocytosis"],
        commonMisconceptions: ["Membrane is static", "Osmosis requires energy"],
        examTips: ["Draw fluid mosaic model", "Predict water movement from water potential"]
      },
      {
        slug: "b2-2",
        title: "Topic B2.2",
        subtitle: "Organelles & Compartmentalization",
        htmlFile: "/slides/bio-b2-2.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Nucleus", "Nucleolus", "Nuclear envelope", "Nuclear pore", "Rough ER", "Smooth ER", "Golgi apparatus", "Vesicle", "Lysosome", "Peroxisome", "Vacuole", "Mitochondria", "Chloroplast", "Compartmentalization"],
        commonMisconceptions: ["Smooth and rough ER have same function", "Golgi only packages proteins"],
        examTips: ["Trace protein secretory pathway", "Explain compartmentalization benefits"]
      },
      {
        slug: "b2-3",
        title: "Topic B2.3",
        subtitle: "Cell Specialization",
        htmlFile: "/slides/bio-b2-3.html",
        level: "HL Only",
        unit: "Theme B: Form & Function",
        keyTerms: ["Differentiation", "Gene expression", "Stem cell", "Totipotent", "Pluripotent", "Multipotent", "Unipotent", "Transcription factor", "Epigenetics", "Methylation", "Histone modification"],
        commonMisconceptions: ["All genes are expressed in all cells", "Stem cells are only embryonic"],
        examTips: ["Explain differential gene expression", "Know stem cell potency hierarchy"]
      },
      {
        slug: "b3-1",
        title: "Topic B3.1",
        subtitle: "Gas Exchange",
        htmlFile: "/slides/bio-b3-1.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Ventilation", "Gas exchange", "Cell respiration", "Alveoli", "Surfactant", "Diaphragm", "Intercostal muscles", "Partial pressure", "Diffusion gradient", "Fick's law", "Oxygen dissociation curve", "Bohr effect", "Chloride shift"],
        commonMisconceptions: ["Breathing = respiration", "O2 and CO2 diffuse in same direction"],
        examTips: ["Apply Fick's law to gas exchange", "Explain Bohr effect significance"]
      },
      {
        slug: "b3-2",
        title: "Topic B3.2",
        subtitle: "Transport",
        htmlFile: "/slides/bio-b3-2.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Open circulation", "Closed circulation", "Single circulation", "Double circulation", "Heart", "Atrium", "Ventricle", "Valve", "Artery", "Vein", "Capillary", "Systole", "Diastole", "Cardiac cycle", "ECG", "Blood pressure", "Lymphatic system"],
        commonMisconceptions: ["Arteries always carry oxygenated blood", "Heart rate = cardiac output"],
        examTips: ["Trace blood through double circulation", "Interpret cardiac cycle diagram"]
      },
      {
        slug: "b3-3",
        title: "Topic B3.3",
        subtitle: "Muscle & Motility",
        htmlFile: "/slides/bio-b3-3.html",
        level: "HL Only",
        unit: "Theme B: Form & Function",
        keyTerms: ["Sarcomere", "Actin", "Myosin", "Troponin", "Tropomyosin", "Sliding filament theory", "Cross-bridge cycle", "ATP", "Calcium", "Sarcoplasmic reticulum", "Motor unit", "Neuromuscular junction", "Acetylcholine", "Fast/slow twitch"],
        commonMisconceptions: ["Muscles push", "ATP is only needed for contraction"],
        examTips: ["Explain sliding filament theory steps", "Know role of Ca2+ and ATP in cycle"]
      },
      {
        slug: "b4-1",
        title: "Topic B4.1",
        subtitle: "Adaptation to Environment",
        htmlFile: "/slides/bio-b4-1.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Adaptation", "Acclimatization", "Phenotypic plasticity", "Homeostasis", "Thermoregulation", "Osmoregulation", "Countercurrent exchange", "Hibernation", "Estivation", "Migration"],
        commonMisconceptions: ["Adaptation happens within an organism's lifetime", "All adaptations are perfect"],
        examTips: ["Distinguish adaptation vs acclimatization", "Give examples of physiological/behavioral/anatomical adaptations"]
      },
      {
        slug: "b4-2",
        title: "Topic B4.2",
        subtitle: "Ecological Niches",
        htmlFile: "/slides/bio-b4-2.html",
        level: "SL & HL",
        unit: "Theme B: Form & Function",
        keyTerms: ["Niche", "Fundamental niche", "Realized niche", "Competitive exclusion principle", "Resource partitioning", "Character displacement", "Keystone species", "Ecosystem engineer", "Trophic cascade"],
        commonMisconceptions: ["Fundamental = realized niche", "Competitive exclusion always occurs"],
        examTips: ["Graph fundamental vs realized niche", "Apply competitive exclusion principle"]
      },
      {
        slug: "c1-1",
        title: "Topic C1.1",
        subtitle: "Enzymes & Metabolism",
        htmlFile: "/slides/bio-c1-1.html",
        level: "SL & HL",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Enzyme", "Active site", "Substrate", "Product", "Catalyst", "Activation energy", "Induced fit", "Lock and key", "Denaturation", "Optimum temperature", "Optimum pH", "Competitive inhibition", "Non-competitive inhibition", "Allosteric regulation", "Feedback inhibition", "Metabolic pathway"],
        commonMisconceptions: ["Enzymes are used up in reactions", "Inhibitors always bind active site"],
        examTips: ["Graph enzyme kinetics", "Distinguish competitive vs non-competitive inhibition"]
      },
      {
        slug: "c1-2",
        title: "Topic C1.2",
        subtitle: "Cell Respiration",
        htmlFile: "/slides/bio-c1-2.html",
        level: "SL & HL",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Glycolysis", "Link reaction", "Krebs cycle", "Electron transport chain", "Chemiosmosis", "ATP synthase", "Oxidative phosphorylation", "Substrate-level phosphorylation", "NAD", "FAD", "Pyruvate", "Acetyl CoA", "CO2", "H2O", "Anaerobic respiration", "Lactate", "Ethanol"],
        commonMisconceptions: ["Glycolysis requires oxygen", "Krebs cycle directly produces lots of ATP"],
        examTips: ["Know ATP yield per glucose (30-32)", "Trace carbons through respiration"]
      },
      {
        slug: "c1-3",
        title: "Topic C1.3",
        subtitle: "Photosynthesis",
        htmlFile: "/slides/bio-c1-3.html",
        level: "SL & HL",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Light-dependent reactions", "Light-independent reactions", "Calvin cycle", "Photosystem II", "Photosystem I", "Photolysis", "Electron transport chain", "Chemiosmosis", "ATP synthase", "NADPH", "Rubisco", "Carbon fixation", "Reduction", "Regeneration", "C3", "C4", "CAM"],
        commonMisconceptions: ["Photosynthesis = reverse of respiration", "Calvin cycle occurs in thylakoids"],
        examTips: ["Know inputs/outputs of each stage", "Compare C3/C4/CAM adaptations"]
      },
      {
        slug: "c2-1",
        title: "Topic C2.1",
        subtitle: "Chemical Signalling",
        htmlFile: "/slides/bio-c2-1.html",
        level: "HL Only",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Hormone", "Endocrine gland", "Target cell", "Receptor", "Signal transduction", "Second messenger", "cAMP", "Protein kinase", "Phosphorylation cascade", "Insulin", "Glucagon", "Adrenaline", "Thyroxine", "Steroid hormone", "Peptide hormone"],
        commonMisconceptions: ["All hormones work the same way", "Steroid hormones use second messengers"],
        examTips: ["Contrast steroid vs peptide hormone mechanisms", "Know insulin/glucagon blood glucose regulation"]
      },
      {
        slug: "c2-2",
        title: "Topic C2.2",
        subtitle: "Neural Signalling",
        htmlFile: "/slides/bio-c2-2.html",
        level: "SL & HL",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Neuron", "Dendrite", "Axon", "Myelin sheath", "Node of Ranvier", "Resting potential", "Action potential", "Depolarization", "Repolarization", "Hyperpolarization", "Refractory period", "Saltatory conduction", "Synapse", "Neurotransmitter", "Acetylcholine", "Synaptic cleft", "Postsynaptic potential", "Summation"],
        commonMisconceptions: ["Action potential = electrical current in wire", "Myelin slows conduction"],
        examTips: ["Graph action potential phases", "Explain saltatory conduction"]
      },
      {
        slug: "c3-1",
        title: "Topic C3.1",
        subtitle: "Integration of Body Systems",
        htmlFile: "/slides/bio-c3-1.html",
        level: "SL & HL",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Homeostasis", "Negative feedback", "Positive feedback", "Thermoregulation", "Osmoregulation", "Blood glucose", "Hypothalamus", "Pituitary", "ADH", "Aldosterone", "RAAS", "Baroreceptor", "Chemoreceptor"],
        commonMisconceptions: ["Positive feedback is rare in homeostasis", "Hypothalamus only controls temperature"],
        examTips: ["Draw negative feedback loops for temperature/glucose/water", "Know RAAS pathway"]
      },
      {
        slug: "c3-2",
        title: "Topic C3.2",
        subtitle: "Defence Against Disease",
        htmlFile: "/slides/bio-c3-2.html",
        level: "HL Only",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Pathogen", "Antigen", "Antibody", "B cell", "T cell", "Macrophage", "Dendritic cell", "Innate immunity", "Adaptive immunity", "Humoral immunity", "Cell-mediated immunity", "Clonal selection", "Memory cell", "Vaccination", "Herd immunity", "Autoimmune disease", "Allergy", "HIV/AIDS"],
        commonMisconceptions: ["Antibodies kill pathogens directly", "Vaccines contain live pathogens"],
        examTips: ["Trace humoral vs cell-mediated pathways", "Explain clonal selection and memory"]
      },
      {
        slug: "c4-1",
        title: "Topic C4.1",
        subtitle: "Populations & Communities",
        htmlFile: "/slides/bio-c4-1.html",
        level: "SL & HL",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Population", "Community", "Ecosystem", "Carrying capacity", "Logistic growth", "Exponential growth", "r-selected", "K-selected", "Density-dependent", "Density-independent", "Competition", "Predation", "Symbiosis", "Mutualism", "Commensalism", "Parasitism", "Succession"],
        commonMisconceptions: ["Exponential growth continues indefinitely", "r/K selection is binary"],
        examTips: ["Graph logistic vs exponential growth", "Know interaction types with examples"]
      },
      {
        slug: "c4-2",
        title: "Topic C4.2",
        subtitle: "Transfer of Energy & Matter",
        htmlFile: "/slides/bio-c4-2.html",
        level: "SL & HL",
        unit: "Theme C: Interaction & Interdependence",
        keyTerms: ["Trophic level", "Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer", "Decomposer", "Detritivore", "Food chain", "Food web", "Energy pyramid", "Biomass pyramid", "10% rule", "GPP", "NPP", "Carbon cycle", "Nitrogen cycle", "Phosphorus cycle"],
        commonMisconceptions: ["Energy cycles", "Biomass pyramids are always upright"],
        examTips: ["Apply 10% rule calculations", "Draw carbon/nitrogen cycles"]
      },
      {
        slug: "d1-1",
        title: "Topic D1.1",
        subtitle: "DNA Replication",
        htmlFile: "/slides/bio-d1-1.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Semi-conservative", "Meselson-Stahl", "Origin of replication", "Helicase", "DNA polymerase", "Primase", "RNA primer", "Leading strand", "Lagging strand", "Okazaki fragments", "DNA ligase", "Topoisomerase", "Single-strand binding protein", "Telomere", "Telomerase"],
        commonMisconceptions: ["DNA replication is conservative", "Leading and lagging strands replicate the same way"],
        examTips: ["Explain semi-conservative evidence", "Know enzyme functions in order"]
      },
      {
        slug: "d1-2",
        title: "Topic D1.2",
        subtitle: "Protein Synthesis",
        htmlFile: "/slides/bio-d1-2.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Transcription", "Translation", "RNA polymerase", "Promoter", "Terminator", "mRNA", "tRNA", "rRNA", "Codon", "Anticodon", "Genetic code", "Start codon", "Stop codon", "Ribosome", "A site", "P site", "E site", "Initiation", "Elongation", "Termination", "Post-translational modification"],
        commonMisconceptions: ["Transcription and translation happen simultaneously in eukaryotes", "One gene = one protein"],
        examTips: ["Trace central dogma steps", "Know genetic code is degenerate and universal"]
      },
      {
        slug: "d1-3",
        title: "Topic D1.3",
        subtitle: "Mutations & Gene Editing",
        htmlFile: "/slides/bio-d1-3.html",
        level: "HL Only",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Mutation", "Point mutation", "Substitution", "Insertion", "Deletion", "Frameshift", "Silent", "Missense", "Nonsense", "Mutagen", "CRISPR", "Cas9", "Guide RNA", "PAM sequence", "Off-target effects", "Gene therapy", "Germline", "Somatic"],
        commonMisconceptions: ["All mutations are harmful", "CRISPR is perfect"],
        examTips: ["Classify mutation types and effects", "Explain CRISPR mechanism and ethics"]
      },
      {
        slug: "d2-1",
        title: "Topic D2.1",
        subtitle: "Cell & Nuclear Division",
        htmlFile: "/slides/bio-d2-1.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Cell cycle", "Interphase", "G1", "S", "G2", "Mitosis", "Prophase", "Metaphase", "Anaphase", "Telophase", "Cytokinesis", "Centromere", "Centrosome", "Spindle fibers", "Chromatid", "Chromosome", "Meiosis", "Meiosis I", "Meiosis II", "Crossing over", "Independent assortment", "Gamete", "Haploid", "Diploid"],
        commonMisconceptions: ["Mitosis and meiosis are similar", "Crossing over happens in mitosis"],
        examTips: ["Know mitosis phases in order", "Contrast meiosis I vs II", "Calculate chromosome numbers"]
      },
      {
        slug: "d2-2",
        title: "Topic D2.2",
        subtitle: "Gene Expression",
        htmlFile: "/slides/bio-d2-2.html",
        level: "HL Only",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Operon", "Promoter", "Operator", "Repressor", "Inducer", "Activator", "Enhancer", "Silencer", "Transcription factor", "Epigenetics", "DNA methylation", "Histone acetylation", "RNA interference", "siRNA", "miRNA", "Alternative splicing", "Differential gene expression"],
        commonMisconceptions: ["Operons only in prokaryotes (mostly true but eukaryotes have similar concepts)", "Epigenetics changes DNA sequence"],
        examTips: ["Explain lac operon regulation", "Know eukaryotic gene regulation mechanisms"]
      },
      {
        slug: "d2-3",
        title: "Topic D2.3",
        subtitle: "Water Potential",
        htmlFile: "/slides/bio-d2-3.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Water potential", "Solute potential", "Pressure potential", "Osmosis", "Plasmolysis", "Turgid", "Flaccid", "Hypertonic", "Hypotonic", "Isotonic", "Ψw = Ψs + Ψp", "Guard cells", "Stomatal opening", "Transpiration pull", "Cohesion-tension theory"],
        commonMisconceptions: ["Water moves from high to low water potential (it's the opposite - from less negative to more negative)", "Pure water has negative water potential"],
        examTips: ["Calculate water potential", "Explain stomatal regulation"]
      },
      {
        slug: "d3-1",
        title: "Topic D3.1",
        subtitle: "Reproduction",
        htmlFile: "/slides/bio-d3-1.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Asexual reproduction", "Sexual reproduction", "Gametogenesis", "Spermatogenesis", "Oogenesis", "Meiosis", "Fertilization", "Zygote", "Embryo", "Fetus", "Placenta", "Amniotic fluid", "Umbilical cord", "Gestation", "Parturition", "Lactation", "IVF", "Contraception"],
        commonMisconceptions: ["Mitosis produces gametes", "Oogenesis produces 4 equal eggs"],
        examTips: ["Compare spermatogenesis vs oogenesis", "Know IVF process and ethical issues"]
      },
      {
        slug: "d3-2",
        title: "Topic D3.2",
        subtitle: "Inheritance",
        htmlFile: "/slides/bio-d3-2.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Gene", "Allele", "Locus", "Genotype", "Phenotype", "Dominant", "Recessive", "Codominant", "Incomplete dominance", "Multiple alleles", "Sex-linked", "Autosomal", "Pedigree", "Punnett square", "Test cross", "Dihybrid cross", "Linkage", "Recombination frequency", "Chi-squared test"],
        commonMisconceptions: ["Dominant = more common", "Blending inheritance"],
        examTips: ["Set up Punnett squares correctly", "Know chi-squared test for linkage"]
      },
      {
        slug: "d3-3",
        title: "Topic D3.3",
        subtitle: "Homeostasis",
        htmlFile: "/slides/bio-d3-3.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Homeostasis", "Set point", "Negative feedback", "Sensor", "Control center", "Effector", "Thermoregulation", "Osmoregulation", "Blood glucose", "Insulin", "Glucagon", "Diabetes type 1", "Diabetes type 2", "Kidney", "Nephron", "Filtration", "Reabsorption", "Secretion", "ADH", "Loop of Henle", "Countercurrent multiplier"],
        commonMisconceptions: ["Kidney filters blood once", "ADH increases urine volume"],
        examTips: ["Draw nephron and label processes", "Explain loop of Henle countercurrent multiplier"]
      },
      {
        slug: "d4-1",
        title: "Topic D4.1",
        subtitle: "Natural Selection",
        htmlFile: "/slides/bio-d4-1.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Natural selection", "Variation", "Selection pressure", "Directional selection", "Stabilizing selection", "Disruptive selection", "Sexual selection", "Artificial selection", "Fitness", "Adaptation", "Coevolution", "Mimicry", "Batesian", "Mullerian", "Antibiotic resistance", "Pesticide resistance"],
        commonMisconceptions: ["Natural selection creates perfect organisms", "Evolution = natural selection (it's one mechanism)"],
        examTips: ["Graph three types of selection", "Explain antibiotic resistance as natural selection"]
      },
      {
        slug: "d4-2",
        title: "Topic D4.2",
        subtitle: "Stability & Change",
        htmlFile: "/slides/bio-d4-2.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Hardy-Weinberg", "Allele frequency", "Genotype frequency", "p² + 2pq + q² = 1", "p + q = 1", "Genetic drift", "Bottleneck effect", "Founder effect", "Gene flow", "Non-random mating", "Mutation", "Speciation", "Phylogeny", "Molecular clock", "Cladistics"],
        commonMisconceptions: ["Hardy-Weinberg applies to real populations", "Genetic drift only affects small populations"],
        examTips: ["Calculate allele/genotype frequencies", "Know 5 H-W assumptions"]
      },
      {
        slug: "d4-3",
        title: "Topic D4.3",
        subtitle: "Climate Change",
        htmlFile: "/slides/bio-d4-3.html",
        level: "SL & HL",
        unit: "Theme D: Continuity & Change",
        keyTerms: ["Greenhouse effect", "Enhanced greenhouse effect", "Carbon cycle", "Carbon sinks", "Ocean acidification", "Coral bleaching", "Phenology", "Range shift", "Extinction risk", "Feedback loops", "Tipping points", "Mitigation", "Adaptation", "Paris Agreement", "IPCC"],
        commonMisconceptions: ["Climate change is future problem", "Ocean acidification = warming"],
        examTips: ["Link CO2 to ocean acidification", "Know biological impacts: phenology, range shifts, extinction"]
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getSlide(courseSlug: string, slideSlug: string): Slide | undefined {
  return getCourse(courseSlug)?.slides.find((s) => s.slug === slideSlug);
}

export function getAdjacentSlides(courseSlug: string, slideSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return { prev: null, next: null };
  const idx = course.slides.findIndex((s) => s.slug === slideSlug);
  return {
    prev: idx > 0 ? course.slides[idx - 1] : null,
    next: idx < course.slides.length - 1 ? course.slides[idx + 1] : null,
  };
}

export function getSlidesByUnit(courseSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return {};
  return course.slides.reduce((acc, slide) => {
    if (!acc[slide.unit]) acc[slide.unit] = [];
    acc[slide.unit].push(slide);
    return acc;
  }, {} as Record<string, Slide[]>);
}