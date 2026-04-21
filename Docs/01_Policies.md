# Women Safety Project - India Policy & Compliance Baseline

## Purpose
This document is the policy baseline for designing and building a women safety product in India. It reviews your original policy checklist, applies corrections where needed, and adds additional legal/compliance requirements that are important before product development.

## 1) Obtain explicit user consent before collecting any personal data
- **Law/Policy:** Digital Personal Data Protection Act, 2023 (DPDP)

## 2) Display a plain-language privacy notice explaining what data is collected and why
- **Law/Policy:** DPDP Act, 2023; DPDP Rules, 2025 (notice clarity requirements)

## 3) Allow users to withdraw consent and delete their data at any time
- **Correct position:** Consent withdrawal should be easy and available. Erasure/deletion is a user right, but not absolute where retention is required by law or necessary for purpose/legal defense.
- **Law/Policy:** DPDP Act, 2023

## 4) Report every data breach to the Data Protection Board, regardless of severity
- **Correct position:** Intimation to Board and affected Data Principals is required under DPDP framework, with timing/details governed by rules.
- **Law/Policy:** DPDP Act, 2023; DPDP Rules, 2025

## 5) Appoint a Data Protection Officer (DPO) based in India if you qualify as a Significant Data Fiduciary
- **Law/Policy:** DPDP Act, 2023

## 6) Conduct annual Data Protection Impact Assessments (DPIAs)
- **Scope:** Applies to Significant Data Fiduciaries (SDFs), with periodicity clarified in rules.
- **Law/Policy:** DPDP Act, 2023; DPDP Rules, 2025

## 7) Do not track, profile, or target children (under 18) behaviorally
- **Correct position:** Child tracking/behavioral monitoring and targeted ads are restricted, subject to notified exceptions.
- **Law/Policy:** DPDP Act, 2023

## 8) Implement reasonable security practices to protect sensitive personal data until May 2027
- **Context:** IT Act s.43A/SPDI framework remains relevant during DPDP rollout transition; DPDP amendments phase in over time.
- **Law/Policy:** IT Act, 2000 + SPDI Rules, 2011; DPDP commencement notifications

## 9) Register on the DLT platform before sending any SMS alerts or OTP messages to users
- **Law/Policy:** TRAI TCCCPR framework (and related DLT operational requirements)

## 10) Preserve and escalate reports of sexual assault, kidnapping, or serious offences received on your platform
- **Correction:** Treat as a mandatory incident-response and lawful escalation SOP; do not label this as a single direct BNS duty on all platforms.
- **Law/Policy:** BNS/BNSS-aligned criminal reporting workflows, law-enforcement cooperation obligations

## 11) Mandatorily report any child sexual abuse content or disclosures to authorities
- **Law/Policy:** POCSO Act, 2012 (mandatory reporting; failure punishable)

## 12) Build referral pathways to Protection Officers and Magistrates for domestic violence cases
- **Law/Policy:** Protection of Women from Domestic Violence Act, 2005 (PWDVA)

## 13) Set up an Internal Complaints Committee (ICC) if your solution has a B2B/employer-facing component
- **Correct position:** ICC requirement is tied to workplace/employer threshold (10+ employees), not only to “B2B-facing” product design.
- **Law/Policy:** POSH Act, 2013

## 14) Ensure media capture features (photo/video/location) do not enable stalking or privacy violation
- **Law/Policy:** IT Act and relevant offences under criminal law (BNS)

## 15) Ensure algorithmic/AI systems do not produce unfair or harmful outcomes
- **Correct position:** Under DPDP, this is strongest for SDF risk controls (e.g., technical due diligence and DPIA/audit context), not a standalone general AI law.
- **Law/Policy:** DPDP Act, 2023; DPDP Rules, 2025

## 16) Map emergency flow to nearest One Stop Centre (OSC)
- **Law/Policy:** Mission Shakti / OSC guidelines

## 17) Integrate or provide direct referral to Women Helpline 181
- **Law/Policy:** Women Helpline (WHL) component under Mission Shakti

## 18) Route SOS features through/alongside ERSS-112
- **Law/Policy:** MHA ERSS-112 framework

## 19) Direct workplace harassment reports to SHe-Box portal
- **Correct position:** Integrate referral/use of SHe-Box where applicable; avoid over-stating as universal mandatory routing for every complaint path.
- **Law/Policy:** POSH Act ecosystem + SHe-Box operational framework

## 20) Register under FCRA if accepting foreign funding or grants
- **Correct position:** Applies to foreign contribution under FCRA-regulated entities/activities; not all foreign capital routes are treated the same.
- **Law/Policy:** FCRA, 2010

## 21) Include gender sensitization training for human responders/volunteers
- **Law/Policy:** Strong compliance best practice aligned with government safety frameworks

## 22) Follow MHA investigation standards/medical examination protocols if interfacing with police or survivor tracking
- **Correction:** Keep as operational requirement; validate exact cited framework names document-by-document (including “ITSSO” reference).

## Part B: Additional Policies to consider

## A1) DPDP phased commencement planning
- Build your product roadmap with phased legal enforcement dates (already in force vs later phases).
- **Why important:** prevents over/under-compliance during rollout.

## A2) IT Intermediary Rules compliance (if your product is an intermediary)
- Publish user rules/privacy policy, appoint grievance mechanism, follow complaint timelines, and takedown process for prohibited content categories.
- **Law/Policy:** IT Intermediary Rules, 2021 (as amended)

## A3) CERT-In cyber incident reporting readiness
- Prepare incident playbooks, logging, evidence, and reporting procedures as per current directions.
- **Law/Policy:** CERT-In Directions under IT Act s.70B

## A4) BNSS-aligned complaint intake UX
- Enable e-reporting support and lawful escalation pathways, including survivor-friendly handoff to police systems.
- **Law/Policy:** BNSS (in force from July 1, 2024)

## A5) Domestic violence rights disclosure script
- In high-risk DV flows, provide immediate info on shelter, medical aid, legal aid, protection orders, and officer referral.
- **Law/Policy:** PWDVA, especially duty-to-inform ecosystem

## A6) Data retention + legal hold matrix
- Define what is deleted on request, what must be retained by law, and what is held for legal defense/evidence.

## A7) Lawful request handling SOP
- Verify and log all law-enforcement/government requests; disclose only minimum necessary data.

## A8) Child safety moderation protocol
- Mandatory handling for CSAM indicators, reporting/escalation routes, and safe evidence handling.
- **Law/Policy:** POCSO + IT/cyber reporting controls

## A9) Accessibility and multilingual emergency UX
- Panic/SOS, reporting, and counseling flows should support users with disabilities and regional language needs.

## A10) State-wise integration matrix
- Maintain live operating matrix for OSC/181/112 and state-specific escalation contacts.
- **Why important:** execution differs by state/UT operations.

## Part C: Practical Product Checklist (Build-Ready)

- Consent and notice flows implemented in app/web onboarding
- Data map created (what is collected, why, retention, sharing)
- User rights console: access, correction, erasure, grievance, withdrawal
- Breach response runbook approved (legal + security + user comms)
- Child safety controls and age/guardian logic integrated
- Incident taxonomy: emergency, criminal, harassment, DV, child risk
- SOS integrations for `112`, referral options for `181`, and OSC mapping
- POCSO and high-risk escalation SOP finalized and trained
- Workplace harassment intake aligned with POSH and SHe-Box referral options
- DLT/SMS compliance for OTP and alerts
- CERT-In readiness and evidence-grade logging
- Staff training: trauma-informed, gender-sensitive, confidentiality-first

## Part D: Primary Source Links

## Core data protection and cyber
- DPDP Act, 2023 (India Code PDF): https://www.indiacode.nic.in/bitstream/123456789/22037/1/a2023-22.pdf
- DPDP Rules, 2025 Gazette notification: https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf
- CERT-In Directions page (s.70B): https://www.cert-in.org.in/Directions70B.jsp

## Telecom messaging and emergency systems
- TRAI TCCCPR, 2018 page: https://trai.gov.in/node/3199
- MHA ERSS-112: https://www.mha.gov.in/en/commoncontent/emergency-response-support-system-erss
- 112 portal: https://112.gov.in/

## Women safety support systems
- Mission Shakti / OSC and WHL documents: https://www.spniwcd.wcd.gov.in/one-stop-centre-header/documents
- SHe-Box portal: https://shebox.wcd.gov.in/

## Statutes
- POSH Act, 2013: https://www.indiacode.nic.in/handle/123456789/17057
- POCSO Act, 2012: https://www.indiacode.nic.in/handle/123456789/17804
- PWDVA Act, 2005: https://www.indiacode.nic.in/handle/123456789/12904
- FCRA Act, 2010: https://www.indiacode.nic.in/handle/123456789/2098
- IT Rules 2021 (MeitY consolidated text): https://www.meity.gov.in/static/uploads/2024/02/IT-Intermediary-Rules-2021-updated-on-28.10.2022.pdf

## Notes and Cautions
- Legal requirements are highly context-dependent (entity type, data volume/sensitivity, product role, sector, geography).
- This is a compliance baseline for product planning and implementation, not legal advice.
- Validate state-specific operational SOPs before launch.
