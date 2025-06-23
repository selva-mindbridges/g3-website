"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-area bg-1 border-bottom-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-content">
                <span className="top-title">Secure Growth in the Digital Era</span>
                <h1>Built on Trust and Cybersecurity</h1>
                <p>
                Empower your business to thrive securely in a world of digital trust and robust cybersecurity.
                </p>

                <div className="banner-btn">
                  <Link href="/contact" className="default-btn">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="banner-image">
                <Image
                  src="/images/banner/banner-img-1.jpg"
                  alt="image"
                  width={900}
                  height={745}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
