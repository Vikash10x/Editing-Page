import React, { useState, useEffect, useRef } from "react";
import MyCalendar from "./MyCalendar";

const MeetingForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [start, setStart] = useState(false);
    const containerRef = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [services, setServices] = useState({
        video: false,
        social: false,
        corporate: false,
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStart(true);
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedDate) return alert("Please select a date!");
        if (!selectedTime) return alert("Please select a time!");

        console.log({
            name,
            email,
            phone,
            selectedDate,
            selectedTime,
            services,
            message,
        });

        alert("Form Submitted Successfully!");

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSelectedDate(null);
        setSelectedTime(null);
        setServices({ video: false, social: false, corporate: false });
    };

    return (
        <div
            ref={containerRef}
            className="
        max-w-full md:max-w-4xl lg:max-w-5xl
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
                onSubmit={handleSubmit}
                className={`
          mt-6
          transition-all duration-500 delay-700
          ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
            >
                <label className="text-[16px] md:text-lg">
                    Name <span className="text-red-700">*</span>
                </label>
                <input
                    className="w-full border p-3 rounded mb-5 mt-1 text-[17px] placeholder:text-black"
                    placeholder="Jane Smith"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="text-[16px] md:text-lg">
                    Email address <span className="text-red-700">*</span>
                </label>
                <input
                    className="w-full border p-3 rounded mb-5 mt-1 text-[17px] placeholder:text-black"
                    placeholder="email@website.com"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="text-[16px] md:text-lg">
                    Phone number <span className="text-red-700">*</span>
                </label>
                <input
                    className="w-full border p-3 rounded mb-5 mt-1 text-[17px] placeholder:text-black"
                    placeholder="555-555-5555"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                />

                <label className="text-[16px] md:text-[18px]">
                    Which service or services are you interested in?
                </label>

                <div className="flex flex-col gap-2 mb-4 mt-2">
                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="w-4 h-4 accent-[#141c26]"
                            checked={services.video}
                            onChange={() =>
                                setServices({ ...services, video: !services.video })
                            }
                        />
                        <span className="text-[16px] md:text-[18px]">
                            Video editing services
                        </span>
                    </label>

                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="w-4 h-4 accent-[#141c26]"
                            checked={services.social}
                            onChange={() =>
                                setServices({ ...services, social: !services.social })
                            }
                        />
                        <span className="text-[16px] md:text-[18px]">
                            Social media video editing
                        </span>
                    </label>

                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="w-4 h-4 accent-[#141c26]"
                            checked={services.corporate}
                            onChange={() =>
                                setServices({ ...services, corporate: !services.corporate })
                            }
                        />
                        <span className="text-[16px] md:text-[18px]">
                            Corporate video editing
                        </span>
                    </label>
                </div>

                <label className="text-[16px] md:text-lg">Message</label>
                <textarea
                    className="w-full border p-3 rounded mb-4 mt-1 text-[16px]"
                    rows={5}
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button
                    type="submit"
                    className="
            w-full
            bg-[#0256c5] hover:bg-[#053d85]
            text-white
            py-3 md:py-4
            text-[16px] md:text-lg
            font-bold
            rounded
          "
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default MeetingForm;
