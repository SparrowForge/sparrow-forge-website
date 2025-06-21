"use client"

import Button from "../shared/Button";
import ButtonTitle from "../shared/ButtonTitle";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        confirm: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can integrate API submission here
    };
    return (
        <div className="bg-white px-4 py-10  md:p-10  rounded-[38px]">
            <ButtonTitle title="Achievements! 🏆" />
            <h1 className="font-bold text-[32px] mt-4">We’d love to help! Let us know how</h1>
            <p className="text-[18px] mb-4">Fill out the form, and we will get in touch with you as soon as possible.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="w-full">
                    <label className=" text-sm mb-1 font-semibold">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange"
                        required
                    />
                </div>

                <div>
                    <label className=" text-sm mb-1 font-semibold">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange mt-1"
                        required
                    />
                </div>

                <div>
                    <label className=" text-sm mb-1 font-semibold">Subject of Interest</label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange mt-1"
                        required
                    >
                        <option value="">Select</option>
                        <option value="Regarding Product">Regarding Product</option>
                        <option value="Support Request">Support Request</option>
                        <option value="Partnership Inquiry">Partnership Inquiry</option>
                    </select>
                </div>

                <div>
                    <label className=" text-sm mb-1 font-semibold">How may we assist you?</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange mt-1"
                        placeholder="Give us more info..."
                        required
                    ></textarea>
                </div>
<h1 className=" text-sm mb-1 font-semibold">I agree that Sparrow processes information about me in accordance with the privacy statement.</h1>
                <div className="flex ">
                     
                    <input
                        type="checkbox"
                        name="confirm"
                        checked={formData.confirm}
                        onChange={handleChange}
                        className="mr-2 "
                        required
                    />
                    <span className="text-sm">I Confirm*</span>
                </div>

                <div className="mt-4  hidden md:block">
                    <div className='border border-orange p-1 rounded-full  text-[10px] md:text-[18px] mt-4'>
                        <Button
                            image="/bannerImg/arrowRightUp.svg"
                            type="submit"
                            title="Submit"
                            className="bg-orange text-white text-sm md:text-[20px] px-4 md:w-full py-2 md:py-2 rounded-full flex justify-center" />
                    </div>

                </div>
                <div className="mt-4  flex justify-center md:hidden">
                    <div className='border border-orange p-1 rounded-full  text-[10px] md:text-[18px] mt-4'>
                        <Button
                            image="/bannerImg/arrowRightUp.svg"
                            type="submit"
                            title="Submit"
                            className="bg-orange text-white text-sm md:text-[20px] px-4 md:w-full py-2 md:py-2 rounded-full flex justify-center" />
                    </div>

                </div>
            </form>

        </div>
    );
};

export default ContactForm;