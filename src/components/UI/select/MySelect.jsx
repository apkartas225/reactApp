import React from 'react';


export const MySelect = ( {options, defValue, value, onChange} ) => {

    return(
        <select value={value} onChange={ e => onChange(e.target.value) }>
            <option disabled value=''>{defValue}</option>
            {
                options.map(el => 
                    <option key={el.value} value={el.value}>
                        { el.name }
                    </option>
                    )
            }
        </select>
    )

};
