
import {
  createTheme,
  PaletteColorOptions,
  PaletteColor,
} from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface PaletteOptions {
//     alphaPrimary500: PaletteColorOptions;
//     betaTextHigh: PaletteColorOptions;
//     betaGrey300: PaletteColorOptions;
//     betaTextMedium: PaletteColorOptions;
//     betaGrey200: PaletteColorOptions;
//     betaTextLow: PaletteColorOptions;
//     betaGrey100: PaletteColorOptions;
//     gammaStructuralLinear1: PaletteColorOptions;
//     gammaStructuralWhite: PaletteColorOptions;
//     gammaStructuralColor5: PaletteColorOptions;
//     gammaStructuralColor2: PaletteColorOptions;
//     gammaStructuralColor8: PaletteColorOptions;
//     gammaStructuralColor4: PaletteColorOptions;
//     gammaStructuralColor1: PaletteColorOptions;
//     gammaStructuralColor7: PaletteColorOptions;
//     gammaStructuralColor5Part2: PaletteColorOptions;
//     gammaStructuralColor3: PaletteColorOptions;
//     gammaStructuralColor9: PaletteColorOptions;
//     gammaStructuralColor10: PaletteColorOptions;
//     gammaAccentColor1: PaletteColorOptions;
//     gammaAccentColor2: PaletteColorOptions;
//     gammaAccentColor3: PaletteColorOptions;
//     gammaAccentColor4: PaletteColorOptions;
//     gammaAccentColor5: PaletteColorOptions;
//     gammaAccentColor6: PaletteColorOptions;
//     gammaAccentColor7: PaletteColorOptions;
//     gammaShadowColor: PaletteColorOptions;
//   }

//   interface Palette {
//     alphaPrimary500: PaletteColor;
//     betaTextHigh: PaletteColor;
//     betaGrey300: PaletteColor;
//     betaTextMedium: PaletteColor;
//     betaGrey200: PaletteColor;
//     betaTextLow: PaletteColor;
//     betaGrey100: PaletteColor;
//     gammaStructuralLinear1: PaletteColor;
//     gammaStructuralWhite: PaletteColor;
//     gammaStructuralColor5: PaletteColor;
//     gammaStructuralColor2: PaletteColor;
//     gammaStructuralColor8: PaletteColor;
//     gammaStructuralColor4: PaletteColor;
//     gammaStructuralColor1: PaletteColor;
//     gammaStructuralColor7: PaletteColor;
//     gammaStructuralColor5Part2: PaletteColor;
//     gammaStructuralColor3: PaletteColor;
//     gammaStructuralColor9: PaletteColor;
//     gammaStructuralColor10: PaletteColor;
//     gammaAccentColor1: PaletteColor;
//     gammaAccentColor2: PaletteColor;
//     gammaAccentColor3: PaletteColor;
//     gammaAccentColor4: PaletteColor;
//     gammaAccentColor5: PaletteColor;
//     gammaAccentColor6: PaletteColor;
//     gammaAccentColor7: PaletteColor;
//     gammaShadowColor: PaletteColor;
//   }

//   interface TypographyVariants {
//     caption1: React.CSSProperties;
//     body3: React.CSSProperties;
//   }

//   interface TypographyVariantsOptions {
//     caption1?: React.CSSProperties;
//     body3?: React.CSSProperties;
//   }
// }

// declare module "@mui/material/Typography" {
//   interface TypographyPropsVariantOverrides {
//     caption1: true;
//     body3: true;
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     alphaPrimary500: true;
//     betaTextMedium: true;
//     betaTextHigh: true;
//     gammaStructuralWhite: true;
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     alphaPrimary500: true;
//     betaTextMedium: true;
//     gammaStructuralWhite: true;
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     alphaPrimary500: true;
//     betaTextMedium: true;
//     gammaStructuralWhite: true;
//   }
// }

// const theme = createTheme({
 
//   palette: {
//     alphaPrimary500: {
//       main: "#FF725E",
//       contrastText: "white",
//     },
//     betaTextHigh: {
//       main: "#171717",
//     },
//     betaGrey300: {
//       main: "#686868",
//     },
//     betaTextMedium: {
//       main: "#606060 ",
//     },
//     betaGrey200: {
//       main: "#989898",
//     },
//     betaTextLow: {
//       main: "#898989",
//     },
//     betaGrey100: {
//       main: "#E3E3E3",
//     },
//     gammaStructuralLinear1: {
//       main: "linear-gradient(90.14deg, #8C52C6 0.95%, #683799 100%)",
//     },
//     gammaStructuralWhite: {
//       main: "#FFFFFF",
//     },

//     gammaStructuralColor5: {
//       main: "#E7FFE7",
//     },
//     gammaStructuralColor2: {
//       main: "#FBFAFF",
//     },
//     gammaStructuralColor4: {
//       main: "#FFF8E7",
//     },
//     gammaStructuralColor8: {
//       main: "#E7FFFE",
//     },
//     gammaStructuralColor1: {
//       main: "#FFD6CC",
//     },
//     gammaStructuralColor7: {
//       main: "#E7FFF6",
//     },
//     gammaStructuralColor5Part2: {
//       main: "#E7F5FF",
//     },
//     gammaStructuralColor3: {
//       main: "#FAFAFA",
//     },
//     gammaStructuralColor9: {
//       main: "#FFE7FA",
//     },
//     gammaStructuralColor10: {
//       main: "#FFE7EB",
//     },
//     gammaAccentColor1: {
//       main: "#FFB500",
//     },
//     gammaAccentColor3: {
//       main: "#11D1C5",
//     },
//     gammaAccentColor5: {
//       main: "#FF00C8",
//     },
//     gammaAccentColor7: {
//       main: "#FF002F",
//     },
//     gammaAccentColor2: {
//       main: "#0095FF",
//     },
//     gammaAccentColor4: {
//       main: "#07ED02",
//     },
//     gammaAccentColor6: {
//       main: "#04D387",
//     },
//     gammaShadowColor: {
//       main: "#E5E5E5",
//     },
//   },
//   typography: {
//     h1: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 500,
//       fontSize: "24px",
//       lineHeight: "36px",
//       textTransform: "none",
//     },
//     h2: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 700,
//       fontSize: "24px",
//       lineHeight: "36px",
//       textTransform: "none",
//     },
//     subtitle1: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 400,
//       fontSize: "16px",
//       lineHeight: "24px",
//       textTransform: "none",
//     },
//     subtitle2: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 500,
//       fontSize: "16px",
//       lineHeight: "24px",
//       textTransform: "none",
//     },
//     body1: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 400,
//       fontSize: "14px",
//       lineHeight: "22px",
//       textTransform: "none",
//     },
//     body2: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 500,
//       fontSize: "14px",
//       lineHeight: "22px",
//       textTransform: "none",
//     },
//     body3: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 700,
//       fontSize: "14px",
//       lineHeight: "22px",
//       textTransform: "none",
//     },
//     caption1: {
//       fontFamily: ["Roboto", "sans-serif"].join(","),
//       fontStyle: "normal",
//       fontWeight: 400,
//       fontSize: "12px",
//       lineHeight: "16px",
//       textTransform: "none",
//     },
//   },
 
//   components: {
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           background: "linear-gradient(90.14deg, #8C52C6 0.95%, #683799 100%)",
//           marginLeft: "0px",
//         },
//       },
//     },
    
//     MuiInputBase: {
//       styleOverrides: {
//         input: {
//           border: "#fff",
//           borderRadius: "8px",
//         },
//       },
//     },
//   },
 
// });

// export type iconType =
//   | "allTopics"
//   | "avatar"
//   | "bookLogo"
//   | "bookmark"
//   | "booksread"
//   | "bookstoread"
//   | "checkbox"
//   | "close"
//   | "communication"
//   | "currentreading"
//   | "dropdown"
//   | "fbLogo"
//   | "googleLogo"
//   | "lifestyle"
//   | "like"
//   | "linkedinLogo"
//   | "logo"
//   | "maths"
//   | "notification"
//   | "others"
//   | "pageleft"
//   | "pageright"
//   | "popular"
//   | "recenttitles"
//   | "science"
//   | "search"
//   | "searchnew1"
//   | "share"
//   | "social"
//   | "star"
//   | "target"
//   | "textbooks"
//   | "unlike"
//   | "visibility"
//   | "authors"
//   | "exams"
//   | "more"
//   | "ratingStar"
//   | "dropdown1"
//   | "triangle";

// export type avatarType =
//   | "anvithaSharma"
//   | "benAvatar"
//   | "hannahAvatar"
//   | "headerAvatar"
//   | "jdLeeAvatar"
//   | "mikeAvatar"
//   | "mitraAvatar"
//   | "radhaAvatar"
//   | "riyaAvatar";

// export default theme;
