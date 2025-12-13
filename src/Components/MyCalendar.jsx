import React, { useEffect, useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = ({ onDateSelect, selectedDate, onTimeSelect, selectedTime }) => {

    const [value, setValue] = useState(selectedDate || new Date());
    const [start, setStart] = useState(false);

    const morningSlots = [
        "9:00–9:30 am", "9:30–10:00 am", "10:00–10:30 am",
        "10:30–11:00 am", "11:00–11:30 am", "11:30–12:00 pm"
    ];

    const afternoonSlots = [
        "12:00–12:30 pm", "12:30–1:00 pm", "1:00–1:30 pm",
        "1:30–2:00 pm", "2:00–2:30 pm", "2:30–3:00 pm",
        "3:00–3:30 pm", "3:30–4:00 pm", "4:00–4:30 pm",
        "4:30–5:00 pm"
    ];
    const containerRef = useRef(null);

    useEffect(() => {
        if (selectedDate === null) {
            setValue(new Date());
        }
    }, [selectedDate]);

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
        <div ref={containerRef} className={`flex flex-col items-center p-5 transition-all duration-200 delay-700
            ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-70"}`}
        >

            {selectedDate && (
                <p className="mt-4 text-lg font-semibold">
                    Selected Date: {selectedDate.toDateString()}
                </p>
            )}

            <Calendar
                onChange={(val) => {
                    setValue(val);
                    onDateSelect(val);
                    onTimeSelect(null);
                }}
                value={value}
            />

            {selectedDate && (
                <div className="w-full mt-6">

                    <h2 className="text-center text-lg font-semibold mb-4">Select Time</h2>

                    <div className="flex justify-between gap-5">

                        <div className="flex flex-col flex-1">
                            <h3 className="text-center font-medium mb-3">Morning</h3>

                            {morningSlots.map((slot, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onTimeSelect(slot)}
                                    className={`border rounded p-2 mb-2 text-center
                                        ${selectedTime === slot
                                            ? "bg-blue-600 text-white border-blue-700"
                                            : "hover:bg-gray-100"
                                        }
                                    `}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col flex-1">
                            <h3 className="text-center font-medium mb-3">Afternoon</h3>

                            {afternoonSlots.map((slot, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onTimeSelect(slot)}
                                    className={`border rounded p-2 mb-2 text-center
                                        ${selectedTime === slot
                                            ? "bg-blue-600 text-white border-blue-700"
                                            : "hover:bg-gray-100"
                                        }
                                    `}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default MyCalendar;
