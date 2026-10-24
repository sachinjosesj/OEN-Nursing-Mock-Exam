// Comprehensive study materials for the OEN mock exam.
// Shape: { d: domain index (0-6), t: title, p: [bullet points], k: optional exam tip }
// Domain indexes:
// 0: Principles of Care
// 1: Evidence-Based Practice
// 2: Adult Health
// 3: Maternal
// 4: Child
// 5: Mental Health
// 6: Community Health & Gerontology

const STUDY = [
  // ==========================================
  // DOMAIN 0: PRINCIPLES OF CARE
  // ==========================================
  {
    d: 0,
    t: "Delegation and Prioritising",
    p: [
      "5 Rights of Delegation: Right Task, Right Circumstance, Right Person, Right Direction/Communication, Right Supervision/Evaluation.",
      "RN keeps EAT: Evaluation, Assessment (initial/admission/unstable), Teaching, Nursing Judgement, and Care Planning.",
      "LPN/EN Scope: Care for stable patients with predictable outcomes; administer non-IV meds (or standard IV per local policy), routine dressing changes, urinary catheterization, tracheostomy care, data collection (reassessment).",
      "UAP/HCA Scope: ADLs (bathing, dressing, grooming), vital signs on STABLE patients, intake & output, ambulation, feeding (UNLESS aspiration risk).",
      "The delegating RN remains legally accountable for the overall outcome and delegation decision.",
      "Prioritisation frameworks: Maslow's Hierarchy (Physiological > Safety > Belonging), ABCs (Airway, Breathing, Circulation), Systemic before Local, Acute before Chronic, Actual before Potential, Unexpected vs Expected findings.",
      "Priority question stems ('First action', 'Immediate priority'): An actual, life-threatening ABC or acute systemic problem always beats a potential or chronic issue."
    ],
    k: "A new, sudden onset or acute change in a patient (e.g. sudden confusion, chest pain, new dyspnea) always takes priority over a long-standing or expected chronic condition."
  },
  {
    d: 0,
    t: "Consent, Confidentiality and Ethics",
    p: [
      "Informed Consent requirements: Voluntary, client has legal capacity/competence, and adequate information provided (risks, benefits, alternatives, right to refuse).",
      "Provider vs RN role: The physician/surgeon explains the procedure and risks. The RN witnesses signature, verifies client competence, and ensures understanding. If client expresses confusion, notify the provider before signing!",
      "A competent adult may refuse any treatment at any time, even life-saving care. The nurse must verify refusal is informed, explain risks, notify provider, and document.",
      "Emergency implied consent: Applies when client is unconscious/incapacitated, life-threatening emergency exists, and no surrogate decision-maker is available.",
      "Minors (<18 yrs) require parent/guardian consent EXCEPT for emancipation, emergency care, STI treatment, substance abuse, pregnancy/contraception (varies by jurisdiction).",
      "Ethical Principles: Autonomy (self-determination), Beneficence (doing good), Non-maleficence (do no harm), Justice (fairness/equal resource allocation), Veracity (truthfulness), Fidelity (loyalty and keeping promises).",
      "Confidentiality & HIPAA/Privacy: Disclose information ONLY on a need-to-know basis. Exceptions: mandatory reporting of abuse (child/elder), gunshot wounds, or specified reportable communicable diseases."
    ],
    k: "The nurse's role in informed consent is ONLY to witness the signature and confirm voluntary understanding. The nurse NEVER provides the primary explanation of surgical risks."
  },
  {
    d: 0,
    t: "Infection Control and Transmission-Based Precautions",
    p: [
      "Hand Hygiene: Soap and water mandatory for C. difficile, norovirus, or visibly soiled hands (rub 15-20 sec). Alcohol-based hand rub suitable for routine decontamination (does NOT kill C. diff spores!).",
      "PPE Donning order: Gown -> Mask/Respirator -> Goggles/Face Shield -> Gloves.",
      "PPE Doffing order: Gloves -> Goggles/Face Shield -> Gown -> Mask/Respirator -> Hand Hygiene (or alphabetical order: Gloves, Goggles, Gown, Mask).",
      "Airborne Precautions: N95/P2 respirator, negative-pressure isolation room with door closed. Diseases: Measles, TB, Varicella (chickenpox), Disseminated Herpes Zoster ('MTV'). Patient wears surgical mask during transport.",
      "Droplet Precautions: Surgical mask within 3-6 feet, door can remain open, private room. Diseases: Influenza, Pertussis, Mumps, Rubella, Bacterial Meningitis, Strep pharyngitis.",
      "Contact Precautions: Gown and Gloves. Private room or cohort. Diseases: C. difficile, MRSA, VRE, scabies, impetigo, RSV.",
      "Sharps Safety: Never recap needles manually (use one-handed scoop if mandatory). Dispose immediately into puncture-resistant container at point of use."
    ],
    k: "Remember 'MTV' for Airborne precautions: Measles, Tuberculosis, Varicella. N95 and negative pressure room required!"
  },
  {
    d: 0,
    t: "Medication Safety & High-Alert Drugs",
    p: [
      "Rights of Medication Administration: Right Patient (2 identifiers), Right Drug, Right Dose, Right Route, Right Time, Right Documentation (+ Right Reason, Right Response).",
      "High-Alert Medications (PINCH): Potassium IV, Insulin, Narcotics/Opioids, Chemotherapy, Heparin/Anticoagulants. Require an independent double check by 2 RNs prior to administration.",
      "Verbal & Telephone Orders: Read back full order (drug, dose, route, frequency) to prescriber. Prescriber must sign order within designated policy timeframe (e.g. 24 hours).",
      "Medication Reconciliation: Conducted at admission, transfer, and discharge to compare current orders against previous home medications.",
      "Enteral Tube Meds: Flush with 15-30 mL water before and after each med. Give each medication separately. Liquid forms preferred; do NOT crush extended-release (ER/XL/SR) or enteric-coated tablets."
    ]
  },
  {
    d: 0,
    t: "Patient Safety, Quality & Fall Prevention",
    p: [
      "Fall Prevention: Assess with Morse or Hendrich II scale. Interventions: Bed in lowest position, locked wheels, call bell within reach, non-skid socks, adequate lighting, answer call bells promptly, clear pathway.",
      "Restraints: Physical/chemical restraints are a LAST resort. Physician order required within 1 hour; order valid max 24 hours (renewed daily).",
      "Restraint Monitoring: Check circulation, skin integrity, and pulses every 15-30 mins. Remove restraint every 2 hours for range-of-motion, hydration, and elimination.",
      "Fire Safety (RACE): Rescue patients -> Alarm/activate -> Contain fire (close doors) -> Extinguish/evacuate.",
      "Fire Extinguisher (PASS): Pull pin -> Aim at base -> Squeeze handle -> Sweep side to side.",
      "SBAR Communication: Situation (current problem), Background (relevant clinical history), Assessment (vital signs/findings), Recommendation (what you need from prescriber)."
    ]
  },

  // ==========================================
  // DOMAIN 1: EVIDENCE-BASED PRACTICE
  // ==========================================
  {
    d: 1,
    t: "Study Designs and Hierarchy of Evidence",
    p: [
      "Hierarchy of Evidence (highest to lowest): 1. Systematic Reviews & Meta-Analyses of RCTs, 2. Randomized Controlled Trials (RCTs), 3. Cohort Studies, 4. Case-Control Studies, 5. Cross-Sectional Studies, 6. Case Reports/Series, 7. Expert Opinion.",
      "Randomized Controlled Trial (RCT): Gold standard for testing intervention effectiveness. Key features: Randomisation (reduces selection bias), Control group, Manipulation of independent variable.",
      "Cohort Study: Observational study following groups over time based on EXPOSURE status to measure OUTCOME incidence. Prospectively or retrospectively tracks risk. Yields Relative Risk (RR).",
      "Case-Control Study: Retrospective study starting with OUTCOME (cases with disease vs controls without) and looking backward to assess prior EXPOSURES. Ideal for rare diseases. Yields Odds Ratio (OR).",
      "Cross-Sectional Study: Observational 'snapshot' evaluating exposure and outcome at the same single point in time. Measures Disease Prevalence.",
      "Qualitative Research: Explores lived experiences, meanings, and social processes (Phenomenology, Grounded Theory, Ethnography). Sample size determined by Data Saturation (no new themes emerge)."
    ],
    k: "'Follow groups forward over time' = Cohort study. 'Start with people who already have the disease and look backward' = Case-control study."
  },
  {
    d: 1,
    t: "Screening Tests & Diagnostic Accuracy",
    p: [
      "Sensitivity (SnNout): Percentage of true positives among people WITH the disease. High sensitivity means low false-negative rate. A NEGATIVE result in a highly sensitive test rules OUT disease.",
      "Specificity (SpPIn): Percentage of true negatives among people WITHOUT the disease. High specificity means low false-positive rate. A POSITIVE result in a highly specific test rules IN disease.",
      "Positive Predictive Value (PPV): Probability that a person with a positive test actually has the disease. Increases as disease prevalence increases in the population.",
      "Negative Predictive Value (NPV): Probability that a person with a negative test is genuinely free of the disease.",
      "Levels of Prevention:",
      "  • Primary Prevention: Prevents disease onset / promotes health (vaccines, smoking cessation, helmet laws, exercise).",
      "  • Secondary Prevention: Early detection & screening in asymptomatic people (mammograms, Pap smears, BP screening, colonoscopy, TB skin test).",
      "  • Tertiary Prevention: Treatment, rehab, and limiting disability in established disease (cardiac rehab post-MI, physical therapy for stroke, support groups)."
    ],
    k: "Remember SnNout (Sensitive test rules OUT when negative) and SpPIn (Specific test rules IN when positive!)."
  },
  {
    d: 1,
    t: "Statistics & Data Interpretation",
    p: [
      "p-value: Probability that observed results occurred by random chance assuming null hypothesis is true. p < 0.05 indicates statistical significance.",
      "95% Confidence Interval (CI): Range of values likely containing true population parameter. For Relative Risk (RR) or Odds Ratio (OR), if 95% CI includes 1.0, results are NOT statistically significant!",
      "Type I Error (Alpha α): False positive — rejecting a true null hypothesis.",
      "Type II Error (Beta β): False negative — failing to reject a false null hypothesis.",
      "Measures of Central Tendency: Mean (average, sensitive to extreme outliers), Median (middle score, best for skewed data/distributions), Mode (most frequent score).",
      "Effect Size Metrics: Relative Risk (RR = risk in exposed / risk in unexposed), Odds Ratio (OR), Number Needed to Treat (NNT = 1 / Absolute Risk Reduction)."
    ]
  },
  {
    d: 1,
    t: "Validity, Reliability and Bias",
    p: [
      "Reliability: Consistency and repeatability of measurements (test-retest, inter-rater reliability). A test can be reliable without being valid!",
      "Validity: Accuracy of a test/instrument in measuring what it claims to measure. Internal Validity (causal accuracy inside study) vs External Validity (generalizability to outside population).",
      "Selection Bias: Non-random sampling or allocation resulting in non-equivalent study groups.",
      "Recall Bias: Differing accuracy of past memory between cases and controls (common in retrospective studies).",
      "Hawthorne Effect: Study participants alter their behavior simply because they know they are being observed.",
      "Blinding: Single-blind (participants unaware), Double-blind (participants & researchers unaware — prevents observer/reporting bias). Intention-to-Treat analysis preserves randomisation benefits.",
      "Data Measurement Levels: Nominal (categories/names), Ordinal (ranked order, e.g. pain scale 0-10), Interval (equal distances, no true zero e.g. °C), Ratio (equal distances with true absolute zero e.g. weight, blood pressure)."
    ]
  },

  // ==========================================
  // DOMAIN 2: ADULT HEALTH
  // ==========================================
  {
    d: 2,
    t: "Endocrine Emergencies & Diabetic Crises",
    p: [
      "Diabetic Ketoacidosis (DKA): Type 1 DM, rapid onset. Hyperglycemia (250-600 mg/dL), Kussmaul respirations, fruity breath, metabolic acidosis (pH < 7.30, HCO3 < 18), positive serum/urine ketones.",
      "DKA Management: 1st line: IV Isotonic Saline (0.9% NS) fluid resuscitation. 2nd: Regular Insulin IV bolus + continuous drip. When blood glucose drops to 250 mg/dL, add 5-10% Dextrose to IV fluids to prevent cerebral edema! Check Potassium prior to insulin (hold insulin if K < 3.3 mEq/L).",
      "Hyperglycemic Hyperosmolar State (HHS): Type 2 DM, gradual onset in older adults. Extreme hyperglycemia (>600 mg/dL), high serum osmolality (>320 mOsm/kg), severe dehydration, NO significant ketoacidosis. Tx: Massive fluid replacement paramount, IV Regular Insulin.",
      "Adrenal (Addisonian) Crisis: Severe acute cortisol/aldosterone deficiency due to infection, trauma, or abrupt steroid withdrawal. S/S: Severe hypotension, hyponatremia, hyperkalemia, hypoglycemia, shock. Tx: Emergency IV Hydrocortisone + rapid 0.9% NS fluid resuscitation.",
      "Thyroid Storm: Life-threatening hyperthyroidism. S/S: High fever (>38.5°C), severe tachycardia, agitation, delirium, dysrhythmias. Tx: PTU or Methimazole, Propranolol (beta-blocker), Hydrocortisone, cooling blankets (AVOID Aspirin — displaces thyroid hormone from binding proteins!).",
      "Myxedema Coma: Severe hypothyroidism. S/S: Hypothermia, hypoventilation, bradycardia, hypotension, hyponatremia. Tx: IV Levothyroxine + IV Hydrocortisone, passive rewarming.",
      "SIADH vs Diabetes Insipidus (DI):",
      "  • SIADH: Excess ADH -> Fluid retention, dilutational hyponatremia, high urine specific gravity (>1.030). Tx: Fluid restriction (<800-1000 mL/day), hypertonic 3% NaCl for severe hyponatremia (<120 mEq/L).",
      "  • DI: ADH deficiency -> Massive polyuria (dilute urine <1.005), intense thirst, hypernatremia, dehydration. Tx: Desmopressin (DDAVP), hypotonic fluids.",
      "Hypoglycemia (<70 mg/dL): Rule of 15 -> 15 g fast-acting carb (juice/candy), recheck glucose in 15 mins. If unconscious: IV 50% Dextrose (D50W) or IM Glucagon."
    ],
    k: "In DKA, ALWAYS give IV fluids first before or alongside insulin. When blood glucose reaches 250 mg/dL, add Dextrose to preventing cerebral edema!"
  },
  {
    d: 2,
    t: "Fluids, Electrolytes and Arterial Blood Gases (ABGs)",
    p: [
      "Arterial Blood Gas Interpretation (ROME: Respiratory Opposite, Metabolic Equal):",
      "  • Normal values: pH 7.35-7.45, PaCO2 35-45 mmHg, HCO3 22-26 mEq/L.",
      "  • Respiratory Acidosis: pH < 7.35, PaCO2 > 45 (Hypoventilation, COPD, opioid overdose, respiratory depression).",
      "  • Respiratory Alkalosis: pH > 7.45, PaCO2 < 35 (Hyperventilation, panic, early salicylate toxicity).",
      "  • Metabolic Acidosis: pH < 7.35, HCO3 < 22 (DKA, renal failure, severe diarrhea, lactic acidosis).",
      "  • Metabolic Alkalosis: pH > 7.45, HCO3 > 26 (Vomiting, NG suctioning, excessive antacids).",
      "Potassium (3.5 - 5.0 mEq/L):",
      "  • Hyperkalemia (>5.0): Peaked T waves, wide QRS, muscle weakness. Tx: IV Calcium Gluconate (protects heart myocardium!), Regular Insulin + D50, Sodium Polystyrene (Kayexalate) or Patiromer, Dialysis.",
      "  • Hypokalemia (<3.5): Flat/inverted T waves, U waves, ST depression, muscle cramps. Tx: Oral/IV KCl (NEVER IV push! Max peripheral rate 10 mEq/hr).",
      "Sodium (135 - 145 mEq/L): Hyponatremia (<135) causes cerebral edema, confusion, seizures. Correct slowly to avoid Central Pontine Myelinolysis.",
      "Calcium (8.5 - 10.5 mg/dL): Hypocalcemia (<8.5) causes tetany, positive Chvostek's sign (facial twitch) & Trousseau's sign (carpopedal spasm with BP cuff), prolonged QT. Tx: IV Calcium Gluconate.",
      "Magnesium (1.5 - 2.5 mEq/L): Hypermagnesemia (>2.5) causes loss of deep tendon reflexes, respiratory depression, bradycardia. Antidote: Calcium Gluconate."
    ],
    k: "In Hyperkalemia with ECG changes, IV Calcium Gluconate is given FIRST to stabilize the cardiac membrane, before giving insulin to shift potassium into cells."
  },
  {
    d: 2,
    t: "Cardiac and Vascular Emergencies",
    p: [
      "Acute Coronary Syndromes (STEMI / NSTEMI): S/S: Crushing substernal chest pain radiating to jaw/left arm, diaphoresis, dyspnea.",
      "Immediate Interventions (MONA): Oxygen (if O2 sat < 90%), Aspirin (chewed 162-325 mg), Nitroglycerin SL (check SBP > 90 mmHg first; contraindicated if sildenafil taken within 24-48 hrs), Morphine IV for persistent pain.",
      "STEMI Reperfusion: Target door-to-balloon PCI time < 90 mins. Thrombolytics (Alteplase) within 30 mins if PCI unavailable.",
      "Cardiac Tamponade: Beck's Triad = Hypotension, Muffled heart sounds, Jugular Venous Distension (JVD). Pulsus paradoxus (BP drop >10 mmHg on inspiration). Tx: Emergency Pericardiocentesis.",
      "Aortic Dissection: Sudden severe 'tearing' or 'ripping' chest pain radiating to back/scapula, blood pressure discrepancy between arms. Tx: Immediate HR/BP lowering with IV Beta-blockers (Esmolol/Labetalol target SBP 100-120 mmHg), emergency surgery. Absolute contraindication: Thrombolytics/anticoagulants!",
      "Acute Limb Ischaemia (6 Ps): Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia (coldness). Emergency vascular surgical evaluation.",
      "Heart Failure & Pulmonary Edema:",
      "  • Left-Sided HF: Pulmonary congestion (crackles, cough with pink frothy sputum, dyspnea, orthopnea).",
      "  • Right-Sided HF: Systemic venous congestion (JVD, peripheral edema, ascites, hepatomegaly).",
      "  • Acute Pulmonary Edema Tx: High-Fowler's position, Oxygen, IV Furosemide, IV Nitroglycerin, Morphine."
    ]
  },
  {
    d: 2,
    t: "Neurological Emergencies, Stroke & Trauma",
    p: [
      "Stroke Management: Sudden focal deficit (FAST). Time last known well is critical!",
      "  • Ischemic Stroke: Urgently order non-contrast head CT to rule out hemorrhage. IV Alteplase/rtPA within 3 to 4.5 hours of symptom onset if eligible. Maintain SBP < 185/110 mmHg. Perform swallow screen before any oral intake!",
      "  • Hemorrhagic Stroke: Strict BP control (target SBP < 140 mmHg), reverse anticoagulants, elevate HOB 30°.",
      "Increased Intracranial Pressure (ICP): Normal 5-15 mmHg. Early sign: Altered level of consciousness. Late sign: Cushing's Triad (Systolic Hypertension with widening pulse pressure, Bradycardia, Irregular slow respirations/Cheyne-Stokes).",
      "ICP Interventions: HOB 30°, head neutral/midline, avoid hip flexion, short-term hyperventilation, Osmotic diuretics (Mannitol 20% or 3% Hypertonic Saline), avoid coughing/straining.",
      "Autonomic Dysreflexia: Spinal cord injury at or above T6. Triggered by noxious stimuli below injury (distended bladder #1 cause, bowel impaction #2). S/S: Severe hypertension, pounding headache, bradycardia, flushing/sweating above injury. Tx: Sit patient UP immediately (High Fowler's), loosen clothing, assess & remove trigger (catheterize bladder/check impaction), administer antihypertensives.",
      "Glasgow Coma Scale (GCS): Scores 3 to 15 (Eye 4, Verbal 5, Motor 6). GCS <= 8 indicates severe brain injury ('GCS 8, intubate!').",
      "Compartment Syndrome: Increased pressure within muscle compartment. S/S: Pain out of proportion to injury, pain with passive stretch, paresthesia, pallor, pulselessness (late). Keep limb at heart level (do NOT elevate or compress!), loosen tight bandages/casts, emergency Fasciotomy.",
      "Meningitis: Droplet precautions. S/S: Fever, nuchal rigidity (stiff neck), photophobia, positive Kernig's & Brudzinski's signs. Lumbar puncture shows cloudy CSF, low glucose, high protein. Administer IV antibiotics immediately after blood cultures."
    ],
    k: "In Autonomic Dysreflexia, the FIRST action is to raise the head of the bed to High Fowler's (90°) to lower blood pressure, then immediately check for bladder distension."
  },
  {
    d: 2,
    t: "Key Pharmacology and Monitoring Parameters",
    p: [
      "Warfarin: Monitor INR (target 2.0-3.0; 2.5-3.5 for mechanical valves). Antidote: Vitamin K (Phytonadione) / PCC. Maintain consistent intake of dark green leafy vegetables.",
      "Heparin (Unfractionated): Monitor aPTT (target 1.5-2.5x control, ~60-80 sec). Antidote: Protamine Sulfate. Monitor for Heparin-Induced Thrombocytopenia (HIT: >50% drop in platelets).",
      "Enoxaparin (LMWH): Administer SC in abdomen (2 inches from umbilicus). Do NOT expel air bubble or rub injection site.",
      "Digoxin: Therapeutic level 0.5 - 2.0 ng/mL. Check apical HR for 1 full minute prior to administration (hold if HR < 60 bpm in adults). S/S toxicity: Nausea, vomiting, anorexia, visual disturbances (yellow-green halos, blurred vision), dysrhythmias. Hypokalemia increases toxicity risk! Antidote: Digoxin Immune Fab (Digibind).",
      "Lithium: Therapeutic level 0.6 - 1.2 mEq/L. Toxicity signs: Coarse hand tremor, vomiting, diarrhea, ataxia, confusion. Maintain normal sodium and fluid intake (hyponatremia leads to lithium retention and toxicity!).",
      "Opioids (Morphine, Fentanyl): Hold if Respiratory Rate < 10/min. Antidote: Naloxone (Narcan) — note short half-life, may require repeat doses!",
      "ACE Inhibitors (-pril): Side effects include dry cough, Hyperkalemia, Angioedema (life-threatening swelling of lips/airway — hold drug & call provider!).",
      "Statins (-vastatin): Monitor liver enzymes. Report unexplained muscle pain/tenderness and dark urine immediately (Rhabdomyolysis!)."
    ]
  },

  // ==========================================
  // DOMAIN 3: MATERNAL
  // ==========================================
  {
    d: 3,
    t: "Labour, Delivery & Fetal Heart Rate Monitoring",
    p: [
      "Fetal Heart Rate (FHR) Baseline: Normal 110 - 160 bpm.",
      "Decelerations & Interventions (VEAL CHOP):",
      "  • Variable Decelerations -> Cord Compression. Tx: Change maternal position (side-to-side/knee-chest), stop oxytocin, give O2, amnioinfusion if ordered.",
      "  • Early Decelerations -> Head Compression. Tx: Normal benign finding during labor; continue monitoring.",
      "  • Accelerations -> Ok / Oxygenated. Reassuring sign of fetal well-being.",
      "  • Late Decelerations -> Placental Insufficiency. Tx: Emergency intrauterine resuscitation — Turn client to Left side, Stop Oxytocin, Administer O2 via non-rebreather mask (8-10 L/min), Increase IV fluids (0.9% NS/LR), notify provider.",
      "Umbilical Cord Prolapse: S/S: Sudden deep variable decelerations or cord visible/palpable in vagina. Action: Call for help, insert gloved hand into vagina and manually lift presenting part off cord, place mother in Knee-Chest or Trendelenburg position, emergency C-section delivery.",
      "Shoulder Dystocia: S/S: 'Turtle sign' (fetal head retracts against perineum). Action: Call for help, McRoberts maneuver (hyperflex mother's legs to abdomen), apply Suprapubic pressure. NEVER apply fundal pressure!",
      "Unexplained Late-Pregnancy Bleeding: NEVER perform a digital vaginal examination until Placenta Previa is excluded by ultrasound!"
    ],
    k: "Late decelerations = Placental Insufficiency. Immediate interventions: Turn to Left side, Stop Oxytocin, Give Oxygen, Increase IV fluids!"
  },
  {
    d: 3,
    t: "Hypertension, Bleeding & Pregnancy Complications",
    p: [
      "Pre-eclampsia: BP >= 140/90 mmHg after 20 weeks gestation + Proteinuria or end-organ dysfunction.",
      "Severe Pre-eclampsia: BP >= 160/110 mmHg, severe persistent headache, visual disturbances, epigastric or RUQ pain (indicates liver edema/capsular stretch).",
      "Eclampsia: Onset of generalized tonic-clonic seizures in pre-eclamptic patient.",
      "Magnesium Sulfate IV: First-line for seizure prevention/treatment in pre-eclampsia/eclampsia.",
      "  • Magnesium Toxicity Signs: Loss of deep tendon reflexes (patellar reflex #1 sign), Respiratory Rate < 12/min, Urine Output < 30 mL/hr, Slurred speech, cardiac arrest.",
      "  • Antidote: Calcium Gluconate 10% IV.",
      "HELLP Syndrome: Hemolysis, Elevated Liver Enzymes, Low Platelets (<100,000). Severe pre-eclampsia variant.",
      "Placenta Previa vs Abruptio Placentae:",
      "  • Placenta Previa: Placenta implanted over internal cervical os. S/S: PAINLESS, bright red vaginal bleeding, soft non-tender uterus. Contraindications: NO vaginal exams!",
      "  • Abruptio Placentae: Premature placenta separation. S/S: PAINFUL, dark red vaginal bleeding, rigid board-like uterus, severe abdominal pain, fetal distress.",
      "Ectopic Pregnancy: Unilateral pelvic pain, dark vaginal spotting, referred shoulder pain (diaphragmatic irritation from hemoperitoneum), signs of shock."
    ]
  },
  {
    d: 3,
    t: "Postpartum & Newborn Assessment",
    p: [
      "Postpartum Hemorrhage (PPH): Cumulative blood loss >= 1000 mL or bleeding with signs of hypovolemia within 24 hours.",
      "4 Ts Causes of PPH: Tone (Uterine Atony #1 cause), Trauma (lacerations), Tissue (retained placenta), Thrombin (coagulopathy).",
      "PPH Interventions: Fundal massage FIRST! Assess bladder (distended bladder displaces uterus up and right -> catheterize). Administer uterotonics: Oxytocin IV (1st line), Methylergonovine IM (CONTRAINDICATED in Hypertension!), Carboprost/Hemabate IM (CONTRAINDICATED in Asthma!), Misoprostol PR.",
      "Lochia Progression: Rubra (dark red, days 1-3) -> Serosa (pinkish-brown, days 4-10) -> Alba (yellowish-white, days 10-14+).",
      "Rh Isoimmunization: Rh-negative mother carrying Rh-positive fetus. Administer RhOGAM (Anti-D Immune Globulin) at 28 weeks gestation AND within 72 hours postpartum.",
      "APGAR Score (Assessed at 1 min and 5 min): Score 0-2 for Appearance (color), Pulse (HR >100 = 2), Grimace (reflex), Activity (muscle tone), Respiration (strong cry = 2). Total 7-10 normal, 4-6 moderate distress, 0-3 severe distress.",
      "Neonatal Jaundice:",
      "  • Physiological Jaundice: Appears AFTER 24 hours of life, benign, peaks day 3-5.",
      "  • Pathological Jaundice: Appears WITHIN first 24 hours of life or serum bilirubin rises rapidly (>5 mg/dL/day). Caused by Rh/ABO incompatibility. Risk of Kernicterus (brain damage). Tx: Phototherapy (eye protection, diaper only, maintain hydration)."
    ],
    k: "Methylergonovine (Methergine) is contraindicated in clients with Hypertension/Preeclampsia. Carboprost (Hemabate) is contraindicated in clients with Asthma."
  },

  // ==========================================
  // DOMAIN 4: CHILD
  // ==========================================
  {
    d: 4,
    t: "Paediatric Respiratory & Acute Emergencies",
    p: [
      "Croup (Laryngotracheobronchitis) vs Epiglottitis:",
      "  • Croup: Viral infection (Parainfluenza). S/S: Barking seal-like cough, inspiratory stridor, hoarseness. Steeple sign on neck X-ray. Tx: Cool mist, Nebulized Racemic Epinephrine, Oral Dexamethasone.",
      "  • Epiglottitis: Bacterial infection (Haemophilus influenzae type b). Life-threatening emergency! S/S: High fever, 4 Ds (Drooling, Dysphagia, Dysphonia, Distress), tripod positioning. Action: DO NOT inspect throat with tongue depressor! Keep child calm, prepare for emergency intubation.",
      "Pediatric Asthma: Wheezing, intercostal retractions, nasal flaring. RED FLAG: 'Silent chest' (disappearance of wheezing/breath sounds with severe work of breathing) indicates impending respiratory failure!",
      "Congenital Heart Defects:",
      "  • Cyanotic (Right-to-Left Shunt): Tetralogy of Fallot (TOF). 'Tet Spells' (hypercyanotic spells) -> Place child in Knee-to-Chest position, give oxygen and morphine.",
      "  • Acyanotic (Left-to-Right Shunt): VSD, ASD, PDA.",
      "  • Coarctation of the Aorta: High blood pressure and bounding pulses in upper extremities; low BP and weak/absent pulses in lower extremities (femoral).",
      "Intussusception: Telescoping of bowel. S/S: Sudden intermittent severe colicky abdominal pain, sausage-shaped abdominal mass, 'currant jelly' stool (blood + mucus). Tx: Air or barium enema.",
      "Pyloric Stenosis: Hypertrophy of pyloric sphincter. S/S: Non-bilious projectile vomiting after feeding, olive-shaped mass in RUQ, visible peristaltic waves, metabolic alkalosis."
    ],
    k: "Never insert a tongue depressor into the mouth of a child suspected of having Epiglottitis — it can trigger fatal laryngospasm!"
  },
  {
    d: 4,
    t: "Growth, Milestones and Child Safety",
    p: [
      "Developmental Milestones:",
      "  • 2 months: Social smile, holds head up when prone.",
      "  • 4 months: Rolls tummy to back, laughs.",
      "  • 6 months: Sits with support, transfers objects hand-to-hand, rolls back to tummy.",
      "  • 9 months: Pincer grasp (thumb + index finger), sits independently, pulls to stand, object permanence.",
      "  • 12 months: Walks alone/cruises, says 1-2 words ('mama/dada'), uses cup.",
      "  • 18 months: Uses spoon, walks up stairs with help, vocabulary 10-20 words.",
      "  • 2 years: 2-word sentences, runs, kicks ball, builds tower of 6 blocks.",
      "  • 3 years: 3-word sentences, rides tricycle, draws circle, dresses self.",
      "SIDS Prevention: Place infant SUPINE ('Back to Sleep') on firm mattress, no loose blankets/pillows/stuffed animals in crib, room-sharing without bed-sharing, avoid smoking exposure.",
      "Car Safety: Rear-facing car seat in back seat until at least age 2 or reaching height/weight limits.",
      "Immunisations & Contraindications: Live attenuated vaccines (MMR, Varicella, Rotavirus, Nasal Flu) are CONTRAINDICATED in pregnancy and severely immunocompromised individuals."
    ]
  },
  {
    d: 4,
    t: "Paediatric Drug Calculations & Safety",
    p: [
      "Maintenance Fluid Calculation (Holliday-Segar 4-2-1 Rule):",
      "  • First 10 kg: 4 mL/kg/hour",
      "  • Second 10 kg (11-20 kg): Add 2 mL/kg/hour",
      "  • Each kg over 20 kg: Add 1 mL/kg/hour",
      "  • Example (15 kg child): (10 × 4) + (5 × 2) = 40 + 10 = 50 mL/hour.",
      "Medication Dosages: Always calculate weight-based dose (mg/kg) and verify against recommended safe range.",
      "Analgesic Dosing: Paracetamol ~10-15 mg/kg/dose every 4-6 hrs. Ibuprofen ~5-10 mg/kg/dose every 6-8 hrs (avoid in infants <6 months).",
      "Aspirin Contraindication: NEVER administer Aspirin to children/adolescents with viral illnesses (influenza, varicella) due to risk of Reye Syndrome (severe encephalopathy and fatty liver failure).",
      "Pediatric Antidotes: Paracetamol -> Acetylcysteine. Iron toxicity -> Deferoxamine. Opioid -> Naloxone."
    ]
  },

  // ==========================================
  // DOMAIN 5: MENTAL HEALTH
  // ==========================================
  {
    d: 5,
    t: "Therapeutic Communication and Crisis Intervention",
    p: [
      "Therapeutic Techniques: Open-ended questions ('Tell me more about...'), Reflection ('It sounds like you feel...'), Clarification, Silence, Active listening, Validating feelings.",
      "Non-Therapeutic Techniques: False reassurance ('Everything will be fine'), Giving advice ('If I were you...'), Asking 'Why' questions (causes defensiveness), Approving/Disapproving, Passing judgment.",
      "Suicide Risk Assessment: Ask directly: 'Are you having thoughts of killing yourself?' Assess: 1. Specific Plan, 2. Lethality of method, 3. Availability of means, 4. Intent.",
      "Suicide Precautions: 1-on-1 constant observation, remove all hazardous objects (shoelaces, belts, razors, glass, plastic bags), search personal belongings, ensure window/door security.",
      "Hallucinations vs Delusions:",
      "  • Hallucinations (perceptual): Acknowledge feelings, orient to reality ('I don't hear the voices, but I know they are frightening to you'). Command hallucinations (voices ordering harm) require immediate risk assessment!",
      "  • Delusions (fixed false beliefs): Validate underlying emotion, do NOT argue or attempt to disprove belief, gently reorient to reality-based topics.",
      "Involuntary Admission: Required when client poses an immediate danger to self, danger to others, or is gravely disabled (unable to meet basic survival needs)."
    ],
    k: "When assessing suicide risk, ask directly and explicitly using clear words like 'suicide' or 'killing yourself'."
  },
  {
    d: 5,
    t: "Psychotropic Drugs & Psychiatric Emergencies",
    p: [
      "SSRIs (Fluoxetine, Sertraline, Citalopram): First-line for depression/anxiety. Takes 2-4 weeks for full therapeutic effect. Monitor for increased suicide risk in first weeks of therapy!",
      "Serotonin Syndrome: Caused by excess serotonin (e.g. SSRI + MAOI/St John's Wort). S/S: Agitation, hyperreflexia, clonus, tremor, fever, diaphoresis, labile BP. Tx: Discontinue agent, supportive care, Benzodiazepines, Cyproheptadine.",
      "MAOIs (Phenelzine, Tranylcypromine): Avoid Tyramine-rich foods (aged cheeses, cured meats, red wine, draft beer, fermented soy). Risk of Hypertensive Crisis (severe BP elevation, occipital headache, intracranial hemorrhage).",
      "Antipsychotic Side Effects:",
      "  • Extrapyramidal Symptoms (EPS): Acute Dystonia (facial spasms, oculogyric crisis — Tx: IV/IM Benztropine or Diphenhydramine), Akathisia (restlessness), Parkinsonism.",
      "  • Neuroleptic Malignant Syndrome (NMS): Life-threatening emergency! S/S: Severe muscle rigidity ('lead pipe'), hyperpyrexia (>38°C), autonomic instability, altered mental status, elevated CPK. Tx: Stop antipsychotic immediately, cooling, IV fluids, Dantrolene.",
      "  • Tardive Dyskinesia (TD): Involuntary choreoathetoid movements of face/tongue (lip smacking, tongue protrusion). Irreversible if unrecognised; discontinue drug.",
      "Clozapine: Atypical antipsychotic. Risk of Severe Neutropenia / Agranulocytosis. Monitor Absolute Neutrophil Count (ANC) regularly; report fever, sore throat, or infection immediately!",
      "Alcohol Withdrawal: S/S: Tremors, anxiety, tachycardia, hypertension, seizures. Delirium Tremens (DTs) occurs at 48-96 hrs (hallucinations, fever, severe agitation). Tx: Benzodiazepines (Chlordiazepoxide, Lorazepam), Thiamine (Vitamin B1 given BEFORE glucose to prevent Wernicke's Encephalopathy!)."
    ],
    k: "Always administer Thiamine BEFORE Glucose in alcohol withdrawal to prevent precipitating Wernicke's Encephalopathy!"
  },
  {
    d: 5,
    t: "Major Psychiatric Disorders & Key Features",
    p: [
      "Schizophrenia: Positive symptoms (hallucinations, delusions, disorganized speech/behavior) vs Negative symptoms (flat affect, avolition, anhedonia, social withdrawal).",
      "Bipolar Mania: Euphoria or irritability, decreased need for sleep, grandiosity, flight of ideas, impulsivity/risky behavior. Interventions: High-calorie finger foods, calm low-stimulation environment, firm clear limits, safe outlets for energy.",
      "Eating Disorders:",
      "  • Anorexia Nervosa: Severe weight loss (<85% expected weight), intense fear of weight gain, body dysmorphia, amenorrhea, lanugo, bradycardia. Refeeding Syndrome risk: Monitor Phosphorus (#1 drop), Potassium, Magnesium.",
      "  • Bulimia Nervosa: Binge eating followed by purging (vomiting/laxatives). Client typically normal weight or slightly overweight. S/S: Russell's sign (knuckle calluses), dental erosion, parotid swelling, Hypokalemia (cardiac dysrhythmia risk).",
      "Defense Mechanisms: Denial, Displacement (redirecting emotion onto safer target), Projection (attributing own unwanted feelings onto another), Rationalisation, Sublimation (channeling unacceptable impulses into socially acceptable actions)."
    ]
  },

  // ==========================================
  // DOMAIN 6: COMMUNITY HEALTH & GERONTOLOGY
  // ==========================================
  {
    d: 6,
    t: "Epidemiology, Outbreaks and Disaster Triage",
    p: [
      "Incidence vs Prevalence:",
      "  • Incidence: Number of NEW disease cases occurring in a specified population during a given timeframe.",
      "  • Prevalence: Total number of ALL (new + existing) cases in a population at a specific point in time.",
      "  • Attack Rate: Biostatistical proportion of exposed individuals who develop disease (cases / total exposed).",
      "Disaster Triage (START Protocol - Simple Triage and Rapid Treatment):",
      "  • RED (Immediate / Category 1): Life-threatening injuries with high survival probability if treated immediately (e.g. airway obstruction, tension pneumothorax, uncontrolled external hemorrhage, RR > 30, capillary refill > 2 sec).",
      "  • YELLOW (Delayed / Category 2): Serious injuries needing care within 30 min-2 hr; currently stable (e.g. major bone fractures, open wounds without active hemorrhage).",
      "  • GREEN (Minor / Walking Wounded / Category 3): Ambulatory, minor injuries (sprains, minor cuts).",
      "  • BLACK (Expectant / Deceased / Category 4): Deceased or catastrophic injuries incompatible with life (e.g. decapitation, unresponsiveness with no spontaneous breathing after opening airway).",
      "Isolation vs Quarantine: Isolation separates SICK infected individuals. Quarantine restricts healthy people who were EXPOSED to infectious disease."
    ],
    k: "In START disaster triage, an adult with Respiratory Rate > 30/min or absent radial pulse gets tagged RED (Immediate)!"
  },
  {
    d: 6,
    t: "Gerontological Nursing & Comprehensive Care",
    p: [
      "Delirium vs Dementia vs Depression:",
      "  • Delirium: ACUTE onset, fluctuating course, REVERSIBLE, impaired consciousness and attention. Triggered by medical causes: Infection (UTI #1 cause in elderly), hypoxia, electrolyte imbalance, drug toxicity, urinary retention/constipation.",
      "  • Dementia: GRADUAL onset, progressive cognitive decline, IRREVERSIBLE, intact consciousness until late stages.",
      "  • Depression (Pseudodementia): Gradual or subacute onset, reversible with treatment, client often highlights cognitive deficits ('I don't know').",
      "Beers Criteria: High-risk medications to avoid in older adults due to adverse effects/fall risk (e.g. long-acting Benzodiazepines, Diphenhydramine/antihistamines, TCAs, Indomethacin, Muscle relaxants).",
      "Polypharmacy: Concurrent use of multiple medications. Perform routine 'brown bag' medication reconciliation.",
      "Elder Abuse & Neglect: Physical, emotional, financial, or neglect. S/S: Unexplained bruises at various healing stages, dehydration, pressure injuries, withdrawal, caregiver refusing private interview. Action: Interview elder ALONE, document findings objectively, report to designated authorities."
    ],
    k: "Sudden acute confusion in an older adult is Delirium until proven otherwise! Always check for underlying infection (UTI) or medication toxicity."
  },
  {
    d: 6,
    t: "Community & Occupational Health Principles",
    p: [
      "Primary Health Care Principles: Universal accessibility, equity, community participation, health promotion, intersectoral collaboration.",
      "Community Assessment Methods:",
      "  • Windshield Survey: Observational assessment made while driving/walking through community (housing quality, environmental hazards, public transport, safety, services).",
      "  • Informant Interviews & Focus Groups: Direct qualitative data collection from community leaders and residents.",
      "Health Belief Model: Explains health behaviors based on perceived susceptibility, perceived severity, perceived benefits, perceived barriers, and cues to action.",
      "Transtheoretical Model (Stages of Change): Pre-contemplation (no intent to change) -> Contemplation (aware, considering change within 6 mos) -> Preparation (planning action within 30 days) -> Action (actively modifying behavior <6 mos) -> Maintenance (sustained change >6 mos).",
      "Environmental & Food Safety: Food Danger Zone is 5°C to 60°C (41°F to 140°F). Boil water for at least 1 minute for emergency disinfection."
    ]
  }
];
