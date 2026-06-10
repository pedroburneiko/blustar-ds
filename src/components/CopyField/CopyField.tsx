import { useState } from "react";
import { Copy, CheckCircle } from "../Icon/Icon";

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
          width: 24,
          height: 24,
          padding: 0,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          outline: "none",
        }}
      >
        {copied ? (
          <CheckCircle size={24} color="#0FC4D5" />
        ) : (
          <Copy size={24} color="#0FC4D5" />
        )}
      </button>
    </div>
  );
}

CopyField.displayName = "CopyField";
