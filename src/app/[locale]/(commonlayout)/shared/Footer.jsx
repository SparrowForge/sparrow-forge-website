"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import SparrowLogo from "./SparrowLogo";
import FooterAboveCard from "../card/FooterAboveCard";

import fbIcon from "../../../../../public/socialicons/fb.svg";
import inIcon from "../../../../../public/socialicons/in.svg";
import wpIcon from "../../../../../public/socialicons/wp.svg";
import gmailIcon from "../../../../../public/socialicons/gmail.svg";
import phoneIcon from "../../../../../public/socialicons/phone.svg";

import { useLocalization } from "@/hooks/useLocalization";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const Footer = () => {
  const { t } = useLocalization();

  const quickLinks = [
    { key: LOCALE_KEYS.HOME, href: "/" },
    { key: LOCALE_KEYS.SERVICE, href: "/#service" },
    { key: LOCALE_KEYS.ABOUT_US, href: "/#about" },
    { key: LOCALE_KEYS.TEAMS, href: "/#teams" },
    { key: LOCALE_KEYS.CAREER, href: "/#career" },
    { key: LOCALE_KEYS.BLOG, href: "/#blog" },
  ];

  const services = [
    { key: LOCALE_KEYS.WEB_DEV, href: "/#service" },
    { key: LOCALE_KEYS.UI_UX, href: "/#service" },
    { key: LOCALE_KEYS.MOBILE_APP, href: "/#service" },
    { key: LOCALE_KEYS.CLOUD_WEB, href: "/#service" },
    { key: LOCALE_KEYS.IT_CONSULT, href: "/#service" },
  ];

  const socialMedia = [
    { icon: fbIcon, label: "Facebook", href: "https://www.facebook.com/sprwforge" },
    { icon: inIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/sparrow-forge-ltd/posts/?feedView=all" },
    { icon: wpIcon, label: "WhatsApp", href: "https://wa.me/8801339314661" },
  ];

  const contact = [
    { icon: gmailIcon, text: "info@sprwforge.com", href: "mailto:info@sprwforge.com" },
    { icon: phoneIcon, text: "+88 013393-14661", href: "tel:+8801339314661" },
  ];

  // Small reusable component for columns
  const FooterColumn = ({ title, children }) => (
    <div>
      <h3 className="font-semibold text-md mb-2">{title}</h3>
      <ul className="space-y-2 text-sm text-white/50">{children}</ul>
    </div>
  );

  return (
    <footer className="bg-deepblue text-white w-full relative pt-52 pb-10 mt-20 md:mt-60">
      {/* Floating Above Card */}
      <div className="flex justify-center absolute z-50 -top-20 md:-top-52 w-full px-4 md:px-10">
        <FooterAboveCard />
      </div>

      <div className="w-full lg:w-[1194px] mx-auto">
        {/* Footer Main */}
        <div className="mx-10 md:mx-0 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          {/* Logo */}
          <div className="mb-10 md:w-1/4">
            <SparrowLogo />
          </div>

          {/* Links */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 text-center md:text-start">
            {/* Quick Links */}
            <FooterColumn title={t(LOCALE_KEYS.QUICK_LINKS)}>
              {quickLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="hover:text-lightblue transition">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            {/* Services */}
            <FooterColumn title={t(LOCALE_KEYS.SERVICES)}>
              {services.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="hover:text-lightblue transition">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            {/* Social */}
            <FooterColumn title={t(LOCALE_KEYS.FOLLOW_US)}>
              {socialMedia.map(({ icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-lightblue text-center"
                  >
                    <Image src={icon} alt={label} width={18} height={18} />
                    {label}
                  </a>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title={t(LOCALE_KEYS.GET_IN_TOUCH)}>
              {contact.map(({ icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex  items-center gap-2 hover:text-lightblue transition text-center">
                    <Image src={icon} alt={text} width={16} height={16} />
                    <span className="text-[16px]">{text}</span>
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>

          {/* Contact */}
          {/* <div className="mt-10 md:mt-0 md:w-1/4">
            <FooterColumn title={t(LOCALE_KEYS.GET_IN_TOUCH)}>
              {contact.map(({ icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex items-center gap-2 hover:text-lightblue transition">
                    <Image src={icon} alt={text} width={16} height={16} />
                    <span className="text-[16px]">{text}</span>
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-white/50">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <p>{t(LOCALE_KEYS.COPYRIGHT)}</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="#" className="hover:text-lightblue">
                {t(LOCALE_KEYS.PRIVACY_POLICY)}
              </Link>
              <Link href="#" className="hover:text-lightblue">
                {t(LOCALE_KEYS.TERMS_OF_SERVICE)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
