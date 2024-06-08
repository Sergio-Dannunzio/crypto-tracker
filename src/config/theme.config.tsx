import { Css } from "@mui/icons-material";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

enum themePalette {
    BG = "#12181b",
    LIME = "#00FFB8",
    FONT_GLOBAL = "'JetBrains Mono', monospace",
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
    SUCCESS_MAIN = "#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1024,
            xl: 1200
        }
    },
    palette:{
        mode:"dark",
        background:{
            default: themePalette.BG,
        },
        primary:{
            main: themePalette.LIME,
        },
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                }
            }
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius: "0.8em",
                    fontSize: "1em"
                }
            },
            styleOverrides:{
                standardError:{
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN
                },
                standardSuccess:{
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                    background: themePalette.BG_SUCCESS_MAIN
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                colorPrimary:{
                    color: themePalette.ERROR_MAIN,
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                }
            }
        }
    }
});

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
                {children}
           </ThemeProvider>;
    
}