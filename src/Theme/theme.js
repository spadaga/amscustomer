import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--dxp-s-body-font-family)',
    // "fontSize": "var(--dxp-s-body-font-size, var(--dxp-g-font-size-3))",
    "fontStyle": "var(--dxp-s-body-font-style)",
    "fontWeight": "var(--dxp-s-body-font-weight)",
    "textDecoration": "var(--dxp-s-body-text-decoration)",
    "textTransform": "var(--dxp-s-body-text-transform)",
    "lineHeight": "var(--dxp-s-body-line-height)",
    "letterSpacing": "var(--dxp-s-body-letter-spacing)",
    "background": "var(--dxp-g-root)"
  },
});

export default theme;
