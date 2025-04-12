import Hero from "./hero/page";
import About from "./about/page";
import { SupplierCard } from "./Component/Suppliercomp";

export default function Home() {
  return (

<div className="pt-10 space-y-16 pb-16 min-h-screen dark:text-white">
 
 <section id="hero">
 <Hero/>
 </section>


<section id="about">
<About/>
</section>

<section id="supplier">
<SupplierCard/>
</section>
</div>

  );
}
