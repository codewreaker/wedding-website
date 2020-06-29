import React from "react";
import { FiCheck } from "react-icons/fi";

const ListOne =()=> {
        var names = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
            'The Ultimate Deal On business',
        ];
        return(
            <ul className="list-style--1">
                {names.map((name, index) => {
                    return <li key={ index }><FiCheck /> {name}</li>;
                })}
            </ul>
        )
}
export default ListOne;