import React from 'react'
import Image from 'next/image'
import AlphaInvasion from "@/assets/AlphaInvasion/Ekran Görüntüsü (238).png";

import Potato from "@/assets/Latest/potato.png";
import Brain from "@/assets/GameItems/braininretrospace.png";
import BrainBreaker from "@/assets/GameItems/brain.png";

export default function Games() {
    
    const gameItems = [
        {
            title: "Potato Arena",
            source: "Steam",
            image: Potato,
        },
        {
            title: "Brain Breaker",
            source: "PlayStation",
            image: BrainBreaker,
        
        },
        {
            title: "Alpha Invasion",
            source: "PlayStation",
            image: AlphaInvasion,
        },
        {
            title: "Brain In Retro Space",
            source: "PlayStation",
            image: Brain,
        }
    ]


    return(
        
            <section id='games'>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter p-10 md:p-20 text-black transition-all duration-300 ease-in-out group-hover:text-shadow-glow">
                    Games
                </h1> 
                
                <main className="flex-grow overflow-hidden px-5 md:px-20  ">
                            <div className="h-full grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-3 p-2">
                                    {gameItems.map((item, index) => (
                                    <div 
                                            key={index} 
                                            className="bg-[#64748b] rounded-xl overflow-hidden flex transform transition-transform duration-300 hover:-translate-y-2"
                                    >
                                            <div className="w-1/3 md:p-6 p-3 flex flex-col justify-center">
                                        <h3 className="md:font-bold font-small  text-white">{item.title}</h3>
                                        <p className="md:text-sm text-xs text-white">{item.source}</p>
                                    </div>
                                    <div className="w-2/3">
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
                </main>
                <div className="flex justify-center overflow-hidden pt-10">
                    <a 
                        href="https://www.unrealengine.com/marketplace/en-US/profile/ErikGames?count=20&sortBy=effectiveDate&sortDir=DESC&start=0" 
                        className="btn btn-primary w-auto px-6 py-2 transform transition-transform duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            View All
                    </a>
                </div>
                </section>
       
        
        
        
    );
}
