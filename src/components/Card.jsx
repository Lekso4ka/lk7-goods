import React, {useContext, useState} from "react";
import Ctx from "../Ctx";
import { useDispatch } from "react-redux";

export default ({name, price}) => {
    const dispatch = useDispatch(state => state.storeReducer)
    const {setCart} = useContext(Ctx);
    const [inpName, setName] = useState(name);
    const [inpPrice, setPrice] = useState(name);
    const [chName, setChName] = useState(false);
    const [chPrise, setChPrice] = useState(false);

    const add = (e) => {
        setCart(gds => {
            let result = gds.filter(el => el.name === name);
            if (result.length) {
                let newGds = gds.map(el => {
                    if (el.name === name) {
                        el.cnt += 1;
                    }
                    return el;
                })
                return newGds
            } else {
                return [...gds, {
                    name: name, 
                    price: price, 
                    cnt: 1
                }];
            }
        });
    }
    const remove = (e) => {
        dispatch({type: "DEL", payload: {
            name: name
        }})
    }
    const updName = () => {
        setChName(false);
        dispatch({
            type: "CHNAME",
            payload: {
                newName: inpName,
                oldName: name
            }
        });
    }
    return <li className="card">
        <div>
            {
                !chName ?
                <>
                    <h3>{name}</h3>
                    <button 
                        onClick={e => {
                            setChName(true);
                        }}
                    >ch</button>
                </>
                :
                <>
                    <input 
                        type="text" 
                        value={inpName}
                        onChange={e => setName(e.target.value)}
                    />
                    <button onClick={updName}>ok</button>
                    <button 
                        onClick={e => {
                            setChName(false);
                            setName(name);
                        }}
                    >x</button>
                </>
            }
            
        </div>
        <span className="price">{price}</span>
        <div>
            <button onClick={add}>Add to cart</button>
            <button onClick={remove}>Remove</button>
        </div>
    </li>
}