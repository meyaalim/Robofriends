import React from "react";

const Card = ({name,email,id}) => {
    return(
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img alt="Robots" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
        
    );
}

export default Card;













