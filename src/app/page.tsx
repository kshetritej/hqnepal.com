import { HQHero } from "@/components/site/HQHero";
import { HQClients } from "@/components/site/HQClients";
import { HQServices } from "@/components/site/HQServices";
import { HQMission } from "@/components/site/HQMission";
import { HQWork } from "@/components/site/HQWork";
import { HQTestimonial } from "@/components/site/HQTestimonial";
import { HQPricing } from "@/components/site/HQPricing";
import { HQFaq } from "@/components/site/HQFaq";
import { HQFooter } from "@/components/site/HQFooter";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HQHero />
      <HQClients />
      <HQServices />
      <HQMission />
      <HQWork />
      <HQTestimonial />
      <HQPricing />
      <HQFaq />
      <HQFooter />
    </main>
  );
}
