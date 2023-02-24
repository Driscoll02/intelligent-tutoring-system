import React, { Component } from "react";

class KeyStages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isKS1ButtonHover: false,
            isKS2ButtonHover: false,
            isBrowseNavlinkHover: false,
            isResourcesNavlinkHover: false,
            isAboutUsNavlinkHover: false,
            isContactNavlinkHover: false,
        }

        this._onKeyStage1ButtonHover = this._onKeyStage1ButtonHover.bind(this)
        this._onKeyStage2ButtonHover = this._onKeyStage2ButtonHover.bind(this)
        this._onBrowseNavlinkHover = this._onBrowseNavlinkHover.bind(this)
        this._onResourcesNavlinkHover = this._onResourcesNavlinkHover.bind(this)
        this._onAboutUsNavlinkHover = this._onAboutUsNavlinkHover.bind(this)
        this._onContactNavlinkHover = this._onContactNavlinkHover.bind(this)
    }

    _onKeyStage1ButtonHover() {
        if(!this.state.isKS1ButtonHover) {
            this.setState({isKS1ButtonHover: true})
        } else {
            this.setState({isKS1ButtonHover: false})
        }
        return;
    }

    _onKeyStage2ButtonHover() {
        if(!this.state.isKS2ButtonHover) {
            this.setState({isKS2ButtonHover: true})
        } else {
            this.setState({isKS2ButtonHover: false})
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
                                <li style={styles.link}><a href="#" style={this.state.isBrowseNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onBrowseNavlinkHover} onMouseLeave={this._onBrowseNavlinkHover}>Browse</a></li>
                                <li style={styles.link}><a href="#" style={this.state.isResourcesNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onResourcesNavlinkHover} onMouseLeave={this._onResourcesNavlinkHover}>Resources</a></li>
                                <li style={styles.link}><a href="#" style={this.state.isAboutUsNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onAboutUsNavlinkHover} onMouseLeave={this._onAboutUsNavlinkHover}>About us</a></li>
                                <li style={styles.link}><a href="#" style={this.state.isContactNavlinkHover ? styles.anchorHover : styles.anchorNonHover} onMouseEnter={this._onContactNavlinkHover} onMouseLeave={this._onContactNavlinkHover}>Contact</a></li>
                            </ul>
                    </div>
                </div>
                <div style={styles.topCenterDiv}>
                    <h3 style={styles.stageChoiceText}>Choose your stage</h3>
                    <div style={styles.topCenterCenterDiv}>
                        <button style={this.state.isKS1ButtonHover ? styles.leftDivButtonHover : styles.leftDivButtonNonHover} onMouseEnter={this._onKeyStage1ButtonHover} onMouseLeave={this._onKeyStage1ButtonHover}>Key Stage 1</button>
                        <button style={this.state.isKS2ButtonHover ? styles.leftDivButtonHover : styles.leftDivButtonNonHover} onMouseEnter={this._onKeyStage2ButtonHover} onMouseLeave={this._onKeyStage2ButtonHover}>Key Stage 2</button>
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
        height: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '10vh'
    },
    stageChoiceText: {
        color: '#FFFFFF',
        fontSize: '4.4rem',
        fontFamily: 'Lato',
        fontWeight: 400
    },
    topCenterCenterDiv: {
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontWeight: 900
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
        fontWeight: 900
    },
    bottomDiv: {
        display: 'flex',
        height: '20vh',
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