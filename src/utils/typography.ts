import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyFontFamily: ['Lato', 'Helvetica Neue', 'serif'],
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'sans-serif'],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
