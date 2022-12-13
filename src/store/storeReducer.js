let initialState = localStorage.getItem("g");
if (initialState) {
    initialState = JSON.parse(initialState);
} else {
    initialState = [];
}
console.log(initialState)
let data;
const setState = (d) => {
    localStorage.setItem("g", JSON.stringify(d));
    return d;
}
export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD": 
            const result = state.filter(el => el.name.toLowerCase() === action.payload.name.toLowerCase());
            data = result.length 
                ? state 
                : [...state, {name: action.payload.name, price: action.payload.price}];
            return setState(data);
        case "DEL":
            data = state.filter(el => el.name !== action.payload.name);
            return setState(data);
        case "CHNAME": // Change Name
            data = state.map(el => {
                if (el.name.toLowerCase() === action.payload.oldName.toLowerCase()) {
                    return {
                        ...el, 
                        name: action.payload.newName
                    }
                }
                return el;
            })
            return setState(data);
        case "CHPRICE": // Change Price
            data = state.map(el => {
                if (el.price === action.payload.oldPrice.toLowerCase()) {
                    return {
                        ...el, 
                        price: action.payload.newPrice
                    }
                }
                return el;
            })
            return setState(data);
        case "SORT":
            console.log("here");
            state.sort((a,b) => {
                console.log(a.name > b.name);
                console.log(action.payload);
                if (action.payload === "up") {
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }
                } else if (action.payload === "down") {
                    if (a.name > b.name) {
                        return -1
                    } else {
                        return 1
                    }
                }
            })
            return state;
        case "DEFAULT":
            return JSON.parse(localStorage.getItem("g")) || initialState;
        default: 
            return state;
    }
}