import React, { useEffect, useState } from 'react'

interface FormProps {
    onSubmit: (word: string) => void;
    selectedWord: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, selectedWord }) => {
    const [word, setWord] = useState(selectedWord)

    useEffect(() => {
        setWord(selectedWord)
    }, [selectedWord]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(word);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
            value={word}
            onChange={(e) => setWord(e.target.value)}  
            id="word-input" type="text" 
            style={{marginRight: '8px'}}/>
            <button>Search</button>
        </form>
    )
}

export default Form;