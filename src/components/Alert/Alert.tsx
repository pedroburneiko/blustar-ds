import type { ReactNode } from "react";

export type AlertVariant = "success";

export interface AlertProps {
  /** Tipo do alerta. Por enquanto: success. */
  variant?: AlertVariant;
  /** Mensagem do alerta. */
  children: ReactNode;
  /** Largura (px ou CSS). Padrão: ajusta ao conteúdo. */
  width?: number | string;
  className?: string;
}

const styles: Record<AlertVariant, { bg: string; border: string; icon: string }> = {
  success: { bg: "#03230D", border: "#114A31", icon: "#70FF82" },
};

/**
 * Alert — mensagem de feedback do Blustar Design System.
 * Variante "success": fundo verde escuro, ícone de check verde neon.
 */
export function Alert({ variant = "success", children, width, className = "" }: AlertProps) {
  const s = styles[variant];
  return (
    <div
      role="status"
      className={`bs-alert ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        width,
        minHeight: 62,
        padding: "0 20px",
        borderRadius: 12,
        border: `1px solid ${s.border}`,
        background: s.bg,
        color: "#FFFFFF",
        fontFamily: '"Versos", sans-serif',
        fontSize: 14,
        boxSizing: "border-box",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="9" stroke={s.icon} strokeWidth="2" />
        <path d="M8 12.2l2.8 2.8L16.2 9.4" stroke={s.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </div>
  );
}

Alert.displayName = "Alert";
