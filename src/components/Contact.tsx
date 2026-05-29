import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import type { PortfolioContent } from '../data';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Contact = ({ content }: { content: PortfolioContent }) => {
  const { contact, profile } = content;
  const contactMethods = [
    {
      icon: Mail,
      label: contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: contact.phone,
      value: profile.phone,
      href: 'tel:+212608568400',
    },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  ];

  return (
    <section id="contact" className="bg-slate-950 px-4 py-16 text-white md:px-5">
      <div className="mx-auto max-w-4xl text-center">
        <Badge className="bg-white/10 text-sky-200">{contact.badge}</Badge>
        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
          {contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
          {contact.description}
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {contactMethods.map((method) => (
            <Card key={method.label} className="border-white/10 bg-white/[0.04] text-white shadow-none transition-colors hover:border-sky-300/60 hover:bg-white/[0.07]">
              <a href={method.href}>
                <CardContent className="flex items-center justify-center gap-5 px-4 pb-3 pt-5 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                    <method.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{method.label}</div>
                    <div className="mt-1 break-all text-sm font-bold text-white">{method.value}</div>
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2.5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 text-xs font-bold text-white shadow-sm transition-colors hover:border-sky-300/70 hover:bg-sky-400/15 hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <social.icon size={16} />
              {social.label}
            </a>
          ))}
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
          © {new Date().getFullYear()} {profile.name} - {contact.footer}
        </footer>
      </div>
    </section>
  );
};

export default Contact;
