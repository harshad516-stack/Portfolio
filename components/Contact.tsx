import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setSuccess('Message sent successfully 🚀');
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSuccess('Something went wrong ❌');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let's build something <span className="text-blue-400">great</span> together.
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <Mail className="text-blue-400" />
                  <p className="text-white">hsalunke516@email.com</p>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="text-blue-400" />
                  <p className="text-white">+91 81082 52577</p>
                </div>
                <div className="flex items-center gap-6">
                  <MapPin className="text-blue-400" />
                  <p className="text-white">Mumbai, India</p>
                </div>
              </div>

              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/80 rounded-2xl"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem]">
              <form className="space-y-6" onSubmit={handleSubmit}>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-blue-500"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl flex justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>

                {success && (
                  <p className="text-center text-green-600 font-medium">
                    {success}
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
