import {message} from "antd";

let websocket = false;

let createWebSocket = (url) => {
    websocket = new WebSocket(url);
    websocket.onopen = function () {}
    websocket.onerror = function () {};
    websocket.onclose = function (e) {
        console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
    }
    websocket.onmessage = function (event) {

    }
}

let closeWebSocket = () => {
    websocket && websocket.close();
}

export {
    websocket,
    createWebSocket,
    closeWebSocket
};
