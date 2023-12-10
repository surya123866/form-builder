import React, { useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import setCloze from "../../actions/clozeActions"

const ClozeActivity = () => {
  const [sentence, setSentence] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);

  const handleWordClick = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleCheckboxChange = (word) => {
    setSelectedWords(selectedWords.filter((w) => w !== word));
  };

  // const formatDataToJSON = () => {
  //   return JSON.stringify({
  //     sentence: sentence,
  //     selectedWords: selectedWords,
  //   });
  // };

  return (
    <div className="p-4 border mb-4">
      <div>
        <h1 className="text-2xl font-medium mb-4 items-center flex space-x-3 ">
          <RiApps2Line /> Question 2
        </h1>
        <input
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          className="border p-2 w-full outline-none"
          onDoubleClick={(e) => {
            const selectedWord = e.target.value.substring(
              e.target.selectionStart,
              e.target.selectionEnd
            );
            handleWordClick(selectedWord);
          }}
        />
      </div>

      <div className="mt-4">
        <p className="text-lg mb-2">Selected words:</p>
        <div className="flex flex-wrap">
          {selectedWords.map((word) => (
            <div key={word} className="flex items-center mb-2 mr-2">
              <input
                type="checkbox"
                checked
                onChange={() => handleCheckboxChange(word)}
                className="mr-1"
              />
              <span>{word}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ClozeActivity;
