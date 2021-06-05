import React from "react";

const CityAndCountry = (props) => {
    return (
        <div className="container">
            <h1>
                {props.city},{props.country}
            </h1>
        </div>
    );
};

export default CityAndCountry;
