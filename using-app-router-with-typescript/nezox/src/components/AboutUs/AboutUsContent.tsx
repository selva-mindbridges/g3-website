"use client";
  
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/about-img.jpg"
                  alt="Image"
                  width={600}
                  height={545}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <span>About Us</span>
                  <h2>
                  At G3 Cyberspace, we empower businesses with expert solutions in cybersecurity, data privacy, and compliance—helping them navigate the digital landscape with confidence.
                  </h2>
                </div>

                <Tabs>
                  <TabList>
                    <Tab>Our Experience</Tab>
                    <Tab>Why Us?</Tab>
                    <Tab>Our Approach</Tab>
                  </TabList>

                  <TabPanel>
                    <p>
                    {`G3 Cyberspace brings years of hands-on expertise in cybersecurity, data privacy, and compliance. We've helped businesses protect digital assets and meet evolving security standards.`}
                    </p>

                    <ul>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Over a decade of cybersecurity consulting experience
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Proven track record across multiple industries
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Certified experts in ISO, GDPR, HIPAA, and more
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Delivered 100+ successful security projects globally
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <p>
                    We combine technical excellence with a strategic mindset to deliver tailored, business-aligned security solutions. Clients choose us for our reliability, transparency, and long-term value.
                    </p>

                    <ul>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Customized solutions for unique business needs
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Client-first approach with measurable impact
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Trusted by startups, enterprises, and government sectors
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Continuous support and proactive risk management
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <p>
                    Our methodology focuses on understanding your business, assessing risk, and implementing scalable solutions. We guide you through every stage of your cybersecurity and compliance journey.
                    </p>

                    <ul>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Consultative discovery and risk assessment
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        End-to-end implementation with clear milestones
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Compliance-driven yet business-friendly frameworks
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Ongoing optimization and maturity improvements
                      </li>
                    </ul>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
