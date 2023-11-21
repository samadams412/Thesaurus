import React from "react";

interface ListProps {
    as: "ul" | "ol";
    items: string[];
    onItemClick: (item: string) => void;
}

const List: React.FC<ListProps> = ({ as, items, onItemClick }) => {
    const ListComponent = as === "ul" ? "ul" : "ol";
    const [itemHovered, setItemHovered] = React.useState<string | null>(null);

    const listStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px", // Adjust the gap as needed
        listStyleType: "none",
        padding: 0,
    };

    const listItemStyle: React.CSSProperties = {
        cursor: "pointer",
        border: "1px solid #ddd", // Add a border for separation
        padding: "8px",
        transition: "box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    };

    const listItemHoverStyle: React.CSSProperties = {
        boxShadow: "0 0 20px rgba(0, 0, 0, 1)", // Add glow effect on hover
    };
    

    return (
        <ListComponent style={listStyle}>
        {items.map((item) => (
            <li 
            key={item} 
            style={{ ...listItemStyle, ...(itemHovered === item ? listItemHoverStyle : {}) }}
            onClick={() => onItemClick(item)}
            onMouseEnter={() => setItemHovered(item)}
            onMouseLeave={() => setItemHovered(null)}>
            {item}
            </li>
        ))}
        </ListComponent>
    );
};

export default List;

