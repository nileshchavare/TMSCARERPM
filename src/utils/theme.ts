import { alpha, createTheme } from "@mui/material";
import "@mui/material/styles";
import type { TypographyVariantsOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      [key: number]: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      [key: number]: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body14PX400FW: React.CSSProperties;
    body14PX500FW: React.CSSProperties;
    body5Regular: React.CSSProperties;
    body5Medium: React.CSSProperties;
    body16PX400FW: React.CSSProperties;
    inputSmallIcon: React.CSSProperties;
  }
}



declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodySmall: true;
    bodyMedium: true;
    bodyLarge: true;
    bodyExtraSmall: true;
    h3Medium: true;
    body14PX400FW: true;
    body5Medium: true;
    inputSmallIcon: true;
    body16PX400FW: true;
    body14PX500FW: true;
    body5Regular: true;
  }
}
interface ExtendedTypographyOptions extends TypographyVariantsOptions {
  bodySmall: React.CSSProperties;
  bodyMedium: React.CSSProperties;
  bodyLarge: React.CSSProperties;
  bodyExtraSmall: React.CSSProperties;
  h3Medium: React.CSSProperties;
  body14PX400FW: React.CSSProperties;
  body5Medium: React.CSSProperties;
  inputSmallIcon: React.CSSProperties;
  body16PX400FW: React.CSSProperties;
  body14PX500FW: React.CSSProperties;
  body5Regular: React.CSSProperties;
}

// Typescript module augmentation
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    xs1: true;
    sm: true;
    sm1: true;
    md: true;
    md1: true;
    lg: true;
    lg1: true;
    xl: true;
    xl1: true;
    xl2: true;
    xl3: true;
    xxl: true;
  }
}

const palette = {
  primary: {
    //final
    main: "#18529B",
    light: "#F4FAFF",
  },
  secondary: {
    //Final
    main: "#29B9C6",
    light: "#F0FEFD",
  },

  neutral: {
    1:'#F5F5F5',
    5:'#E7E7E7',
    10:'#DBDBDB',
    20:'#C9CBCC',
    30:'#B4B5B5',
    40:'#9B9E9F',
    50:'#74797B',
    60:'#596063',
    70:'#373E41',
    80:'#21282B',
    90:'#0E181D',
  },
  background: {
    default: "#F3F4F4",
  },
  common: { white: "#FFFFFF", black: "000000" },
};

//14px and 16px
export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 360, //
      xs: 375, //
      xs1: 390, //
      sm: 744, //
      sm1: 834, //
      md: 1025, //
      md1: 1133, //
      lg: 1194, //
      lg1: 1280, // //
      xl: 1366, // //
      xl1: 1440, // //
      xl3: 1430,
      xl2: 1650,
      xxl: 1920, // //
    },
  },
  palette: {
    primary: {
      main: palette.primary.main,
      light: palette.primary.light,
    },
    secondary: {
      main: palette.secondary.main,
      light: palette.secondary.light,
    },
    neutral: palette.neutral,
    background: {
      default: palette.background.default,
    },
  },
  typography: {
    fontFamily: "Figtree, sans-serif",
    h1: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem", // 40px
    },
    h2: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 700,
      fontSize: "2rem", // 32px
    },
    h3: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 700,
      fontSize: "1.75rem", // 28px
    },
    h4: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem", // 24px
    },
    h1Medium: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "2.5rem", // 40px
    },
    h2Medium: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "2rem", // 32px
    },
    body16PX400FW: { //body16PX400FW
      fontFamily: "Figtree, sans-serif",
      fontWeight: 400,
      fontSize: "1rem", // 16px = 1rem
      lineHeight: "120%",
      letterSpacing: "0",
    },
    h3Medium: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "1.75rem", // 28px
    },
    h4Medium: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "1.5rem", // 24px
    },
    body14PX400FW: { //body14PX400FW
      fontFamily: "Figtree, sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem", // 14px
    },
    body14PX500FW: { //body14PX500FW
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem", // 14px
      lineHeight: "120%",
    },
    body5Regular: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
      lineHeight: "120%",
      textAlign: "right",
    },
    body5Medium: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "0.75rem", // 12px
    },
    bodyLarge: {
      fontSize: "18px",
      fontFamily: "Figtree, Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
    },
    bodyMedium: {
      fontSize: "16px",
      fontFamily: "Figtree, Helvetica, Arial, sans-serif",
      fontWeight: 400,
    },
    bodySmall: {
      fontSize: "14px",
      fontFamily: "Figtree, Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
    },
    bodyExtraSmall: {
      fontSize: "12px",
      fontFamily: "Figtree, Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
    },
    inputSmallIcon: {
      width: "15px",
      height: "12px",
      offsetTop: "3px",
      offsetLeft: "1.5px",
    },
  } as ExtendedTypographyOptions,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Figtree, sans-serif",
          textTransform: "none",
          fontWeight: 500,
          height: "40px",
          "&.MuiButton-containedPrimary": {
            boxShadow: "none",
            backgroundColor: palette.primary.main,
            "&:hover": {
              backgroundColor: alpha(palette.primary.main, 0.8),
            },
          },

          "&.MuiButton-outlined": {
            border: `1px solid${palette.primary.main}`,
            boxShadow: "none",
            color: "#18529B",
            "&:hover": {
              backgroundColor: alpha(palette.primary.main, 0.2),
            },
          },
          "&:disabled": {
            cursor: "wait",
            pointerEvents: "auto",
            backgroundColor: "#DBDBDB",
            color: palette.common.white,
            "&:hover": {
              backgroundColor: alpha(palette.primary.main, 0.2),
            },
          },
        },
      },
    },
  },
});