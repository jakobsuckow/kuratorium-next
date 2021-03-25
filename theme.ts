export interface Theme {
  breakpoints: any;
  colors: any;
}

const theme: Theme = {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
  },
  colors: {
    light: "#F7F7F7",
    grey: "#E5E5E5",
    blue: "#0D6893",
    pink: "#E3ABAB",
    black: "#000000",
  },
};

export default theme;
