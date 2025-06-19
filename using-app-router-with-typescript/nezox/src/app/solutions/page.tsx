import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SolutionsCard from "../../components/Solutions/SolutionsCard";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="G3 Sec . Ai"
        homePageUrl="/"
        homePageText="Home"
        activePageText="G3 Sec . Ai"
      />

      <SolutionsCard />

      <Footer />
    </>
  );
}
