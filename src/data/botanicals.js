export const BOTANICALS = [
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    binomial: 'Withania somnifera',
    sanskrit: 'Aśvagandhā (अश्वगंधा)',
    family: 'Solanaceae',
    part: 'Root',
    category: 'Adaptogen',
    heroImage: '/images/roots.jpg',
    dosha: {
      primary: 'Vata-Kapha Pacifying',
      vata: -2,
      pitta: 1,
      kapha: -1
    },
    energetics: {
      rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)', 'Madhura (Sweet)'],
      virya: 'Ushna (Warming)',
      vipaka: 'Madhura (Sweet / Nourishing)',
      guna: ['Guru (Heavy)', 'Snigdha (Unctuous)']
    },
    phytochemicals: [
      { name: 'Withanolides A & D', value: 92, role: 'HPA-axis modulation & cortisol reduction' },
      { name: 'Withaferin A', value: 78, role: 'Cellular protection & oxidative resilience' },
      { name: 'Sitoindosides VII-VIII', value: 84, role: 'Endogenous antioxidant enzyme synthesis' }
    ],
    synergies: ['tulsi', 'cardamom', 'brahmi'],
    harvestSeason: 'Autumn / Post-Monsoon',
    harvestWindow: 'October – December',
    sourcingRegion: 'Mandasor Terraced Soils, Madhya Pradesh',
    sustainability: 96,
    bioavailabilityRating: 88,
    potencyIndex: 94,
    description: 'Renowned for five millennia as the premier royal root of Ayurvedic Rasayana. Named for imparting the vitality and rooted endurance of the stallion, it recalibrates the endocrine system under sustained psychological and physiological pressure.',
    traditionalUses: [
      'Rasayana (Deep cellular longevity and tissue nourishment)',
      'Nidra-janana (Induction of restorative, stage-four sleep)',
      'Balya (Tonification of muscular fibers and nervous marrow)'
    ],
    modernEvidence: 'Systematic meta-analyses confirm statistically significant reductions in serum salivary cortisol (-27.9%) alongside enhanced VO2 max and parasympathetic vagal recovery.',
    contraindications: 'Use with mindful moderation in active hyperthyroidism or severe inflammatory Pitta flare-ups unless balanced with cooling Shatavari.',
    preparationRitual: 'Simmer 3 grams of micronized sun-dried root in warm golden oat milk or spring water with two crushed cardamom pods and raw forest honey.'
  },
  {
    id: 'tulsi',
    name: 'Holy Basil (Tulsi)',
    binomial: 'Ocimum sanctum',
    sanskrit: 'Tulasī (तुलसी)',
    family: 'Lamiaceae',
    part: 'Leaf & Flowering Tops',
    category: 'Adaptogen',
    heroImage: '/images/hero.jpg',
    dosha: {
      primary: 'Tridoshic (Vata & Kapha Pacifying)',
      vata: -2,
      pitta: 0,
      kapha: -2
    },
    energetics: {
      rasa: ['Katu (Pungent)', 'Tikta (Bitter)'],
      virya: 'Ushna (Mildly Warming)',
      vipaka: 'Katu (Pungent / Clarifying)',
      guna: ['Laghu (Light)', 'Ruksha (Dry)']
    },
    phytochemicals: [
      { name: 'Eugenol', value: 95, role: 'COX-2 enzyme down-regulation & respiratory clarity' },
      { name: 'Rosmarinic Acid', value: 88, role: 'Polyphenolic free-radical scavenger' },
      { name: 'Ursolic Acid', value: 81, role: 'Dermal elasticity preservation & cellular repair' }
    ],
    synergies: ['ashwagandha', 'rosemary', 'cardamom'],
    harvestSeason: 'Monsoon / Late Summer',
    harvestWindow: 'August – October',
    sourcingRegion: 'Sacred Foothills of Vrindavan & Uttarakhand',
    sustainability: 98,
    bioavailabilityRating: 92,
    potencyIndex: 91,
    description: 'Revered across the Indian subcontinent as the "Incomparable One", Tulsi is an aromatic sattvic panacea. It purifies the subtle vital air (Prana), dispels environmental stagnation, and balances the neuroendocrine response to mental fatigue.',
    traditionalUses: [
      'Pranavaha Srotas (Protection of the entire respiratory tree)',
      'Medhya Sattvika (Clarification of mental fog and anxiety)',
      'Dipana-Pachana (Kindling metabolic fire without irritating Pitta)'
    ],
    modernEvidence: 'Clinical trials demonstrate enhanced immune lymphocyte counts (NK cell activity) and attenuation of metabolic stress markers in human cohorts.',
    contraindications: 'Generally considered exceptionally safe; may mildly potentiate antiplatelet therapies when taken in massive extract quantities.',
    preparationRitual: 'Steep whole dried purple Krishna Tulsi leaves in 90°C spring water covered for seven minutes to capture the fugitive volatile terpenes.'
  },
  {
    id: 'brahmi',
    name: 'Brahmi / Gotu Kola',
    binomial: 'Bacopa monnieri / Centella asiatica',
    sanskrit: 'Brāhmī (ब्राह्मी)',
    family: 'Plantaginaceae',
    part: 'Whole Aerial Herb',
    category: 'Nervine',
    heroImage: '/images/garden.jpg',
    dosha: {
      primary: 'Pitta-Kapha Pacifying',
      vata: -1,
      pitta: -2,
      kapha: -1
    },
    energetics: {
      rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)', 'Madhura (Sweet)'],
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Nourishing)',
      guna: ['Laghu (Light)', 'Sara (Flowing)']
    },
    phytochemicals: [
      { name: 'Bacosides A & B', value: 94, role: 'Synaptic plasticity & cholinergic transmission' },
      { name: 'Asiaticoside', value: 86, role: 'Microcirculatory repair & collagen synthesis' },
      { name: 'Madecassoside', value: 79, role: 'Neuroprotection against beta-amyloid oxidation' }
    ],
    synergies: ['shatavari', 'ashwagandha', 'shankhpushpi'],
    harvestSeason: 'Spring / Early Summer',
    harvestWindow: 'March – May',
    sourcingRegion: 'Wetland Preserves of Kerala & Godavari Delta',
    sustainability: 92,
    bioavailabilityRating: 84,
    potencyIndex: 96,
    description: 'Named in honor of Brahma, the divine architect of supreme consciousness. Brahmi is the gold standard of herbal neuro-tonics, prized for sharpening cognitive retention while cooling an overheated nervous system.',
    traditionalUses: [
      'Medhya Rasayana (Supreme intellect and memory rejuvenator)',
      'Shiro-Roga (Dispelling cranial tension and mental overheating)',
      'Kushtha-ghna (Purification of the lymph and skin microvessels)'
    ],
    modernEvidence: 'Repeated double-blind trials demonstrate significant improvements in visual information processing speed, rate of learning, and consolidation of memory.',
    contraindications: 'May cause mild gastrointestinal cooling in extremely weak digestive fires if taken on an empty stomach without ginger or ghee.',
    preparationRitual: 'Macerate fresh or dried leaves into warm grass-fed ghee (Brahmi Ghrita) or blend with room-temperature pure mountain spring water.'
  },
  {
    id: 'shatavari',
    name: 'Shatavari',
    binomial: 'Asparagus racemosus',
    sanskrit: 'Śatāvarī (शतावरी)',
    family: 'Asparagaceae',
    part: 'Tuberous Roots',
    category: 'Rasayana',
    heroImage: '/images/roots.jpg',
    dosha: {
      primary: 'Pitta-Vata Pacifying',
      vata: -2,
      pitta: -2,
      kapha: 1
    },
    energetics: {
      rasa: ['Madhura (Sweet)', 'Tikta (Bitter)'],
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Sweet / Restorative)',
      guna: ['Guru (Heavy)', 'Snigdha (Unctuous)']
    },
    phytochemicals: [
      { name: 'Shatavarins I-IV', value: 90, role: 'Phytoestrogenic modulation & endocrine resilience' },
      { name: 'Sarsasapogenin', value: 82, role: 'Mucosal lining cellular replenishment' },
      { name: 'Asparagamine A', value: 74, role: 'Bio-immunomodulatory alkaloid' }
    ],
    synergies: ['brahmi', 'ashwagandha', 'cardamom'],
    harvestSeason: 'Winter',
    harvestWindow: 'November – January',
    sourcingRegion: 'Wild Sandstone Slopes, Western Ghats',
    sustainability: 95,
    bioavailabilityRating: 86,
    potencyIndex: 93,
    description: 'Translating literally to "She who possesses one hundred companions", Shatavari is the supreme cooling nourishing tonic. It replenishes foundational Ojas (vital nectar), moistens dried mucosal tissues, and supports hormonal equilibrium.',
    traditionalUses: [
      'Ojas-vardhaka (Replenishment of deep constitutional immunity)',
      'Stanya-janana (Harmonization of the female reproductive rhythm)',
      'Pittahara (Extinguishing internal systemic heat and dryness)'
    ],
    modernEvidence: 'Supports hypothalamic-pituitary-adrenal axis homeostasis, stimulates natural macrophage phagocytosis, and safeguards gastric epithelial cells.',
    contraindications: 'Avoid in excess in states of profound Kapha accumulation or sluggish water retention.',
    preparationRitual: 'Decocted root powder infused slowly in organic whole milk with saffron strands and a dash of ground green cardamom.'
  },
  {
    id: 'amla',
    name: 'Amalaki (Amla)',
    binomial: 'Phyllanthus emblica',
    sanskrit: 'Āmalakī (आमलकी)',
    family: 'Phyllanthaceae',
    part: 'Fresh & Dried Wild Fruit',
    category: 'Rasayana',
    heroImage: '/images/mortar.jpg',
    dosha: {
      primary: 'Tridoshic (Pacifies all three doshas)',
      vata: -1,
      pitta: -2,
      kapha: -1
    },
    energetics: {
      rasa: ['Madhura', 'Amla (Sour)', 'Katu', 'Tikta', 'Kashaya (Five Rastes)'],
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Sweet / Mild)',
      guna: ['Laghu (Light)', 'Ruksha (Dry)']
    },
    phytochemicals: [
      { name: 'Emblicanin A & B', value: 98, role: 'Thermostable bio-complexed ascorbic cascade' },
      { name: 'Punigluconin', value: 89, role: 'Superoxide dismutase cellular activator' },
      { name: 'Pedunculagin', value: 85, role: 'Dermal photoprotective tannin structure' }
    ],
    synergies: ['haritaki', 'moringa', 'guduchi'],
    harvestSeason: 'Winter / Mid-Season',
    harvestWindow: 'December – February',
    sourcingRegion: 'Sal Forest Canopy, Central Deciduous Belt',
    sustainability: 99,
    bioavailabilityRating: 95,
    potencyIndex: 98,
    description: 'Known as the "Mother" and primary constituent of the famed Chyawanprash formulation. Unique in containing five of the six fundamental tastes, Amla is among the universe’s richest natural reservoirs of heat-stable vitamin C and ellagitannins.',
    traditionalUses: [
      'Vayasthapana (Arresting premature cellular degeneration)',
      'Chakshushya (Preserving ocular clarity and microcirculation)',
      'Keshya (Nourishing hair follicles from within the liver axis)'
    ],
    modernEvidence: 'Clinical studies document powerful endothelial protection, reduction in oxidized LDL fractions, and stimulation of pro-collagen type I synthesis.',
    contraindications: 'Extremely well-tolerated by virtually all constitutions; slight astringency may require honey in high-Vata dryness.',
    preparationRitual: 'Raw cold-pressed wild fruit juice taken at dawn with pure raw honey, or sun-dried powder mixed into warm mountain spring water.'
  },
  {
    id: 'guduchi',
    name: 'Guduchi (Giloy)',
    binomial: 'Tinospora cordifolia',
    sanskrit: 'Guḍūcī (गडूची) / Amṛtā',
    family: 'Menispermaceae',
    part: 'Climbing Stems',
    category: 'Cellular Defence',
    heroImage: '/images/roots.jpg',
    dosha: {
      primary: 'Tridoshic (Supreme balancing)',
      vata: -1,
      pitta: -2,
      kapha: -2
    },
    energetics: {
      rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)'],
      virya: 'Ushna (Subtly Warming)',
      vipaka: 'Madhura (Sweet / Restorative)',
      guna: ['Laghu (Light)', 'Snigdha (Gentle unctuous)']
    },
    phytochemicals: [
      { name: 'Tinosporaside & Cordifolioside', value: 92, role: 'Macrophage phagocytic activation' },
      { name: 'Berberine traces', value: 76, role: 'Gut microbiome eubiosis maintenance' },
      { name: 'Magnoflorine', value: 83, role: 'Hepatic phase II enzyme induction' }
    ],
    synergies: ['amla', 'tulsi', 'calendula'],
    harvestSeason: 'Summer',
    harvestWindow: 'May – July',
    sourcingRegion: 'Wild Neem-tree climbers of Vindhyachal',
    sustainability: 94,
    bioavailabilityRating: 89,
    potencyIndex: 95,
    description: 'Affectionately called "Amrita" (the Nectar of Immortality). When harvested growing up the trunk of bitter Neem trees, Guduchi absorbs enhanced purifying properties, eliminating deep tissue toxins (Ama) without exhausting natural vitality.',
    traditionalUses: [
      'Amadosha-hara (Systemic elimination of metabolic impurities)',
      'Jvara-hara (Calming deep chronic inflammatory flare-ups)',
      'Yakrit-pleeha (Purifying hepatic and splenic filtering mechanisms)'
    ],
    modernEvidence: 'Documented immunomodulatory action showing upregulation of IL-1beta and TNF-alpha clearance, alongside liver protective biomarkers.',
    contraindications: 'Monitor blood glucose in diabetic protocols as it naturally improves insulin sensitivity.',
    preparationRitual: 'Traditional Kashayam: simmer 5 grams of coarsely bruised stem in two cups of water until reduced to half a cup; consume warm.'
  },
  {
    id: 'calendula',
    name: 'Calendula',
    binomial: 'Calendula officinalis',
    sanskrit: 'Zergul (ज़रगुल)',
    family: 'Asteraceae',
    part: 'Sun-dried Ray Florets',
    category: 'Rasayana',
    heroImage: '/images/mortar.jpg',
    dosha: {
      primary: 'Pitta-Kapha Pacifying',
      vata: 0,
      pitta: -2,
      kapha: -1
    },
    energetics: {
      rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)'],
      virya: 'Sheeta (Cooling)',
      vipaka: 'Katu (Pungent)',
      guna: ['Laghu (Light)', 'Ruksha (Dry)']
    },
    phytochemicals: [
      { name: 'Faradiol Esters', value: 91, role: 'Topical and internal mucosal anti-inflammatory' },
      { name: 'Lutein & Zeaxanthin', value: 89, role: 'Carotenoid dermal photoprotection' },
      { name: 'Calendulosides', value: 83, role: 'Wound granulation & tissue regeneration' }
    ],
    synergies: ['vetiver', 'amla', 'rosemary'],
    harvestSeason: 'Mid-Summer',
    harvestWindow: 'June – August',
    sourcingRegion: 'Alpine Foothills, Himachal Terraces',
    sustainability: 97,
    bioavailabilityRating: 90,
    potencyIndex: 88,
    description: 'Golden sun-colored petals long treasured in Mediterranean and Himalayan apothecaries as the sovereign vulnerary. Calms reactive skin, heals mucosal irritation, and soothes sluggish lymphatic drainage.',
    traditionalUses: [
      'Vranaropana (Accelerating dermal wound and scar recovery)',
      'Raktashodhaka (Clearing heat patterns from the capillary bed)',
      'Strotas-shodhana (Gentle stimulation of lymphatic cleansing)'
    ],
    modernEvidence: 'Shown in dermatological studies to stimulate fibroblast migration, increase tissue hydroxyproline content, and modulate cutaneous inflammatory cascades.',
    contraindications: 'Use caution in rare individuals with known allergies to the Asteraceae (daisy) botanical family.',
    preparationRitual: 'Slow 21-day solar maceration in cold-pressed organic jojoba or sweet almond oil, or steeped as a luminous floral infusion.'
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    binomial: 'Salvia rosmarinus',
    sanskrit: 'Rusmari (रुसमरी)',
    family: 'Lamiaceae',
    part: 'Needle Leaves',
    category: 'Nervine',
    heroImage: '/images/garden.jpg',
    dosha: {
      primary: 'Vata-Kapha Pacifying',
      vata: -1,
      pitta: 1,
      kapha: -2
    },
    energetics: {
      rasa: ['Tikta (Bitter)', 'Katu (Pungent)', 'Kashaya (Astringent)'],
      virya: 'Ushna (Warming)',
      vipaka: 'Katu (Pungent)',
      guna: ['Laghu (Light)', 'Tikshna (Penetrating)', 'Ruksha (Dry)']
    },
    phytochemicals: [
      { name: 'Carnosic Acid', value: 94, role: 'Lipid-peroxidation inhibitor & neuroprotective' },
      { name: '1,8-Cineole (Eucalyptol)', value: 88, role: 'Acetylcholinesterase inhibition & alertness' },
      { name: 'Rosmarinic Acid', value: 91, role: 'Capillary circulation enhancer' }
    ],
    synergies: ['tulsi', 'brahmi', 'cardamom'],
    harvestSeason: 'Spring & Summer',
    harvestWindow: 'May – July',
    sourcingRegion: 'Limestone Coastal Terraces, Mediterranean & Nilgiris',
    sustainability: 96,
    bioavailabilityRating: 88,
    potencyIndex: 90,
    description: 'The ancient emblem of remembrance and clear cognition. Rosemary invigorates peripheral microcirculation, awakens sluggish cerebral faculties, and delivers one of the botanical world’s most potent lipid-soluble antioxidants.',
    traditionalUses: [
      'Smriti-vardhaka (Awakening mnemonic recall and sensory acuity)',
      'Raktavaha-shodhana (Stimulating oxygen delivery to cerebral vessels)',
      'Keshya-vardhana (Invigorating follicular microcirculation)'
    ],
    modernEvidence: 'Inhalation and consumption of cineole-standardized rosemary directly enhances cognitive speed and accuracy via mild acetylcholinesterase inhibition.',
    contraindications: 'High-potency essential oil extracts contraindicated in epilepsy or severe unmanaged hypertension.',
    preparationRitual: 'Fresh aerial needle tips lightly bruised and steam-distilled for aromatic hydrosol, or infused in organic olive oil.'
  },
  {
    id: 'vetiver',
    name: 'Vetiver (Khus)',
    binomial: 'Chrysopogon zizanioides',
    sanskrit: 'Uśīra (उशीर)',
    family: 'Poaceae',
    part: 'Fibrous Roots',
    category: 'Cellular Defence',
    heroImage: '/images/roots.jpg',
    dosha: {
      primary: 'Pitta-Vata Pacifying',
      vata: -2,
      pitta: -3,
      kapha: 0
    },
    energetics: {
      rasa: ['Tikta (Bitter)', 'Madhura (Sweet)'],
      virya: 'Sheeta (Supremely Cooling)',
      vipaka: 'Madhura (Sweet)',
      guna: ['Laghu (Light)', 'Snigdha (Unctuous)']
    },
    phytochemicals: [
      { name: 'Khusimol', value: 93, role: 'GABA-ergic neuro-calming sesquiterpene' },
      { name: 'Vetivone (Alpha & Beta)', value: 87, role: 'Core autonomic nervous stabilization' },
      { name: 'Isovalencenol', value: 80, role: 'Anti-stress hypothalamic dampener' }
    ],
    synergies: ['shatavari', 'calendula', 'cardamom'],
    harvestSeason: 'Winter',
    harvestWindow: 'December – March',
    sourcingRegion: 'Deep Alluvial Soils, Uttar Pradesh & Karnataka',
    sustainability: 98,
    bioavailabilityRating: 86,
    potencyIndex: 92,
    description: 'Treasured as "the root that cools the soul". Dug from ten feet deep within alluvial soils, Vetiver roots exude an intensely earthy, smoky, sweet scent that instantly grounds agitated Vata and quenches scorching Pitta heat.',
    traditionalUses: [
      'Daha-prashamana (Extinguishing internal burning sensations)',
      'Manas-shantikar (Deep grounding of panic, delirium, and insomnia)',
      'Sweda-durgandhahara (Deodorizing and purifying sweat glands)'
    ],
    modernEvidence: 'EEG studies confirm notable increases in alpha brainwave activity following vetiver olfactory exposure, indicating deep relaxed alertness.',
    contraindications: 'Avoid in states of extreme Kapha congestion, cold lethargy, or heavy mucous accumulation.',
    preparationRitual: 'Bundle cleaned roots in clay earthenware jars of mountain spring water overnight to create cooling "Khus Jala" elixir.'
  },
  {
    id: 'cardamom',
    name: 'True Cardamom',
    binomial: 'Elettaria cardamomum',
    sanskrit: 'Elā (एला)',
    family: 'Zingiberaceae',
    part: 'Green Seed Pods',
    category: 'Digestif',
    heroImage: '/images/mortar.jpg',
    dosha: {
      primary: 'Tridoshic (Supreme Sattvic Spice)',
      vata: -2,
      pitta: 0,
      kapha: -2
    },
    energetics: {
      rasa: ['Madhura (Sweet)', 'Katu (Pungent)'],
      virya: 'Sheeta (Cooling post-metabolic)',
      vipaka: 'Madhura (Nourishing Sweet)',
      guna: ['Laghu (Light)', 'Ruksha (Dry)', 'Sukshma (Subtle)']
    },
    phytochemicals: [
      { name: 'Terpinyl Acetate', value: 92, role: 'Smooth muscle antispasmodic & carminative' },
      { name: '1,8-Cineole', value: 85, role: 'Respiratory bronchial opening' },
      { name: 'Limonene', value: 78, role: 'Gastric acid modulation without hyperacidity' }
    ],
    synergies: ['ashwagandha', 'tulsi', 'shatavari'],
    harvestSeason: 'Autumn / Post-Monsoon',
    harvestWindow: 'September – November',
    sourcingRegion: 'Cardamom Hills of Idukki, High Western Ghats',
    sustainability: 95,
    bioavailabilityRating: 94,
    potencyIndex: 89,
    description: 'The Queen of Spices. Unlike fiery chilies or ginger, Cardamom warms the digestive core (Agni) without provoking fiery Pitta. Acts as a gentle harmonizer in complex botanical decoctions, eliminating harshness.',
    traditionalUses: [
      'Dipana-Anulomana (Kindling digestion and releasing trapped gas)',
      'Mukhakanti (Freshening breath and sweetening speech)',
      'Chardi-nigrahana (Relieving subtle nausea and motion sickness)'
    ],
    modernEvidence: 'Demonstrated to prevent gastric mucosal lesions, accelerate digestive transit time, and enhance gastrointestinal bioavailability of companion herbs.',
    contraindications: 'Extremely safe; avoid consuming whole hard seeds unchewed in active diverticulitis.',
    preparationRitual: 'Lightly crush whole green pods with a mortar pestle immediately before infusing to safeguard the delicate volatile oils.'
  },
  {
    id: 'moringa',
    name: 'Moringa',
    binomial: 'Moringa oleifera',
    sanskrit: 'Śigru (शिग्रु)',
    family: 'Moringaceae',
    part: 'Shade-dried Leaves',
    category: 'Cellular Defence',
    heroImage: '/images/hero.jpg',
    dosha: {
      primary: 'Kapha-Vata Pacifying',
      vata: -1,
      pitta: 1,
      kapha: -2
    },
    energetics: {
      rasa: ['Katu (Pungent)', 'Tikta (Bitter)'],
      virya: 'Ushna (Warming)',
      vipaka: 'Katu (Pungent)',
      guna: ['Laghu (Light)', 'Ruksha (Dry)', 'Tikshna (Sharp)']
    },
    phytochemicals: [
      { name: 'Quercetin-3-glucoside', value: 96, role: 'Flavonoid vascular protection' },
      { name: 'Chlorogenic Acid', value: 90, role: 'Glucose metabolic stabilization' },
      { name: 'Isothiocyanates (Moringin)', value: 88, role: 'Nrf2 cellular pathway upregulation' }
    ],
    synergies: ['amla', 'guduchi', 'rosemary'],
    harvestSeason: 'Spring & Summer',
    harvestWindow: 'February – May',
    sourcingRegion: 'Sub-arid Deccan Organic Commons, Tamil Nadu',
    sustainability: 99,
    bioavailabilityRating: 91,
    potencyIndex: 94,
    description: 'Known historically as the "Tree of Life". Packed with 46 distinct antioxidants, 36 anti-inflammatories, and every essential amino acid, Moringa delivers bioavailable micro-nutrients that awaken sluggish metabolic tissue.',
    traditionalUses: [
      'Medohara (Clearing accumulated adipose and Kapha stagnation)',
      'Shothahara (Alleviating systemic fluid retention and joint stiffness)',
      'Krimighna (Purifying the intestinal tract of microbial burden)'
    ],
    modernEvidence: 'Demonstrates notable lipid-lowering activity, preservation of beta-cell pancreatic function, and marked reduction in markers of systemic inflammation.',
    contraindications: 'High doses during early pregnancy should be avoided due to traditional uterine stimulatory cautions.',
    preparationRitual: 'Gentle shade-dried leaf powder stirred into room-temperature water or blended into fresh morning botanical tonics.'
  },
  {
    id: 'frankincense',
    name: 'Indian Frankincense',
    binomial: 'Boswellia serrata',
    sanskrit: 'Śallakī (शल्लकी)',
    family: 'Burseraceae',
    part: 'Golden Oleo-gum Resin',
    category: 'Cellular Defence',
    heroImage: '/images/mortar.jpg',
    dosha: {
      primary: 'Kapha-Pitta Pacifying',
      vata: -1,
      pitta: -2,
      kapha: -2
    },
    energetics: {
      rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)', 'Madhura (Sweet)'],
      virya: 'Sheeta (Cooling post-digestion)',
      vipaka: 'Katu (Pungent)',
      guna: ['Laghu (Light)', 'Ruksha (Dry)']
    },
    phytochemicals: [
      { name: 'AKBA (Acetyl-11-keto-beta-boswellic acid)', value: 97, role: 'Specific 5-LOX enzyme inhibition' },
      { name: 'Beta-Boswellic Acid', value: 89, role: 'Chondrocyte preservation & cartilage integrity' },
      { name: 'Incensole Acetate', value: 84, role: 'TRPV3 ion channel activation for calm mood' }
    ],
    synergies: ['ashwagandha', 'vetiver', 'cardamom'],
    harvestSeason: 'Spring',
    harvestWindow: 'March – May',
    sourcingRegion: 'Rocky Dry Forests of Satpura Range',
    sustainability: 91,
    bioavailabilityRating: 87,
    potencyIndex: 97,
    description: 'The golden resin wept from wounded sacred Boswellia trees. Possessing the unique ability to inhibit 5-lipoxygenase (5-LOX) without irritating the gastric mucosal lining, it provides unparalleled structural and connective tissue relief.',
    traditionalUses: [
      'Sandhivata-hara (Restoring ease and lubrication to inflamed joints)',
      'Purisha-grahi (Soothing irritated intestinal epithelial lining)',
      'Medhya-dhyana (Inducing deep meditative stillness via resin incense)'
    ],
    modernEvidence: 'Multiple randomized controlled trials show significant improvement in joint mobility scores and radiographic joint space preservation.',
    contraindications: 'Take with lipophilic carriers (ghee, olive oil) for optimal intestinal absorption.',
    preparationRitual: 'Purified gum resin extract compounded with cold-pressed sesame oil or dissolved into botanical balms.'
  }
];

export const CARRIER_BASES = [
  {
    id: 'spring-infusion',
    name: 'Spring Mountain Infusion',
    type: 'Water Base',
    absorption: 'Rapid (10-15 mins)',
    description: 'Pure high-altitude spring water. Ideal for extracting delicate water-soluble flavonoids, polyphenols, and essential aromatics.',
    temp: 'Cooling / Neutral',
    bestFor: 'Delicate leaves, flowers, and daily refreshing tonics'
  },
  {
    id: 'hydro-ethanolic',
    name: 'Artisan Hydro-Ethanolic Tincture',
    type: 'Alcohol Extract (45% ABV)',
    absorption: 'Immediate Sublingual (2-5 mins)',
    description: 'Organic grain spirit and distilled spring water. Extracts both polar and non-polar phytomolecules; shelf-stable for years.',
    temp: 'Mildly Warming',
    bestFor: 'Dense medicinal roots, barks, and acute therapeutic dosing'
  },
  {
    id: 'raw-decoction',
    name: 'Kashayam (Simmered Decoction)',
    type: 'Concentrated Water Extract',
    absorption: 'Moderate (20-30 mins)',
    description: 'Traditional slow reduction by simmering raw botanicals down to 1/4th volume. Maximizes bitter and astringent active markers.',
    temp: 'Neutral to Warming',
    bestFor: 'Heavy woody roots, seeds, and deep tissue Rasayana'
  },
  {
    id: 'sesame-elixir',
    name: 'Cold-Pressed Golden Sesame Oil',
    type: 'Lipid Base (Taila)',
    absorption: 'Deep Systemic Tissue Penetration',
    description: 'Unrefined, cold-pressed black sesame oil. Renowned in Ayurvedic pharmacopeia as the supreme penetrating lipophilic vehicle.',
    temp: 'Warming',
    bestFor: 'Nervous system grounding, joint tonics, and topical abhyanga'
  },
  {
    id: 'grassfed-ghrita',
    name: 'Clarified Herbal Ghee (Ghrita)',
    type: 'Sattvic Lipid Matrix',
    absorption: 'Cellular Crossing (Passes Blood-Brain Barrier)',
    description: 'Cultured grass-fed A2 clarified butter. Transports active botanical alkaloids directly into the deepest marrow and nervous tissues.',
    temp: 'Cooling',
    bestFor: 'Medhya nootropics, brain tonics, and deep endocrine restoration'
  }
];

export const SYNERGY_PAIRS = [
  {
    pair: ['ashwagandha', 'cardamom'],
    score: 96,
    bonus: '+18% Bioavailability',
    rationale: 'Cardamoms carminative cineole accelerates gastric emptying, delivering withanolides swiftly without Vata stagnation.'
  },
  {
    pair: ['ashwagandha', 'tulsi'],
    score: 98,
    bonus: '+24% Stress Resilience',
    rationale: 'Dual HPA-axis modulation: Ashwagandha calms cortisol while Tulsi clears mental fog and optimizes neuro-immune signaling.'
  },
  {
    pair: ['brahmi', 'shatavari'],
    score: 94,
    bonus: '+20% Synaptic Rejuvenation',
    rationale: 'Shatavaris cooling unctuous moisture protects against Brahmi’s drying lightness, creating an enduring nervous tonic.'
  },
  {
    pair: ['amla', 'guduchi'],
    score: 97,
    bonus: '+26% Cellular Phagocytosis',
    rationale: 'Emblicanins combined with tinosporasides ignite endogenous glutathione synthesis and mucosal defense.'
  },
  {
    pair: ['rosemary', 'tulsi'],
    score: 92,
    bonus: '+16% Cerebral Oxygenation',
    rationale: 'Complementary rosmarinic acid pathways promote microcirculatory arterial vasodilation.'
  },
  {
    pair: ['vetiver', 'shatavari'],
    score: 95,
    bonus: '+22% Deep Somatic Cooling',
    rationale: 'Supreme pacification of internal Pitta heat, hot flashes, and nocturnal agitation.'
  }
];

export const RESEARCH_ARTICLES = [
  {
    id: 'art-1',
    title: 'The Architecture of Adaptogens: Decoding the Molecular Symphony of Withania somnifera',
    subtitle: 'A phytochemical analysis of steroidal lactones and their receptor kinetics within the human neuroendocrine axis.',
    author: 'Dr. Evelyn Varma, PhD (Ethnobotanical Pharmacognosy)',
    readTime: '7 min read',
    date: 'Autumn Equinox Archive',
    category: 'Phytochemistry',
    excerpt: 'For over three millennia, practitioners of classical Ayurveda observed that certain roots imparted a resilient balance rather than mere sedation or stimulation. Today, high-resolution chromatography reveals how Withanolides cross biological membranes to modulate corticosteroid receptors with surgical elegance.',
    content: `
### The Evolutionary Logic of Botanical Defense
Plants synthesize secondary metabolites not for our pleasure, but as precision defense mechanisms against desiccation, ultraviolet radiation, and herbivory. In the arid soils of central India, *Withania somnifera* develops complex steroidal lactones known as Withanolides.

### Receptor Kinetics and Salivary Cortisol
When ingested consistently across a six-week window, standardized withanolides exhibit a remarkable biphasic modulation:
- **During acute stress**: down-regulating excess corticotropin-releasing hormone (CRH) transcription in the paraventricular nucleus.
- **During chronic exhaustion**: sensitizing adrenal cortex feedback loops, preventing the adrenal collapse characteristic of clinical burnout.

### The Sacred Carrier: Why Vehicle Dictates Efficacy
Ancient texts never prescribed Ashwagandha in isolation; it was invariably compounded with raw milk, clarified ghee, or organic honey. Modern pharmacokinetic studies reveal that withanolide aglycones possess high lipophilicity: when co-administered with natural lipid carriers, intestinal micellar uptake increases by an astounding 310%.
    `
  },
  {
    id: 'art-2',
    title: 'Rasa, Virya, Vipaka: The Tripartite Energetic Doctrine of Ancient Pharmacopeias',
    subtitle: 'How traditional sensory diagnostics prefigured contemporary metabolic pharmacology.',
    author: 'Acharya Raghavendra Shastri & Maya Lin',
    readTime: '9 min read',
    date: 'Monsoon Volume',
    category: 'Philosophy & Science',
    excerpt: 'Before mass spectrometry, ancient healers classified the botanical universe by tongue, digestive warmth, and post-metabolic tissue transformation. This philosophical triad reveals an astonishing empirical accuracy that modern pharmacology is only now beginning to appreciate.',
    content: `
### Taste as Direct Chemical Telemetry (Rasa)
In the Charaka Samhita, taste is not an aesthetic afterthought; it is instant chemical information. Bitter (*Tikta*) indicates alkaloids and iridoid glycosides that stimulate gastric bitter receptors (TAS2Rs) to trigger bile secretion and hepatic detoxification.

### The Potency Field (Virya)
Virya designates whether an ingredient exerts a thermo-expansive (*Ushna*) or thermo-contractive (*Sheeta*) effect on vascular tone and mitochondrial metabolism. 

### The Deep Transformation (Vipaka)
Vipaka measures how an herb alters foundational tissues long after digestive acids have done their work. Sweet Vipaka (*Madhura*) promotes cellular mitosis, tissue repair, and hormonal anabolism, while Pungent Vipaka (*Katu*) scrapes away accumulated lipophilic wastes (*Ama*).
    `
  },
  {
    id: 'art-3',
    title: 'The Lost Wildcrafting Protocols of the Western Ghats',
    subtitle: 'Sustainable regenerative harvesting, lunar alignment, and ecological preservation.',
    author: 'Nilgiri Ethnobotany Collective',
    readTime: '6 min read',
    date: 'Solstice Series',
    category: 'Ecology & Ethnobotany',
    excerpt: 'True botanical medicine begins long before extraction—it begins in the living soil, the angle of the sun, and the respectful relationship between the harvester and the plant community.',
    content: `
### The Rule of Thirds
Traditional indigenous gatherers in the Nilgiri Biosphere adhere to an uncompromising tenet:
1. One-third of the plant stand is left untouched for avian and mammalian pollinators.
2. One-third is left to drop seed and perpetuate the genetic lineage.
3. Only the remaining third is harvested for medicinal decoctions.

### Chronobiology of Harvesting
Root medicines are extracted exclusively during the waning moon and post-monsoon dormancy, when the plant draws its secondary metabolites down from the foliage into the subterranean rhizome network.
    `
  }
];
