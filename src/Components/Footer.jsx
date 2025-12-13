import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    const isCompact = location.pathname.startsWith("/card4");


    return (
        <footer className="bg-[#141c26] text-gray-200 p-5">

            {isCompact ? (
                // ---------------------- COMPACT FOOTER ----------------------
                <div>

                    <div className="max-w-6xl mx-auto py-20 ml-58">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src="/Images/img6.png" alt="" width={140} />
                            <div className="leading-tight text-white font-semibold text-[25px] mt-2.5">
                                <div>Edit Word Shahpura</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-[20px] text-white">Location</h4>
                            <a
                                href="https://www.google.com/maps/place/Bus+Stand,+Shahpura,+Rajasthan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer inline-block"
                            >
                                <p className="text-white text-[18px] underline hover:no-underline">
                                    Bus Stand Shahpura Jaipur,  RJ 303103 IN
                                </p>
                            </a>
                        </div>

                        <div>
                            <h4 className="text-[20px] text-white">Reach out</h4>

                            <div className="flex items-center gap-2 ml-11">
                                <span className="text-white text-[30px] leading-none">•</span>
                                <a
                                    href="mailto:editword519@gmail.com"
                                    className="text-white text-[18px] underline hover:no-underline"
                                >
                                    editword519@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2 ml-11">
                                <span className="text-white text-[30px] leading-none">•</span>
                                <a
                                    href="tel:9887551519"
                                    className="text-white text-[18px] underline hover:no-underline"
                                >
                                    988-755-1519
                                </a>
                            </div>
                        </div>

                    </div>
                    <a
                        href="https://www.b12.io/ai-web-design/?utm_source=client&utm_medium=footer&utm_campaign=ai-web-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#87888c] text-[15px] mt-6 inline-block underline ml-58"
                    >
                        Web design by <span className="font-bold text-[17px] font-[Poppins]">B12</span>
                    </a>
                </div>
            ) : (
                // ---------------------- NORMAL FOOTER ----------------------
                <>
                    <div className="max-w-6xl mx-auto py-8 md:py-20 px-5 md:px-0 md:flex md:justify-between md:gap-20">

                        <div className="flex items-center gap-3 h-20 md:w-[32%] cursor-pointer
                  justify-center md:justify-start">
                            <img src="/Images/img6.png" alt="" className="w-20 md:w-32" />
                            <div className="leading-tight text-white font-semibold text-[22px] md:text-[25px]
                    text-center md:text-left">
                                <div>Edit Word</div>
                                <div>Shahpura</div>
                            </div>
                        </div>

                        <div className="md:w-[22%] mt-8 md:mt-0 text-center md:text-left">
                            <h4 className="text-[22px] md:text-[25px] font-semibold text-white mb-4 md:mb-6">
                                Location
                            </h4>

                            <a
                                href="https://www.google.com/maps/place/Bus+Stand,+Shahpura,+Rajasthan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block group"
                            >
                                <p className="text-white text-[16px] md:text-[18px] underline group-hover:no-underline">
                                    Bus Stand Shahpura Jaipur,
                                </p>
                                <p className="text-white text-[16px] md:text-[18px] underline group-hover:no-underline">
                                    RJ 303103 IN
                                </p>
                            </a>
                        </div>

                        <div className="md:w-[32%] mt-8 md:mt-0 text-center md:text-left">
                            <h4 className="text-[22px] md:text-[25px] font-semibold text-white mb-4 md:mb-6">
                                Reach out
                            </h4>

                            <a
                                href="mailto:editword519@gmail.com"
                                className="block text-white text-[16px] md:text-[18px] underline hover:no-underline"
                            >
                                editword519@gmail.com
                            </a>
                            <a
                                href="tel:9887551519"
                                className="block text-white text-[16px] md:text-[18px] underline hover:no-underline mt-1"
                            >
                                988-755-1519
                            </a>
                        </div>

                    </div>


                    <a
                        href="https://www.b12.io/ai-web-design/?utm_source=client&utm_medium=footer&utm_campaign=ai-web-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#87888c] text-[15px] mt-6 inline-block underline px-4 md:ml-42"
                    >
                        Web design by <span className="font-bold text-[17px] font-[Poppins]">B12</span>
                    </a>
                </>
            )
            }
        </footer >
    );
};

export default Footer;
