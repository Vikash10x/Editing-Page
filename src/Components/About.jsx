import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const About = () => {
    const containerRef = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStart(true);
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className="
                flex flex-col md:flex-row
                items-center justify-center
                px-4 sm:px-8 md:px-12 lg:px-20
                py-16 sm:py-20 lg:py-20
                gap-10 lg:gap-14
            "
        >
            <div
                className={`
        w-full sm:w-[85%] md:w-[60%] lg:w-[32rem]
        transition-all duration-700
        ${start ? "opacity-100 translate-x-0" : "opacity-0 translate-x-0"}
    `}
            >
                <div className="
        relative w-full
        h-[22rem] sm:h-[26rem] md:h-[32rem] lg:h-[40rem]
        overflow-hidden shadow-lg
    ">
                    <img
                        src="/Images/img2.jpeg"
                        alt="Wedding Video Editing"
                        className="
                absolute inset-0
                w-full h-full
                object-cover
            "
                    />
                </div>
            </div>


            <div className="w-full lg:w-[33%] lg:text-left">

                <h2
                    className={`
                        text-blue-600 md:font-bold sm:mb-3 mb-2 font-medium
                        text-3xl sm:text-3xl lg:text-4xl
                        transition-all duration-700 delay-200
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                >
                    Wedding Video Editing
                </h2>

                <h4
                    className={`
                        text-black mb-3
                        text-2xl font-medium sm:text-xl md:text-2xl lg:text-[30px]
                        transition-all duration-700 delay-400
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                >
                    Expert video editing services
                </h4>

                <p
                    className={`
                        text-gray-600 leading-relaxed mb-6
                        text-[17px] sm:text-lg
                        transition-all duration-700 delay-600
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                >
                    At Edit Word Shahpura, we specialize in turning your raw footage into captivating stories that resonate
                    with your audience. Our team of skilled editors utilizes advanced techniques and creative flair to enhance
                    your videos, making them stand out in a crowded digital landscape. Whether you're a content creator, a business,
                    or an individual looking to preserve memories, we offer tailored editing solutions that meet your unique needs.
                    Experience the art of storytelling through exceptional video editing today!
                </p>

                <Link to="map">
                    <button
                        className={`
                        text-black py-2.5 px-8 border-2 border-black
                        font-bold text-base sm:text-lg
                        hover:bg-[#0275d8] hover:border-[#0275d8] hover:text-white
                        transition-all duration-600 cursor-pointer
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        `}
                    >
                        Get in touch
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default About;
