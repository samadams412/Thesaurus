import React from "react";

interface HeaderProps {
    styles?: React.CSSProperties;
    text: string;
}

const Header: React.FC<HeaderProps> = ({ styles = {}, text }) => {
    const defaultStyles: React.CSSProperties = {
        fontSize: '24px',
        color: '#333',
        fontWeight: 'bold',
        marginBottom: '16px', // You can adjust the marginBottom as needed
    };

    const headerStyle: React.CSSProperties = { ...defaultStyles, ...styles };

    return <h1 style={headerStyle}>{text}</h1>;
};

export default Header;
