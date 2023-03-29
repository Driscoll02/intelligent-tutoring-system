import React, { Component } from "react";
import TopicContainer from "./topiccontainer";
import measurementIcon from "../images/topic-icons/MeasurementIcon.png";
import placeValue from "../images/topic-icons/PlaceValue.png";
import multiplicationDivision from "../images/topic-icons/MultiplicationDivision.png";
import shapes from "../images/topic-icons/Shapes.png";
import additionSubtraction from "../images/topic-icons/AdditionSubtraction.png";
import fractions from "../images/topic-icons/Fractions.png";
import shapeRotation from "../images/topic-icons/ShapeRotation.png";

class KS1Curriculum extends Component {
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
                    <div style={styles.centerDivLeft}>
                        <div style={styles.yearContainer}>
                            <div style={{textAlign: 'center', overflow: 'hidden', fontFamily: 'Lato', fontWeight: 400,}}>
                                <h2 style={{fontSize: '2.2rem', color: '#232323'}}>Year 1</h2>
                            </div>
                            <div style={styles.topicSuperContainer}>
                                <TopicContainer style={styles.topicContainer} title="Number and Place Value" description="The learner will start to count to 100 in multiples of 1, 2, 5, and 10. They will also learn to represent numbers using pictures." icon={placeValue} iconAlt="Place Value" />
                                <TopicContainer style={styles.topicContainer} title="Addition and Subtraction" description="The learner will start read, write, and understand mathematical symbols using addition (+), and subtraction (-)." icon={additionSubtraction} iconAlt="Addition and Subtraction" />
                                <TopicContainer style={styles.topicContainer} title="Multiplication and Division" description={"The learner will start to read, write, and understand mathematical symbols using multiplication (x), and division (\u00F7)."} icon={multiplicationDivision} iconAlt="Multiplication and Division" />
                                <TopicContainer style={styles.topicContainer} title="Fractions" description="The learner will begin to understand that fractions are all about sharing. They will also gain the understanding that fractions are just smaller parts of bigger objects, or groups of objects, focusing on halfs, and quarters." icon={fractions} iconAlt="Fractions" />
                                <TopicContainer style={styles.topicContainer} title="Measurement" description="Here, the learner will learn measurement in relation to weight, volume, length, height, and time. They will also work on recognising the value of coins and notes." icon={measurementIcon} iconAlt="Measurement" />
                                <TopicContainer style={styles.topicContainer} title="Geometry - Properties of Shapes" description="The learner will learn to recognise common 2D and 3D shapes. They will also learn basic geometry terms such as sides and edges." icon={shapes} iconAlt="Properties of Shapes" />
                                <TopicContainer style={styles.topicContainer} title="Geometry - Position and Direction" description="Here, the learner will learn to describe changes in the position of a shape, focusing on terms such as right turn, left turn, and quarter turns." icon={shapeRotation} iconAlt="Position and Direction of Shapes" />
                            </div>
                        </div>
                        <div style={styles.yearContainer}>
                            <div style={{textAlign: 'center', overflow: 'hidden', fontFamily: 'Lato', fontWeight: 400,}}>
                                <h2 style={{fontSize: '2rem', color: '#232323'}}>Year 2</h2>
                            </div>
                            <div style={styles.topicSuperContainer}>
                                <TopicContainer style={styles.topicContainer} title="Number and Place Value" description="Here, the learner will begin to compare and order numbers from 1 to 100, and will begin to recognise the place value for two digit numbers. They will also learn how to use greater than (>), and less than (<) symbols." icon={placeValue} iconAlt="Place Value" />
                                <TopicContainer style={styles.topicContainer} title="Addition and Subtraction" description="In year 2, the learner will solve addition and subtraction problems involving numbers, measures, and quantities." icon={additionSubtraction} iconAlt="Addition and Subtraction" />
                                <TopicContainer style={styles.topicContainer} title="Multiplication and Division" description="In year 2, the learner will solve multiplication and division problems using the 2, 3, 5, and 10 multiplication tables." icon={multiplicationDivision} iconAlt="Multiplication and Division" />
                                <TopicContainer style={styles.topicContainer} title="Fractions" description="Here, the learner will continue to learn about halves, and quarters, however, they will also be introduced to thirds. They will also gain an understanding of terminology such as equivelence, denominator, and numerator." icon={fractions} iconAlt="Fractions" />
                                <TopicContainer style={styles.topicContainer} title="Measurement" description="In addition to learning weight, volume, time, money, length, and height, they will also learn how to measure temperature." icon={measurementIcon} iconAlt="Measurement" />
                                <TopicContainer style={styles.topicContainer} title="Geometry - Properties of Shapes" description="The learner will begin to describe 2D and 3D shapes using accurate terminology." icon={shapes} iconAlt="Properties of Shapes" />
                                <TopicContainer style={styles.topicContainer} title="Geometry - Position and Direction" description="The learner will begin to arrange shapes into patterns, and talk about rotation." icon={shapeRotation} iconAlt="Position and Direction of Shapes" />
                            </div>
                        </div>
                    </div>
                    <div style={styles.centerDivRight}>
                        {/*<ul>
                            <li><a href="#">Take a combined key stage 1 test</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>*/}
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
        backgroundColor: '#FB3F35',
        marginTop: '10.24vh',
        display: 'flex',
        justifyContent: 'center',
    },
    centerDivLeft: {
        flex: 5
    },
    centerDivRight: {
        flex: 1,
        backgroundColor: '#232323',
        color: 'white'
    },
    yearContainer: {
        width: '80vw',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3vh',
        backgroundColor: '#FF584F',
        borderRadius: 10,
        padding: '2em',
        marginBottom: '3vh',
        marginLeft: '1.5vw',
        boxShadow: "0px 12px 14px rgba(0, 0, 0, 0.25)",
    },
    topicSuperContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden'
    }
}

export default KS1Curriculum