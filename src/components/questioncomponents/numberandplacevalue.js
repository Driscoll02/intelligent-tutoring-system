import React, { Component } from "react";

class NumberPlaceValue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBrowseNavlinkHover: false,
            isResourcesNavlinkHover: false,
            isAboutUsNavlinkHover: false,
            isContactNavlinkHover: false
        }

        this._onBrowseNavlinkHover = this._onBrowseNavlinkHover.bind(this)
        this._onResourcesNavlinkHover = this._onResourcesNavlinkHover.bind(this)
        this._onAboutUsNavlinkHover = this._onAboutUsNavlinkHover.bind(this)
        this._onContactNavlinkHover = this._onContactNavlinkHover.bind(this)
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
                <div style={styles.navbar}>
                    <div style={styles.logo}>
                        <h1><a style={styles.logoText} href="/">ITS</a></h1>
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
                <div style={styles.centerDiv}>
                    <h1>Number and Place Value</h1>
                    <h3>Question</h3>
                    <input type="text" />
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
    centerDiv: {
        backgroundColor: '#30B330',
        marginTop: '10.24vh',
        height: '89.76vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
}

export default NumberPlaceValue;
