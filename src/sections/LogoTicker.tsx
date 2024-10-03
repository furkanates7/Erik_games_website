'use client';
import NintendoLogo from "@/assets/brands-logos/logo-nintendo.png";
import PSLogo from "@/assets/brands-logos/logo-ps.png";
import UnityLogo from "@/assets/brands-logos/logo-unity.png";
import UnrealLogo from "@/assets/brands-logos/logo-unreal.png";
import SteamLogo from "@/assets/brands-logos/logo-steam.png";
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function LogoTicker(): JSX.Element {
  return <div>
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <div className='container py-8 '>
        <motion.div className='flex gap-14 pr-14 flex-none' 
        animate={{
          translateX: "-50%"
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",  
        }  }
        >
          <Image src={NintendoLogo} alt='nintendo logo' className="logo-ticker-image"/>
          <Image src={PSLogo} alt='ps logo'className="logo-ticker-image" />
          <Image src={UnityLogo} alt='unity logo'className="logo-ticker-image" />
          <Image src={UnrealLogo} alt='unreal logo' className="logo-ticker-image"/>
          <Image src={SteamLogo} alt='steam logo'className="logo-ticker-image" />
          <Image src={NintendoLogo} alt='nintendo logo' className="logo-ticker-image"/>
          <Image src={PSLogo} alt='ps logo'className="logo-ticker-image" />
          <Image src={UnityLogo} alt='unity logo'className="logo-ticker-image" />
          <Image src={UnrealLogo} alt='unreal logo' className="logo-ticker-image"/>
          <Image src={SteamLogo} alt='steam logo'className="logo-ticker-image" />
          <Image src={NintendoLogo} alt='nintendo logo' className="logo-ticker-image"/>
          <Image src={PSLogo} alt='ps logo'className="logo-ticker-image" />
          <Image src={UnityLogo} alt='unity logo'className="logo-ticker-image" />
          <Image src={UnrealLogo} alt='unreal logo' className="logo-ticker-image"/>
          <Image src={SteamLogo} alt='steam logo'className="logo-ticker-image" />
          <Image src={NintendoLogo} alt='nintendo logo' className="logo-ticker-image"/>
          <Image src={PSLogo} alt='ps logo'className="logo-ticker-image" />
          <Image src={UnityLogo} alt='unity logo'className="logo-ticker-image" />
          <Image src={UnrealLogo} alt='unreal logo' className="logo-ticker-image"/>
          <Image src={SteamLogo} alt='steam logo'className="logo-ticker-image" />
        </motion.div>
      </div>
    </div>
  </div>
};
