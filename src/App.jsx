import React, {useState, useEffect} from "react";
import "./index.scss";
import Ctx from "./Ctx";

import List from "./components/List";
import Form from "./components/Form";
import Cart from "./components/Cart";

export default () => {
    let goodsSt = localStorage.getItem("g");
    if (goodsSt) {
        goodsSt = JSON.parse(goodsSt)
    } else {
        goodsSt = [];
    }
    let cartSt = localStorage.getItem("c");
    if (cartSt) {
        cartSt = JSON.parse(cartSt)
    } else {
        cartSt = [];
    }
    const [goods, setGoods] = useState(goodsSt);
    const [cart, setCart] = useState(cartSt);

    useEffect(() => {
        console.log(goods);
        localStorage.setItem("g", JSON.stringify(goods));
    }, [goods])

    useEffect(() => {
        console.log(cart);
        localStorage.setItem("c", JSON.stringify(cart));
    }, [cart])

    return <Ctx.Provider value={{
        goods: goods,
        cart: cart,
        setGoods: setGoods,
        setCart: setCart
    }}>
        <h2>Добавить товар</h2>
        <Form/>
        <h2>Список товаров</h2>
        <List/>
        <h2>Корзина</h2>
        <Cart/>
    </Ctx.Provider>
}