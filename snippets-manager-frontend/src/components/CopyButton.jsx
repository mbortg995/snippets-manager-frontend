import { useCopyToClipboard } from "@uidotdev/usehooks";

const CopyButton = ({ text }) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);
  return (
    <button className="copy-button" onClick={() => {
      copyToClipboard(text)
      console.log(text);
    }}>
      {hasCopiedText ? "Copiado!" : "Copiar"}
    </button>
  )
}

export default CopyButton;