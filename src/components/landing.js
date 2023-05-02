import React, { useState } from "react";
import mathGirl from "../images/Math-Girl.png";
import NavBar from "./navbar";
import { useMediaQuery } from "@mui/material";

function Landing() {
    const [isButtonHover, setIsButtonHover] = useState(false)

    const wideScreenMatches = useMediaQuery('(min-width:1400px)');
    const standardScreenMatches = useMediaQuery('(min-width:1200px)');
    const smallStandardScreenMatches = useMediaQuery('(min-width:924px)');
    const tabletScreenMatches = useMediaQuery('(min-width:768px)');

    function onButtonHover() {
        if(!isButtonHover) {
            setIsButtonHover(true)
        } else {
            setIsButtonHover(false)
        }
    }

    function WideScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <div style={styles.leftDiv}>
                        <h3 style={styles.leftDivText}>Help your child improve their key stage 1 and 2 maths skills using an intelligent tutoring system</h3>
                        <a href="/keystages" style={isButtonHover ? styles.leftDivButtonHover : styles.leftDivButtonNonHover} onMouseEnter={onButtonHover} onMouseLeave={onButtonHover}>Get Started</a>
                    </div>
                    <div style={styles.rightDiv}>
                        <img style={styles.rightDivImage} src={mathGirl} alt="A happy cartoon girl doing maths" />
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
        )
    }

    function StandardScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <div style={styles.leftDiv}>
                        <h3 style={styles.standardLeftDivText}>Help your child improve their key stage 1 and 2 maths skills using an intelligent tutoring system</h3>
                        <a href="/keystages" style={isButtonHover ? styles.standardLeftDivButtonHover : styles.standardLeftDivButtonNonHover} onMouseEnter={onButtonHover} onMouseLeave={onButtonHover}>Get Started</a>
                    </div>
                    <div style={styles.rightDiv}>
                        <img style={styles.standardRightDivImage} src={mathGirl} alt="A happy cartoon girl doing maths" />
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
        )
    }

    function TabletScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <div style={styles.leftDiv}>
                        <h3 style={styles.tabletLeftDivText}>Help your child improve their key stage 1 and 2 maths skills using an intelligent tutoring system</h3>
                        <a href="/keystages" style={isButtonHover ? styles.tabletLeftDivButtonHover : styles.tabletLeftDivButtonNonHover} onMouseEnter={onButtonHover} onMouseLeave={onButtonHover}>Get Started</a>
                    </div>
                    <div style={styles.tabletRightDiv}>
                        <img style={styles.tabletRightDivImage} src={mathGirl} alt="A happy cartoon girl doing maths" />
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
        )
    }

    function PhoneScreen() {
        return (
            <div style={styles.container}>
                <div style={styles.phoneTopCurve} />
                <NavBar />
                <div style={styles.topCenterDiv}>
                    <div style={styles.leftDiv}>
                        <h3 style={styles.phoneLeftDivText}>Help your child improve their key stage 1 and 2 maths skills using an intelligent tutoring system</h3>
                        <a href="/keystages" style={isButtonHover ? styles.tabletLeftDivButtonHover : styles.tabletLeftDivButtonNonHover} onMouseEnter={onButtonHover} onMouseLeave={onButtonHover}>Get Started</a>
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
        )
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
                {StandardScreen()}
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
        width: '120vw',
        height: '142vh',
        backgroundColor: '#2950B3',
        borderRadius: '50%',
        left: -120,
        bottom: 80,
        boxShadow: 'inset 0px -30px 15px rgba(0, 0, 0, 0.25)'
    },
    phoneTopCurve: {
        position: 'absolute',
        width: '140vw',
        height: '142vh',
        backgroundColor: '#2950B3',
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
        backgroundColor: '#232323',  
    },
    logo: {
        paddingLeft: '4vh',
        flex: 3,
        fontSize: '1.25rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    navlinksContainer: {
        flex: 2,
    },
    navlinks: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '4vh',
        justifyContent: 'space-evenly',
        fontSize: '1.56rem',
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
        width: '100%',
        marginTop: '16.24vh'
    },
    leftDiv: {
        zIndex: 2,
        width: '100%',
        flex: 1.25,
        height: '56vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white'
    },
    leftDivText: {
        width: '75%',
        fontSize: '2.2rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    standardLeftDivText: {
        width: '75%',
        fontSize: '1.8rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    tabletLeftDivText: {
        width: '75%',
        fontSize: '1.5rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    phoneLeftDivText: {
        width: '75%',
        fontSize: '1.4rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    leftDivButtonNonHover: {
        padding: 20,
        width: '50%',
        height: 100,
        marginTop: '10%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#5485FF',
        color: 'white',
        fontSize: '2.5rem',
        fontFamily: 'Lato',
        fontWeight: 400,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftDivButtonHover: {
        padding: 20,
        width: '50%',
        height: 100,
        marginTop: '10%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#47DCFF',
        color: 'white',
        fontSize: '2.5rem',
        cursor: 'pointer',
        fontFamily: 'Lato',
        fontWeight: 400,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    standardLeftDivButtonHover: {
        padding: 18,
        width: '40%',
        height: 75,
        marginTop: '10%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#47DCFF',
        color: 'white',
        fontSize: '2rem',
        cursor: 'pointer',
        fontFamily: 'Lato',
        fontWeight: 400,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    standardLeftDivButtonNonHover: {
        padding: 18,
        width: '40%',
        height: 75,
        marginTop: '10%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#5485FF',
        color: 'white',
        fontSize: '2rem',
        cursor: 'pointer',
        fontFamily: 'Lato',
        fontWeight: 400,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    tabletLeftDivButtonHover: {
        padding: 18,
        width: '50%',
        height: 75,
        marginTop: '10%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#47DCFF',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        fontFamily: 'Lato',
        fontWeight: 400,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    tabletLeftDivButtonNonHover: {
        padding: 18,
        width: '50%',
        height: 75,
        marginTop: '10%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#5485FF',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        fontFamily: 'Lato',
        fontWeight: 400,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    rightDiv: {
        zIndex: 2,
        width: '100%',
        flex: 1,
        height: '56vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    tabletRightDiv: {
        zIndex: 2,
        width: '100%',
        flex: 1.5,
        height: '56vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    rightDivImage: {
        width: '32vw',
        height: '59vh'
    },
    standardRightDivImage: {
        width: '28vw',
        height: '40vh'
    },
    tabletRightDivImage: {
        width: '35vw',
        height: '30vh'
    },
    bottomDiv: {
        display: 'flex',
        height: '27.76vh',
        zIndex: 5,
        fontSize: '1.25rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    leftLegalDiv: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        margin: '2vh',
        color: 'white'
    },
    rightLegalDiv: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: '2vh',
        color: 'white'
    }
}

export default Landing