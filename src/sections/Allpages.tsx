"use client";

import React from 'react'
import Image from 'next/image'
import ErikImage from "@/assets/erik_image.png";
import ErikText from "@/assets/erik_text.png";
import Nintendo from "@/assets/nintendo.png";
import PS from "@/assets/ps.png";
import Steam from "@/assets/steam.png";
import Unity from "@/assets/unity.png";
import Unreal from "@/assets/unreal.png";
import Info from '@/sections/Info';
import Latest from '@/sections/Latest';
import Games from '@/sections/Games';
import Assets from '@/sections/Assets';


export default function Allpages() {
    
    return (
        <div className="flex flex-col bg-gradient-to-b from-white to-stone-100 overflow-hidden relative flex flex-col md:flex-1 z-10">
            <section id="info" className='z-20'>
                <Info />
            </section>
            <section id="latest" className='z-20'>
                <Latest />
            </section>
            <section id="games" className='z-20'>
                <Games />
            </section>
            <section id="assets" className='z-20'>
                <Assets />
            </section>

            <section id='background'>
                <div className="absolute inset-0 flex justify-center opacity-20 p-10 overflow-hidden" style={{ transform: 'translate(0%, 33%)' }} >
                <Image 
                    src={ErikImage} 
                    alt="Erik Games" 
                    className="md:h-80 h-40 w-auto max-w-none"
                />
                </div>
                <div className="absolute inset-0 flex justify-center opacity-20 p-10 mt-10 overflow-hidden" >
                <Image 
                    src={ErikImage} 
                    alt="Erik Games" 
                    className="md:h-0 h-60 w-auto max-w-none"
                />
                </div>

                <div className="absolute inset-0 flex items-end justify-end opacity-30 p-0 overflow-hidden">
                <Image 
                    src={ErikText} 
                    alt="Erik Games" 
                    className="md:h-20 h-10 w-auto max-w-none"
                />
                </div>

                <div className="absolute inset-0 flex justify-center opacity-30 p-0 overflow-hidden" style={{ transform: 'translate(30%, 17%)' }}>
                <Image 
                    src={ErikText} 
                    alt="Erik Games" 
                    className="h-0 md:h-20 w-auto max-w-none"
                />
                </div>

                <div className="absolute inset-0 flex justify-center opacity-30 p-20 overflow-hidden" style={{ transform: 'translate(45%, 35%)' }}>
                <Image 
                    src={Nintendo} 
                    alt="Erik Games" 
                    className="h-80 w-auto max-w-none "
                />
                </div>

                <div className="absolute inset-0 flex opacity-30 p-20 overflow-hidden" style={{ transform: 'translate(0%, 10%)' }}>
                    <Image 
                        src={PS} 
                        alt="Erik Games" 
                        className="h-[0%] md:h-[7%] w-auto max-w-none"
                    />
                </div>

                <div className="absolute inset-0 flex  opacity-20 p-20 overflow-hidden" style={{ transform: 'translate(-10%, 39%)' }}>
                <Image 
                    src={Steam} 
                    alt="Erik Games" 
                    className="md:h-80 h-40 w-auto max-w-none"
                />
                </div>

                <div className="absolute inset-0 flex  justify-center opacity-30 p-20 overflow-hidden " style={{ transform: 'translate(0%, 50%)' }}>
                <Image 
                    src={Unity} 
                    alt="Erik Games" 
                    className="h-20 w-auto max-w-none"
                />
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-10 p-20 overflow-hidden" style={{ transform: 'translate(0%, 21%)' }}>
                <Image 
                    src={Unreal} 
                    alt="Erik Games" 
                    className="h-60 w-auto max-w-none"
                />
                </div>
            </section>

        </div>
        )};
            
            
            