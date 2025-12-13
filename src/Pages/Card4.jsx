import React, { useEffect, useRef, useState } from "react";

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
                className="md:flex md:items-center md:justify-center pt-30 pb-10 md:pt-50 md:pb-28 px-7 gap-10"
            >
                <div
                    className={`
                    transition-all duration-700 w-[100%] md:w-[22%]
                    ${start ? "opacity-100 translate-x-0" : "opacity-0 translate-x-0"}
                    `}
                >
                    <img
                        src="/Images/img5.jpeg"
                        className="md:w-84 md:h-108 object-cover shadow-lg"
                    />
                </div>

                <div className="w-[100%] md:w-[50%]">

                    <h2
                        className={`
                        text-[#0256c5] text-3xl md:text-4xl font-medium md:font-bold mb-3 transition-all duration-700 delay-200 mt-5 md:mt-0
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        `}
                    >
                        Data recovery
                    </h2>

                    <p
                        className={`
                        md:text-lg text-gray-600 leading-relaxed mb-5 transition-all duration-600 delay-200
                        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                        `}
                    >
                        At EditWord Shahpura, we offer comprehensive data recovery services designed to retrieve lost,
                        deleted, corrupted, or inaccessible data from a wide range of storage devices. Whether your data
                        loss occurred due to hardware failure, accidental deletion, formatting errors, virus attacks,
                        or system crashes, our team applies professional recovery techniques to ensure maximum data
                        retrieval with complete confidentiality. We specialize in recovering data from hard drives, SSDs,
                        memory cards, USB drives, CCTV storage, mobile phones, and laptops. Using advanced diagnostic
                        tools and secure recovery methods, we strive to restore your important files, photos, videos,
                        and business documents quickly and efficiently.
                    </p>

                </div>

            </div>
            <div className="bg-[#0256c5] h-53"></div>
        </div>
    );
};

export default Card1