import { useState } from "react";

const Accordian = () => {
    const list = [
        { title: "one", content: "one word content" },
        { title: "two", content: "one word content" },
        { title: "three", content: "one word content" },
        { title: "four", content: "one word content" },
    ];

    // store index of open accordion (null = none open)
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
        // if same index clicked → close, else open
    };

    return (
        <div>
            {list.map((item, id) => (
                <div key={id}>
                    <button
                        className="flex justify-between px-4 py-2 border w-[150px]"
                        onClick={() => toggleAccordion(id)}
                    >
                        <span>{item.title}</span>
                        <span>{openIndex === id ? "▲" : "▼"}</span>
                    </button>
                    {openIndex === id && (
                        <div>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordian;
