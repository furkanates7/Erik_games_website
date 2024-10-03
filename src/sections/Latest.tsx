import React from 'react'
import Image from 'next/image'
import PotatoArena from "@/assets/PotatoArena/Ekran Görüntüsü (113).png";
import Dune from "@/assets/Latest/dune.png";
import LordOfDwarf from "@/assets/Latest/lordofdwarf.png";
import Monza from "@/assets/Latest/monza.png";
import Stadium from "@/assets/Latest/stadium.png";



export default function Latest() {
    const newsItems = [
        {
            title: "Dune Race Track ",
            source: "Unreal Engine",
            image: Dune,
        },
        {
            title: "Lord of Dwarf Home ",
            source: "Unreal Engine",
            image:  LordOfDwarf,
        
        },
        {
            title: "Monza Formula Track Real Map ",
            source: "Unreal Engine",
            image: Monza,
        },
        {
                title: "Olympic Games Stadium ",
                source: "Unreal Engine",
                image: Stadium,
            }
    ]

    


    return (
        
                <section id='latest'>

                <h1 id="latest"className="text-4xl md:text-5xl font-bold tracking-tighter p-5 md:p-20 text-black transition-all duration-300 ease-in-out group-hover:text-shadow-glow">
                    Latest in Erik Games
                </h1>

                <main className="flex-grow overflow-hidden md:px-20 px-5 ">
                    <div className="h-full grid grid-cols-1 lg:grid-cols-5 gap-2 md:gap-6">
                        <div className="col-span-1 lg:col-span-3 bg-transparent rounded-lg overflow-hidden">
                            <div className=" h-full w-full transform transition-transform duration-300 hover:-translate-y-2 p-2">
                                    <Image
                                            src={PotatoArena}
                                            alt="Potato Arena Steam'de"
                                            layout="responsive"
                                            width={700}
                                            height={475}
                                            quality={100}
                                            className="rounded-xl"
                                    />
                                    <div className=" md:py-6 pt-2 bg-transparent w-full">
                                            <h2 className="text-xl md:text-4xl text-black font-bold my-4 tracking-tighter">Potato Arena Çok Yakında Steam&apos;de</h2>
                                    </div>
                            </div>
                        </div>
                        
                        <div className="col-span-2 md:space-y-5 space-y-3 p-2">
                            {newsItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="bg-[#64748b]  rounded-xl overflow-hidden flex transform transition-transform duration-300 hover:-translate-y-2"
                                >
                                    <div className="w-1/2 p-6 flex flex-col justify-center">
                                        <h3 className="md:font-bold font-small  text-white">{item.title}</h3>
                                        <p className="md:text-sm text-xs text-white">{item.source}</p>
                                    </div>
                                    <div className="w-1/2">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            layout="responsive"
                                            width={150}
                                            height={150}
                                            quality={100}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main> 
                </section>
            
            


            
       
    )
}