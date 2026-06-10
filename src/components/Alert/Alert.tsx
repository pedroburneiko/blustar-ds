import type { ReactNode } from "react";

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
        gap: 9.5,
        width,
        height: 63,
        padding: "0 22px",
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
      <svg width="14" height="14" viewBox="22 24 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M28.02 34.22L32.955 29.285L31.975 28.305L28.02 32.26L26.025 30.265L25.045 31.245L28.02 34.22ZM29 38C28.0317 38 27.1217 37.8163 26.27 37.4488C25.4183 37.0813 24.6775 36.5825 24.0475 35.9525C23.4175 35.3225 22.9188 34.5817 22.5513 33.73C22.1838 32.8783 22 31.9683 22 31C22 30.0317 22.1838 29.1217 22.5513 28.27C22.9188 27.4183 23.4175 26.6775 24.0475 26.0475C24.6775 25.4175 25.4183 24.9188 26.27 24.5513C27.1217 24.1838 28.0317 24 29 24C29.9683 24 30.8783 24.1838 31.73 24.5513C32.5817 24.9188 33.3225 25.4175 33.9525 26.0475C34.5825 26.6775 35.0813 27.4183 35.4488 28.27C35.8163 29.1217 36 30.0317 36 31C36 31.9683 35.8163 32.8783 35.4488 33.73C35.0813 34.5817 34.5825 35.3225 33.9525 35.9525C33.3225 36.5825 32.5817 37.0813 31.73 37.4488C30.8783 37.8163 29.9683 38 29 38ZM29 36.6C30.5633 36.6 31.8875 36.0575 32.9725 34.9725C34.0575 33.8875 34.6 32.5633 34.6 31C34.6 29.4367 34.0575 28.1125 32.9725 27.0275C31.8875 25.9425 30.5633 25.4 29 25.4C27.4367 25.4 26.1125 25.9425 25.0275 27.0275C23.9425 28.1125 23.4 29.4367 23.4 31C23.4 32.5633 23.9425 33.8875 25.0275 34.9725C26.1125 36.0575 27.4367 36.6 29 36.6Z" fill={s.icon} />
      </svg>
      <span>{children}</span>
    </div>
  );
}

Alert.displayName = "Alert";
