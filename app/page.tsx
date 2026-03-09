import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Philosophy from "@/components/sections/Philosophy";
import Curriculum from "@/components/sections/Curriculum";
import Opportunity from "@/components/sections/Opportunity";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
            <Navbar />
            <Hero />
            <SocialProof />
            <Philosophy />
            <Curriculum />
            <Opportunity />
            <Features />
            <FAQ />
            <Footer />
        </main>
    );
}
