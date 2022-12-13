import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Main from "./Main";
import store from "./store/store";
import {Provider} from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.querySelector("#root")
);
