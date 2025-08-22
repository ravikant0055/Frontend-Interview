import { useState } from "react";

const Accordian = () => {
    const list = [
        { title: "one", content: "one word content" },
        { title: "two", content: "one word content" },
        { title: "three", content: "one word content" },
        { title: "four", content: "one word content" },
    ];

    // store open state for each accordion in an array of booleans
    const [openItems, setOpenItems] = useState([]);

    const toggleAccordion = (index) => {
        setOpenItems((prev) => {
            const newOpenItems = [...prev];
            newOpenItems[index] = !newOpenItems[index]; // toggle clicked one
            return newOpenItems;
        });
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
                        <span>{openItems[id] ? "▲" : "▼"}</span>
                    </button>
                    {openItems[id] && (
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
