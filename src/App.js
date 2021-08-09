import React, { Component } from "react";

import {
    CssBaseline,
    Grid,
    FormGroup,
    FormControlLabel,
    Switch,
    ThemeProvider,
    Paper,
    Zoom,
    Fab,
    useScrollTrigger,
} from "@material-ui/core";
import { styled, createTheme } from "@material-ui/core/styles";

import { FaAngleUp } from "react-icons/fa";

import MaterialUISwitch from "./Components/MaterialUISwitch";

import Contact from "./Side/Contact";
import SideSkills from "./Side/SideSkills";
import SideLanguages from "./Side/SideLanguages";
import SideInterests from "./Side/SideInterests";

import Summary from "./Main/Summary";
import Education from "./Main/Education";
import Experience from "./Main/Experience";
import Projects from "./Main/Projects";
import Courses from "./Main/Courses";

import Theme from "./Colors";
import "./App.css";
import "fontsource-roboto";

const TopSideGrid = styled(Grid)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? Theme.bgDarkTop : Theme.bgLightTop,
    background:
        theme.palette.mode === "dark"
            ? // `linear-gradient(90deg, ${Theme.bgDarkTop} 0%, ${Theme.bgDarkMain} 100%)`
			``
            : `linear-gradient(180deg, ${Theme.bgLightTop} 0%, ${Theme.bgLightMain} 100%, ${Theme.bgLightMain} 100%)`,
    transition: theme.transitions.create(["all", "background-color"], {
        duration: ".5s",
        easing: "ease",
    }),
}));

const BottomSideGrid = styled(Grid)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? Theme.bgDarkBottom
            : Theme.bgLightBottom,
    background:
        theme.palette.mode === "dark"
            ? // `linear-gradient(90deg, ${Theme.bgDarkBottom} 0%, ${Theme.bgDarkMain} 100%)`
			``
            : `linear-gradient(0deg, ${Theme.bgLightBottom} 0%, ${Theme.bgLightMain} 100%, ${Theme.bgLightMain} 100%)`,
    transition: theme.transitions.create(["background-color"], {
        duration: ".5s",
        easing: "ease",
    }),
}));

const MainGrid = styled(Grid)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? Theme.bgDarkMain : Theme.bgLightMain,
    transition: theme.transitions.create(["all", "background-color"], {
        duration: ".5s",
        easing: "ease",
    }),
}));

function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <Grid
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: "fixed",
                    bottom: "10px",
                    right: { xs: "5%", sm: "17%" },
                }}
            >
                {children}
            </Grid>
        </Zoom>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContactLinkText: false,
            themeMode: false,
            contactHeight: 0,
        };
        this.buttonHeight = 50;
    }

    toggleLinkText = () => {
        this.setState((prevState) => ({
            showContactLinkText: !prevState.showContactLinkText,
        }));
    };
    toogleTheme = () => {
        this.setState((prevState) => ({
            themeMode: !prevState.themeMode,
        }));
    };
    handleGetHeight = (height) => {
        this.contactHeight = height;
        this.setState({ contactHeight: height });
    };

    render() {
        this.topSideGridTheme = createTheme({
            palette: {
                mode: this.state.themeMode ? "dark" : "light",
                text: {
                    primary: this.state.themeMode
                        ? Theme.textDarkPrimaryTop
                        : Theme.textLightPrimaryTop,
                    secondary: this.state.themeMode
                        ? Theme.textDarkSecondaryTop
                        : Theme.textLightSecondaryTop,
                    terciary: this.state.themeMode
                        ? Theme.textDarkTerciaryTop
                        : Theme.textLightTerciaryTop,
                },
                background: {
                    paper: this.state.themeMode
                        ? Theme.bgDarkPaper
                        : Theme.bgLightPaper,
                    default: this.state.themeMode
                        ? Theme.bgDarkPaper
                        : Theme.bgLightPaper,
                },
            },
        });
        this.bottomSideGridTheme = createTheme({
            palette: {
                mode: this.state.themeMode ? "dark" : "light",
                text: {
                    primary: this.state.themeMode
                        ? Theme.textDarkPrimaryMain
                        : Theme.textLightPrimaryMain,
                    secondary: this.state.themeMode
                        ? Theme.textDarkSecondaryBottom
                        : Theme.textLightSecondaryBottom,
                    terciary: this.state.themeMode
                        ? Theme.textDarkTerciaryBottom
                        : Theme.textLightTerciaryBottom,
                },
                background: {
                    paper: this.state.themeMode
                        ? Theme.bgDarkPaper
                        : Theme.bgLightPaper,
                    default: this.state.themeMode
                        ? Theme.bgDarkPaper
                        : Theme.bgLightPaper,
                },
            },
        });
        this.mainGridTheme = createTheme({
            palette: {
                mode: this.state.themeMode ? "dark" : "light",
                text: {
                    primary: this.state.themeMode
                        ? Theme.textDarkPrimaryMain
                        : Theme.textLightPrimaryMain,
                    secondary: this.state.themeMode
                        ? Theme.textDarkSecondaryMain
                        : Theme.textLightSecondaryMain,
                    terciary: this.state.themeMode
                        ? Theme.textDarkTerciaryMain
                        : Theme.textLightTerciaryMain,
                },
                background: {
                    paper: this.state.themeMode
                        ? Theme.bgDarkPaper
                        : Theme.bgLightPaper,
                    default: this.state.themeMode
                        ? Theme.bgDarkPaper
                        : Theme.bgLightPaper,
                },
            },
        });
        return (
            <Paper square theme={this.topSideGridTheme} elevation={0}>
                <CssBaseline />
                <Grid
                    container
                    className="noScroll scroll4"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        height: { xs: "auto", md: "auto", lg: "100vh" },
                        margin: "0 auto",
                        width: { xs: "100%", sm: "70%", lg: "80%" },
                    }}
                >
                    <Grid
                        item
                        id="back-to-top-anchor"
                        xs={12}
                        md={12}
                        lg={4}
                        order={{ xs: 1, md: 1, lg: 1 }}
                    >
                        <ThemeProvider theme={this.topSideGridTheme}>
                            <BottomSideGrid
                                container
                                px={[0, 0, 3]}
                                sx={{
                                    justifyContent: "center",
                                    height: "50px",
                                }}
                            >
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <MaterialUISwitch
                                                theme={this.mainGridTheme}
                                                sx={{ m: 1 }}
                                                checked={this.state.themeMode}
                                            />
                                        }
                                        onChange={() => this.toogleTheme()}
                                        label=""
                                    />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={
                                                    this.state
                                                        .showContactLinkText
                                                }
                                                onChange={() =>
                                                    this.toggleLinkText()
                                                }
                                                name="contactLinks"
                                            />
                                        }
                                        label={
                                            this.state.showContactLinkText
                                                ? "Hide Info"
                                                : "Show Info"
                                        }
                                    />
                                </FormGroup>
                            </BottomSideGrid>
                            <TopSideGrid container px={[0, 0, 3]}>
                                <Contact
                                    showLinkText={
                                        this.state.showContactLinkText
                                    }
                                    key={this.state.showContactLinkText}
                                    getHeight={this.handleGetHeight}
                                />
                            </TopSideGrid>
                        </ThemeProvider>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={4}
                        order={{ xs: 3, md: 3, lg: 2 }}
                        className="scrollableSection scroll4"
                        sx={{
                            minHeight: {
                                xs: "auto",
                                md: "auto",
                                lg: `calc(100vh - ${this.buttonHeight}px - ${this.contactHeight}px)`,
                            },
                            maxHeight: {
                                xs: "auto",
                                md: "auto",
                                lg: `calc(100vh - ${this.buttonHeight}px - ${this.contactHeight}px)`,
                            },
                        }}
                    >
                        <ThemeProvider theme={this.bottomSideGridTheme}>
                            <BottomSideGrid
                                container
                                px={[0, 0, 3]}
                                sx={{
                                    minHeight: {
                                        xs: "auto",
                                        md: "auto",
                                        lg: `calc(100vh - ${this.buttonHeight}px - ${this.contactHeight}px)`,
                                    },
                                }}
                            >
                                <SideLanguages />
                                <SideSkills />
                                <SideInterests />
                            </BottomSideGrid>
                        </ThemeProvider>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={8}
                        order={{ xs: 2, md: 2, lg: 3 }}
                    >
                        <ThemeProvider theme={this.mainGridTheme}>
                            <MainGrid
                                container
                                px={[0, 0, 3]}
                                className="scrollableSection scroll4"
                                sx={{
                                    height: {
                                        xs: "auto",
                                        md: "auto",
                                        lg: "100vh",
                                    },
                                }}
                            >
                                <Summary />
                                <Education />
                                <Experience />
                                <Projects />
                                <Courses />
                            </MainGrid>
                        </ThemeProvider>
                    </Grid>

                    <ScrollTop>
                        <Fab
                            color="primary"
                            size="small"
                            aria-label="scroll back to top"
                        >
                            <FaAngleUp />
                        </Fab>
                    </ScrollTop>
                </Grid>
            </Paper>
        );
    }
}

export default App;
