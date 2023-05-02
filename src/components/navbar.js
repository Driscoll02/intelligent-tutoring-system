import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

function NavBar() {
    const [isBrowseNavlinkHover, setIsBrowseNavlinkHover] = useState(false);
    const [isResourcesNavlinkHover, setIsResourcesNavlinkHover] = useState(false);
    const [isAboutUsNavlinkHover, setIsAboutUsNavlinkHover] = useState(false);
    const [isContactNavlinkHover, setIsContactNavlinkHover] = useState(false);

    const wideScreenMatches = useMediaQuery('(min-width:1400px)');
    const standardScreenMatches = useMediaQuery('(min-width:1200px)');
    const smallStandardScreenMatches = useMediaQuery('(min-width:924px)');
    const tabletScreenMatches = useMediaQuery('(min-width:768px)');
    const phoneScreenMatches = useMediaQuery('(min-width:576px)');

    function onBrowseNavlinkHover() {
        if(!isBrowseNavlinkHover) {
            setIsBrowseNavlinkHover(true);
        } else {
            setIsBrowseNavlinkHover(false);
        }
    }

    function onResourcesNavlinkHover() {
        if(!isResourcesNavlinkHover) {
            setIsResourcesNavlinkHover(true);
        } else {
            setIsResourcesNavlinkHover(false);
        }
    }

    function onAboutUsNavlinkHover() {
        if(!isAboutUsNavlinkHover) {
            setIsAboutUsNavlinkHover(true)
        } else {
            setIsAboutUsNavlinkHover(false)
        }
    }

    function onContactNavlinkHover() {
        if(!isContactNavlinkHover) {
            setIsContactNavlinkHover(true)
        } else {
            setIsContactNavlinkHover(false)
        }
    }

    function WideScreen() {
        return (
            <div style={styles.bigNavbar}>
                <div style={styles.logo}>
                    <h1><a style={styles.logoText} href="/">ITS</a></h1>
                </div>
                <div style={styles.navlinksContainer}>
                        <ul style={styles.navlinks}>
                            <li style={styles.link}><a href="/keystages" style={isBrowseNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onBrowseNavlinkHover} onMouseLeave={onBrowseNavlinkHover}>Browse</a></li>
                            <li style={styles.link}><a href="#" style={isResourcesNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onResourcesNavlinkHover} onMouseLeave={onResourcesNavlinkHover}>Resources</a></li>
                            <li style={styles.link}><a href="#" style={isAboutUsNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onAboutUsNavlinkHover} onMouseLeave={onAboutUsNavlinkHover}>About us</a></li>
                            <li style={styles.link}><a href="#" style={isContactNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onContactNavlinkHover} onMouseLeave={onContactNavlinkHover}>Contact</a></li>
                        </ul>
                </div>
            </div>
        )
    }

    function StandardScreen() {
        return (
            <div style={styles.bigNavbar}>
                <div style={styles.logo}>
                    <h1><a style={styles.logoText} href="/">ITS</a></h1>
                </div>
                <div style={styles.navlinksContainer}>
                        <ul style={styles.standardNavlinks}>
                            <li style={styles.link}><a href="/keystages" style={isBrowseNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onBrowseNavlinkHover} onMouseLeave={onBrowseNavlinkHover}>Browse</a></li>
                            <li style={styles.link}><a href="#" style={isResourcesNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onResourcesNavlinkHover} onMouseLeave={onResourcesNavlinkHover}>Resources</a></li>
                            <li style={styles.link}><a href="#" style={isAboutUsNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onAboutUsNavlinkHover} onMouseLeave={onAboutUsNavlinkHover}>About us</a></li>
                            <li style={styles.link}><a href="#" style={isContactNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onContactNavlinkHover} onMouseLeave={onContactNavlinkHover}>Contact</a></li>
                        </ul>
                </div>
            </div>
        )
    }

    function smallStandardScreen() {
        return (
            <div style={styles.bigNavbar}>
                <div style={styles.logo}>
                    <h1><a style={styles.logoText} href="/">ITS</a></h1>
                </div>
                <div style={styles.navlinksContainer}>
                        <ul style={styles.smallStandardNavlinks}>
                            <li style={styles.link}><a href="/keystages" style={isBrowseNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onBrowseNavlinkHover} onMouseLeave={onBrowseNavlinkHover}>Browse</a></li>
                            <li style={styles.link}><a href="#" style={isResourcesNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onResourcesNavlinkHover} onMouseLeave={onResourcesNavlinkHover}>Resources</a></li>
                            <li style={styles.link}><a href="#" style={isAboutUsNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onAboutUsNavlinkHover} onMouseLeave={onAboutUsNavlinkHover}>About us</a></li>
                            <li style={styles.link}><a href="#" style={isContactNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onContactNavlinkHover} onMouseLeave={onContactNavlinkHover}>Contact</a></li>
                        </ul>
                </div>
            </div>
        )
    }

    function TabletScreen() {
        return (
            <div style={styles.bigNavbar}>
                <div style={styles.logo}>
                    <h1><a style={styles.logoText} href="/">ITS</a></h1>
                </div>
                <div style={styles.navlinksContainer}>
                        <ul style={styles.tabletNavlinks}>
                            <li style={styles.link}><a href="/keystages" style={isBrowseNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onBrowseNavlinkHover} onMouseLeave={onBrowseNavlinkHover}>Browse</a></li>
                            <li style={styles.link}><a href="#" style={isResourcesNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onResourcesNavlinkHover} onMouseLeave={onResourcesNavlinkHover}>Resources</a></li>
                            <li style={styles.link}><a href="#" style={isAboutUsNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onAboutUsNavlinkHover} onMouseLeave={onAboutUsNavlinkHover}>About us</a></li>
                            <li style={styles.link}><a href="#" style={isContactNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={onContactNavlinkHover} onMouseLeave={onContactNavlinkHover}>Contact</a></li>
                        </ul>
                </div>
            </div>
        )
    }

    function PhoneScreen() {
        return (
            <div style={styles.bigNavbar}>
                <div style={styles.logo}>
                    <h1><a style={styles.logoText} href="/">ITS</a></h1>
                </div>
            </div>
        )
    }

    if (wideScreenMatches) {
        return (
            <div>
                {WideScreen()}
            </div>
        )
    }

    if (standardScreenMatches) {
        return (
            <div>
                {StandardScreen()}
            </div>
        )
    }

    if (smallStandardScreenMatches) {
        return (
            <div>
                {smallStandardScreen()}
            </div>
        )
    }

    if (tabletScreenMatches) {
        return (
            <div>
                {TabletScreen()}
            </div>
        )
    }

    if (phoneScreenMatches) {
        return (
            <div>
                {PhoneScreen()}
            </div>
        )
    }

    return (
        <div>
            {PhoneScreen()}
        </div>
    )
}

const styles = {
    bigNavbar: {
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
        marginRight: '4vh',
        justifyContent: 'space-around',
        fontSize: '1.56rem',
        fontFamily: 'Lato',
        fontWeight: 400,
        flex: 8
    },
    standardNavlinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: '1.1rem',
        flex: 8
    },
    smallStandardNavlinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: '1rem',
        flex: 8
    },
    tabletNavlinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: '0.8rem',
        flex: 8
    },
    link: {
        flex: 12,
        listStyle: 'none',
        textDecoration: 'none',
    },
    anchorNonHover: {
        textDecoration: 'none',
        color: 'white',
    },
    anchorHover: {
        textDecoration: 'none',
        color: '#47DCFF'
    },
}

export default NavBar;
