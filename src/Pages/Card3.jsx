import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Card1 = () => {
    const containerRef = useRef(null);
    const [start, setStart] = useState(false);

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

    return (
        <div>

            <div
                ref={containerRef}
                className="md:flex md:items-center md:justify-center px-5 md:px-20 py-30 gap-10"
            >
                <div
                    className={`
                    transition-all duration-700 w-[100%] md:w-[66%]
                    ${start ? "opacity-100 translate-x-0" : "opacity-0 translate-x-0"}
                    `}
                >
                    <img
                        src="/Images/img4.jpeg"
                        className="md:w-120 md:h-165 object-cover shadow-lg"
                    />
                </div>

                <div className="w-[100%] mt-5 md:mt-0">

                    <h2
                        className={`
                        text-[#0256c5] text-3xl md:text-4xl font-medium md:font-bold mb-3 transition-all duration-700 delay-200
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        `}
                    >
                        Corporate video editing
                    </h2>

                    <p
                        className={`
                        md:text-lg text-gray-600 leading-relaxed mb-5 transition-all duration-600 delay-200
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                        `}
                    >
                        Elevate your corporate communications with our specialized corporate video editing services.
                        We understand the importance of delivering clear, compelling messages in a professional manner.
                        Our experienced team works with businesses to create polished videos that reflect your brand's
                        identity and values. Whether it's training videos, promotional content, or internal communications,
                        we craft each project with attention to detail and a focus on your objectives. Trust us to help you
                        convey your message effectively and make a lasting impression on your stakeholders.
                    </p>

                    <Link to="/MeetingForm">
                        <button
                            className={`
            text-white py-2.5 px-8 border-2 font-bold text-lg bg-blue-700 hover:bg-blue-800
            transition-all duration-600 delay-400 cursor-pointer
            ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
                        >
                            Schedule appointment
                        </button>
                    </Link>

                </div>

            </div>
            <div className="bg-[#141c26] p-5">
                <div className=" text-white py-5 md:py-15 md:ml-60">
                    <h1 className={`text-[55px] md:text-[75px] font-medium transition-all duration-600 delay-400
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`}
                    >Let's talk</h1>
                    <p className={`text-[25px] md:text-[28px] font-medium transition-all duration-600 delay-500
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`}
                    >We would love to hear from you!</p>
                    <button
                        className={`
                        text-white py-2 px-7 md:py-2.5 md:px-8 border-2 border-white font-bold text-lg mt-5
                        hover:bg-blue-800 hover:border-blue-800
                        transition-all duration-600 delay-700
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"}
                        `}
                    >
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card1