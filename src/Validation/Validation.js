import React from 'react';

const validation = (props) => {
    let validationMessage = "Not long enough...";
    if(props.inputLength > 4) { 
        validationMessage = "Text is long enough!";
    }

    return (
        <div>
            <p>
                {validationMessage}
            </p>
        </div>
    );
};

export default validation;