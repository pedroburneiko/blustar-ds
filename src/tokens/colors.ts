/**
 * Blustar — tokens de cor.
 * Extraídos diretamente dos specs do Figma (cores.svg + paleta neutra.svg).
 */

export const palette = {
  // Marca / primárias
  cyan: {
    50: "#DFFCFF",
    100: "#BFFAFF",
    200: "#A6D9DE",
    400: "#0FC4D5", // cyan vivo (acento/ícone)
    500: "#3FCCE3", // cor principal do Blustar
  },
  blue: {
    400: "#4D8BFE",
    500: "#3259FF",
  },
  navy: {
    600: "#122C53", // navy de destaque (hover de item)
    700: "#061833",
    900: "#04001E", // ink — texto principal
    border: "#305B9B", // borda sobre superfícies navy
  },
  // Azuis-acinzentados (superfícies escuras)
  blueGray: {
    800: "#242C36", // Cinza Azulado 02
    900: "#161B21", // Azul Cinza
  },
  // Verdes (feedback de sucesso)
  green: {
    400: "#70FF82", // Verde Neon
    800: "#114A31", // Verde Escuro
    900: "#03230D", // Verde Escuro 02
  },
  // Neutros (paleta neutra.svg)
  neutral: {
    0: "#FFFFFF",
    50: "#F7F7F7",
    200: "#E5E5E5",
    300: "#C7C7C7",
    400: "#8F8F8F",
    500: "#707070",
    700: "#363636",
    800: "#191919",
    900: "#000000",
  },
} as const;

/** Tokens semânticos — use estes na aplicação, não os valores crus. */
export const colors = {
  brand: palette.cyan[500],
  brandHover: palette.blue[400],
  brandActive: palette.blue[500],
  accent: palette.blue[500],

  bg: palette.neutral[0],
  bgSubtle: palette.neutral[50],
  bgInverse: palette.navy[900],

  text: palette.navy[900],
  textMuted: palette.neutral[500],
  textOnBrand: palette.navy[900],
  textInverse: palette.neutral[0],

  border: palette.neutral[200],
  borderStrong: palette.neutral[300],

  focusRing: palette.blue[500],
} as const;

export type Palette = typeof palette;
export type Colors = typeof colors;
