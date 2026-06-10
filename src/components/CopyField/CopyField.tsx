import { useState } from "react";

export interface CopyFieldProps {
  /** Texto exibido e copiado ao clicar. */
  value: string;
  /** Largura do campo (px ou CSS). Padrão: 100%. */
  width?: number | string;
  /** Disparado após copiar com sucesso. */
  onCopy?: (value: string) => void;
  className?: string;
}

/**
 * CopyField — campo de texto copiável do Blustar Design System.
 * Mostra um valor e um botão que copia para a área de transferência.
 */
export function CopyField({ value, width = "100%", onCopy, className = "" }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopy?.(value);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard indisponível — silencioso */
    }
  }

  return (
    <div
      className={`bs-copyfield ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width,
        height: 62,
        padding: "0 20px",
        borderRadius: 12,
        border: "1px solid #305B9B",
        background: "#161B21",
        color: "#FFFFFF",
        fontFamily: '"Versos", sans-serif',
        fontSize: 14,
        boxSizing: "border-box",
      }}
    >
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {value}
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copiado" : "Copiar"}
        style={{
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          padding: 0,
          border: "none",
          background: "transparent",
          color: "#0FC4D5",
          cursor: "pointer",
          outline: "none",
        }}
      >
        {copied ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12l4.5 4.5L19 7" stroke="#0FC4D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" rx="2" stroke="#0FC4D5" strokeWidth="2" />
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="#0FC4D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
}

CopyField.displayName = "CopyField";
