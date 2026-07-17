import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OldWayVsKeepr } from "@/components/OldWayVsKeepr";
import { HowItWorks } from "@/components/HowItWorks";
import { Showcase } from "@/components/Showcase";
import { SearchFeature } from "@/components/SearchFeature";
import { Pricing } from "@/components/Pricing";
import { Trust } from "@/components/Trust";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <a id="top" />
      <main>
        <Hero />
        <OldWayVsKeepr />
        <HowItWorks />
        <Showcase />
        <SearchFeature />
        <Pricing />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
