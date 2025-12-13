import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        img: "/Images/img2.jpeg",
        title: "Video editing services",
        desc: "Transform your raw footage into captivating videos.",
        btn: "Read more",
        position: "top",
    },
    {
        id: 2,
        img: "/Images/img3.jpeg",
        title: "Social media video editing",
        desc: "Engage your audience with captivating social media clips.",
        btn: "Read more",
        position: "bottom",
    },
    {
        id: 3,
        img: "/Images/img4.jpeg",
        title: "Corporate video editing",
        desc: "Elevate your business communications with professional editing.",
        btn: "Read more",
        position: "top",
    },
    {
        id: 4,
        img: "/Images/img5.jpeg",
        title: "Data recovery",
        desc: "Expert recovery for lost data.",
        btn: "Read more",
        position: "bottom",
    }
];

const Services = () => {
    const containerRef = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStart(true);
            },
            { threshold: 0.2 }
        );
        if (containerRef.current) observe.observe(containerRef.current);
    }, []);

    return (
        <div id="services" ref={containerRef} className='bg-[#f5f5f5] min-h-screen md:py-25 py-10'>
            <div className='text-center mb-15'>
                <h2 className={`text-[#0256c5] text-[38px] font-medium md:font-bold mb-1 transition-all duration-700 delay-200
                    ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                >
                    Video editing expertise
                </h2>
                <h2 className={`md:text-[28px] text-[25px] transition-all duration-700 delay-400 px-10
                    ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                >
                    Transforming your footage into art
                </h2>
            </div>

            <div className='md:flex md:flex-wrap md:justify-center md:gap-15 p-3'>
                {data.map((item, index) => (
                    <Link to={`/card/${item.id}`} key={item.id}>

                        <div
                            key={index}
                            className={`relative hover:shadow-[0px_8px_25px_rgba(0,0,0,0.15)] 
                            p-5 hover:scale-105 transition-all cursor-pointer mb-10 duration-300 
                            ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"} 
                        `}
                        >
                            <div className="relative group">
                                {/* <div
                                    className="absolute inset-0 bg-white/30 
                                opacity-0 group-hover:opacity-100 
                    transition-all duration-300 pointer-events-none"
                                ></div> */}

                                <img
                                    src={item.img}
                                    alt=""
                                    className='md:w-65 md:h-80 object-cover w-full h-110 lg:h-140 lg:w-105'
                                />
                            </div>

                            <div
                                className={`
                                absolute bg-[#eeeeee] shadow-lg lg:p-8 sm:px-6 sm:py-5 p-8 w-[70%] sm:w-[85%] md:w-[80%]
                                 transition-all duration-500 cursor-auto
                                ${item.position === "top"
                                        ? "top-10 lg:left-23 md:15 sm:left-24 left-27"
                                        : "bottom-10 sm:left-0 left-0"}
                                    `}
                            >
                                <h3 className='text-2xl text-black'>{item.title}</h3>
                                <p className='text-[#929396] mt-3 text-lg'>{item.desc}</p>

                                <button className='mt-3.5 px-8 py-2.5 border-2 border-black text-[18px] font-bold text-black
                                hover:bg-[#0275d8] hover:border-[#0275d8] hover:text-white duration-200 cursor-pointer'>
                                    {item.btn}
                                </button>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Services;
