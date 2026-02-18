import { CodeXml, Github, Instagram, Linkedin } from "lucide-react";


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center pb-25">
            <aside>
                <CodeXml size={64} strokeWidth={3} />
                <p className="font-bold">
                    JIHREL <span className="text-purple-600">DEV</span>
                    <br />
                    Dev depius 2021
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="hover:text-purple-600" href="https://www.linkedin.com/in/g%C3%A9d%C3%A9on-gangou%C3%A9-2874063a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                        <Linkedin />
                    </a>
                    <a className="hover:text-purple-600" href="https://github.com/gedeon2306" target="_blank" >
                        <Github />
                    </a>
                    <a className="hover:text-purple-600" href="https://www.instagram.com/_gedeon_jirehl_?igsh=ZXcxOXNrbzNwM3N6&utm_source=qr" target="_blank">
                        <Instagram />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;