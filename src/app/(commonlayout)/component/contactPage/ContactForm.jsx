"use client"

import { sendEmail } from "@/lib/resend";
import Button from "../shared/Button";
import ButtonTitle from "../shared/ButtonTitle";
import { useState } from "react";
import { toast } from 'sonner';
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendEmail(formData);
            // console.log("form", formData)
            toast.success("Your message has been sent successfully!");
            setFormData({
                fullName: '',
                email: '',
                subject: '',
                message: '',
                confirm: false
            });
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send message.");
        }
    };

    return (
        <div className="bg-white px-4 py-10 md:p-10 rounded-[38px] md:h-[122vh] 2xl:h-screen">
            <ButtonTitle title="Achievements! 🏆" />
            <h1 className="font-bold text-[32px] mt-4">We’d love to help! Let us know how</h1>
            <p className="text-[18px] mb-4">Fill out the form, and we will get in touch with you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-sm font-semibold">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Write Your Fullname"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email so can we connect with you"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold">Subject</label>
                    <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Regarding Products"
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange"
                        required
                    />

                </div>

                <div>
                    <label className="text-sm font-semibold">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Write a message"
                        onChange={handleChange}
                        rows={3}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange"
                        required
                    />
                </div>
                <h1 className=" text-sm mb-1 font-semibold">I agree that Sparrow processes information about me in accordance with the privacy statement.</h1>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="confirm"
                        checked={formData.confirm}
                        onChange={handleChange}
                        className="mr-2"
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
