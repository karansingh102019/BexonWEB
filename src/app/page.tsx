import CompanyAboutSection from "@/components/aboutSection";
import BrandSilder from "@/components/brandSilder";
import BusinessExpertise from "@/components/Expertise";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner1";
import MegaMenu from "@/components/megaMenu";
import Solutions from "@/components/solutionSection";


export default function Home() {
  return (
    <>
    <Header/>
    <HeroBanner/>
    <BrandSilder/>
    <BusinessExpertise/>
    <CompanyAboutSection/>
    <Solutions/>
    
    </>
  );
}
