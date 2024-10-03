"use client";


import logo from "../assets/logo-erik.png";
import Image from "next/image";
import SocialInsta from "../assets/socials-logos/social-insta.svg";
import SocialLinkedin from "../assets/socials-logos/social-linkedin.svg";
import SocialYoutube from "../assets/socials-logos/social-youtube.svg";
import SocialDiscord from "../assets/socials-logos/social-discord.svg";


const Footer: React.FC = () => {
  return <footer id="contact" className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
    <div className="container">
      
      
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]before:absolute mt-5">
        <Image src={logo} height ={80} alt="logo" className="relative" />
      </div>

      <nav className="flex flex-col md:flex-row md:justify-center gap-6 mb-6 mt-6">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">Latest</a>
        <a href="#" className="hover:text-white">Games</a>
        <a href="#" className="hover:text-white">Assets</a>
      
      </nav>
      
      <div className="flex justify-center gap-5">
              <a href="https://www.linkedin.com/company/erikgames" target="_blank" rel="noopener noreferrer">
                <SocialLinkedin className="w-6 h-6 mt-6" />
              </a>
              <a href="https://www.instagram.com/erikgamesoftware/" target="_blank" rel="noopener noreferrer">
                <SocialInsta className="w-6 h-6 mt-6" />
              </a>
              <a href="https://www.youtube.com/@ErikGamesStudio" target="_blank" rel="noopener noreferrer">
                <SocialYoutube className="w-8 h-8 mt-5" />
              </a>
              <a href="https://discord.com/invite/6kAPxSxpB6" target="_blank" rel="noopener noreferrer">
                <SocialDiscord className="w-20 h-auto mt-7" />
              </a>
            
            </div>
      
      <p className="mt-6">
      Adres:
      Üniversiteler Mahallesi ODTÜ Teknokent
      Gümüş Blok ZK:9
      06800 Çankaya/Ankara
      </p>
      <p className="mt-6">
      info@erikgames.com
      </p>
      <p className="mt-6">
      Telefon:
      +90 538 052 16 83
      </p>


      <p className="mt-6">
        &copy;  Erik Games. All rights reserved.
      </p>
    </div>

    

  </footer>;
};

export default Footer;
