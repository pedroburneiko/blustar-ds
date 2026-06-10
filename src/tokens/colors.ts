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
    500: "#3FCCE3", // cor principal do Blustar
  },
  blue: {
    400: "#4D8BFE",
    500: "#3259FF",
  },
  navy: {
    700: "#061833",
    900: "#04001E", // ink — texto principal
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
