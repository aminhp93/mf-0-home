declare module '@mui/material/styles' {
  interface Palette1 {
    customColors: {
      dark: string
      main: string
      light: string
      bodyBg: string
      darkBg: string
      lightBg: string
      trackBg: string
      tableHeaderBg: string
      primaryGradient: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      darkBg?: string
      lightBg?: string
      trackBg?: string
      tableHeaderBg?: string
      primaryGradient?: string
    }
  }
}

export {}
