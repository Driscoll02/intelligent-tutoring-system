import React, { Component } from "react";

class TopicContainer extends Component {
    render(){
        return (
            <div style={styles.container}>
                <h4 style={{paddingBottom: 5}}>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

const styles = {
    container: {
        height: '15vh',
        width: '25vw',
        backgroundColor: "white",
        color: '#232323',
        margin: '2vh',
        padding: '1em',
        borderRadius: 10,
        fontFamily: 'Lato',
        fontWeight: 400,
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.25)",
        overflow: 'hidden'
    }
}

export default TopicContainer