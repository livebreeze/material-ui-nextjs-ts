"use client";

import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OCRComponent = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    if (file) {
      // @ts-ignore
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    if (image) {
      Tesseract.recognize(image, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        setText(text);
      });
    }
  };

  return (
    <div className="ocr-container p-4">
      <input type="file" onChange={handleImageChange} className="mb-4" />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Convert to Text
      </button>
      <div className="mt-4">
        <h3 className="font-bold">Extracted Text:</h3>
        <p className="whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
};

export default OCRComponent;
