const THEME = {
  SPACING: {
    zero: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10,
    xxl: 12,
    xxxl: 14,
    xl4: 16,
    xl5: 20,
  },
  FONT_SIZES: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
  },
  BORDER_RADIUS: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  COLORS: {
    primary: '#179EDA',
    secondary: '#02c5dbff',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
  },
} as const;

export default THEME;
