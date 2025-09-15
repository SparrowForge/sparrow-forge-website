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
    { icon: fbIcon, key: "Facebook", href: "https://www.facebook.com/sprwforge" },
    { icon: inIcon, key: "LinkedIn", href: "https://www.linkedin.com/company/sparrow-forge-ltd/posts/?feedView=all" },
    { icon: wpIcon, key: "WhatsApp", href: "https://wa.me/8801339314661" },
  ];

  const contact = [
    {
      icon: gmailIcon,
      text: "info@sprwforge.com",
      href: "mailto:info@sprwforge.com",
    },
    {
      icon: phoneIcon,
      text: "+88 013393-14661",
      href: "#",
    },
  ];

  return (
    <div className="relative bg-deepblue text-white w-full pt-52 pb-10 mt-20 md:mt-60">
      {/* Floating Above Card */}
      <div className="flex justify-center items-center absolute z-50 -top-20 md:-top-52 left-0 right-0 mx-10">
        <FooterAboveCard />
      </div>

      {/* Footer Content */}
      <div className="mx-10 flex flex-col md:flex-row justify-between items-start text-center md:text-start">
        {/* Company Info */}
        <div className="mb-10 md:w-1/4 space-y-4">
          <div className="flex justify-center md:justify-start">
            <SparrowLogo />
          </div>
          <p className="text-sm text-[#FFFFFF]/48">
            {t(LOCALE_KEYS.COPYRIGHT)}
          </p>
        </div>

        <div className="w-full md:w-2/4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-center md:text-start">
          {/* Quick Links */}
          <div className="md:ml-16">
            <h3 className="font-semibold text-md mb-2">{t(LOCALE_KEYS.QUICK_LINKS)}</h3>
            <ul className="space-y-1 text-sm text-[#FFFFFF]/48">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-lightblue cursor-pointer">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-md mb-2">{t(LOCALE_KEYS.SERVICES)}</h3>
            <ul className="space-y-1 text-sm text-[#FFFFFF]/48">
              {services.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-lightblue cursor-pointer">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="mx-auto">
            <h3 className="font-semibold text-md mb-2">{t(LOCALE_KEYS.FOLLOW_US)}</h3>
            <ul className="space-y-2 text-sm text-[#FFFFFF]/48">
              {socialMedia.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="flex items-center gap-2 hover:text-lightblue cursor-pointer">
                    <Image src={item.icon} alt={item.key} width={18} height={18} />
                    {item.key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 md:mt-0 md:w-1/4">
          <h3 className="font-semibold text-md mb-2">{t(LOCALE_KEYS.GET_IN_TOUCH)}</h3>
          <ul className="space-y-2 text-sm text-[#FFFFFF]/48">
            {contact.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="flex items-center gap-2 hover:text-lightblue cursor-pointer">
                  <Image src={item.icon} alt={item.text} width={16} height={16} />
                  <h1 className="text-[16px]">{item.text}</h1>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FFFFFF]/14 mt-12 pt-6 px-6 mx-auto text-sm items-center text-[#FFFFFF]/48">
        <div className="flex flex-col md:flex-row justify-between md:mx-10">
          <p>{t(LOCALE_KEYS.COPYRIGHT)}</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <p className="hover:text-lightblue">{t(LOCALE_KEYS.PRIVACY_POLICY)}</p>
            <p className="hover:text-lightblue">{t(LOCALE_KEYS.TERMS_OF_SERVICE)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
