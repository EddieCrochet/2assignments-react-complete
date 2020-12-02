import React from 'react';

const validation = (props) => {
    //more proper way to output conditionals
    
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short!!';
    }

    return (
        <div>
            <p>
                {validationMessage}
            </p>
            { //ternary expression again  -  here is fine but use w caution
           /* props.inputLength > 5 ?
                <p>Text long enough</p> :
                <p>Text too short!</p>
            */ }
        </div>  
    );
};

export default validation;