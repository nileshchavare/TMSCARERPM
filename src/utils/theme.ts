import { alpha, createTheme } from "@mui/material";
import "@mui/material/styles";
import type { TypographyVariantsOptions, } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      [key: number]: string;
    };
    informative: {
      [key: number]: string;
    };
    negative: {
      [key: number]: string;
    };

    warningColor: {
      [key: number]: string;
    };
    positive: {
      [key: number]: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      [key: number]: string;
    };
    informative?: {
      [key: number]: string;
    };
    negative?: {
      [key: number]: string;
    };
    warningColor?: {
      [key: number]: string;
    };
    positive?: {
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
    body16PX500FW: React.CSSProperties;
    inputSmallIcon: React.CSSProperties;
    body20PX500FW: React.CSSProperties;
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
    body16PX500FW: true;
    body14PX500FW: true;
    body5Regular: true;
    body20PX500FW: true;
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
  body20PX500FW: React.CSSProperties;
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface SimplePaletteColorOptions {
    [key: number]: string;
  }
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
    0: '#F4FAFF',
    10: '#DDEDFF',
    20: '#BDDAFF',
    30: '#9FCAFF',
    40: '#4E91E5',
    50: '#3274C7',
    70: '#0C3875',
    80: '#0A2A58',
    90: '#061D3D',
    100: '#061831',
  },
  secondary: {
    //Final
    main: "#29B9C6",
    light: "#F0FEFD",
    0: '#F0FEFD',
    10: '#E5FFFD',
    20: '#D4FAF8',
    30: '#A4EDEC',
    40: '#77DFE0',
    50: '#4ECDD4',
    70: '#1A91A1',
    80: '#0D6A7A',
    90: '#054654',
    100: '#02242E',
  },

  neutral: {
    1: '#F5F5F5',
    5: '#E7E7E7',
    10: '#DBDBDB',
    20: '#C9CBCC',
    30: '#B4B5B5',
    40: '#9B9E9F',
    50: '#74797B',
    60: '#596063',
    70: '#373E41',
    80: '#21282B',
    90: '#0E181D',
  },
  informative: {
    1: '#F2F7FF',
    5: '#E0EDFF',
    10: '#BDDAFF',
    20: '#86B8FE',
    30: '#5598F6',
    40: '#2D7AE5',
    50: '#105FCE',
    60: '#004AB1',
    70: '#003B8D',
    80: '#002962',
    90: '#001532',
  },
  positive: {
    main: '#17BF33',
    1: '#F4FFF2',
    5: '#E1FCDE',
    10: '#CDF9CA',
    20: '#A4F3A3',
    30: '#7EEB83',
    40: '#42D75B',
    50: '#17BF33',
    60: '#049B22',
    70: '#016A1C',
    80: '#005016',
    90: '#00300F',
  },
  warningColor: {
    1: '#FFFBF2',
    5: '#FFF2D2',
    10: '#FFE8B1',
    20: '#FFCF73',
    30: '#FCB33B',
    40: '#F2930D',
    50: '#D66F00',
    60: '#BA5900',
    70: '#943C00',
    80: '#662100',
    90: '#340D00',
  },
  negative: {
    1: '#FFF2F3',
    5: '#FFD4D8',
    10: '#FFB6BC',
    20: '#FA7D87',
    30: '#F14A58',
    40: '#E42131',
    50: '#CE0718',
    60: '#B1000F',
    70: '#8D000C',
    80: '#620008',
    90: '#320004',
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
      ...palette.primary,
      main: palette.primary.main,
      light: palette.primary.light,
    },
    secondary: {
      ...palette.secondary,
      main: palette.secondary.main,
      light: palette.secondary.light,
    },
    neutral: palette.neutral,
    positive: palette.positive,
    warningColor: palette.warningColor,
    negative: palette.negative,
    informative: palette.informative,

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
    body20PX500FW: { //body16PX400FW
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "1.25rem", // 16px = 1rem
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
    body14PX600FW: { //body14PX500FW
      fontFamily: "Figtree, sans-serif",
      fontWeight: 600,
      fontSize: "0.875rem", // 14px
      lineHeight: "120%",
    },
    body16PX500FW: {
      fontFamily: "Figtree, sans-serif",
      fontWeight: 500,
      fontSize: "1rem",        // 16px
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
          padding: "6px 10px",
          borderRadius: "4px",
          height: "36px",
          minHeight: "36px",
          lineHeight: "36px",
          fontSize: "14px",
          "&.MuiButton-containedPrimary": {
            boxShadow: "none",
            backgroundColor: palette.primary.main,
            "&:hover": {
              backgroundColor: alpha(palette.primary.main, 0.8),
            },
          },

          "&.MuiButton-outlined": {
            border: `1px solid ${palette.primary.main}`,
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