import {
    createTheme
} from "@mui/material/styles";

// declare module "@mui/material/styles" {
//     interface TypographyVariants {
//         h1: React.CSSProperties;
//         h2: React.CSSProperties;
//         subtitle1: React.CSSProperties;
//         body1: React.CSSProperties;
//         body2: React.CSSProperties;
//         caption1: React.CSSProperties;
//         caption2: React.CSSProperties;

//     }
//     interface TypographyVariantsOptions {
//         h1: React.CSSProperties;
//         h2: React.CSSProperties;
//         subtitle1: React.CSSProperties;
//         body1: React.CSSProperties;
//         body2: React.CSSProperties;
//         caption1: React.CSSProperties;
//         caption2: React.CSSProperties;

//     }
//     interface Palette {
//         structural: Palette["primary"];
//         greyColors: Palette["primary"];
//         accent: Palette["primary"];
//         textColor: Palette["primary"];
//     }
//     interface PaletteOptions {
//         structural?: PaletteOptions["primary"];
//         greyColors?: PaletteOptions["primary"];
//         accentColors?: PaletteOptions["primary"];
//         textColor?: PaletteOptions["primary"];
//     }
//     interface Colors {
//         white?: string;
//         stroke?: string;
//         icon01?: string;
//         icon02?: string;
//         primary100?: string;
//         primary300?: string;
//         primary400?: string;
//         primary500?: string;
//         primary700?: string;
//         lowEmphasis?: string;
//         mediumEmphasis?: string;
//         highEmphasis?: string;
//         blue?: string;
//         lightBlue?: string;
//         green?: string;
//         lightGreen?: string;
//         yellow?: string;
//         lightYellow?: string;
//     }
//     interface PaletteColor extends Colors{
//     }
//     interface SimplePaletteColorOptions extends Colors{
//     }
// }

// export const theme = createTheme({
//     typography: {
//         h1: {
//             fontFamily: "Inter",
//             fontSize: "20px",
//             fontWeight: "500",
//             lineHeight: "30px",
//             fontStyle: "normal",
//         },
//         h2: {
//             fontFamily: "Inter",
//             fontSize: "18px",
//             fontWeight: "500",
//             lineHeight: "28px",
//             fontStyle: "normal",
//         },
//         subtitle1: {
//             fontFamily: "Inter",
//             fontSize: "16px",
//             fontWeight: "500",
//             lineHeight: "24px",
//             fontStyle: "normal",
//         },
//         body1: {
//             fontFamily: "Inter",
//             fontSize: "14px",
//             fontWeight: "500",
//             lineHeight: "20px",
//             fontStyle: "normal",
//         },
//         body2: {
//             fontFamily: "Inter",
//             fontSize: "14px",
//             fontWeight: "400",
//             lineHeight: "20px",
//             fontStyle: "normal",
//         },
//         caption1:{
//             fontFamily: "Inter",
//             fontSize: "12px",
//             fontWeight: "500",
//             lineHeight: "18px",
//             fontStyle: "normal",
//         },
//         caption2:{
//             fontFamily: "Inter",
//             fontSize: "12px",
//             fontWeight: "400",
//             lineHeight: "18px",
//             fontStyle: "normal",
//         }
//     },
//     palette: {
//         primary: {
//             main: "#224DFF",
//             primary100: "#F7F7F9",
//             primary300: "#EFF2FF",
//             primary400: "#95AAFF",
//             primary500: "#224DFF",
//             primary700:"#1132B7"
//         },
//         textColor:{
//             main:'#FFFFFF',
//             white:'#FFFFFF',
//             lowEmphasis:'#818287',
//             mediumEmphasis:'#696A6E',
//             highEmphasis:'#2C2C2E',
//         },
//         accentColors:{
//             main:'#3E5FE2',
//             lightBlue:'#F2F4F6',
//             green:"#17A076",
//             lightGreen:'#F2FCFB',
//             yellow:"#A08817",
//             lightYellow:'#FAF8EB'
//         },
//         structural:{
//             main:'#FFFFFF',
//             stroke:'#E5E7ED',
//             icon01:'#696A6E',
//             icon02:'#3E414D'
//         }
//     },
// });
