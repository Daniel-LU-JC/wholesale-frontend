import {postRequest, postRequest_v2} from "./Ajax";

const root = "http://localhost:8080";

export const getBooksByType = (bookType, callback) => {
    const data = {type: bookType};
    const url = root + "/getBooks";
    postRequest_v2(url, data, callback);
}

export const getBooksAll = (callback) => {
    const url = root + "/getBooksAll";
    postRequest(url, null, callback);
}

export const getUsersAll = (callback) => {
    const url = root + "/getUsersAll";
    postRequest_v2(url, null, callback)
}

export const checkAuth = (name, password, identity, callback) => {
    const data = {
        name: name,
        password: password,
        identity: identity,
    }
    const url = root + "/checkAuth";
    postRequest_v2(url, data, callback);
}

export const loggout = (callback) => {
    postRequest_v2(root + "/logout", {}, callback)
}

export const checkRepeat = (name, callback) => {
    const data = {
        name: name
    }
    const url = root + "/checkRepeat";
    postRequest_v2(url, data, callback);
}

export const register = (name, password, email, address) => {
    const data = {
        name: name,
        password: password,
        email: email,
        address: address
    }
    const url = root + "/register";
    postRequest_v2(url, data, ()=>{})
}

export const getCartById = (id, callback) => {
    const data = {
        id: id
    }
    const url = root + "/getCart";
    postRequest_v2(url, data, callback);
}

export const addToCart = (user_id, book_id) => {
    const data = {
        user_id: user_id,
        book_id: book_id
    }
    const url = root + "/addToCart";
    postRequest_v2(url, data, ()=>{});
}

export const changeNumber = (user_id, book_id, newNumber) => {
    const data = {
        user_id: user_id,
        book_id: book_id,
        number: newNumber
    }
    const url = root + "/changeNumber";
    postRequest_v2(url, data, ()=>{})
}

export const deleteCartItem = (user_id, book_id, callback) => {
    const data = {
        user_id: user_id,
        book_id: book_id
    }
    const url = root + "/deleteCartItem";
    postRequest_v2(url, data, callback)
}

export const getOrders = (user_id, callback) => {
    const data = {
        user_id: user_id,
    }
    const url = root + "/getOrders";
    postRequest_v2(url, data, callback);
}

export const getBooksByOrder = (order_id, callback) => {
    const data = {
        order_id: order_id
    }
    const url = root + "/getBooksByOrder";
    postRequest_v2(url, data, callback);
}

export const makeOrderList = (user_id, price, time) => {
    const data = {
        user_id: user_id,
        price: price,
        time: time
    }
    const url = root + "/makeOrder";
    postRequest_v2(url, data, ()=>{})
}

export const changeState = (user_id) => {
    const data = {
        user_id: user_id
    }
    const url = root + "/changeState";
    postRequest_v2(url, data, ()=>{})
}

export const addBook = (isbn, title, type, author, price, desc, inventory, pic) => {
    const data = {
        isbn: isbn,
        title: title,
        type: type,
        author: author,
        price: price,
        desc: desc,
        inventory: inventory,
        pic: pic
    }
    const url = root + "/addBook"
    postRequest_v2(url, data, ()=>{})
}

export const deleteBook = (id) => {
    const data = {
        id: id
    }
    const url = root + "/deleteBook"
    postRequest_v2(url, data, ()=>{})
}

export const editBook = (id, isbn, title, type, author, price, desc, inventory, pic) => {
    const data = {
        id: id,
        isbn: isbn,
        title: title,
        type: type,
        author: author,
        price: price,
        desc: desc,
        inventory: inventory,
        pic: pic
    }
    const url = root + "/editBook"
    postRequest_v2(url, data, ()=>{})
}

export const getOrdersByBook = (user_id, book_id, callback) => {
    const data = {
        user_id: user_id,
        book_id: book_id
    }
    const url = root + "/getOrdersByBook"
    postRequest_v2(url, data, callback)
}

export const getCertainOrders = (book_id, callback) => {
    const data = {book_id:book_id}
    const url = root + "/getCertainOrders"
    postRequest_v2(url, data, callback)
}

export const getOrdersAll = (callback) => {
    const url = root + "/getOrdersAll"
    postRequest_v2(url, null, callback)
}

export const getOrdersInRange = (user_id, start, end, callback) => {
    const data = {
        user_id: user_id,
        start: start,
        end:end
    }
    const url = root + "/getOrdersInRange"
    postRequest_v2(url, data, callback)
}

export const getBooksInRange = (user_id, start, end, callback) => {
    const data = {
        user_id: user_id,
        start: start,
        end: end,
    }
    const url = root + "/getBooksInRange"
    postRequest_v2(url, data, callback)
}

export const getAllBooksInRange = (start, end, callback) => {
    const data = {
        start: start,
        end: end
    }
    const url = root + "/getAllBooksInRange"
    postRequest_v2(url, data, callback)
}

export const getUsersRanking = (start, end, callback) => {
    const data = {
        start: start,
        end: end
    }
    const url = root + "/getUsersRanking"
    postRequest_v2(url, data, callback)
}

export const getOrdersNum = (user_id, callback) => {
    const data = {user_id: user_id}
    const url = root + "/getOrderNum"
    postRequest_v2(url, data, callback)
}
