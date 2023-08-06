import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    bodyVideo: string
    bodyColorRGB: string
    bodyColor: string
    textColorRGB: string
    textColor: string
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
    }
  }
}
