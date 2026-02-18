import { Download, Mail } from "lucide-react";
import image from "../assets/moi.png"
import cv from "../assets/cv/CV.pdf"

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center my-10 md:my-32" id="Home">
        <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                Bonjour, <br />
                Je suis <span className="text-purple-600">Gédéon GANGOUE</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
                Je suis un développeur fullstack <br />
                avec une specialisation en dévéloppement web Backend. <br />
                N'exitez pas à me contacter pour la réalisation de vos projets.
            </p>
            <div className="flex md:justify-start justify-center space-x-4">
                <a href="mailto:gedeon.jirehl.gangoue23@gmail.com" target="_blank" className="btn btn-soft bg-purple-600 hover:bg-base-300">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>
                <a href={cv} target="_blank" className="btn btn-soft hover:text-purple-600">
                    <Download className="w-5 h-5" />
                    Télécharger mon CV
                </a>
            </div>
        </div>
        <div className="md:ml-30">
            <img src={image} alt="Profil" 
                className="w-96 h-96 object-center border-8 border-purple-600 shadow-xl"
                style={{
                    borderRadius: '46% 54% 31% 69% / 54% 66% 34% 46%  '
                }} />
        </div>
    </div>
  );
};

export default Home;