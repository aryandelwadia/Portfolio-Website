import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain"></Image>
      </div>
      
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-bold md:text-6xl">Crafting Digital Experiences, Designing Tommorow</h1>
        <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt autem iusto veniam, aperiam provident porro nesciunt repellendus magnam facere libero ad ipsa perspiciatis officia distinctio sint eligendi mollitia explicabo!</p>
        <div className="flex gap-4 ">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
