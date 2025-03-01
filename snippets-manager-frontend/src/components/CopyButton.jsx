import { useState } from 'react';
import { useCopyToClipboard } from "@uidotdev/usehooks";

const CopyButton = ({ text }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [clipboard, setClipboard] = useState("Copiar");

  return (
    <button className="copy-button" onClick={() => {
      copyToClipboard(text)
      setClipboard("Copiado!");
      setTimeout(() => {
        setClipboard("Copiar");
      }, 2000);
    }}>
      {clipboard}
    </button>
  )
}

export default CopyButton;