"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../shared/Button";
import ButtonTitle from "../../shared/ButtonTitle";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import { useLocalization } from "@/hooks/useLocalization";

const ContactForm = () => {
    const { t } = useLocalization();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        confirm: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const sendEmail = async (data) => {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error("Failed to send email");
        }

        return res.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendEmail(formData);
            toast.success(t(LOCALE_KEYS.SUCCESS));
            setFormData({
                fullName: "",
                email: "",
                subject: "",
                message: "",
                confirm: false,
            });
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white px-4 py-10 md:p-10 rounded-[38px]">
            <ButtonTitle title={t(LOCALE_KEYS.BUTTON_TITLE)} />
            <h1 className="font-bold text-[32px] mt-4">
                {t(LOCALE_KEYS.HEADING)}
            </h1>
            <p className="text-[18px] mb-4">
                {t(LOCALE_KEYS.DESCRIPTION)}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="text-sm font-semibold">
                        {t(LOCALE_KEYS.FULL_NAME)}
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t(LOCALE_KEYS.FULL_NAME_PLACEHOLDER)}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightblue"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm font-semibold">
                        {t(LOCALE_KEYS.EMAIL)}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t(LOCALE_KEYS.EMAIL_PLACEHOLDER)}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightblue"
                        required
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="text-sm font-semibold">
                        {t(LOCALE_KEYS.SUBJECT)}
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t(LOCALE_KEYS.SUBJECT_PLACEHOLDER)}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightblue"
                        required
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="text-sm font-semibold">
                        {t(LOCALE_KEYS.MESSAGE)}
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t(LOCALE_KEYS.MESSAGE_PLACEHOLDER)}
                        rows={3}
                        className="w-full border border-gray rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightblue"
                        required
                    />
                </div>

                {/* Privacy Agreement */}
                <h1 className="text-sm mb-1 font-semibold">
                    {t(LOCALE_KEYS.PRIVACY_TEXT)}
                </h1>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="confirm"
                        checked={formData.confirm}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <span className="text-sm">
                        {t(LOCALE_KEYS.CONFIRM_TEXT)}
                    </span>
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex justify-center">

                    <Button
                        image="/bannerImg/arrowRightUpWhite.svg"
                        type="submit"
                        disabled={loading}
                        title={loading ? "Sending..." : t(LOCALE_KEYS.SUBMIT)}
                        className="bg-lightblue text-white text-sm md:text-[20px] px-4 md:w-full py-2 md:py-2 rounded-full flex justify-center"
                    />

                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
