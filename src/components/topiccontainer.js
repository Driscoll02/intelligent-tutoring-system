import React, { Component } from "react";

class TopicContainer extends Component {
    render(){
        return (
            <a href={`/${this.props.topicName}/:${this.props.yearNum}/:${this.props.stage}`} style={styles.container} >
                <div style={styles.infoDiv}>
                    <h4 style={{paddingBottom: 5}}>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
                <div style={styles.iconDiv}>
                    <img style={styles.iconDivImage} src={this.props.icon} alt={this.props.iconAlt} />
                </div>
            </a>
        )
    }
}

const styles = {
    container: {
        height: '15vh',
        width: '35vw',
        backgroundColor: "white",
        color: '#232323',
        margin: '2vh',
        padding: '0.75em',
        borderRadius: 10,
        fontFamily: 'Lato',
        fontWeight: 400,
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.25)",
        overflow: 'hidden',
        display: 'flex',
        textDecoration: 'none',
    },
    infoDiv: {
        flex: 8,
        paddingRight: '1.2em'
    },
    iconDiv: {
        flex: 3,
        width: '2vw',
        overflow: 'hidden'
    },
    iconDivImage: {
        width: '100%',
        height: '100%'
    }
}

export default TopicContainer