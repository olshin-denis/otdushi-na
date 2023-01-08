import './bootstrap';
import ReactDOM from "react-dom";
import App from "./components/app";
import {createRoot} from "react-dom/client";

// // const container = document.getElementById('App')
// // if(container){
//     ReactDOM.render(
//     <App/>,
//         document.getElementById('App')
//     )
// // }
const container = document.getElementById('App')
if (container) {
    const root = createRoot(container)
    root.render(
        <App/>
    )
}
