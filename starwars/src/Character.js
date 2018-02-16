import React from 'react';


function Character(props) {
    return(
        <div>
            <h1>{props.char.name}</h1>
            <div>
                <p>Birth Year: {props.char.birth_year}</p>
                <p>Gender: {props.char.gender}</p>
                <p>Weight (kg): {props.char.mass}</p>
                <p>Height (cm): {props.char.height}</p>
                <p>Eye Color: {props.char.eye_color}</p>
                <p>Hair Color: {props.char.hair_color}</p>
            </div>
        </div>
    )
}

export default Character;