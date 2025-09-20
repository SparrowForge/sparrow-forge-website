"use client";

import Image from "next/image";
import ButtonTitle from "../../shared/ButtonTitle";
import { useLocalization } from "@/hooks/useLocalization";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const GetInTouchContact = () => {
 const { t } = useLocalization();

  return (
    <div className="bg-white text-deepblue px-4 py-10 md:p-10 flex flex-col justify-start items-start gap-4 rounded-[38px] md:h-[122vh] 2xl:h-screen">
      <ButtonTitle title={t(LOCALE_KEYS.BUTTON_TITLE)} />

      <h1 className="font-bold text-[32px]">{t(LOCALE_KEYS.HEADING)}</h1>
      <p className="text-[16px]">{t(LOCALE_KEYS.DESCRIPTION)}</p>

      <div className="flex justify-center items-center gap-4 my-4">
        <div className="bg-lightblue/10 rounded-full p-2">
          <Image
            src="/team/3.svg"
            alt="avatar"
            width={20}
            height={20}
            className="w-8 h-8"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[14px]">{t(LOCALE_KEYS.ROLE)}</h1>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start gap-10">
        {/* Email */}
        <div className="flex justify-center items-start gap-2 border border-lightblue p-2 rounded-xl">
          <div className="bg-lightblue rounded-xl p-2">
            <Image
              src="/socialicons/gmail.svg"
              alt="email"
              width={200}
              height={200}
              className="w-auto h-8"
            />
          </div>
          <div className="flex justify-between items-center gap-10 md:gap-6">
            <div>
              <h1 className="text-[18px] font-semibold">{t(LOCALE_KEYS.EMAIL)}</h1>
              <h1 className="text-[14px]">info@sprwforge.com</h1>
            </div>
            <Image
              src="/bannerImg/arrowRightUp.svg"
              alt="arrow"
              width={200}
              height={200}
              className="w-8 h-auto"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="flex justify-center items-start gap-2 border border-lightblue p-2 rounded-xl">
          <div className="bg-lightblue rounded-xl p-2">
            <Image
              src="/socialicons/phone.svg"
              alt="phone"
              width={200}
              height={200}
              className="w-9 h-auto"
            />
          </div>
          <div className="flex justify-between items-center gap-10 md:gap-6">
            <div>
              <h1 className="text-[18px] font-semibold">{t(LOCALE_KEYS.PHONE)}</h1>
              <h1 className="text-[14px]">+88 013393-14660, +88 013393-14661</h1>
            </div>
               <Image
              src="/bannerImg/arrowRightUp.svg"
              alt="arrow"
              width={200}
              height={200}
              className="w-8 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchContact;
