import React, { useState, useEffect, useRef } from "react";
import MyCalendar from "./MyCalendar";
import emailjs from "@emailjs/browser";


const MeetingForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [start, setStart] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        if (!selectedDate) {
            alert("Please select a date!");
            return;
        }
        if (!selectedTime) {
            alert("Please select a time!");
            return;
        }

        setLoading(true);

        emailjs
            .sendForm(
                "service_e598xk7",
                "template_mjbjfnb",
                form.current,
                "yYEAqeWU0vFpz2-iF"
            )
            .then(
                () => {
                    setSuccess(true);
                    setLoading(false);
                    form.current.reset();
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    alert("Email send nahi hui 😢");
                    setLoading(false);
                }
            );
    };


    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStart(true);
            },
            { threshold: 0.3 }
        );

        if (form.current) observer.observe(form.current);
    }, []);



    return (
        <div
            className="
        max-w-full md:max-w-3xl lg:max-w-4xl
        mx-auto
        px-5 sm:px-8 md:px-10
        py-10 md:py-20 mt-10 md:mt-0
      "
        >
            <h1
                className={`
          text-[33px] md:text-[40px]
          text-[#0256c5] font-medium mt-5
          transition-all duration-700 delay-300
          ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
            >
                Meeting request form
            </h1>

            <p
                className={`
          text-[25px] md:text-[29px]
          text-black mt-2
          transition-all duration-700 delay-500
          ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
            >
                We look forward to meeting with you
            </p>

            <p
                className={`
          text-[19px] md:text-[20px] mt-4 mb-3
          transition-all duration-700 delay-200
          ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
            >
                Select a date and time <span className="text-red-700">*</span>
            </p>

            <MyCalendar
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onDateSelect={setSelectedDate}
                onTimeSelect={setSelectedTime}
            />

            <form
                ref={form}
                onSubmit={sendEmail}
                className={`
          mt-6
          transition-all duration-500 delay-700
          ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
            >

                <input type="hidden" name="date" value={selectedDate} />
                <input type="hidden" name="time" value={selectedTime} />

                <label className="text-[16px] md:text-lg">
                    Name <span className="text-red-700">*</span>
                </label>
                <input
                    className="w-full border p-3 rounded mb-5 mt-1 text-[17px] placeholder:text-black"
                    placeholder="Jane Smith"
                    type="text"
                    name="name"
                    required
                />

                <label className="text-[16px] md:text-lg">
                    Email address <span className="text-red-700">*</span>
                </label>
                <input
                    className="w-full border p-3 rounded mb-5 mt-1 text-[17px] placeholder:text-black"
                    placeholder="email@website.com"
                    type="email"
                    name="email"
                    required
                />

                <label className="text-[16px] md:text-lg">
                    Phone number <span className="text-red-700">*</span>
                </label>
                <input
                    className="w-full border p-3 rounded mb-5 mt-1 text-[17px] placeholder:text-black"
                    placeholder="555-555-5555"
                    type="tel"
                    name="phone"
                    required
                />

                <label className="text-[16px] md:text-[18px]">
                    Which service or services are you interested in?
                </label>

                <div className="flex flex-col gap-2 mb-4 mt-2">
                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="services"
                            value="Video editing services"
                            className="w-4 h-4 accent-[#141c26]"
                        />
                        <span>Video editing services</span>
                    </label>

                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="services"
                            value="Social media video editing"
                            className="w-4 h-4 accent-[#141c26]"
                        />
                        <span>Social media video editing</span>
                    </label>

                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="services"
                            value="Corporate video editing"
                            className="w-4 h-4 accent-[#141c26]"
                        />
                        <span>Corporate video editing</span>
                    </label>
                </div>

                <label className="text-[16px] md:text-lg">Message</label>
                <textarea
                    className="w-full border p-3 rounded mb-4 mt-1 text-[16px]"
                    rows={5}
                    name="message"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="
            w-full
            bg-[#0256c5] hover:bg-[#053d85] cursor-pointer
            text-white
            py-3 md:py-4
            text-[16px] md:text-lg
            font-bold
            rounded
          "
                >
                    {loading ? "SENDING..." : "SUBMIT"}
                </button>


                {success && (
                    <p className="text-black text-center mt-6">
                        Message sent successfully ✅
                    </p>
                )}
            </form>
        </div>
    );
};

export default MeetingForm;
