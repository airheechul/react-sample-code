import React, { Component } from 'react';

class TODO extends Component {
    render() {
        const {id, todo, complete, onClick} = this.props;
        return (
            <div>
            <li id={id} 
                onClick={() => onClick({
                    id : id, 
                    complete : !complete
                })}
                className={!!complete ? 'completed' : ''}
            >{todo}</li>
            <li>ending...</li>
            </div>
        );
    }
}

export default TODO;
