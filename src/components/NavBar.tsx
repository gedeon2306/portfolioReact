import { CodeXml } from "lucide-react";

const NavBar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="/" className="flex items-center font-bold text-3xl md:text-xl">
                <CodeXml className="mr-2"  />
                JIHREL <span className="text-purple-600">DEV</span>
            </a>

            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost">Accueil</a>
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost">À Propos</a>
                </li>
                <li>
                    <a href="#Skills" className="btn btn-sm btn-ghost">Mon Parcours</a>
                </li>
                <li>
                    <a href="#Projects" className="btn btn-sm btn-ghost">Mes Projets</a>
                </li>
                <li>
                    <a href="#Contact" className="btn btn-sm btn-ghost">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
