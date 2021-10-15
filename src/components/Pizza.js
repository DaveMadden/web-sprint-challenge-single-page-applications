import React from 'react';

const Pizza = () => {

    const onSubmit = evt => {
        evt.preventDefault();
        console.log("onSubmit triggered in Pizza.js");
    }



    return (
        <div className="pizza-wrapper">
            <form id="pizza-form" onSubmit={onSubmit}>
                
            </form>
        </div>
    )
}
export default Pizza;