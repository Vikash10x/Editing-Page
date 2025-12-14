import React, { useState, useRef, useEffect } from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import emailjs from "@emailjs/browser";

const Map = () => {
    const containerRef = useRef(null);
    const [start, setStart] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const successRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: form.message,
                },
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    setLoading(false);
                    setSubmitted(true);

                    setForm({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                },
                (error) => {
                    console.error("Email error:", error.text);
                    setLoading(false);
                    alert("Something went wrong. Please try again.");
                }
            );
    };


    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                submitted &&
                successRef.current &&
                !successRef.current.contains(e.target)
            ) {
                setSubmitted(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [submitted]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setStart(true),
            { threshold: 0.3 }
        );
        containerRef.current && observer.observe(containerRef.current);
    }, []);

    return (
        <div id="map" ref={containerRef} className="w-full relative">

            <div className="relative w-full h-[420px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113471.56066948095!2d75.9159066!3d27.4003487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6c2908bfb5b%3A0x1622fc5c2fe82e39!2sShahpura%2C%20Rajasthan%20303103!5e0!3m2!1sen!2sin!4v1705180000000"
                    className={`w-full h-full transition-all duration-300 delay-200 outline-none focus:outline-none
            ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                />

                {/* ================= FORM (MAP KE UPAR) ================= */}
                <div
                    className={`absolute top-27 left-1/2 -translate-x-1/2 lg:left-62 lg:translate-x-0
  bg-[#141c26] p-10 w-[95%] md:w-[510px] shadow-xl z-50
  transition-all duration-500
  ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"}`}
                >
                    {!submitted ? (
                        <>
                            <h1 className="text-[35px] text-white font-bold">Get in touch</h1>
                            <p className="text-[29px] text-white mb-4">
                                Reach out for video editing needs
                            </p>

                            <form onSubmit={handleSubmit}>
                                {["name", "email", "phone"].map((field) => (
                                    <label key={field} className="block mt-4">
                                        <span className="text-lg text-white capitalize">
                                            {field} <span className="text-red-700">*</span>
                                        </span>
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            name={field}
                                            value={form[field]}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-white py-2.5 mt-1 rounded text-white bg-transparent pl-3"
                                        />
                                    </label>
                                ))}

                                <label className="block mt-4">
                                    <span className="text-lg text-white">Message</span>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full border border-white py-2 mt-1 rounded text-white bg-transparent pl-3"
                                    />
                                </label>

                                <label className="flex items-start gap-3 mt-5">
                                    <input
                                        type="checkbox"
                                        required
                                        className="w-5 h-5 accent-[#141c26] border border-white bg-black cursor-pointer"
                                    />
                                    <span className="text-white text-[17px] leading-tight">
                                        I allow this website to store my submission so they can respond to my inquiry.
                                        <span className="text-red-700">*</span>
                                    </span>
                                </label>

                                <button
                                    disabled={loading}
                                    className="mt-6 w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold disabled:opacity-60"
                                >
                                    {loading ? "Submitting..." : "SUBMIT"}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div ref={successRef} className="text-center">
                            <div className="text-lg text-white">Thank you for your information. We received your response and emailed you a copy.</div>
                        </div>
                    )}
                </div>

            </div>

            {/* ================= MAP KE NICHE CONTENT ================= */}
            <div className="max-w-7xl mx-auto px-6 mt-140 md:mt-30 mb-20">
                <div className="flex flex-col lg:flex-row justify-start lg:justify-end mr-0 lg:mr-45">

                    <div className="hidden lg:block flex-1"></div>

                    <div
                        className={`w-full max-w-[350px] mx-auto lg:mx-0
      transition-all duration-500 delay-200
      ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"}`}
                    >
                        <h3 className="text-[17px] font-semibold text-[#020305]">Reach out</h3>

                        <div className="flex items-center gap-3 mt-2">
                            <IoCallOutline className="text-[#87888c] text-xl flex-shrink-0" />
                            <div className="relative group">
                                <a
                                    href="tel:9887551519"
                                    className="text-[#87888c] text-lg group-hover:text-blue-600"
                                >
                                    988-755-1519
                                </a>
                                <div className="h-0.5 w-full max-w-[160px] bg-[#88898f] group-hover:bg-blue-600"></div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-2.5">
                            <TfiEmail className="text-[#87888c] text-xl flex-shrink-0" />
                            <div className="relative group">
                                <a
                                    href="mailto:editword519@gmail.com"
                                    className="text-[#87888c] text-lg group-hover:text-blue-600 break-all"
                                >
                                    editword519@gmail.com
                                </a>
                                <div className="h-0.5 w-full max-w-[240px] bg-[#88898f] group-hover:bg-blue-600"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-[17px] font-semibold text-[#020305]">Location</h3>

                            <div className="flex items-start gap-3 mt-2">
                                <IoLocationOutline className="text-[#87888c] text-xl flex-shrink-0" />
                                <a
                                    href="https://www.google.com/maps/place/Bus+Stand,+Shahpura,+Rajasthan/"
                                    target="_blank"
                                    className="cursor-pointer group"
                                >
                                    <p className="text-[#87888c] text-lg group-hover:text-blue-600">
                                        Bus Stand Shahpura
                                    </p>
                                    <p className="text-[#87888c] text-lg group-hover:text-blue-600">
                                        Jaipur, RJ 303103 IN
                                    </p>
                                    <div className="h-0.5 w-full max-w-[220px] bg-[#88898f] mt-1 group-hover:bg-blue-600"></div>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-[17px] font-semibold text-[#020305]">Hours</h3>
                            {[
                                ["Monday", "9:00am – 10:00pm"],
                                ["Tuesday", "9:00am – 10:00pm"],
                                ["Wednesday", "9:00am – 10:00pm"],
                                ["Thursday", "9:00am – 10:00pm"],
                                ["Friday", "9:00am – 10:00pm"],
                                ["Saturday", "9:00am – 6:00pm"],
                                ["Sunday", "9:00am – 12:00pm"],
                            ].map(([day, time], i) => (
                                <div
                                    key={i}
                                    className="flex justify-between text-[#87888c] w-full max-w-[260px] text-lg"
                                >
                                    <span>{day}</span>
                                    <span>{time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Map;
