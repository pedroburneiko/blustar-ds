import { useState } from "react";

export interface CopyFieldProps {
  /** Texto exibido e copiado ao clicar. */
  value: string;
  /** Largura do campo (px ou CSS). Padrão: 649 (tamanho do design). */
  width?: number | string;
  /** Disparado após copiar com sucesso. */
  onCopy?: (value: string) => void;
  className?: string;
}

/**
 * CopyField — campo de texto copiável do Blustar Design System.
 * Mostra um valor e um botão que copia para a área de transferência.
 */
export function CopyField({ value, width = 649, onCopy, className = "" }: CopyFieldProps) {
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
        height: 63,
        padding: "0 18px 0 22px",
        borderRadius: 11.5,
        border: "1px solid #305B9B",
        background: "#161B21",
        color: "#FFFFFF",
        fontFamily: '"Versos", sans-serif',
        fontSize: 14,
        fontWeight: 400,
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
          width: 22,
          height: 22,
          padding: 0,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          outline: "none",
        }}
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#0FC4D5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="11" height="14" viewBox="619 24 11 14" fill="none" aria-hidden="true">
            <path d="M622.882 35.2C622.526 35.2 622.222 35.0629 621.968 34.7888C621.715 34.5146 621.588 34.185 621.588 33.8V25.4C621.588 25.015 621.715 24.6854 621.968 24.4113C622.222 24.1371 622.526 24 622.882 24H628.706C629.062 24 629.366 24.1371 629.62 24.4113C629.873 24.6854 630 25.015 630 25.4V33.8C630 34.185 629.873 34.5146 629.62 34.7888C629.366 35.0629 629.062 35.2 628.706 35.2H622.882ZM622.882 33.8H628.706V25.4H622.882V33.8ZM620.294 38C619.938 38 619.634 37.8629 619.38 37.5888C619.127 37.3146 619 36.985 619 36.6V26.8H620.294V36.6H627.412V38H620.294Z" fill="#0FC4D5" />
          </svg>
        )}
      </button>
    </div>
  );
}

CopyField.displayName = "CopyField";
