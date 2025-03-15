"use client";

import { useState } from "react";

const ShareButton = ({ url }) => {
  const [copeid, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <button onClick={handleCopy}>
      {copeid ? "لینک کپی شد" : "اشتراک گذاری"}
    </button>
  );
};

export default ShareButton;
