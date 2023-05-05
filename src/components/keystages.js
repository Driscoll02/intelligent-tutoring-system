import React, { useState } from "react";
import NavBar from "./navbar";
import { useMediaQuery } from "@mui/material";

function KeyStages() {
    const [isKS1ButtonHover, setIsKS1ButtonHover] = useState(false);
    const [isKS2ButtonHover, setIsKS2ButtonHover] = useState(false);

    const wideScreenMatches = useMediaQuery('(min-width:1400px)');
    const standardScreenMatches = useMediaQuery('(min-width:1200px)');
    const smallStandardScreenMatches = useMediaQuery('(min-width:924px)');
    const tabletScreenMatches = useMediaQuery('(min-width:768px)');

    function onKeyStage1ButtonHover() {
        if(!isKS1ButtonHover) {
            setIsKS1ButtonHover(true)
        } else {
            setIsKS1ButtonHover(false)
        }
    }

    function onKeyStage2ButtonHover() {
        if(!isKS2ButtonHover) {
            setIsKS2ButtonHover(true)
        } else {
            setIsKS2ButtonHover(false)
        }
    }

    function WideScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <h3 style={styles.stageChoiceText}>Choose your stage</h3>
                    <div style={styles.topCenterCenterDiv}>
                        <a href="/ks1" style={isKS1ButtonHover ? styles.leftDivButtonHover : styles.leftDivButtonNonHover} onMouseEnter={onKeyStage1ButtonHover} onMouseLeave={onKeyStage1ButtonHover}>Key Stage 1</a>
                        <a href="/ks2" style={isKS2ButtonHover ? styles.leftDivButtonHover : styles.leftDivButtonNonHover} onMouseEnter={onKeyStage2ButtonHover} onMouseLeave={onKeyStage2ButtonHover}>Key Stage 2</a>
                    </div>
                </div>
                <div style={styles.bottomDiv}>
                    <div style={styles.leftLegalDiv}>
                        <a>Terms of Service</a>
                    </div>
                    <div style={styles.rightLegalDiv}>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div>
        );
    }

    function StandardScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <h3 style={styles.stageChoiceText}>Choose your stage</h3>
                    <div style={styles.topCenterCenterDiv}>
                        <a href="/ks1" style={isKS1ButtonHover ? styles.standardLeftDivButtonHover : styles.standardLeftDivButtonNonHover} onMouseEnter={onKeyStage1ButtonHover} onMouseLeave={onKeyStage1ButtonHover}>Key Stage 1</a>
                        <a href="/ks2" style={isKS2ButtonHover ? styles.standardLeftDivButtonHover : styles.standardLeftDivButtonNonHover} onMouseEnter={onKeyStage2ButtonHover} onMouseLeave={onKeyStage2ButtonHover}>Key Stage 2</a>
                    </div>
                </div>
                <div style={styles.bottomDiv}>
                    <div style={styles.leftLegalDiv}>
                        <a>Terms of Service</a>
                    </div>
                    <div style={styles.rightLegalDiv}>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div>
        );
    }

    function SmallStandardScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <h3 style={styles.stageChoiceText}>Choose your stage</h3>
                    <div style={styles.topCenterCenterDiv}>
                        <a href="/ks1" style={isKS1ButtonHover ? styles.smallStandardLeftDivButtonHover : styles.smallStandardLeftDivButtonNonHover} onMouseEnter={onKeyStage1ButtonHover} onMouseLeave={onKeyStage1ButtonHover}>Key Stage 1</a>
                        <a href="/ks2" style={isKS2ButtonHover ? styles.smallStandardLeftDivButtonHover : styles.smallStandardLeftDivButtonNonHover} onMouseEnter={onKeyStage2ButtonHover} onMouseLeave={onKeyStage2ButtonHover}>Key Stage 2</a>
                    </div>
                </div>
                <div style={styles.bottomDiv}>
                    <div style={styles.leftLegalDiv}>
                        <a>Terms of Service</a>
                    </div>
                    <div style={styles.rightLegalDiv}>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div>
        );
    }

    function TabletScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <h3 style={styles.stageChoiceText}>Choose your stage</h3>
                    <div style={styles.topCenterCenterDiv}>
                        <a href="/ks1" style={isKS1ButtonHover ? styles.tabletLeftDivButtonHover : styles.tabletLeftDivButtonNonHover} onMouseEnter={onKeyStage1ButtonHover} onMouseLeave={onKeyStage1ButtonHover}>Key Stage 1</a>
                        <a href="/ks2" style={isKS2ButtonHover ? styles.tabletLeftDivButtonHover : styles.tabletLeftDivButtonNonHover} onMouseEnter={onKeyStage2ButtonHover} onMouseLeave={onKeyStage2ButtonHover}>Key Stage 2</a>
                    </div>
                </div>
                <div style={styles.bottomDiv}>
                    <div style={styles.leftLegalDiv}>
                        <a>Terms of Service</a>
                    </div>
                    <div style={styles.rightLegalDiv}>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div>
        );
    }

    function PhoneScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.phoneTopCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <h3 style={styles.phoneStageChoiceText}>Choose your stage</h3>
                    <div style={styles.phoneTopCenterCenterDiv}>
                        <a href="/ks1" style={isKS1ButtonHover ? styles.phoneLeftDivButtonHover : styles.phoneLeftDivButtonNonHover} onMouseEnter={onKeyStage1ButtonHover} onMouseLeave={onKeyStage1ButtonHover}>Key Stage 1</a>
                        <a href="/ks2" style={isKS2ButtonHover ? styles.phoneLeftDivButtonHover : styles.phoneLeftDivButtonNonHover} onMouseEnter={onKeyStage2ButtonHover} onMouseLeave={onKeyStage2ButtonHover}>Key Stage 2</a>
                    </div>
                </div>
                <div style={styles.bottomDiv}>
                    <div style={styles.leftLegalDiv}>
                        <a>Terms of Service</a>
                    </div>
                    <div style={styles.rightLegalDiv}>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div>
        );
    }

    if (wideScreenMatches) {
        return (
            <div>
                {WideScreen()}
            </div>
        );
    }

    if (standardScreenMatches) {
        return (
            <div>
                {StandardScreen()}
            </div>
        );
    }

    if (smallStandardScreenMatches) {
        return (
            <div>
                {SmallStandardScreen()}
            </div>
        );
    }

    if (tabletScreenMatches) {
        return (
            <div>
                {TabletScreen()}
            </div>
        );
    }

    return (
        <div>
            {PhoneScreen()}
        </div>
    ); 
}

let styles = {
    container: {
        width: '100%',
        backgroundColor: '#232323',
    },
    topCurve: {
        position: 'absolute',
        width: '111vw',
        height: '142vh',
        backgroundColor: '#30B330',
        borderRadius: '50%',
        left: -80,
        bottom: 80,
        boxShadow: 'inset 0px -30px 15px rgba(0, 0, 0, 0.25)'
    },
    phoneTopCurve: {
        position: 'absolute',
        width: '130vw',
        height: '142vh',
        backgroundColor: '#30B330',
        borderRadius: '50%',
        left: -80,
        bottom: 80,
        boxShadow: 'inset 0px -30px 15px rgba(0, 0, 0, 0.25)'
    },
    navbar: {
        position: 'fixed',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: '10.24vh',
        width: '100%',
        boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.25)",
        color: 'white',
        backgroundColor: '#232323'
    },
    logo: {
        paddingLeft: '4vh',
        flex: 3,
        fontSize: '1.25rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    logoText: {
        color: 'white',
        textDecoration: 'none'
    },
    navlinksContainer: {
        flex: 2,
    },
    navlinks: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '4vh',
        justifyContent: 'space-evenly',
        fontSize: '1.6rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    link: {
        listStyle: 'none',
        textDecoration: 'none'
    },
    anchorNonHover: {
        textDecoration: 'none',
        color: 'white',
    },
    anchorHover: {
        textDecoration: 'none',
        color: '#47DCFF'
    },
    topCenterDiv: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '60vh',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '10vh',
        marginTop: '11.24vh'
    },
    stageChoiceText: {
        color: '#FFFFFF',
        fontSize: '4.4rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    phoneStageChoiceText: {
        color: '#FFFFFF',
        fontSize: '3.2rem',
        fontFamily: 'Lato',
        fontWeight: 400,
        overflow: 'hidden',
    },
    topCenterCenterDiv: {
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    phoneTopCenterCenterDiv: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    leftDivButtonNonHover: {
        padding: 20,
        width: 380,
        height: 220,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#5EFF5E',
        color: '#232323',
        fontSize: '3.45rem',
        margin: 20,
        boxShadow: "0px 14px 10px rgba(0, 0, 0, 0.25)",
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftDivButtonHover: {
        padding: 20,
        width: 380,
        height: 220,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#52FFB4',
        color: '#232323',
        fontSize: '3.45rem',
        cursor: 'pointer',
        margin: 20,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    standardLeftDivButtonHover: {
        padding: 20,
        width: 300,
        height: 220,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#52FFB4',
        color: '#232323',
        fontSize: '3rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    standardLeftDivButtonNonHover: {
        padding: 20,
        width: 300,
        height: 220,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#5EFF5E',
        color: '#232323',
        fontSize: '3rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallStandardLeftDivButtonHover: {
        padding: 20,
        width: 260,
        height: 220,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#52FFB4',
        color: '#232323',
        fontSize: '2.6rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallStandardLeftDivButtonNonHover: {
        padding: 20,
        width: 260,
        height: 220,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#5EFF5E',
        color: '#232323',
        fontSize: '2.6rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabletLeftDivButtonHover: {
        padding: 20,
        width: 220,
        height: 180,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#52FFB4',
        color: '#232323',
        fontSize: '2rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabletLeftDivButtonNonHover: {
        padding: 20,
        width: 220,
        height: 180,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#5EFF5E',
        color: '#232323',
        fontSize: '2rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneLeftDivButtonHover: {
        padding: 20,
        width: 200,
        height: 180,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#52FFB4',
        color: '#232323',
        fontSize: '1.75rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneLeftDivButtonNonHover: {
        padding: 20,
        width: 200,
        height: 180,
        marginTop: '10%',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#5EFF5E',
        color: '#232323',
        fontSize: '1.75rem',
        cursor: 'pointer',
        margin: 30,
        fontFamily: 'Lato',
        fontWeight: 900,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomDiv: {
        display: 'flex',
        height: '28.76vh',
        zIndex: 5,
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: '1.25rem'
    },
    leftLegalDiv: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        margin: 20,
        color: 'white'
    },
    rightLegalDiv: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: 20,
        color: 'white'
    }
}

export default KeyStages