import React from "react";
import {useSelector, useDispatch} from "react-redux";

import Card from "./Card";

export default () => {
    const dispatch = useDispatch();
    const goods = useSelector(state => state.storeReducer);
    return   <>
        <div>
            <button onClick={e => {
                dispatch({type: "SORT", payload: "up"})
            }}>&lt;</button>
            <button onClick={e => {
                dispatch({type: "SORT", payload: "down"})
            }}>&gt;</button>
            <button onClick={e => {
                dispatch({type: "DEFAULT"})
            }}>x</button>
        </div>
        <ul className="cards-container">
            {goods.map((g, i) => <Card key={i} {...g}/>)}
        </ul>
    </>
}