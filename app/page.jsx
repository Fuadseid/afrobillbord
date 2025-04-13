import Hero from "./hero/page";
import Products from "./Pages/Products";
import { SupplierCard } from "./Component/Suppliercomp";
import About from "./about/page";
export default function Home() {
  return (
    <div className="space-y-16 top-0 pb-16 min-h-screen dark:text-white">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="supplier">
        <SupplierCard />
      </section>
    </div>
  );
}
