import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual do botão. */
  variant?: ButtonVariant;
  /** Tamanho do botão. */
  size?: ButtonSize;
  /** Ocupa toda a largura do container. */
  fullWidth?: boolean;
  /** Mostra estado de carregamento e desabilita interação. */
  loading?: boolean;
  /** Ícone opcional à esquerda do texto. */
  leftIcon?: ReactNode;
  children?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-md " +
  "transition-colors duration-150 select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-navy-900 hover:bg-blue-400 hover:text-white active:bg-blue-500 active:text-white",
  secondary:
    "bg-transparent text-navy-900 border border-borderStrong border-neutral-300 hover:bg-neutral-50 active:bg-neutral-200",
  ghost:
    "bg-transparent text-navy-900 hover:bg-neutral-50 active:bg-neutral-200",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

/**
 * Botão base do Blustar Design System.
 * Suporta variantes, tamanhos, estado de loading e ícone.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      leftIcon,
      disabled,
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const cls = [
      base,
      variants[variant],
      sizes[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={cls}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : (
          leftIcon
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
