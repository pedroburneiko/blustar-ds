import { useState } from "react";
import { Chevron } from "../Icon/Icon";

export interface AccordionItemData {
  label: string;
  disabled?: boolean;
}

export interface AccordionProps {
  /** Título do cabeçalho (clicável). */
  title: string;
  /** Itens revelados quando aberto. */
  items: AccordionItemData[];
  /** Começa aberto? */
  defaultOpen?: boolean;
  /** Largura (px ou CSS). Padrão: 177 (tamanho do design). */
  width?: number | string;
  /** Disparado ao clicar num item. */
  onItemClick?: (label: string) => void;
  className?: string;
}

/**
 * Accordion — cabeçalho expansível com lista de itens.
 * Cabeçalho preto; itens em cinza (#707070). Usado em menus de navegação.
 */
export function Accordion({
  title,
  items,
  defaultOpen = false,
  width = 177,
  onItemClick,
  className = "",
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`bs-accordion ${className}`}
      style={{ width, fontFamily: '"Versos", sans-serif' }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          padding: 0,
          border: "none",
          background: "transparent",
          color: "#FFFFFF",
          fontFamily: "inherit",
          fontSize: 16,
          fontWeight: 400,
          cursor: "pointer",
          outline: "none",
          textAlign: "left",
        }}
      >
        <span>{title}</span>
        <Chevron
          size={18}
          color="#FFFFFF"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .18s", flexShrink: 0 }}
        />
      </button>

      {open && (
        <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0 }}>
          {items.map((it) => (
            <li key={it.label}>
              <button
                type="button"
                disabled={it.disabled}
                onClick={() => onItemClick?.(it.label)}
                style={{
                  width: "100%",
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  color: "#707070",
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 400,
                  cursor: it.disabled ? "not-allowed" : "pointer",
                  opacity: it.disabled ? 0.5 : 1,
                  outline: "none",
                  textAlign: "left",
                }}
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Accordion.displayName = "Accordion";
