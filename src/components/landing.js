import React, { Component, Stylesheet } from "react";
import mathGirl from "../images/Math-Girl.png";

class Landing extends Component {
    constructor(props) {
        super(props);
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
                                <li style={styles.link}><a>Browse</a></li>
                                <li style={styles.link}><a>Resources</a></li>
                                <li style={styles.link}><a>About us</a></li>
                                <li style={styles.link}><a>Contact</a></li>
                            </ul>
                    </div>
                </div>
                <div style={styles.centerDiv}>
                    <div style={styles.leftDiv}>
                        <h3 style={styles.leftDivText}>Help your child improve their key stage 1 and 2 maths skills using an intelligent tutoring system</h3>
                        <button style={styles.leftDivButton}>Get Started</button>
                    </div>
                    <div style={styles.rightDiv}>
                        <img style={styles.rightDivImage} src={mathGirl} alt="A happy cartoon girl doing maths" />
                    </div>
                </div>
            </div>
        );
    }
}

let styles = {
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#232323',
    },
    topCurve: {
        position: 'absolute',
        width: '110vw',
        height: '120vh',
        backgroundColor: '#2950B3',
        borderRadius: '50%',
        left: '-5%',
        top: '-28%',
        zIndex: 1,
        boxShadow: 'inset 0px -30px 15px rgba(0, 0, 0, 0.25)'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: '10.24vh',
        boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.25)",
        color: 'white',
        backgroundColor: '#232323',
        zIndex: 2,
        position: 'relative',
    },
    logo: {
        paddingLeft: '4vh',
        flex: 3,
        fontSize: 20
    },
    navlinksContainer: {
        flex: 2,
    },
    navlinks: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '4vh',
        justifyContent: 'space-evenly',
        fontSize: 25
    },
    link: {
        listStyle: 'none'
    },
    centerDiv: {
        display: 'flex',
        width: '100%'
    },
    leftDiv: {
        zIndex: 2,
        width: '100%',
        flex: 1.25,
        height: '80vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white'
    },
    leftDivText: {
        width: '75%',
        fontSize: 35
    },
    leftDivButton: {
        padding: 20,
        width: '50%',
        height: 100,
        marginTop: '10%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#5485FF',
        color: 'white',
        fontSize: 40,

    },
    rightDiv: {
        zIndex: 2,
        width: '100%',
        flex: 1,
        height: '80vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightDivImage: {
        width: '30vw',
        height: '60vh'
    }
}

export default Landing