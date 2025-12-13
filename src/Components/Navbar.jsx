import React, { useEffect, useState, useRef } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import B12Banner from "./B12Banner";

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [bannerVisible, setBannerVisible] = useState(false);

    const contactRef = useRef(null);

    useEffect(() => {
        Events.scrollEvent.register("begin", (to) => setActive(to));
        Events.scrollEvent.register("end", (to) => setActive(to));
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const navItems = [
        { name: "HOME", to: "home" },
        { name: "ABOUT", to: "about" },
        { name: "SERVICES", to: "services" },
    ];

    return (
        <>
            <B12Banner
                onShow={() => setBannerVisible(true)}
                onClose={() => setBannerVisible(false)}
            />
            <header
                className={`
    fixed left-0 w-full z-50 bg-[#141c26] text-white shadow-md
    transition-all duration-300
    ${bannerVisible ? "top-[56px]" : "top-0"}
  `}
            >
                <div className="flex items-center justify-between px-5 lg:px-14 py-4">
                    <h2
                        className={`text-xl lg:text-2xl font-medium cursor-pointer
    ${menuOpen ? 'invisible lg:visible' : 'visible'}
  `}
                    >
                        Edit Word Shahpura
                    </h2>


                    <div
                        className="lg:hidden text-3xl cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </div>

                    <nav className="hidden lg:flex items-center gap-10">
                        <ul className="flex gap-8">
                            {navItems.map((item) => (
                                <li key={item.to} className="relative group cursor-pointer">
                                    <Link
                                        to={item.to}
                                        smooth
                                        duration={800}
                                        spy
                                        offset={-60}
                                        className="text-[15px] tracking-wide"
                                    >
                                        {item.name}
                                        <span
                                            className={`
                      absolute left-0 -bottom-1 h-[1px] w-full bg-white/60
                      transform transition-transform duration-300
                      scale-x-0 group-hover:scale-x-100
                      ${active === item.to ? "scale-x-100 origin-left" : ""}
                    `}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link to="map" smooth duration={1000}>
                            <button
                                ref={contactRef}
                                className="border-2 px-6 py-2 font-semibold text-[15px]
                         hover:bg-blue-700 hover:border-blue-700 transition"
                            >
                                Contact
                            </button>
                        </Link>
                    </nav>
                </div>

                {menuOpen && (
                    <div className="lg:hidden bg-[#141c26] h-screen px-10">
                        <ul className="flex flex-col gap-6 text-lg">
                            {navItems.map((item) => (
                                <li key={item.to} className="relative group">
                                    <Link
                                        to={item.to}
                                        smooth
                                        duration={800}
                                        spy
                                        offset={-70}
                                        onClick={() => setMenuOpen(false)}
                                        className="relative"
                                    >
                                        <div>
                                            {item.name}

                                        </div>
                                        <span
                                            className={`
                      absolute left-0 -bottom-1 h-[1px] w-full bg-white/60
                      transform transition-transform duration-300
                      scale-x-0 group-hover:scale-x-100
                      ${active === item.to ? "scale-x-100 origin-left" : ""}
                    `}
                                        />
                                    </Link>
                                </li>
                            ))}

                            <Link
                                to="map"
                                smooth
                                duration={1000}
                                onClick={() => setMenuOpen(false)}
                                className="w-full"
                            >
                                <button
                                    className="mt-4 w-full border-2 py-3 font-semibold text-[16px] cursor-pointer
                           hover:bg-blue-700 hover:border-blue-700 transition"
                                >
                                    Contact
                                </button>
                            </Link>
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;
