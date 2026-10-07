(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`ashwagandha`,name:`Ashwagandha`,binomial:`Withania somnifera`,sanskrit:`Aśvagandhā (अश्वगंधा)`,family:`Solanaceae`,part:`Root`,category:`Adaptogen`,heroImage:`/images/roots.jpg`,dosha:{primary:`Vata-Kapha Pacifying`,vata:-2,pitta:1,kapha:-1},energetics:{rasa:[`Tikta (Bitter)`,`Kashaya (Astringent)`,`Madhura (Sweet)`],virya:`Ushna (Warming)`,vipaka:`Madhura (Sweet / Nourishing)`,guna:[`Guru (Heavy)`,`Snigdha (Unctuous)`]},phytochemicals:[{name:`Withanolides A & D`,value:92,role:`HPA-axis modulation & cortisol reduction`},{name:`Withaferin A`,value:78,role:`Cellular protection & oxidative resilience`},{name:`Sitoindosides VII-VIII`,value:84,role:`Endogenous antioxidant enzyme synthesis`}],synergies:[`tulsi`,`cardamom`,`brahmi`],harvestSeason:`Autumn / Post-Monsoon`,harvestWindow:`October – December`,sourcingRegion:`Mandasor Terraced Soils, Madhya Pradesh`,sustainability:96,bioavailabilityRating:88,potencyIndex:94,description:`Renowned for five millennia as the premier royal root of Ayurvedic Rasayana. Named for imparting the vitality and rooted endurance of the stallion, it recalibrates the endocrine system under sustained psychological and physiological pressure.`,traditionalUses:[`Rasayana (Deep cellular longevity and tissue nourishment)`,`Nidra-janana (Induction of restorative, stage-four sleep)`,`Balya (Tonification of muscular fibers and nervous marrow)`],modernEvidence:`Systematic meta-analyses confirm statistically significant reductions in serum salivary cortisol (-27.9%) alongside enhanced VO2 max and parasympathetic vagal recovery.`,contraindications:`Use with mindful moderation in active hyperthyroidism or severe inflammatory Pitta flare-ups unless balanced with cooling Shatavari.`,preparationRitual:`Simmer 3 grams of micronized sun-dried root in warm golden oat milk or spring water with two crushed cardamom pods and raw forest honey.`},{id:`tulsi`,name:`Holy Basil (Tulsi)`,binomial:`Ocimum sanctum`,sanskrit:`Tulasī (तुलसी)`,family:`Lamiaceae`,part:`Leaf & Flowering Tops`,category:`Adaptogen`,heroImage:`/images/hero.jpg`,dosha:{primary:`Tridoshic (Vata & Kapha Pacifying)`,vata:-2,pitta:0,kapha:-2},energetics:{rasa:[`Katu (Pungent)`,`Tikta (Bitter)`],virya:`Ushna (Mildly Warming)`,vipaka:`Katu (Pungent / Clarifying)`,guna:[`Laghu (Light)`,`Ruksha (Dry)`]},phytochemicals:[{name:`Eugenol`,value:95,role:`COX-2 enzyme down-regulation & respiratory clarity`},{name:`Rosmarinic Acid`,value:88,role:`Polyphenolic free-radical scavenger`},{name:`Ursolic Acid`,value:81,role:`Dermal elasticity preservation & cellular repair`}],synergies:[`ashwagandha`,`rosemary`,`cardamom`],harvestSeason:`Monsoon / Late Summer`,harvestWindow:`August – October`,sourcingRegion:`Sacred Foothills of Vrindavan & Uttarakhand`,sustainability:98,bioavailabilityRating:92,potencyIndex:91,description:`Revered across the Indian subcontinent as the "Incomparable One", Tulsi is an aromatic sattvic panacea. It purifies the subtle vital air (Prana), dispels environmental stagnation, and balances the neuroendocrine response to mental fatigue.`,traditionalUses:[`Pranavaha Srotas (Protection of the entire respiratory tree)`,`Medhya Sattvika (Clarification of mental fog and anxiety)`,`Dipana-Pachana (Kindling metabolic fire without irritating Pitta)`],modernEvidence:`Clinical trials demonstrate enhanced immune lymphocyte counts (NK cell activity) and attenuation of metabolic stress markers in human cohorts.`,contraindications:`Generally considered exceptionally safe; may mildly potentiate antiplatelet therapies when taken in massive extract quantities.`,preparationRitual:`Steep whole dried purple Krishna Tulsi leaves in 90°C spring water covered for seven minutes to capture the fugitive volatile terpenes.`},{id:`brahmi`,name:`Brahmi / Gotu Kola`,binomial:`Bacopa monnieri / Centella asiatica`,sanskrit:`Brāhmī (ब्राह्मी)`,family:`Plantaginaceae`,part:`Whole Aerial Herb`,category:`Nervine`,heroImage:`/images/garden.jpg`,dosha:{primary:`Pitta-Kapha Pacifying`,vata:-1,pitta:-2,kapha:-1},energetics:{rasa:[`Tikta (Bitter)`,`Kashaya (Astringent)`,`Madhura (Sweet)`],virya:`Sheeta (Cooling)`,vipaka:`Madhura (Nourishing)`,guna:[`Laghu (Light)`,`Sara (Flowing)`]},phytochemicals:[{name:`Bacosides A & B`,value:94,role:`Synaptic plasticity & cholinergic transmission`},{name:`Asiaticoside`,value:86,role:`Microcirculatory repair & collagen synthesis`},{name:`Madecassoside`,value:79,role:`Neuroprotection against beta-amyloid oxidation`}],synergies:[`shatavari`,`ashwagandha`,`shankhpushpi`],harvestSeason:`Spring / Early Summer`,harvestWindow:`March – May`,sourcingRegion:`Wetland Preserves of Kerala & Godavari Delta`,sustainability:92,bioavailabilityRating:84,potencyIndex:96,description:`Named in honor of Brahma, the divine architect of supreme consciousness. Brahmi is the gold standard of herbal neuro-tonics, prized for sharpening cognitive retention while cooling an overheated nervous system.`,traditionalUses:[`Medhya Rasayana (Supreme intellect and memory rejuvenator)`,`Shiro-Roga (Dispelling cranial tension and mental overheating)`,`Kushtha-ghna (Purification of the lymph and skin microvessels)`],modernEvidence:`Repeated double-blind trials demonstrate significant improvements in visual information processing speed, rate of learning, and consolidation of memory.`,contraindications:`May cause mild gastrointestinal cooling in extremely weak digestive fires if taken on an empty stomach without ginger or ghee.`,preparationRitual:`Macerate fresh or dried leaves into warm grass-fed ghee (Brahmi Ghrita) or blend with room-temperature pure mountain spring water.`},{id:`shatavari`,name:`Shatavari`,binomial:`Asparagus racemosus`,sanskrit:`Śatāvarī (शतावरी)`,family:`Asparagaceae`,part:`Tuberous Roots`,category:`Rasayana`,heroImage:`/images/roots.jpg`,dosha:{primary:`Pitta-Vata Pacifying`,vata:-2,pitta:-2,kapha:1},energetics:{rasa:[`Madhura (Sweet)`,`Tikta (Bitter)`],virya:`Sheeta (Cooling)`,vipaka:`Madhura (Sweet / Restorative)`,guna:[`Guru (Heavy)`,`Snigdha (Unctuous)`]},phytochemicals:[{name:`Shatavarins I-IV`,value:90,role:`Phytoestrogenic modulation & endocrine resilience`},{name:`Sarsasapogenin`,value:82,role:`Mucosal lining cellular replenishment`},{name:`Asparagamine A`,value:74,role:`Bio-immunomodulatory alkaloid`}],synergies:[`brahmi`,`ashwagandha`,`cardamom`],harvestSeason:`Winter`,harvestWindow:`November – January`,sourcingRegion:`Wild Sandstone Slopes, Western Ghats`,sustainability:95,bioavailabilityRating:86,potencyIndex:93,description:`Translating literally to "She who possesses one hundred companions", Shatavari is the supreme cooling nourishing tonic. It replenishes foundational Ojas (vital nectar), moistens dried mucosal tissues, and supports hormonal equilibrium.`,traditionalUses:[`Ojas-vardhaka (Replenishment of deep constitutional immunity)`,`Stanya-janana (Harmonization of the female reproductive rhythm)`,`Pittahara (Extinguishing internal systemic heat and dryness)`],modernEvidence:`Supports hypothalamic-pituitary-adrenal axis homeostasis, stimulates natural macrophage phagocytosis, and safeguards gastric epithelial cells.`,contraindications:`Avoid in excess in states of profound Kapha accumulation or sluggish water retention.`,preparationRitual:`Decocted root powder infused slowly in organic whole milk with saffron strands and a dash of ground green cardamom.`},{id:`amla`,name:`Amalaki (Amla)`,binomial:`Phyllanthus emblica`,sanskrit:`Āmalakī (आमलकी)`,family:`Phyllanthaceae`,part:`Fresh & Dried Wild Fruit`,category:`Rasayana`,heroImage:`/images/mortar.jpg`,dosha:{primary:`Tridoshic (Pacifies all three doshas)`,vata:-1,pitta:-2,kapha:-1},energetics:{rasa:[`Madhura`,`Amla (Sour)`,`Katu`,`Tikta`,`Kashaya (Five Rastes)`],virya:`Sheeta (Cooling)`,vipaka:`Madhura (Sweet / Mild)`,guna:[`Laghu (Light)`,`Ruksha (Dry)`]},phytochemicals:[{name:`Emblicanin A & B`,value:98,role:`Thermostable bio-complexed ascorbic cascade`},{name:`Punigluconin`,value:89,role:`Superoxide dismutase cellular activator`},{name:`Pedunculagin`,value:85,role:`Dermal photoprotective tannin structure`}],synergies:[`haritaki`,`moringa`,`guduchi`],harvestSeason:`Winter / Mid-Season`,harvestWindow:`December – February`,sourcingRegion:`Sal Forest Canopy, Central Deciduous Belt`,sustainability:99,bioavailabilityRating:95,potencyIndex:98,description:`Known as the "Mother" and primary constituent of the famed Chyawanprash formulation. Unique in containing five of the six fundamental tastes, Amla is among the universe’s richest natural reservoirs of heat-stable vitamin C and ellagitannins.`,traditionalUses:[`Vayasthapana (Arresting premature cellular degeneration)`,`Chakshushya (Preserving ocular clarity and microcirculation)`,`Keshya (Nourishing hair follicles from within the liver axis)`],modernEvidence:`Clinical studies document powerful endothelial protection, reduction in oxidized LDL fractions, and stimulation of pro-collagen type I synthesis.`,contraindications:`Extremely well-tolerated by virtually all constitutions; slight astringency may require honey in high-Vata dryness.`,preparationRitual:`Raw cold-pressed wild fruit juice taken at dawn with pure raw honey, or sun-dried powder mixed into warm mountain spring water.`},{id:`guduchi`,name:`Guduchi (Giloy)`,binomial:`Tinospora cordifolia`,sanskrit:`Guḍūcī (गडूची) / Amṛtā`,family:`Menispermaceae`,part:`Climbing Stems`,category:`Cellular Defence`,heroImage:`/images/roots.jpg`,dosha:{primary:`Tridoshic (Supreme balancing)`,vata:-1,pitta:-2,kapha:-2},energetics:{rasa:[`Tikta (Bitter)`,`Kashaya (Astringent)`],virya:`Ushna (Subtly Warming)`,vipaka:`Madhura (Sweet / Restorative)`,guna:[`Laghu (Light)`,`Snigdha (Gentle unctuous)`]},phytochemicals:[{name:`Tinosporaside & Cordifolioside`,value:92,role:`Macrophage phagocytic activation`},{name:`Berberine traces`,value:76,role:`Gut microbiome eubiosis maintenance`},{name:`Magnoflorine`,value:83,role:`Hepatic phase II enzyme induction`}],synergies:[`amla`,`tulsi`,`calendula`],harvestSeason:`Summer`,harvestWindow:`May – July`,sourcingRegion:`Wild Neem-tree climbers of Vindhyachal`,sustainability:94,bioavailabilityRating:89,potencyIndex:95,description:`Affectionately called "Amrita" (the Nectar of Immortality). When harvested growing up the trunk of bitter Neem trees, Guduchi absorbs enhanced purifying properties, eliminating deep tissue toxins (Ama) without exhausting natural vitality.`,traditionalUses:[`Amadosha-hara (Systemic elimination of metabolic impurities)`,`Jvara-hara (Calming deep chronic inflammatory flare-ups)`,`Yakrit-pleeha (Purifying hepatic and splenic filtering mechanisms)`],modernEvidence:`Documented immunomodulatory action showing upregulation of IL-1beta and TNF-alpha clearance, alongside liver protective biomarkers.`,contraindications:`Monitor blood glucose in diabetic protocols as it naturally improves insulin sensitivity.`,preparationRitual:`Traditional Kashayam: simmer 5 grams of coarsely bruised stem in two cups of water until reduced to half a cup; consume warm.`},{id:`calendula`,name:`Calendula`,binomial:`Calendula officinalis`,sanskrit:`Zergul (ज़रगुल)`,family:`Asteraceae`,part:`Sun-dried Ray Florets`,category:`Rasayana`,heroImage:`/images/mortar.jpg`,dosha:{primary:`Pitta-Kapha Pacifying`,vata:0,pitta:-2,kapha:-1},energetics:{rasa:[`Tikta (Bitter)`,`Kashaya (Astringent)`],virya:`Sheeta (Cooling)`,vipaka:`Katu (Pungent)`,guna:[`Laghu (Light)`,`Ruksha (Dry)`]},phytochemicals:[{name:`Faradiol Esters`,value:91,role:`Topical and internal mucosal anti-inflammatory`},{name:`Lutein & Zeaxanthin`,value:89,role:`Carotenoid dermal photoprotection`},{name:`Calendulosides`,value:83,role:`Wound granulation & tissue regeneration`}],synergies:[`vetiver`,`amla`,`rosemary`],harvestSeason:`Mid-Summer`,harvestWindow:`June – August`,sourcingRegion:`Alpine Foothills, Himachal Terraces`,sustainability:97,bioavailabilityRating:90,potencyIndex:88,description:`Golden sun-colored petals long treasured in Mediterranean and Himalayan apothecaries as the sovereign vulnerary. Calms reactive skin, heals mucosal irritation, and soothes sluggish lymphatic drainage.`,traditionalUses:[`Vranaropana (Accelerating dermal wound and scar recovery)`,`Raktashodhaka (Clearing heat patterns from the capillary bed)`,`Strotas-shodhana (Gentle stimulation of lymphatic cleansing)`],modernEvidence:`Shown in dermatological studies to stimulate fibroblast migration, increase tissue hydroxyproline content, and modulate cutaneous inflammatory cascades.`,contraindications:`Use caution in rare individuals with known allergies to the Asteraceae (daisy) botanical family.`,preparationRitual:`Slow 21-day solar maceration in cold-pressed organic jojoba or sweet almond oil, or steeped as a luminous floral infusion.`},{id:`rosemary`,name:`Rosemary`,binomial:`Salvia rosmarinus`,sanskrit:`Rusmari (रुसमरी)`,family:`Lamiaceae`,part:`Needle Leaves`,category:`Nervine`,heroImage:`/images/garden.jpg`,dosha:{primary:`Vata-Kapha Pacifying`,vata:-1,pitta:1,kapha:-2},energetics:{rasa:[`Tikta (Bitter)`,`Katu (Pungent)`,`Kashaya (Astringent)`],virya:`Ushna (Warming)`,vipaka:`Katu (Pungent)`,guna:[`Laghu (Light)`,`Tikshna (Penetrating)`,`Ruksha (Dry)`]},phytochemicals:[{name:`Carnosic Acid`,value:94,role:`Lipid-peroxidation inhibitor & neuroprotective`},{name:`1,8-Cineole (Eucalyptol)`,value:88,role:`Acetylcholinesterase inhibition & alertness`},{name:`Rosmarinic Acid`,value:91,role:`Capillary circulation enhancer`}],synergies:[`tulsi`,`brahmi`,`cardamom`],harvestSeason:`Spring & Summer`,harvestWindow:`May – July`,sourcingRegion:`Limestone Coastal Terraces, Mediterranean & Nilgiris`,sustainability:96,bioavailabilityRating:88,potencyIndex:90,description:`The ancient emblem of remembrance and clear cognition. Rosemary invigorates peripheral microcirculation, awakens sluggish cerebral faculties, and delivers one of the botanical world’s most potent lipid-soluble antioxidants.`,traditionalUses:[`Smriti-vardhaka (Awakening mnemonic recall and sensory acuity)`,`Raktavaha-shodhana (Stimulating oxygen delivery to cerebral vessels)`,`Keshya-vardhana (Invigorating follicular microcirculation)`],modernEvidence:`Inhalation and consumption of cineole-standardized rosemary directly enhances cognitive speed and accuracy via mild acetylcholinesterase inhibition.`,contraindications:`High-potency essential oil extracts contraindicated in epilepsy or severe unmanaged hypertension.`,preparationRitual:`Fresh aerial needle tips lightly bruised and steam-distilled for aromatic hydrosol, or infused in organic olive oil.`},{id:`vetiver`,name:`Vetiver (Khus)`,binomial:`Chrysopogon zizanioides`,sanskrit:`Uśīra (उशीर)`,family:`Poaceae`,part:`Fibrous Roots`,category:`Cellular Defence`,heroImage:`/images/roots.jpg`,dosha:{primary:`Pitta-Vata Pacifying`,vata:-2,pitta:-3,kapha:0},energetics:{rasa:[`Tikta (Bitter)`,`Madhura (Sweet)`],virya:`Sheeta (Supremely Cooling)`,vipaka:`Madhura (Sweet)`,guna:[`Laghu (Light)`,`Snigdha (Unctuous)`]},phytochemicals:[{name:`Khusimol`,value:93,role:`GABA-ergic neuro-calming sesquiterpene`},{name:`Vetivone (Alpha & Beta)`,value:87,role:`Core autonomic nervous stabilization`},{name:`Isovalencenol`,value:80,role:`Anti-stress hypothalamic dampener`}],synergies:[`shatavari`,`calendula`,`cardamom`],harvestSeason:`Winter`,harvestWindow:`December – March`,sourcingRegion:`Deep Alluvial Soils, Uttar Pradesh & Karnataka`,sustainability:98,bioavailabilityRating:86,potencyIndex:92,description:`Treasured as "the root that cools the soul". Dug from ten feet deep within alluvial soils, Vetiver roots exude an intensely earthy, smoky, sweet scent that instantly grounds agitated Vata and quenches scorching Pitta heat.`,traditionalUses:[`Daha-prashamana (Extinguishing internal burning sensations)`,`Manas-shantikar (Deep grounding of panic, delirium, and insomnia)`,`Sweda-durgandhahara (Deodorizing and purifying sweat glands)`],modernEvidence:`EEG studies confirm notable increases in alpha brainwave activity following vetiver olfactory exposure, indicating deep relaxed alertness.`,contraindications:`Avoid in states of extreme Kapha congestion, cold lethargy, or heavy mucous accumulation.`,preparationRitual:`Bundle cleaned roots in clay earthenware jars of mountain spring water overnight to create cooling "Khus Jala" elixir.`},{id:`cardamom`,name:`True Cardamom`,binomial:`Elettaria cardamomum`,sanskrit:`Elā (एला)`,family:`Zingiberaceae`,part:`Green Seed Pods`,category:`Digestif`,heroImage:`/images/mortar.jpg`,dosha:{primary:`Tridoshic (Supreme Sattvic Spice)`,vata:-2,pitta:0,kapha:-2},energetics:{rasa:[`Madhura (Sweet)`,`Katu (Pungent)`],virya:`Sheeta (Cooling post-metabolic)`,vipaka:`Madhura (Nourishing Sweet)`,guna:[`Laghu (Light)`,`Ruksha (Dry)`,`Sukshma (Subtle)`]},phytochemicals:[{name:`Terpinyl Acetate`,value:92,role:`Smooth muscle antispasmodic & carminative`},{name:`1,8-Cineole`,value:85,role:`Respiratory bronchial opening`},{name:`Limonene`,value:78,role:`Gastric acid modulation without hyperacidity`}],synergies:[`ashwagandha`,`tulsi`,`shatavari`],harvestSeason:`Autumn / Post-Monsoon`,harvestWindow:`September – November`,sourcingRegion:`Cardamom Hills of Idukki, High Western Ghats`,sustainability:95,bioavailabilityRating:94,potencyIndex:89,description:`The Queen of Spices. Unlike fiery chilies or ginger, Cardamom warms the digestive core (Agni) without provoking fiery Pitta. Acts as a gentle harmonizer in complex botanical decoctions, eliminating harshness.`,traditionalUses:[`Dipana-Anulomana (Kindling digestion and releasing trapped gas)`,`Mukhakanti (Freshening breath and sweetening speech)`,`Chardi-nigrahana (Relieving subtle nausea and motion sickness)`],modernEvidence:`Demonstrated to prevent gastric mucosal lesions, accelerate digestive transit time, and enhance gastrointestinal bioavailability of companion herbs.`,contraindications:`Extremely safe; avoid consuming whole hard seeds unchewed in active diverticulitis.`,preparationRitual:`Lightly crush whole green pods with a mortar pestle immediately before infusing to safeguard the delicate volatile oils.`},{id:`moringa`,name:`Moringa`,binomial:`Moringa oleifera`,sanskrit:`Śigru (शिग्रु)`,family:`Moringaceae`,part:`Shade-dried Leaves`,category:`Cellular Defence`,heroImage:`/images/hero.jpg`,dosha:{primary:`Kapha-Vata Pacifying`,vata:-1,pitta:1,kapha:-2},energetics:{rasa:[`Katu (Pungent)`,`Tikta (Bitter)`],virya:`Ushna (Warming)`,vipaka:`Katu (Pungent)`,guna:[`Laghu (Light)`,`Ruksha (Dry)`,`Tikshna (Sharp)`]},phytochemicals:[{name:`Quercetin-3-glucoside`,value:96,role:`Flavonoid vascular protection`},{name:`Chlorogenic Acid`,value:90,role:`Glucose metabolic stabilization`},{name:`Isothiocyanates (Moringin)`,value:88,role:`Nrf2 cellular pathway upregulation`}],synergies:[`amla`,`guduchi`,`rosemary`],harvestSeason:`Spring & Summer`,harvestWindow:`February – May`,sourcingRegion:`Sub-arid Deccan Organic Commons, Tamil Nadu`,sustainability:99,bioavailabilityRating:91,potencyIndex:94,description:`Known historically as the "Tree of Life". Packed with 46 distinct antioxidants, 36 anti-inflammatories, and every essential amino acid, Moringa delivers bioavailable micro-nutrients that awaken sluggish metabolic tissue.`,traditionalUses:[`Medohara (Clearing accumulated adipose and Kapha stagnation)`,`Shothahara (Alleviating systemic fluid retention and joint stiffness)`,`Krimighna (Purifying the intestinal tract of microbial burden)`],modernEvidence:`Demonstrates notable lipid-lowering activity, preservation of beta-cell pancreatic function, and marked reduction in markers of systemic inflammation.`,contraindications:`High doses during early pregnancy should be avoided due to traditional uterine stimulatory cautions.`,preparationRitual:`Gentle shade-dried leaf powder stirred into room-temperature water or blended into fresh morning botanical tonics.`},{id:`frankincense`,name:`Indian Frankincense`,binomial:`Boswellia serrata`,sanskrit:`Śallakī (शल्लकी)`,family:`Burseraceae`,part:`Golden Oleo-gum Resin`,category:`Cellular Defence`,heroImage:`/images/mortar.jpg`,dosha:{primary:`Kapha-Pitta Pacifying`,vata:-1,pitta:-2,kapha:-2},energetics:{rasa:[`Tikta (Bitter)`,`Kashaya (Astringent)`,`Madhura (Sweet)`],virya:`Sheeta (Cooling post-digestion)`,vipaka:`Katu (Pungent)`,guna:[`Laghu (Light)`,`Ruksha (Dry)`]},phytochemicals:[{name:`AKBA (Acetyl-11-keto-beta-boswellic acid)`,value:97,role:`Specific 5-LOX enzyme inhibition`},{name:`Beta-Boswellic Acid`,value:89,role:`Chondrocyte preservation & cartilage integrity`},{name:`Incensole Acetate`,value:84,role:`TRPV3 ion channel activation for calm mood`}],synergies:[`ashwagandha`,`vetiver`,`cardamom`],harvestSeason:`Spring`,harvestWindow:`March – May`,sourcingRegion:`Rocky Dry Forests of Satpura Range`,sustainability:91,bioavailabilityRating:87,potencyIndex:97,description:`The golden resin wept from wounded sacred Boswellia trees. Possessing the unique ability to inhibit 5-lipoxygenase (5-LOX) without irritating the gastric mucosal lining, it provides unparalleled structural and connective tissue relief.`,traditionalUses:[`Sandhivata-hara (Restoring ease and lubrication to inflamed joints)`,`Purisha-grahi (Soothing irritated intestinal epithelial lining)`,`Medhya-dhyana (Inducing deep meditative stillness via resin incense)`],modernEvidence:`Multiple randomized controlled trials show significant improvement in joint mobility scores and radiographic joint space preservation.`,contraindications:`Take with lipophilic carriers (ghee, olive oil) for optimal intestinal absorption.`,preparationRitual:`Purified gum resin extract compounded with cold-pressed sesame oil or dissolved into botanical balms.`}],t=[{id:`spring-infusion`,name:`Spring Mountain Infusion`,type:`Water Base`,absorption:`Rapid (10-15 mins)`,description:`Pure high-altitude spring water. Ideal for extracting delicate water-soluble flavonoids, polyphenols, and essential aromatics.`,temp:`Cooling / Neutral`,bestFor:`Delicate leaves, flowers, and daily refreshing tonics`},{id:`hydro-ethanolic`,name:`Artisan Hydro-Ethanolic Tincture`,type:`Alcohol Extract (45% ABV)`,absorption:`Immediate Sublingual (2-5 mins)`,description:`Organic grain spirit and distilled spring water. Extracts both polar and non-polar phytomolecules; shelf-stable for years.`,temp:`Mildly Warming`,bestFor:`Dense medicinal roots, barks, and acute therapeutic dosing`},{id:`raw-decoction`,name:`Kashayam (Simmered Decoction)`,type:`Concentrated Water Extract`,absorption:`Moderate (20-30 mins)`,description:`Traditional slow reduction by simmering raw botanicals down to 1/4th volume. Maximizes bitter and astringent active markers.`,temp:`Neutral to Warming`,bestFor:`Heavy woody roots, seeds, and deep tissue Rasayana`},{id:`sesame-elixir`,name:`Cold-Pressed Golden Sesame Oil`,type:`Lipid Base (Taila)`,absorption:`Deep Systemic Tissue Penetration`,description:`Unrefined, cold-pressed black sesame oil. Renowned in Ayurvedic pharmacopeia as the supreme penetrating lipophilic vehicle.`,temp:`Warming`,bestFor:`Nervous system grounding, joint tonics, and topical abhyanga`},{id:`grassfed-ghrita`,name:`Clarified Herbal Ghee (Ghrita)`,type:`Sattvic Lipid Matrix`,absorption:`Cellular Crossing (Passes Blood-Brain Barrier)`,description:`Cultured grass-fed A2 clarified butter. Transports active botanical alkaloids directly into the deepest marrow and nervous tissues.`,temp:`Cooling`,bestFor:`Medhya nootropics, brain tonics, and deep endocrine restoration`}],n=[{pair:[`ashwagandha`,`cardamom`],score:96,bonus:`+18% Bioavailability`,rationale:`Cardamoms carminative cineole accelerates gastric emptying, delivering withanolides swiftly without Vata stagnation.`},{pair:[`ashwagandha`,`tulsi`],score:98,bonus:`+24% Stress Resilience`,rationale:`Dual HPA-axis modulation: Ashwagandha calms cortisol while Tulsi clears mental fog and optimizes neuro-immune signaling.`},{pair:[`brahmi`,`shatavari`],score:94,bonus:`+20% Synaptic Rejuvenation`,rationale:`Shatavaris cooling unctuous moisture protects against Brahmi’s drying lightness, creating an enduring nervous tonic.`},{pair:[`amla`,`guduchi`],score:97,bonus:`+26% Cellular Phagocytosis`,rationale:`Emblicanins combined with tinosporasides ignite endogenous glutathione synthesis and mucosal defense.`},{pair:[`rosemary`,`tulsi`],score:92,bonus:`+16% Cerebral Oxygenation`,rationale:`Complementary rosmarinic acid pathways promote microcirculatory arterial vasodilation.`},{pair:[`vetiver`,`shatavari`],score:95,bonus:`+22% Deep Somatic Cooling`,rationale:`Supreme pacification of internal Pitta heat, hot flashes, and nocturnal agitation.`}],r=[{id:`art-1`,title:`The Architecture of Adaptogens: Decoding the Molecular Symphony of Withania somnifera`,subtitle:`A phytochemical analysis of steroidal lactones and their receptor kinetics within the human neuroendocrine axis.`,author:`Dr. Evelyn Varma, PhD (Ethnobotanical Pharmacognosy)`,readTime:`7 min read`,date:`Autumn Equinox Archive`,category:`Phytochemistry`,excerpt:`For over three millennia, practitioners of classical Ayurveda observed that certain roots imparted a resilient balance rather than mere sedation or stimulation. Today, high-resolution chromatography reveals how Withanolides cross biological membranes to modulate corticosteroid receptors with surgical elegance.`,content:`
### The Evolutionary Logic of Botanical Defense
Plants synthesize secondary metabolites not for our pleasure, but as precision defense mechanisms against desiccation, ultraviolet radiation, and herbivory. In the arid soils of central India, *Withania somnifera* develops complex steroidal lactones known as Withanolides.

### Receptor Kinetics and Salivary Cortisol
When ingested consistently across a six-week window, standardized withanolides exhibit a remarkable biphasic modulation:
- **During acute stress**: down-regulating excess corticotropin-releasing hormone (CRH) transcription in the paraventricular nucleus.
- **During chronic exhaustion**: sensitizing adrenal cortex feedback loops, preventing the adrenal collapse characteristic of clinical burnout.

### The Sacred Carrier: Why Vehicle Dictates Efficacy
Ancient texts never prescribed Ashwagandha in isolation; it was invariably compounded with raw milk, clarified ghee, or organic honey. Modern pharmacokinetic studies reveal that withanolide aglycones possess high lipophilicity: when co-administered with natural lipid carriers, intestinal micellar uptake increases by an astounding 310%.
    `},{id:`art-2`,title:`Rasa, Virya, Vipaka: The Tripartite Energetic Doctrine of Ancient Pharmacopeias`,subtitle:`How traditional sensory diagnostics prefigured contemporary metabolic pharmacology.`,author:`Acharya Raghavendra Shastri & Maya Lin`,readTime:`9 min read`,date:`Monsoon Volume`,category:`Philosophy & Science`,excerpt:`Before mass spectrometry, ancient healers classified the botanical universe by tongue, digestive warmth, and post-metabolic tissue transformation. This philosophical triad reveals an astonishing empirical accuracy that modern pharmacology is only now beginning to appreciate.`,content:`
### Taste as Direct Chemical Telemetry (Rasa)
In the Charaka Samhita, taste is not an aesthetic afterthought; it is instant chemical information. Bitter (*Tikta*) indicates alkaloids and iridoid glycosides that stimulate gastric bitter receptors (TAS2Rs) to trigger bile secretion and hepatic detoxification.

### The Potency Field (Virya)
Virya designates whether an ingredient exerts a thermo-expansive (*Ushna*) or thermo-contractive (*Sheeta*) effect on vascular tone and mitochondrial metabolism. 

### The Deep Transformation (Vipaka)
Vipaka measures how an herb alters foundational tissues long after digestive acids have done their work. Sweet Vipaka (*Madhura*) promotes cellular mitosis, tissue repair, and hormonal anabolism, while Pungent Vipaka (*Katu*) scrapes away accumulated lipophilic wastes (*Ama*).
    `},{id:`art-3`,title:`The Lost Wildcrafting Protocols of the Western Ghats`,subtitle:`Sustainable regenerative harvesting, lunar alignment, and ecological preservation.`,author:`Nilgiri Ethnobotany Collective`,readTime:`6 min read`,date:`Solstice Series`,category:`Ecology & Ethnobotany`,excerpt:`True botanical medicine begins long before extraction—it begins in the living soil, the angle of the sun, and the respectful relationship between the harvester and the plant community.`,content:`
### The Rule of Thirds
Traditional indigenous gatherers in the Nilgiri Biosphere adhere to an uncompromising tenet:
1. One-third of the plant stand is left untouched for avian and mammalian pollinators.
2. One-third is left to drop seed and perpetuate the genetic lineage.
3. Only the remaining third is harvested for medicinal decoctions.

### Chronobiology of Harvesting
Root medicines are extracted exclusively during the waning moon and post-monsoon dormancy, when the plant draws its secondary metabolites down from the foliage into the subterranean rhizome network.
    `}];function i({onOpenMonograph:t,onSelectHerbForLab:n}){let r=document.getElementById(`herbariumContent`),i=document.getElementById(`herbSearchInput`),a=document.getElementById(`categoryFilters`),o=document.getElementById(`doshaFilters`),s=document.getElementById(`viewGridBtn`),c=document.getElementById(`viewTableBtn`),l=document.getElementById(`herbResultsCount`),u=`all`,d=`all`,f=``,p=`grid`;function m(){return e.filter(e=>{let t=f.toLowerCase().trim(),n=!t||e.name.toLowerCase().includes(t)||e.binomial.toLowerCase().includes(t)||e.sanskrit.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)||e.phytochemicals.some(e=>e.name.toLowerCase().includes(t)),r=u===`all`||e.category.toLowerCase()===u.toLowerCase(),i=d===`all`||e.dosha.primary.toLowerCase().includes(d.toLowerCase());return n&&r&&i})}function h(){let e=m();if(l&&(l.textContent=`${e.length} botanical ${e.length===1?`specimen`:`specimens`} cataloged`),e.length===0){r.innerHTML=`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 2rem; background: var(--ivory-surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
          <div style="width: 48px; height: 48px; margin: 0 auto 1.2rem; border-radius: var(--radius-full); background: var(--accent-leaf-tint); display: flex; align-items: center; justify-content: center; color: var(--accent-moss);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--botanical-deep);">No Botanical Records Found</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); max-width: 420px; margin: 0 auto 1.5rem;">There are no botanical specimens matching your specific query or filter combination.</p>
          <button id="resetFiltersBtn" class="btn-botanical-secondary" style="font-size: 0.82rem;">Reset All Filters</button>
        </div>
      `,document.getElementById(`resetFiltersBtn`)?.addEventListener(`click`,g);return}p===`grid`?(r.className=`herbarium-grid`,r.innerHTML=e.map(e=>`
        <article class="herb-card" data-herb-id="${e.id}">
          <div class="herb-card-media">
            <img src="${e.heroImage}" alt="${e.name}" loading="lazy" />
            <div class="herb-card-badges">
              <span class="botanical-tag">${e.category}</span>
              <span class="dosha-tag">${e.part}</span>
            </div>
          </div>
          <div class="herb-card-body">
            <div class="herb-names-block">
              <h3 class="herb-card-title">${e.name}</h3>
              <div class="herb-card-latin">${e.binomial}</div>
              <div class="herb-card-sanskrit">${e.sanskrit}</div>
            </div>
            <p class="herb-card-desc">${e.description}</p>
            
            <div class="herb-card-phytometrics">
              <div class="phytomarker-bar-row">
                <span>Primary Marker: <strong>${e.phytochemicals[0]?.name.split(` `)[0]}</strong></span>
                <div class="bar-track">
                  <div class="bar-fill" style="width: ${e.phytochemicals[0]?.value}%;"></div>
                </div>
              </div>
              <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">
                <span>Constitution: ${e.dosha.primary}</span>
                <span>Potency: ${e.potencyIndex}/100</span>
              </div>
            </div>

            <div class="herb-card-footer">
              <span class="link-monograph">
                Consult Monograph
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              </span>
              <button class="btn-botanical-pill btn-quick-lab" data-herb-id="${e.id}" title="Select for Formulation Lab" style="padding:0.35rem 0.75rem; font-size:0.75rem;">
                + Formulate
              </button>
            </div>
          </div>
        </article>
      `).join(``)):(r.className=`archival-table-container`,r.innerHTML=`
        <table class="archival-table">
          <thead>
            <tr>
              <th>Specimen</th>
              <th>Binomial & Family</th>
              <th>Category</th>
              <th>Energetics (Virya)</th>
              <th>Dosha Alignment</th>
              <th>Primary Phytocompound</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(e=>`
              <tr data-herb-id="${e.id}" style="cursor:pointer;">
                <td>
                  <div class="herb-cell-title">${e.name}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${e.sanskrit}</div>
                </td>
                <td>
                  <div style="font-style:italic; font-size:0.86rem; color:var(--accent-olive);">${e.binomial}</div>
                  <div style="font-size:0.74rem; color:var(--text-muted);">${e.family}</div>
                </td>
                <td><span class="botanical-tag">${e.category}</span></td>
                <td>
                  <span style="font-weight:500; color:${e.energetics.virya.includes(`Cooling`)?`var(--accent-olive)`:`var(--accent-terracotta)`};">
                    ${e.energetics.virya}
                  </span>
                </td>
                <td><span class="dosha-tag">${e.dosha.primary}</span></td>
                <td>
                  <span style="font-size:0.84rem; font-weight:500; color:var(--botanical-deep);">${e.phytochemicals[0]?.name}</span>
                </td>
                <td style="text-align:right;" onclick="event.stopPropagation();">
                  <button class="btn-botanical-pill btn-quick-lab" data-herb-id="${e.id}" style="font-size:0.75rem;">
                    + Formulate
                  </button>
                </td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      `),r.querySelectorAll(`[data-herb-id]`).forEach(e=>{e.addEventListener(`click`,n=>{if(n.target.closest(`.btn-quick-lab`))return;let r=e.getAttribute(`data-herb-id`);r&&t&&t(r)})}),r.querySelectorAll(`.btn-quick-lab`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let r=e.getAttribute(`data-herb-id`);r&&n&&n(r)})})}function g(){u=`all`,d=`all`,f=``,i&&(i.value=``),a?.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`active`,e.dataset.cat===`all`)),o?.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`active`,e.dataset.dosha===`all`)),h()}i?.addEventListener(`input`,e=>{f=e.target.value,h()}),a?.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&(a.querySelectorAll(`button`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),u=t.dataset.cat||`all`,h())}),o?.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&(o.querySelectorAll(`button`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),d=t.dataset.dosha||`all`,h())}),s?.addEventListener(`click`,()=>{p=`grid`,s.classList.add(`active`),c?.classList.remove(`active`),h()}),c?.addEventListener(`click`,()=>{p=`table`,c.classList.add(`active`),s?.classList.remove(`active`),h()}),h()}function a({onSelectSynergyPair:t,onOpenMonograph:r}){let i=document.getElementById(`dashboardSynergyList`),a=document.getElementById(`dashboardHarvestTimeline`),o=document.getElementById(`dashboardExtractionChart`);i&&(i.innerHTML=n.map(t=>{let n=e.find(e=>e.id===t.pair[0]),r=e.find(e=>e.id===t.pair[1]);return!n||!r?``:`
        <div class="synergy-pair-item" data-pair-herbs="${t.pair.join(`,`)}">
          <div class="synergy-pair-head">
            <div class="pair-herbs">
              <span>${n.name}</span>
              <span style="color:var(--text-muted); font-size:0.9rem;">&times;</span>
              <span>${r.name}</span>
            </div>
            <span class="pair-bonus-badge">${t.bonus}</span>
          </div>
          <p class="pair-rationale">${t.rationale}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem; font-size:0.75rem; color:var(--text-muted);">
            <span>Synergy Index: <strong style="color:var(--accent-moss);">${t.score}/100</strong></span>
            <button class="btn-botanical-pill btn-test-synergy" data-herb1="${n.id}" data-herb2="${r.id}" style="font-size:0.72rem; padding:0.25rem 0.65rem;">
              Craft Pair in Lab &rarr;
            </button>
          </div>
        </div>
      `}).join(``),i.querySelectorAll(`.btn-test-synergy`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let r=e.dataset.herb1,i=e.dataset.herb2;t&&t([r,i])})})),a&&(a.innerHTML=[{name:`Spring (Vasant)`,window:`Feb – Apr`,status:`Germination & Flowering`,herbs:[`Brahmi / Gotu Kola`,`Moringa (Leaf)`,`Frankincense (Resin)`]},{name:`Summer (Grishma)`,window:`May – Jul`,status:`Active Sunlight Maturation`,herbs:[`Calendula (Ray Florets)`,`Rosemary (Needles)`,`Guduchi (Stems)`]},{name:`Monsoon / Autumn (Sharad)`,window:`Aug – Oct`,status:`Prime Harvest Window`,active:!0,herbs:[`Holy Basil (Tulsi)`,`Ashwagandha (Root)`,`Green Cardamom`]},{name:`Winter (Hemanta)`,window:`Nov – Jan`,status:`Subterranean Deep Potency`,herbs:[`Shatavari (Deep Tuber)`,`Vetiver (Khus Root)`,`Wild Amalaki`]}].map(e=>`
      <div class="season-block" style="${e.active?`border-color: var(--accent-olive); background-color: var(--ivory-surface); box-shadow: 0 2px 10px rgba(104,114,88,0.1);`:``}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <h4 class="season-title">${e.name}</h4>
          ${e.active?`<span class="botanical-tag" style="font-size:0.65rem; padding:0.15rem 0.45rem;">Current Peak</span>`:``}
        </div>
        <div class="season-window">${e.window} &bull; ${e.status}</div>
        <ul class="season-herbs-list">
          ${e.herbs.map(e=>`
            <li style="display:flex; align-items:center; gap:0.4rem;">
              <span style="display:inline-block; width:4px; height:4px; border-radius:50%; background-color:var(--accent-olive);"></span>
              <span>${e}</span>
            </li>
          `).join(``)}
        </ul>
      </div>
    `).join(``)),o&&(o.innerHTML=`
      <div style="display:flex; flex-direction:column; gap:1.2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem; color:var(--text-muted);">
          <span>Carrier Matrix Delivery Comparison</span>
          <span>Target: Neuroendocrine & Somatic Tissue</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:1.1rem; padding:1.2rem; background:var(--ivory-parchment); border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <!-- Metric 1 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Cultured Grass-Fed Ghrita (Clarified Lipid)</strong>
              <span style="font-weight:600; color:var(--accent-moss);">94% Absorption (Passes BBB)</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:94%; background-color:#59664D;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Highest crossing coefficient for neuro-active bacosides & withanolides</span>
          </div>

          <!-- Metric 2 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Hydro-Ethanolic Dual Extraction (45% ABV)</strong>
              <span style="font-weight:600; color:var(--accent-moss);">88% Sublingual Uptake</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:88%; background-color:#687258;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Rapid bypass of first-pass hepatic degradation; instantaneous effect</span>
          </div>

          <!-- Metric 3 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Cold-Pressed Sesame Taila (Lipophilic)</strong>
              <span style="font-weight:600; color:var(--accent-moss);">82% Transdermal / Epithelial</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:82%; background-color:#7A8065;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Subtle deep fascial and microcirculatory penetration</span>
          </div>

          <!-- Metric 4 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Kashayam Slow Reduction Decoction</strong>
              <span style="font-weight:600; color:var(--accent-moss);">76% Bio-Availability</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:76%; background-color:#858A70;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Concentrates bitter iridoids and tannins for digestive axis stimulation</span>
          </div>
        </div>
      </div>
    `)}function o({onFormulationSaved:r}){document.getElementById(`carrierOptionsGrid`);let i=document.getElementById(`labHerbSelect`),a=document.getElementById(`labAddHerbBtn`),o=document.getElementById(`selectedHerbsList`),s=document.getElementById(`formulaTitleInput`),c=document.getElementById(`formulaNotesInput`),l=document.getElementById(`previewFormulaTitle`),u=document.getElementById(`previewCarrierName`),d=document.getElementById(`previewBatchNumber`),f=document.getElementById(`previewDateStr`),p=document.getElementById(`previewIngredientsList`);document.getElementById(`previewDoshaBar`);let m=document.getElementById(`previewSynergyScore`),h=document.getElementById(`previewViryaTag`),g=document.getElementById(`saveFormulaBtn`),_=document.getElementById(`printFormulaBtn`),v=t[0].id,y=[{herbId:`ashwagandha`,ratio:50},{herbId:`cardamom`,ratio:50}],b=`Restorative Soma Rasayana`;function x(){return`FB-`+Math.floor(1e3+Math.random()*9e3)+`-ORG`}let S=x();i&&(i.innerHTML=`
      <option value="">-- Choose Botanical Synergist --</option>
      ${e.map(e=>`<option value="${e.id}">${e.name} (${e.binomial})</option>`).join(``)}
    `);function C(){if(o){if(y.length===0){o.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem; background: var(--ivory-surface); border: 1px dashed var(--border-medium); border-radius: var(--radius-sm);">
          No botanicals selected yet. Add up to four herbs below to begin compound formulation.
        </div>
      `;return}o.innerHTML=y.map((t,n)=>{let r=e.find(e=>e.id===t.herbId);return r?`
        <div class="herb-lab-row" data-idx="${n}">
          <div class="herb-lab-row-head">
            <div>
              <span class="herb-lab-title">${r.name}</span>
              <span style="font-style:italic; font-size:0.78rem; color:var(--accent-olive); margin-left:0.5rem;">${r.binomial}</span>
            </div>
            <button class="herb-lab-remove" data-remove-idx="${n}" title="Remove herb">
              &times; Remove
            </button>
          </div>
          <div class="herb-ratio-slider-wrap">
            <span style="font-size:0.75rem; color:var(--text-muted); width:40px;">Ratio:</span>
            <input type="range" min="10" max="90" step="5" value="${t.ratio}" class="herb-ratio-slider" data-idx="${n}">
            <span class="ratio-value-display">${t.ratio}%</span>
          </div>
        </div>
      `:``}).join(``),o.querySelectorAll(`.herb-lab-remove`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.removeIdx,10);y.splice(t,1),w(),C(),T()})}),o.querySelectorAll(`.herb-ratio-slider`).forEach(e=>{e.addEventListener(`input`,t=>{let n=parseInt(e.dataset.idx,10);y[n].ratio=parseInt(t.target.value,10);let r=e.parentElement.querySelector(`.ratio-value-display`);r&&(r.textContent=`${y[n].ratio}%`),T()})})}}function w(){if(y.length===0)return;let e=Math.round(100/y.length);y.forEach(t=>t.ratio=e)}function T(){let r=t.find(e=>e.id===v)||t[0];l&&(l.textContent=b||`Custom Apothecary Formulation`),u&&(u.textContent=`Carrier Matrix: ${r.name}`),d&&(d.textContent=S),f&&(f.textContent=new Date().toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})),p&&(y.length===0?p.innerHTML=`<span style="color:var(--text-muted); font-style:italic;">No botanical ingredients selected</span>`:p.innerHTML=y.map(t=>{let n=e.find(e=>e.id===t.herbId);return`<div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
            <span><strong>${n?.name}</strong> (${n?.binomial})</span>
            <span style="color:var(--accent-moss); font-weight:600;">${t.ratio}%</span>
          </div>`}).join(``));let i=82,a=[],o=y.map(e=>e.herbId);n.forEach(e=>{o.includes(e.pair[0])&&o.includes(e.pair[1])&&(i+=6,a.push(e.bonus))}),m&&(m.innerHTML=`
        <span style="font-size:1.15rem; font-weight:700; color:var(--accent-moss);">${Math.min(99,i)}/100</span>
        ${a.length>0?`<span style="font-size:0.75rem; color:var(--accent-olive); margin-left:0.5rem;">(${a.join(`, `)})</span>`:``}
      `);let s=0,c=0,g=0,_=0,x=0;y.forEach(t=>{let n=e.find(e=>e.id===t.herbId);n&&(s+=n.dosha.vata*(t.ratio/100),c+=n.dosha.pitta*(t.ratio/100),g+=n.dosha.kapha*(t.ratio/100),n.energetics.virya.includes(`Warming`)&&_++,n.energetics.virya.includes(`Cooling`)&&x++)}),h&&(_>x?(h.textContent=`Thermal Virya: Ushna (Warming)`,h.style.color=`var(--accent-terracotta)`):x>_?(h.textContent=`Thermal Virya: Sheeta (Cooling)`,h.style.color=`var(--accent-olive)`):(h.textContent=`Thermal Virya: Neutral / Equilibrating`,h.style.color=`var(--botanical-deep)`))}return a?.addEventListener(`click`,()=>{let e=i.value;if(e){if(y.some(t=>t.herbId===e)){alert(`This botanical is already part of the formulation.`);return}if(y.length>=4){alert(`Apothecary formulation is capped at four synergistic botanicals to maintain precise pharmacodynamics.`);return}y.push({herbId:e,ratio:25}),w(),i.value=``,C(),T()}}),s?.addEventListener(`input`,e=>{b=e.target.value.trim()||`Custom Formulation`,T()}),g?.addEventListener(`click`,()=>{if(y.length===0){alert(`Please add at least one botanical herb to your formulation.`);return}let n=t.find(e=>e.id===v)||t[0],i={id:`form-`+Date.now(),title:b||`Bespoke Apothecary Elixir`,batch:S,date:new Date().toISOString(),carrier:n.name,notes:c?.value||``,ingredients:y.map(t=>{let n=e.find(e=>e.id===t.herbId);return{id:t.herbId,name:n?.name||t.herbId,binomial:n?.binomial||``,ratio:t.ratio}})},a=JSON.parse(localStorage.getItem(`folia_saved_formulations`)||`[]`);a.unshift(i),localStorage.setItem(`folia_saved_formulations`,JSON.stringify(a)),r&&r(i),S=x(),alert(`Formulation "${i.title}" successfully committed to your Apothecary Tray.`)}),_?.addEventListener(`click`,()=>{window.print()}),{addHerb(e){y.some(t=>t.herbId===e)||(y.length>=4&&y.shift(),y.push({herbId:e,ratio:25}),w(),C(),T()),document.getElementById(`formulationLab`)?.scrollIntoView({behavior:`smooth`})},loadPair([e,t]){y=[{herbId:e,ratio:50},{herbId:t,ratio:50}],C(),T(),document.getElementById(`formulationLab`)?.scrollIntoView({behavior:`smooth`})}}}function s({onLoadFormulaIntoLab:t}){let n=document.getElementById(`consultQuizContainer`);if(!n)return;let r=[{id:`constitution`,title:`Constitutional Tendency (Prakriti)`,subtitle:`Identify your lifelong baseline physical and nervous predisposition.`,options:[{label:`A`,dosha:`vata`,title:`Vata Baseline (Air & Ether)`,desc:`Light slender frame, swift imaginative thoughts, quick to tire, prone to dry skin and sensitivity to cold wind.`},{label:`B`,dosha:`pitta`,title:`Pitta Baseline (Fire & Water)`,desc:`Moderate athletic build, decisive intellect, intense metabolic fire, prone to internal heat and sharp deadlines.`},{label:`C`,dosha:`kapha`,title:`Kapha Baseline (Earth & Water)`,desc:`Solid sturdy build, calm serene endurance, deep grounding, prone to slow metabolism and morning heaviness.`}]},{id:`imbalance`,title:`Current Acute Disturbance (Vikriti)`,subtitle:`Where do you presently feel out of equilibrium?`,options:[{label:`A`,dosha:`vata`,title:`Nervous Agitation & Fragmented Sleep`,desc:`Racing evening thoughts, superficial sleep, somatic restlessness, erratic hunger, or physical exhaustion.`},{label:`B`,dosha:`pitta`,title:`Inflammatory Heat & Mental Friction`,desc:`Gastric acid sensitivity, cutaneous redness, eye strain, irritability, and perfectionistic burnout.`},{label:`C`,dosha:`kapha`,title:`Lethargy, Brain Fog & Metabolic Stagnation`,desc:`Difficulty waking, persistent mental inertia, lymphatic water retention, and post-meal sluggishness.`}]},{id:`agni`,title:`Digestive Fire & Metabolic Rhythm (Agni)`,subtitle:`How does your digestive axis process daily nourishment?`,options:[{label:`A`,dosha:`vata`,title:`Vishama Agni (Variable & Irregular)`,desc:`Appetite fluctuates wildly day-to-day; frequent gas, dryness, or variable gut transit.`},{label:`B`,dosha:`pitta`,title:`Tikshna Agni (Sharp & Hyper-Metabolic)`,desc:`Cannot skip a meal without dizziness or agitation; burns through food quickly with acidic heat.`},{label:`C`,dosha:`kapha`,title:`Manda Agni (Heavy & Slow)`,desc:`Low appetite in mornings; food sits in stomach for extensive hours; easily gains water weight.`}]},{id:`intention`,title:`Therapeutic Intention`,subtitle:`What primary restoration do you seek from the botanical pharmacopeia?`,options:[{label:`A`,dosha:`vata`,title:`Deep Restorative Grounding & Cortisol Relief`,desc:`Down-regulate sympathetic adrenal overdrive; restore deep, uninterrupted delta sleep.`},{label:`B`,dosha:`pitta`,title:`Cellular Cooling, Dermal Radiance & Liver Clarity`,desc:`Clear vascular heat, calm reactive dermal tissue, and preserve hormonal equilibrium.`},{label:`C`,dosha:`kapha`,title:`Cognitive Acuity, Vitality & Metabolic Kindle`,desc:`Sharpen synaptic memory, stimulate lymphatic clearing, and awaken physical stamina.`}]}],i=0,a=[];function o(){let e=r[i];n.innerHTML=`
      <div class="quiz-step-indicator">
        ${r.map((e,t)=>`
          <div class="step-pip ${t===i?`active`:``} ${t<i?`done`:``}">
            ${t<i?`&check;`:t+1}
          </div>
        `).join(``)}
      </div>

      <div class="eyebrow" style="display:flex; justify-content:center; margin-bottom:0.4rem;">
        Diagnostic Stage 0${i+1} of 04
      </div>
      <h3 class="quiz-question-title">${e.title}</h3>
      <p class="quiz-question-sub">${e.subtitle}</p>

      <div class="quiz-options-stack">
        ${e.options.map((e,t)=>`
          <button class="quiz-option-button" data-dosha="${e.dosha}" data-idx="${t}">
            <div class="option-letter">${e.label}</div>
            <div>
              <div class="option-content-title">${e.title}</div>
              <div class="option-content-desc">${e.desc}</div>
            </div>
          </button>
        `).join(``)}
      </div>

      ${i>0?`
        <div style="margin-top: 1.8rem; text-align: center;">
          <button id="quizBackBtn" class="btn-botanical-secondary" style="font-size:0.8rem; padding:0.45rem 1rem;">
            &larr; Previous Step
          </button>
        </div>
      `:``}
    `,n.querySelectorAll(`.quiz-option-button`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.dosha;a[i]=t,i<r.length-1?(i++,o()):s()})}),document.getElementById(`quizBackBtn`)?.addEventListener(`click`,()=>{i>0&&(i--,o())})}function s(){let r={vata:0,pitta:0,kapha:0};a.forEach(e=>{r[e]!==void 0&&r[e]++});let s=`vata`;r.pitta>r.vata&&r.pitta>=r.kapha&&(s=`pitta`),r.kapha>r.vata&&r.kapha>r.pitta&&(s=`kapha`);let c=`ashwagandha`,l=`cardamom`,u=`Soma Restorative Grounding Protocol`,d=`Your constitution reflects an excess of Vata (Air & Ether), manifesting as nervous hyper-vigilance, variable metabolic heat, and fragmented sleep. Your optimal botanical allies are unctuous, grounding adaptogens paired with carminative aromatics.`;s===`pitta`?(c=`shatavari`,l=`vetiver`,u=`Pitta Cooling & Cellular Radiance Protocol`,d=`Your profile indicates an accumulation of Pitta (Fire & Water), leading to internal systemic heat, sharp deadlines, and ocular/dermal sensitivity. Your prescription focuses on bitter and sweet cooling tonics that soothe without diminishing digestive Agni.`):s===`kapha`&&(c=`tulsi`,l=`rosemary`,u=`Prana Awakening & Metabolic Kindle Protocol`,d=`Your assessment reveals elevated Kapha (Earth & Water), bringing sluggish lymphatic drainage and morning heaviness. Pungent, stimulating aromatic adaptogens will kindle metabolic Agni and clarify cerebral oxygenation.`);let f=e.find(e=>e.id===c),p=e.find(e=>e.id===l);n.innerHTML=`
      <div class="consult-result-view">
        <div style="text-align:center;">
          <span class="eyebrow">Personalized Ethnobotanical Synthesis</span>
          <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--botanical-deep); margin-bottom: 0.5rem;">
            ${u}
          </h3>
          <p style="font-size: 0.95rem; line-height: 1.65; max-width: 620px; margin: 0 auto; color: var(--text-secondary);">
            ${d}
          </p>
        </div>

        <div class="consult-hero-remedy">
          <div style="display:flex; justify-content:center; gap:2.5rem; flex-wrap:wrap; margin-bottom:1.5rem;">
            <div style="text-align:center;">
              <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); display:block; margin-bottom:0.25rem;">Primary Sovereign Botanical</span>
              <strong style="font-family:var(--font-serif); font-size:1.45rem; color:var(--botanical-deep);">${f?.name}</strong>
              <div style="font-style:italic; font-size:0.8rem; color:var(--text-muted);">${f?.binomial}</div>
            </div>
            <div style="align-self:center; font-size:1.4rem; color:var(--accent-olive);">&plus;</div>
            <div style="text-align:center;">
              <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); display:block; margin-bottom:0.25rem;">Synergistic Companion</span>
              <strong style="font-family:var(--font-serif); font-size:1.45rem; color:var(--botanical-deep);">${p?.name}</strong>
              <div style="font-style:italic; font-size:0.8rem; color:var(--text-muted);">${p?.binomial}</div>
            </div>
          </div>
          <button id="consultLoadLabBtn" class="btn-botanical-primary">
            Load Protocol into Formulation Lab &rarr;
          </button>
        </div>

        <!-- Tri-phasic Daily Ritual -->
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--botanical-deep); text-align:center;">
            Tri-Phasic Daily Botanical Ritual (Dinacharya)
          </h4>
          <p style="font-size:0.86rem; color:var(--text-muted); text-align:center; margin-bottom:1.2rem;">
            Aligned with natural circadian and seasonal energetic shifts.
          </p>

          <div class="ritual-timeline">
            <div class="ritual-phase-card">
              <div class="ritual-phase-time">Dawn &bull; 06:00 – 08:00</div>
              <h5 class="ritual-phase-title">Awakening Elixir</h5>
              <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                Warm mountain spring water with ${s===`vata`?`fresh lemon, raw honey, and pinch of cardamom`:s===`pitta`?`aloe vera nectar and soaked fennel seeds`:`warm ginger, black pepper, and Tulsi decoction`}.
              </p>
            </div>

            <div class="ritual-phase-card">
              <div class="ritual-phase-time">Solar Peak &bull; 12:00 – 14:00</div>
              <h5 class="ritual-phase-title">Metabolic Sustenance</h5>
              <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                Take primary nourishing botanical companion with wholesome lunch to maximize liver and intestinal bioavailability during peak solar Agni.
              </p>
            </div>

            <div class="ritual-phase-card">
              <div class="ritual-phase-time">Twilight &bull; 20:00 – 22:00</div>
              <h5 class="ritual-phase-title">Soma Restorative Tonic</h5>
              <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                Simmer 2g ${f?.name} in warm golden plant milk with ${p?.name}. Consume 45 minutes prior to sleep away from digital screens.
              </p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:1.5rem;">
          <button id="consultRestartBtn" class="btn-botanical-secondary" style="font-size:0.82rem;">
            &circlearrowleft; Retake Diagnostic Consult
          </button>
        </div>
      </div>
    `,document.getElementById(`consultLoadLabBtn`)?.addEventListener(`click`,()=>{t&&t([c,l])}),document.getElementById(`consultRestartBtn`)?.addEventListener(`click`,()=>{i=0,a=[],o()})}o()}function c(t){let n=document.getElementById(`drawerOverlay`),i=document.getElementById(`botanicalDrawer`),a=document.getElementById(`drawerCloseBtn`),o=document.getElementById(`drawerTitle`),s=document.getElementById(`drawerBody`);if(!n||!i)return;function c(){n.classList.remove(`open`)}return a?.addEventListener(`click`,c),n.addEventListener(`click`,e=>{e.target===n&&c()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&n.classList.contains(`open`)&&c()}),{openHerb(r){let i=e.find(e=>e.id===r);i&&(o.innerHTML=`
        <div>
          <span class="eyebrow" style="margin-bottom:0.25rem;">Botanical Monograph</span>
          <h3 style="font-family: var(--font-serif); font-size:1.6rem; color: var(--botanical-deep);">${i.name}</h3>
          <p style="font-style: italic; font-size: 0.88rem; color: var(--accent-olive);">${i.binomial} &bull; ${i.sanskrit}</p>
        </div>
      `,s.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:1.8rem;">
          <div style="height:240px; border-radius: var(--radius-sm); overflow:hidden; border:1px solid var(--border-subtle);">
            <img src="${i.heroImage}" alt="${i.name}" style="width:100%; height:100%; object-fit:cover;" />
          </div>

          <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
            <span class="botanical-tag">${i.category}</span>
            <span class="dosha-tag">${i.dosha.primary}</span>
            <span class="botanical-tag">${i.part}</span>
            <span class="dosha-tag">Family: ${i.family}</span>
          </div>

          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.2rem; margin-bottom:0.6rem; color:var(--botanical-deep);">Ethnobotanical Overview</h4>
            <p style="font-size:0.92rem; line-height:1.68; color:var(--text-secondary);">${i.description}</p>
          </div>

          <!-- Energetics Matrix -->
          <div style="background-color:var(--ivory-parchment); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:1.4rem;">
            <h4 style="font-family: var(--font-serif); font-size:1.1rem; margin-bottom:1rem; color:var(--botanical-deep);">Classical Energetics (Dravyaguna)</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.9rem; font-size:0.85rem;">
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Rasa (Taste)</strong>
                <span style="color:var(--botanical-deep);">${i.energetics.rasa.join(`, `)}</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Virya (Thermal Potency)</strong>
                <span style="color:var(--accent-olive); font-weight:600;">${i.energetics.virya}</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Vipaka (Post-Digestive)</strong>
                <span style="color:var(--botanical-deep);">${i.energetics.vipaka}</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Guna (Qualities)</strong>
                <span style="color:var(--text-secondary);">${i.energetics.guna.join(`, `)}</span>
              </div>
            </div>
          </div>

          <!-- Active Phytochemical Markers -->
          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.15rem; margin-bottom:0.8rem; color:var(--botanical-deep);">Phytochemical Markers & Potency</h4>
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              ${i.phytochemicals.map(e=>`
                <div style="background:var(--ivory-subtle); padding:0.85rem 1rem; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.82rem;">
                    <strong style="color:var(--botanical-deep);">${e.name}</strong>
                    <span style="color:var(--accent-moss); font-weight:600;">${e.value}% standardized</span>
                  </div>
                  <div class="bar-track" style="width:100%; margin-bottom:0.4rem;">
                    <div class="bar-fill" style="width:${e.value}%;"></div>
                  </div>
                  <span style="font-size:0.75rem; color:var(--text-muted);">${e.role}</span>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Traditional Uses & Clinical Evidence -->
          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.15rem; margin-bottom:0.6rem; color:var(--botanical-deep);">Traditional Uses</h4>
            <ul style="padding-left:1.2rem; font-size:0.86rem; color:var(--text-secondary); line-height:1.7;">
              ${i.traditionalUses.map(e=>`<li>${e}</li>`).join(``)}
            </ul>
          </div>

          <div style="background-color:rgba(122, 128, 101, 0.08); border-left:3px solid var(--accent-olive); padding:1rem 1.2rem; border-radius:0 var(--radius-xs) var(--radius-xs) 0;">
            <strong style="display:block; font-size:0.74rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--accent-moss); margin-bottom:0.25rem;">Modern Clinical Reference</strong>
            <p style="font-size:0.84rem; line-height:1.55; color:var(--botanical-deep); margin:0;">${i.modernEvidence}</p>
          </div>

          <!-- Preparation Ritual -->
          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.15rem; margin-bottom:0.45rem; color:var(--botanical-deep);">Preparation & Administration</h4>
            <p style="font-size:0.86rem; line-height:1.6; color:var(--text-secondary);">${i.preparationRitual}</p>
          </div>

          <div style="font-size:0.8rem; color:var(--text-muted); padding:0.8rem; border:1px dashed var(--border-medium); border-radius:var(--radius-xs);">
            <strong>Ethnobotanical Caution:</strong> ${i.contraindications}
          </div>

          <div style="padding-top:1rem; border-top:1px solid var(--border-subtle); display:flex; gap:1rem;">
            <button id="drawerAddLabBtn" class="btn-botanical-primary" style="flex:1;">
              Craft Formulation with ${i.name}
            </button>
            <button id="drawerCloseActionBtn" class="btn-botanical-secondary">
              Close
            </button>
          </div>
        </div>
      `,n.classList.add(`open`),document.getElementById(`drawerAddLabBtn`)?.addEventListener(`click`,()=>{c(),t&&t(i.id)}),document.getElementById(`drawerCloseActionBtn`)?.addEventListener(`click`,c))},openArticle(e){let t=r.find(t=>t.id===e);if(!t)return;o.innerHTML=`
        <div>
          <span class="eyebrow" style="margin-bottom:0.25rem;">${t.category}</span>
          <h3 style="font-family: var(--font-serif); font-size:1.5rem; color: var(--botanical-deep);">${t.title}</h3>
          <p style="font-size:0.82rem; color:var(--text-muted);">${t.author} &bull; ${t.date}</p>
        </div>
      `;let i=t.content.split(`

`).map(e=>e.startsWith(`### `)?`<h4 style="font-family: var(--font-serif); font-size:1.25rem; margin-top:1.5rem; margin-bottom:0.5rem; color:var(--botanical-deep);">${e.replace(`### `,``)}</h4>`:e.includes(`- **`)?`<ul style="padding-left:1.2rem; font-size:0.9rem; line-height:1.7; color:var(--text-secondary); margin:0.8rem 0;">${e.split(`
`).filter(Boolean).map(e=>`<li>${e.replace(`- `,``)}</li>`).join(``)}</ul>`:`<p style="font-size:0.92rem; line-height:1.75; color:var(--text-secondary); margin-bottom:1rem;">${e}</p>`).join(``);s.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:1.2rem;">
          <p style="font-style:italic; font-size:1rem; line-height:1.65; color:var(--botanical-slate); border-left:2px solid var(--accent-olive); padding-left:1rem; margin-bottom:1rem;">
            "${t.subtitle}"
          </p>
          <div style="line-height:1.75;">
            ${i}
          </div>
          <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle); display:flex; justify-content:flex-end;">
            <button class="btn-botanical-secondary" onclick="document.getElementById('drawerOverlay').classList.remove('open')">
              Return to Journal
            </button>
          </div>
        </div>
      `,n.classList.add(`open`)}}}function l({onRemixFormula:e}){let t=document.getElementById(`trayOverlay`),n=document.getElementById(`trayBody`),r=document.getElementById(`trayCloseBtn`),i=document.getElementById(`navTrayBtn`),a=document.getElementById(`navTrayCount`);function o(){let e=JSON.parse(localStorage.getItem(`folia_saved_formulations`)||`[]`);a&&(a.textContent=e.length)}function s(){let t=JSON.parse(localStorage.getItem(`folia_saved_formulations`)||`[]`);if(o(),n){if(t.length===0){n.innerHTML=`
        <div style="text-align:center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <div style="width:44px; height:44px; margin:0 auto 1rem; border-radius:var(--radius-full); background:var(--accent-leaf-tint); display:flex; align-items:center; justify-content:center; color:var(--accent-moss);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <h4 style="font-family: var(--font-serif); font-size:1.3rem; margin-bottom:0.4rem; color:var(--botanical-deep);">Your Apothecary Tray is Empty</h4>
          <p style="font-size:0.86rem; line-height:1.6; max-width:280px; margin:0 auto 1.4rem;">Design a custom botanical elixir in the Formulation Lab and commit it here.</p>
          <a href="#formulationLab" class="btn-botanical-primary" style="font-size:0.8rem; padding:0.6rem 1.2rem;" onclick="document.getElementById('trayOverlay').classList.remove('open')">
            Open Formulation Lab
          </a>
        </div>
      `;return}n.innerHTML=`
      <div style="display:flex; flex-direction:column; gap:1.4rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.8rem; border-bottom:1px solid var(--border-subtle); font-size:0.82rem; color:var(--text-muted);">
          <span>${t.length} Custom ${t.length===1?`Preparation`:`Preparations`} Recorded</span>
          <button id="clearAllTrayBtn" style="background:transparent; border:none; color:var(--accent-terracotta); font-size:0.75rem; cursor:pointer;">Clear All</button>
        </div>

        ${t.map((e,t)=>`
          <div class="botanical-card" style="padding:1.4rem; background:var(--ivory-parchment);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
              <div>
                <h4 style="font-family: var(--font-serif); font-size:1.25rem; color:var(--botanical-deep);">${e.title}</h4>
                <span style="font-size:0.72rem; color:var(--accent-olive); text-transform:uppercase; letter-spacing:0.06em;">${e.batch} &bull; ${new Date(e.date).toLocaleDateString()}</span>
              </div>
              <button class="btn-remove-tray-item" data-idx="${t}" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:1rem;" title="Delete">&times;</button>
            </div>
            
            <div style="font-size:0.8rem; color:var(--botanical-slate); margin-bottom:0.8rem;">
              <strong>Carrier:</strong> ${e.carrier}
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1rem;">
              ${e.ingredients.map(e=>`
                <span class="botanical-tag" style="font-size:0.7rem;">${e.name} (${e.ratio}%)</span>
              `).join(``)}
            </div>

            <div style="display:flex; gap:0.6rem; border-top:1px solid var(--border-subtle); padding-top:0.8rem;">
              <button class="btn-botanical-secondary btn-remix-formula" data-idx="${t}" style="flex:1; font-size:0.75rem; padding:0.45rem 0.6rem;">
                Load & Edit
              </button>
              <button class="btn-botanical-primary" onclick="window.print()" style="font-size:0.75rem; padding:0.45rem 0.8rem;">
                Print Label
              </button>
            </div>
          </div>
        `).join(``)}
      </div>
    `,n.querySelectorAll(`.btn-remove-tray-item`).forEach(e=>{e.addEventListener(`click`,()=>{let n=parseInt(e.dataset.idx,10);t.splice(n,1),localStorage.setItem(`folia_saved_formulations`,JSON.stringify(t)),s()})}),n.querySelectorAll(`.btn-remix-formula`).forEach(n=>{n.addEventListener(`click`,()=>{let r=parseInt(n.dataset.idx,10),i=t[r];l(),e&&i&&e(i)})}),document.getElementById(`clearAllTrayBtn`)?.addEventListener(`click`,()=>{confirm(`Clear all saved bespoke formulations from this device?`)&&(localStorage.removeItem(`folia_saved_formulations`),s())})}}function c(){s(),t?.classList.add(`open`)}function l(){t?.classList.remove(`open`)}return i?.addEventListener(`click`,c),r?.addEventListener(`click`,l),t?.addEventListener(`click`,e=>{e.target===t&&l()}),o(),{refresh:o,open:c,close:l}}function u({onOpenHerb:t,onOpenArticle:n}){let i=document.getElementById(`searchModalBackdrop`),a=document.getElementById(`searchModalInput`),o=document.getElementById(`searchModalResults`),s=document.getElementById(`searchModalCloseBtn`),c=document.getElementById(`navSearchBtn`);if(!i)return;function l(){i.classList.add(`open`),a&&(a.value=``,a.focus()),d(``)}function u(){i.classList.remove(`open`)}c?.addEventListener(`click`,l),s?.addEventListener(`click`,u),i.addEventListener(`click`,e=>{e.target===i&&u()}),window.addEventListener(`keydown`,e=>{e.key===`/`&&![`INPUT`,`TEXTAREA`].includes(document.activeElement.tagName)&&(e.preventDefault(),l()),e.key===`Escape`&&i.classList.contains(`open`)&&u()}),a?.addEventListener(`input`,e=>{d(e.target.value.trim().toLowerCase())});function d(i){if(!o)return;if(!i){o.innerHTML=`
        <div style="padding: 1.2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          Type any plant name (e.g. <em>Ashwagandha, Tulsi</em>), chemical constituent (<em>Withanolides, Rosmarinic</em>), or therapeutic action...
        </div>
      `;return}let a=e.filter(e=>e.name.toLowerCase().includes(i)||e.binomial.toLowerCase().includes(i)||e.sanskrit.toLowerCase().includes(i)||e.category.toLowerCase().includes(i)||e.phytochemicals.some(e=>e.name.toLowerCase().includes(i))),s=r.filter(e=>e.title.toLowerCase().includes(i)||e.excerpt.toLowerCase().includes(i));if(a.length===0&&s.length===0){o.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          No botanical archives matching "<strong>${i}</strong>".
        </div>
      `;return}let c=``;a.length>0&&(c+=`
        <div style="font-size:0.72rem; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); margin:0.6rem 0.6rem 0.3rem;">
          Botanical Specimens (${a.length})
        </div>
        ${a.map(e=>`
          <div class="search-result-item" data-herb-id="${e.id}">
            <div>
              <strong style="font-family:var(--font-serif); font-size:1.1rem; color:var(--botanical-deep);">${e.name}</strong>
              <span style="font-style:italic; font-size:0.8rem; color:var(--accent-olive); margin-left:0.4rem;">${e.binomial}</span>
              <div style="font-size:0.75rem; color:var(--text-muted);">${e.category} &bull; ${e.dosha.primary}</div>
            </div>
            <span class="botanical-tag" style="font-size:0.7rem;">Monograph &rarr;</span>
          </div>
        `).join(``)}
      `),s.length>0&&(c+=`
        <div style="font-size:0.72rem; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); margin:1rem 0.6rem 0.3rem;">
          Monograph Essays (${s.length})
        </div>
        ${s.map(e=>`
          <div class="search-result-item" data-article-id="${e.id}">
            <div>
              <strong style="font-family:var(--font-serif); font-size:1.05rem; color:var(--botanical-deep);">${e.title}</strong>
              <div style="font-size:0.75rem; color:var(--text-muted);">${e.category} &bull; ${e.readTime}</div>
            </div>
            <span class="botanical-tag" style="font-size:0.7rem;">Read Essay &rarr;</span>
          </div>
        `).join(``)}
      `),o.innerHTML=c,o.querySelectorAll(`[data-herb-id]`).forEach(e=>{e.addEventListener(`click`,()=>{u(),t&&t(e.dataset.herbId)})}),o.querySelectorAll(`[data-article-id]`).forEach(e=>{e.addEventListener(`click`,()=>{u(),n&&n(e.dataset.articleId)})})}}var d=null,f=!1,p=null,m=null,h=null,g=null;function _(){return f?(y(),!1):(v(),!0)}function v(){try{let e=window.AudioContext||window.webkitAudioContext;d||=new e,d.state===`suspended`&&d.resume();let t=d.sampleRate*2,n=d.createBuffer(1,t,d.sampleRate),r=n.getChannelData(0),i=0,a=0,o=0;for(let e=0;e<t;e++){let t=Math.random()*2-1;i=.99886*i+t*.0555179,a=.99332*a+t*.0750759,o=.969*o+t*.153852,r[e]=(i+a+o)*.04}p=d.createBufferSource(),p.buffer=n,p.loop=!0,m=d.createBiquadFilter(),m.type=`lowpass`,m.frequency.setValueAtTime(320,d.currentTime),m.Q.setValueAtTime(1.5,d.currentTime),g=d.createOscillator(),g.type=`sine`,g.frequency.setValueAtTime(136.1,d.currentTime);let s=d.createGain();s.gain.setValueAtTime(.015,d.currentTime),h=d.createGain(),h.gain.setValueAtTime(.001,d.currentTime),h.gain.exponentialRampToValueAtTime(.08,d.currentTime+2.5),p.connect(m),m.connect(h),g.connect(s),s.connect(h),h.connect(d.destination),p.start(),g.start(),f=!0}catch(e){console.warn(`AudioContext initialized without gesture or not supported`,e)}}function y(){h&&d?(h.gain.exponentialRampToValueAtTime(1e-4,d.currentTime+1.2),setTimeout(()=>{try{p&&p.stop(),g&&g.stop()}catch{}f=!1},1200)):f=!1}document.addEventListener(`DOMContentLoaded`,()=>{let e=l({onRemixFormula:e=>{e&&n&&e.ingredients&&e.ingredients.length>0&&e.ingredients.forEach(e=>{n.addHerb(e.id)})}}),t=c(e=>{n&&n.addHerb(e)}),n=o({onFormulationSaved:()=>{e.refresh()}});i({onOpenMonograph:e=>{t.openHerb(e)},onSelectHerbForLab:e=>{n.addHerb(e)}}),a({onSelectSynergyPair:([e,t])=>{n.loadPair([e,t])},onOpenMonograph:e=>{t.openHerb(e)}}),s({onLoadFormulaIntoLab:([e,t])=>{n.loadPair([e,t])}}),u({onOpenHerb:e=>{t.openHerb(e)},onOpenArticle:e=>{t.openArticle(e)}}),document.querySelectorAll(`.btn-read-article, .article-card`).forEach(e=>{e.addEventListener(`click`,n=>{let r=e.dataset.articleId||e.closest(`[data-article-id]`)?.dataset.articleId;r&&t.openArticle(r)})}),document.getElementById(`heroSpotlightLink`)?.addEventListener(`click`,e=>{e.preventDefault(),t.openHerb(`ashwagandha`)});let r=document.getElementById(`ambientSoundBtn`);r&&r.addEventListener(`click`,()=>{_()?(r.style.color=`var(--accent-moss)`,r.style.backgroundColor=`var(--accent-leaf-tint)`,r.setAttribute(`title`,`Soothing Soundscape Active (Click to mute)`)):(r.style.color=``,r.style.backgroundColor=``,r.setAttribute(`title`,`Toggle Botanical Nature Soundscape`))});let d=document.querySelectorAll(`.nav-link`),f=document.querySelectorAll(`section[id]`);window.addEventListener(`scroll`,()=>{let e=``,t=window.pageYOffset;f.forEach(n=>{let r=n.offsetTop-120,i=n.offsetHeight;t>=r&&t<r+i&&(e=n.getAttribute(`id`))}),d.forEach(t=>{t.classList.remove(`active`),t.getAttribute(`href`)===`#${e}`&&t.classList.add(`active`)})},{passive:!0})});