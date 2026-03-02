import { useState } from "react";
import { useLang } from "../hooks/useLang";
import { translations } from "../translations";

const EmailForm = () => {
  const { lang } = useLang();
  const t = translations[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:${t.contactEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-muted p-6 md:p-10 rounded-xl shadow-md flex flex-col gap-6"
    >
      <h2 className="text-xl font-bold text-primary mb-4">
        {t.contactCTA}
      </h2>

      <input
        type="text"
        placeholder={lang === "pt" ? "Nome" : "Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <textarea
        placeholder={lang === "pt" ? "Mensagem" : "Message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={6}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      />

      <button
        type="submit"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary transition"
      >
        {t.contactCTA}
      </button>
    </form>
  );
};

export default EmailForm;
