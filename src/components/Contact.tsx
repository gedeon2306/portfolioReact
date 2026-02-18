import { Send } from "lucide-react";
import Title from "./Title";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // On précise le type HTMLFormElement pour la référence
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // Récupération des variables d'environnement via import.meta.env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
          alert('Message envoyé avec succès !');
          form.current?.reset(); // Réinitialise le formulaire
      }, () => {
          alert("Une erreur est survenue lors de l'envoi.");
      });
  };

  return (
    <div className="m-30 p-20" id="Contact">
      <Title title="Me Contacter" />
      <div className="flex justify-center">
        <form ref={form} onSubmit={sendEmail} className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 mt-4 space-y-4">

          <label className="floating-label">
            <span>Votre Nom</span>
            <input type="text" name="user_name" className="input validator w-full" placeholder="MALONGA Armel..." required />
            <p className="validator-hint hidden">Champ obligatoir</p>
          </label>

          <label className="floating-label">
            <span>Email</span>
            <input type="email" name="user_email" className="input validator w-full" placeholder="email@domaine.com" required />
            <p className="validator-hint hidden">Email invalide</p>
          </label>

          <label className="floating-label">
            <span>Message</span>
            <textarea name="message" className="textarea validator w-full" placeholder="Votre message" required></textarea>
            <p className="validator-hint hidden">Champ obligatoir</p>
          </label>

          <button className="btn btn-soft bg-purple-600 hover:bg-base-300 hover:text-purple-600 mt-4" type="submit">
            Envoyer <Send className="w-4 h-4"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;