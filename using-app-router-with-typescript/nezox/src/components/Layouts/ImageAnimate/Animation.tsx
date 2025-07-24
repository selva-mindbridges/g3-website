"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Animation = () => {

  const images = [
  "/images/TRACS/Smart questionnaire.jpg",
  "/images/TRACS/Risk Based Questionnaire Scoping.jpg",
  "/images/TRACS/AI Driven Evidence review.jpg",
   "/images/TRACS/POst contract compliance monitoring.png",
   "/images/TRACS/Global COmpliance support.png",
    "/images/TRACS/360 degree compliance.png",
     "/images/TRACS/Enterprise ready integrations & API.jpg",
      "/images/TRACS/Visual Dashboards & reporting.jpg",
       "/images/TRACS/User roles & workflow automation.jpg",
 
];

const contentSections = [
  { title: "Trigger assessments based on risk level and business context", description2: "TRACS helps you automate vendor assessments with smart, targeted questionnaires: ", list1: " Deploy risk-tiered templates (High, Medium, Low) based on inherent risk scoring." , list2: "Use pre-built modules for Privacy, ESG, Cybersecurity, Legal, and BCP." , list3: "Auto-trigger relevant questionnaires based on vendor profile, geography, or service type.", result: " Vendors receive only the questions that matter — saving time, improving accuracy, and ensuring complete risk coverage." },
  { title: "Risk-Based Questionnaire Scoping",description1: "Assess what matters, based on risk", description2: "Automate questionnaire workflows using:", list1: " Inherent risk logic for questionnaire depth" , list2: "Risk-tiered templates (Low / Medium / High)" , list3: " Auto-assignment to internal reviewers based on domain", result: "Faster reviews, focused resources, reduced assessment fatigue." },
   { title: "AI-Driven Evidence Review", description1: "Accelerate document validation with intelligence", description2: "Stop manual reviews of SOC 2s, policies, and certifications.", list1: 'Automatically match uploads with control expectations', list2: 'Flag outdated or missing documents', list3: 'Suggest follow-ups based on content gaps', result: "Reduce review time from days to minutes — with zero compromise on quality."  },
    { title: "Post Contract Compliance Monitoring", description1: "Don’t stop at onboarding — monitor continuously", description2: "Track vendor obligations after the contract is signed:", list1: 'Set recurring check-ins or reviews', list2: ' Automate alerts for expiring docs or policy gaps', list3: 'Trigger reassessments upon major changes', result: " Stay in control through the full lifecycle — not just the beginning." },
     { title: "Global Compliance Support", description1: "Meet regulations across geographies and sectors", description2: "TTRACS supports assessment and reporting alignment with:", list1: ' HIPAA, SEBI, ISO/IEC 27001, ISO 27701', list2: ' DPDP Act (India), GDPR, DORA, NIS2', list3: ' UAE, Qatar, Oman, and KSA privacy laws', result: " Be audit-ready and regulation-compliant from Day 1." },
      { title: "360° Risk Intelligence Integration", description1: "Bring in external signals for deeper insights", description2: "TRACS connects to:", list1: 'Cyber ratings', list2: 'ESG, financial, and reputational data', list3: 'Blacklists, sanctions, and threat feeds', result: "Make smarter decisions with contextual, real-time third-party insights."  },
       { title: "Enterprise ready integrations & API", description1: "Connect your GRC ecosystem", description2: "Use our prebuilt APIs and connectors to:", list1: ' Push/pull data to GRC tools and internal dashboards', list2: ' Trigger tasks from ticketing or procurement systems', list3: 'Export assessments for auditors and stakeholders', result: "Integrate TPRM into your daily operations — no silos." },
        { title: "Visual Dashboards & reporting", description1: "Real-time visibility for every role", description2: "From operational users to C-level execs, TRACS provides:", list1: ' Role-based dashboards and insights', list2: 'Progress tracking, SLA reminders, and overdue flags', list3: 'Export-ready reports for board and regulator updates', result: "One interface, total transparency."  },
         { title: "User roles & workflow automation", description1: "Designed for security, legal, and procurement teams", description2: "Assign responsibilities and approvals with:", list1: 'Deploy risk-tiered templates (High, Medium, Low) based on inherent risk scoring.', list2: ' Use pre-built modules for Privacy, ESG, Cybersecurity, Legal, and BCP.', list3: ' Auto-trigger relevant questionnaires based on vendor profile, geography, or service type.', result: "Governance built-in, with traceability and accountability."  },
];

const sectionRefs = useRef<HTMLDivElement[]>([]);

const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [transitioning, setTransitioning] = useState(false);


  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((el) => el === entry.target);
          setCurrentImageIndex(index);
        }
      });
    },
    { threshold: 0.5 }
  );

  sectionRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => {
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.unobserve(ref);
    });
  };

  
}, []);

useEffect(() => {
  setTransitioning(true);

  const timeout = setTimeout(() => {
    setTransitioning(false);
  }, 500); // Match with CSS animation duration

  return () => clearTimeout(timeout);
}, [currentImageIndex]); // Depend on image index change


  return (
    <div>
        <h2 className="smart-questionnaire">Smart Questionnaire Automation</h2>

    <div className="solution-container">
  <div className="image-sticky">
   <Image
    src={images[currentImageIndex]}
    alt="Dynamic"
    width={500}
    height={400}
    className={`animated-image ${transitioning ? "fade-scale" : ""}`}
   />
    </div>
    

  <div className="content-scroll"> 
    {contentSections.map((section, index) => (
      <div
        className="content-section"
        ref={(el) => {
         if (el) sectionRefs.current[index] = el;
         }}

        key={index}
      > <div className="content-area">
          <h2>{section.title}</h2>
        <p>{section.description1}</p>
        <p className="blue-para">{section.description2}</p>
        <ul>
            <li className="list"><span className="dot">•</span>  {section.list1}</li>
            <li className="list"><span className="dot">•</span>  {section.list2}</li>
            <li className="list"><span className="dot">•</span> {section.list3}</li>
        </ul>
        <p className="last-para"><span className="result" >Results: </span>{section.result} </p>
      </div>
      </div>
    ))}
  </div>
</div>
</div>
  );
};

export default Animation;
