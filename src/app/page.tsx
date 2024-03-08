import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Product from "@/components/Product";
import Section3 from "@/components/Section3";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen mt-10">
      <Hero />
      <Promotions/>
      <Product/>
      <Section3/>
      <Newsletter />
    </div>
  );
}
