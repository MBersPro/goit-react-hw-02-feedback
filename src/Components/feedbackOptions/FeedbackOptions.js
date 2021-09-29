import React from 'react';

const fbChoice = ["good", "neutral", "bad"]

const FeedbackOptions = ({leaveFeedback}) => {
    return (
        <ul>
            {fbChoice.map(item => 
                    <li>
                    <button onClick={() => leaveFeedback(item)}>{item}</button>
                    </li>
                )}
        </ul>
    );
}

export default FeedbackOptions;