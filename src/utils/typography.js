import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography(lincolnTheme)

delete lincolnTheme.googleFonts

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
