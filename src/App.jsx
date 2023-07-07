import React, { useState } from "react";

const App = () => {
  const [beshie, setBeshie] = useState("");
  const [generatebeshie, setGenerateBeshie] = useState("");
  const [isShowCopy, setIsShowCopy] = useState(false);

  const handleGenerate = () => {
    // first - trim the input text
    // second - convert multiple whitespaces to one whitespace
    const inputText = beshie.trim().replace(/\s+/g, " ");
    // third - convert whitespace to emoji
    const convertBeshie = inputText.replace(/\s/g, " 🤸 ");
    setGenerateBeshie(convertBeshie);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatebeshie);
    setIsShowCopy(true);
    setBeshie("");
    setGenerateBeshie("");

    setTimeout(() => {
      setIsShowCopy(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center bg-slate-700 h-screen ">
      <div className="flex flex-col items-center text-center">
        <div className="my-10">
          <p className="font-display text-white text-5xl mb-2">
            🤸 Beshiefy 🤸
          </p>
          <p className="text-white text-xs">Developed by: Nerwin Alamas</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter text"
            value={beshie}
            onChange={(e) => setBeshie(e.target.value)}
            className="w-80 h-10 p-3 rounded"
          />
        </div>
        <div className="w-80 h-[100px] my-5 p-3 bg-white rounded text-left">
          {generatebeshie}
        </div>
        <div className="w-80 flex justify-center">
          <button
            className="w-20 h-8 mx-2 font-medium bg-white rounded"
            onClick={handleGenerate}
          >
            generate
          </button>
          <button
            className="w-20 h-8 mx-2 font-medium bg-white rounded"
            onClick={handleCopy}
          >
            copy
          </button>
        </div>

        {isShowCopy && <p className="mt-2 text-white">Copy beshie!</p>}
      </div>
    </div>
  );
};

export default App;
