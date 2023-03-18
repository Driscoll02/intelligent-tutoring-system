import React, { Component } from "react";
import mathGirl from "../images/Math-Girl.png";

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isButtonHover: false,
            isBrowseNavlinkHover: false,
            isResourcesNavlinkHover: false,
            isAboutUsNavlinkHover: false,
            isContactNavlinkHover: false
        }

        this._onButtonHover = this._onButtonHover.bind(this)
        this._onBrowseNavlinkHover = this._onBrowseNavlinkHover.bind(this)
        this._onResourcesNavlinkHover = this._onResourcesNavlinkHover.bind(this)
        this._onAboutUsNavlinkHover = this._onAboutUsNavlinkHover.bind(this)
        this._onContactNavlinkHover = this._onContactNavlinkHover.bind(this)
    }

    _onButtonHover() {
        if(!this.state.isButtonHover) {
            this.setState({isButtonHover: true})
        } else {
            this.setState({isButtonHover: false})
        }
        return;
    }

    _onBrowseNavlinkHover() {
        if(!this.state.isBrowseNavlinkHover) {
            this.setState({isBrowseNavlinkHover: true})
        } else {
            this.setState({isBrowseNavlinkHover: false})
        }
        return;
    }

    _onResourcesNavlinkHover() {
        if(!this.state.isResourcesNavlinkHover) {
            this.setState({isResourcesNavlinkHover: true})
        } else {
            this.setState({isResourcesNavlinkHover: false})
        }
        return;
    }

    _onAboutUsNavlinkHover() {
        if(!this.state.isAboutUsNavlinkHover) {
            this.setState({isAboutUsNavlinkHover: true})
        } else {
            this.setState({isAboutUsNavlinkHover: false})
        }
        return;
    }

    _onContactNavlinkHover() {
        if(!this.state.isContactNavlinkHover) {
            this.setState({isContactNavlinkHover: true})
        } else {
            this.setState({isContactNavlinkHover: false})
        }
        return;
    }

    render(){
        return (
            <div style={styles.container}>
                <div style={styles.topCurve} />
                <div style={styles.navbar}>
                    <div style={styles.logo}>
                        <h1>ITS</h1>
                    </div>
                    <div style={styles.navlinksContainer}>
                            <ul style={styles.navlinks}>
                                <li style={styles.link}><a href="/keystages" style={this.state.isBrowseNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onBrowseNavlinkHover} onMouseLeave={this._onBrowseNavlinkHover}>Browse</a></li>
                                <li style={styles.link}><a href="#" style={this.state.isResourcesNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onResourcesNavlinkHover} onMouseLeave={this._onResourcesNavlinkHover}>Resources</a></li>
                                <li style={styles.link}><a href="#" style={this.state.isAboutUsNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onAboutUsNavlinkHover} onMouseLeave={this._onAboutUsNavlinkHover}>About us</a></li>
                                <li style={styles.link}><a href="#" style={this.state.isContactNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onContactNavlinkHover} onMouseLeave={this._onContactNavlinkHover}>Contact</a></li>
                            </ul>
                    </div>
                </div>
                <div style={styles.topCenterDiv}>
                    <div style={styles.leftDiv}>
                        <h3 style={styles.leftDivText}>Help your child improve their key stage 1 and 2 maths skills using an intelligent tutoring system</h3>
                        <a href="/keystages" style={this.state.isButtonHover ? styles.leftDivButtonHover : styles.leftDivButtonNonHover} onMouseEnter={this._onButtonHover} onMouseLeave={this._onButtonHover}>Get Started</a>
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
        );
    }
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
        marginTop: '11.24vh'
    },
    leftDiv: {
        zIndex: 2,
        width: '100%',
        flex: 1.25,
        height: '60vh',
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
    rightDiv: {
        zIndex: 2,
        width: '100%',
        flex: 1,
        height: '60vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightDivImage: {
        width: '30vw',
        height: '60vh'
    },
    bottomDiv: {
        display: 'flex',
        height: '28.76vh',
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