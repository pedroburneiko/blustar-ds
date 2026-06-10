import type { ReactNode } from "react";
import { CheckCircle } from "../Icon/Icon";

export type AlertVariant = "success";

export interface AlertProps {
  /** Tipo do alerta. Por enquanto: success. */
  variant?: AlertVariant;
  /** Mensagem do alerta. */
  children: ReactNode;
  /** Largura (px ou CSS). Padrão: 380 (tamanho do design). */
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
export function Alert({ variant = "success", children, width = 380, className = "" }: AlertProps) {
  const s = styles[variant];
  return (
    <div
      role="status"
      className={`bs-alert ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4.5,
        width,
        height: 63,
        padding: "0 22px 0 17px",
        borderRadius: 11.5,
        border: `1px solid ${s.border}`,
        background: s.bg,
        color: "#FFFFFF",
        fontFamily: '"Versos", sans-serif',
        fontSize: 14,
        fontWeight: 400,
        boxSizing: "border-box",
      }}
    >
      <CheckCircle size={24} color={s.icon} style={{ flexShrink: 0 }} />
      <span>{children}</span>
    </div>
  );
}

Alert.displayName = "Alert";
