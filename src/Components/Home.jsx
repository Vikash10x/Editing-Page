import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
    const containerRef = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="home"
            className="
                relative min-h-screen w-full
                bg-[url('/Images/img1.jpeg')]
                bg-cover bg-center
                bg-scroll lg:bg-fixed
            "
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div
                ref={containerRef}
                className="
                    relative min-h-screen
                    flex flex-col justify-center items-center text-center
                    px-4 sm:px-6 lg:px-10
                "
            >
                <h1
                    className={`
                       font-medium sm:font-bold text-white mb-3 text-6xl
                        sm:text-5xl md:text-6xl lg:text-7xl
                        transition-all duration-700
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                >
                    Edit Word
                </h1>

                <h4
                    className={`
                        text-white mb-6 max-w-3xl
                        text-xl font-medium sm:text-lg md:text-xl lg:text-3xl
                        transition-all duration-700 delay-200
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                >
                    “Bringing Your Stories to Life – Professional Photo & Video Solutions in Shahpura”
                </h4>

                <Link to="services">
                    <button
                        className={`
                        bg-blue-600 hover:bg-blue-800 text-white font-semibold
                        px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-3 cursor-pointer
                        text-base sm:text-lg md:text-xl
                        transition-all duration-700 delay-500
                        hover:duration-150
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        `}
                    >
                        View Services
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Home;
