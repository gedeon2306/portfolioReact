import Title from "./Title";
import reactImage from "../assets/techno/react.svg"
import typeScript from "../assets/techno/typescript.svg"
import vueImage from "../assets/techno/vue.svg"
import tailwind from "../assets/techno/tailwind.png"
import django from "../assets/techno/django.png"
import laravel from "../assets/techno/Laravel.png"
import node from "../assets/techno/node-js.png"
import js from "../assets/techno/js.png"

const mySkills = [
    {
        id: 1,
        img: reactImage,
        timeLinePosition: 'timeline-start',
        periode: 'Janvier 2026',
        techno: 'React',
        description: 'Utilisé pour découper mon interface en composants indépendants afin de rendre mon code modulaire et facile à maintenir.'
    },
    {
        id: 2,
        img: typeScript,
        timeLinePosition: 'timeline-end',
        periode: 'Octombre 2025',
        techno: 'TypeScript',
        description: "Utilisé pour ajouter un typage statique à mon code JavaScript, ce qui me permet de détecter les erreurs avant même d'exécuter mon application dans le navigateur."
    },
    {
        id: 3,
        img: vueImage,
        timeLinePosition: 'timeline-start',
        periode: 'Avril 2025',
        techno: 'Vue js',
        description: "Utilisé pour structurer mon interface via un système de templates HTML clair, me permettant de séparer naturellement le balisage, la logique et le style."
    },
    {
        id: 4,
        img: tailwind,
        timeLinePosition: 'timeline-end',
        periode: 'Mars 2025',
        techno: 'Tailwind CSS',
        description: "Utilisé pour styliser mon interface directement dans mon HTML grâce à une approche utility-first, ce qui m'évite de faire des allers-retours permanents entre mes fichiers de structure et mes feuilles de style."
    },
    {
        id: 5,
        img: django,
        timeLinePosition: 'timeline-start',
        periode: 'Octombre 2024',
        techno: 'Django',
        description: "Utilisé pour bâtir des applications web robustes avec le pattern MVT (Model-View-Template), ce qui me permet de structurer mon backend de manière claire et professionnelle."
    },
    {
        id: 6,
        img: laravel,
        timeLinePosition: 'timeline-end',
        periode: 'Juin 2024',
        techno: 'Laravel',
        description: "Utilisé pour créer des API en exploitant le Contrôleur du modèle MVC, où je réceptionne les requêtes HTTP pour orchestrer la logique métier avant de renvoyer une réponse JSON structurée."
    },
    {
        id: 7,
        img: node,
        timeLinePosition: 'timeline-start',
        periode: 'Juin 2024',
        techno: 'Node js',
        description: "Utilisé pour exécuter du JavaScript côté serveur, me permettant d'utiliser le même langage pour l'intégralité de ma stack technique (Fullstack JS)."
    },
    {
        id: 8,
        img: js,
        timeLinePosition: 'timeline-end',
        periode: 'Mars 2024',
        techno: 'JavaScript',
        description: "Utilisé pour ajouter de l'interactivité dynamique à mes pages web, me permettant de modifier le contenu et le style en réponse aux actions de l'utilisateur sans recharger la page."
    },
]

const Skills = () => {
    return (
        <div id="Skills">
            <Title title={'Mon Parcours'} />
            <div className="mt-20">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {mySkills.map((skill) => (
                        <li key={skill.id}>
                            {skill.id === 1 ? '' : <hr />}
                            <div className="timeline-middle">
                                <img src={skill.img} alt="technoImg" className="w-10 h-10" />
                            </div>
                            <div className={skill.timeLinePosition === 'timeline-start' ? skill.timeLinePosition + ' mb-10 md:text-end' : skill.timeLinePosition + ' mb-10'}>
                                <time className="font-mono italic">{skill.periode}</time>
                                <div className="text-lg font-black">{skill.techno}</div>
                                {skill.description}
                            </div>
                            {skill.id === mySkills.length ? '' : <hr />}
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    );
};

export default Skills;