"use client";
  
import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <>
      <div className="feature-area feature-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>Consulting Services</h3>
                  </div>
                  <p>
                  Cybersecurity & Data Privacy for Trusted Business Protection
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>Professional Services</h3>
                  </div>
                  <p>
                  vCISO & vDPO for Strategic Security and Compliance Leadership
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>VAPT</h3>
                  </div>
                  <p>
                  Vulnerability & Penetration Testing Services for Enhanced Security Assurance
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>Framework Implementation</h3>
                  </div>
                  <p>
                  Implementation services for various global ISO standards & frameworks
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>Privacy Compliance</h3>
                  </div>
                  <p>
                  Roadmap, frameworks & consulting for compliance with global regulations
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Security Tools</h3>
                  </div>
                  <p>
                  Flagship tool driven with AI to ease compliance with automation.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
