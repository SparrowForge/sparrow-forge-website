"use client"

import Image from "next/image";
import ButtonTitle from "../shared/ButtonTitle";

const GetInTouchContact = () => {
    const data = [
        {
            id: 1,
            name: "Email",
            address: "jens@cefalo.com",
            image: "/socialicons/gmail.svg"
        },
        {
            id: 2,
            name: "Phone",
            address: "+47 994 86 186",
            image: "/socialicons/phone.svg"
        }
    ]
    return (
        <div className="bg-white px-4 py-10  md:p-10 flex flex-col justify-start items-start gap-4 rounded-[38px] md:h-[122vh] 2xl:h-screen">
            <ButtonTitle title="Get In Touch 📩" />
            <h1 className="font-bold text-[32px]">Want to Extend Your Team?</h1>
            <p className="text-[16px]">Have questions or ready to take the next step? Whether you’re looking to buy, rent, or invest, our team is here to guide you every step of the way. Let’s turn your property goals into reality.</p>
            <div className="flex justify-center items-center gap-4 my-4">
                <div className="bg-gray rounded-full p-2">
                    <Image
                        src="/avatars/3.svg"
                        alt="avatar"
                        width={20}
                        height={20}
                        className="w-8 h-8"
                    />
                </div>

                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-[18px] font-semibold">Jens Wahlberg</h1>
                    <h1 className="text-[14px]">Chief Commercial Officer</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-between items-center gap-10">
                {data?.map((data) => (
                    <div key={data.id} className="flex justify-center items-start gap-2 border p-2 rounded-xl">
                        <div className="bg-black rounded-xl p-2">
                            <Image
                                src={data.image}
                                alt={data.name}
                                width={200}
                                height={200}
                                className="w-8 h-auto"
                            />
                        </div>
                        <div className="flex justify-between items-center gap-10 md:gap-16">
                            <div>
                                <h1 className="text-[18px] font-semibold">{data.name}</h1>
                                <h1 className="text-[14px]">{data.address}</h1>
                            </div>
                            <div>
                                <Image
                                    src="/arrowright.svg"
                                    alt="arrow"
                                    width={200}
                                    height={200}
                                    className="w-2 h-auto"
                                />
                            </div>
                        </div>

                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default GetInTouchContact;