import React from 'react';
class RedButton extends React.Component {
    render() {
        const test = 'test Param';
        return (
            <button 
                style= {{
                width: "100px",
                height: "100px",
                backgroundColor: "red"
                }}
            >
                {test}
            </button>
        );
    }
}


export default RedButton;