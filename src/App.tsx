import React from "react";
import "./App.css";
import { useGetSynonyms } from "./hooks/useSynonyms";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();
  const [selectedWord, setSelectedWord] = React.useState("");

  const handleFormSubmit = (word: string) => {
    getSynonyms(word);
    setSelectedWord(word);
  };

  const handleListItemClick = (newWord: string) => {
    getSynonyms(newWord);
    setSelectedWord(newWord);
  };

  return (
    <div className="App">
      <Header
        styles={{
          color: "white",
          fontSize: "34px",
          textDecoration: "underline",
        }}
        text="Thesaurus"
      />

      <Form onSubmit={handleFormSubmit} selectedWord={selectedWord} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List
          as="ol"
          items={synonyms.map((synonym) => synonym.word)}
          onItemClick={handleListItemClick}
        />
      )}
    </div>
  );
}

export default App;
