import React from 'react';

const Pizza = (props) => {
    const { values } = props;
    // console.log(values);

    const onSubmit = evt => {
        evt.preventDefault();
        console.log("onSubmit triggered in Pizza.js");
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        // change(name, valueToUse);
        console.log(`onChange in Pizza.js: ${name} - ${valueToUse}`);
    }


//name input
//dropdown for size
//checklist for toppings
//text special instructions
//order button
    return (
        <div className="pizza-wrapper">
            <form id="pizza-form" onSubmit={onSubmit}>
                <div className="errors">
                    {/* {fill out with error text from validation} */}
                </div>
                <div className="inputs">
                    <label>Your Name: 
                        <input
                            type="text"
                            id="name-input"
                            onChange={onChange}
                            value={values.name} />
                    </label>
                    <br/>
                    <label>Pizza Size: 
                        <select id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                            <option value="">-- select size --</option>
                            <option value="large">large</option>
                            <option value="larger">larger</option>
                            <option value="absurd">absurd</option>
                        </select>
                    </label>
                    <br />
                    <label>jalapenos: 
                        <input 
                            checked={values.jalapeno}
                            onChange={onChange}
                            name="jalapeno"
                            type="checkbox"
                        />
                    </label>
                    <br />
                    <label>pineapple: 
                        <input 
                            checked={values.pineapple}
                            onChange={onChange}
                            name="pineapple"
                            type="checkbox"
                        />
                    </label>
                    <br />
                    <label>bacon: 
                        <input 
                            checked={values.bacon}
                            onChange={onChange}
                            name="bacon"
                            type="checkbox"
                        />
                    </label>
                    <br />
                    <label>roasted garlic: 
                        <input 
                            checked={values.roasted_garlic}
                            onChange={onChange}
                            name="roasted_garlic"
                            type="checkbox"
                        />
                    </label>
                    <br />
                    


                </div>
            </form>
        </div>
    )
}
export default Pizza;