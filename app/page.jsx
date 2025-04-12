import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "./ui/CardContainer";
import Hero from "./Pages/Hero";
import About from "./Pages/About";

export default function Home() {
  return (
  
   /*  <CardContainer containerClassName={"bg-gray-100"} className="bg-white">
    <CardBody className={"bg-gray-200"}>
      <CardItem className={"bg-red-200"} translateZ="100px">Hover Me!</CardItem>
    </CardBody>
  </CardContainer>   */
<div className="pt-10 space-y-16 pb-16 min-h-screen dark:text-white">
  <Hero/>
<About/>
</div>

  );
}
