import App from "../App";
import Homepage from "../pages/Homepage";
import Details from "../pages/Details";
import Details2 from "../pages/Details2";
import Login from "../pages/Login";
import Register from "../pages/Register";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../manager/Home";
import Users from "../manager/Users";
import Books from "../manager/Books";
import Info from "../manager/Info";
import Display from "../customer/Display";
import Details3 from "../pages/Details3";
import MyCart from "../pages/Favorite";
import Confirm from "../customer/Confirm";
import Order from "../customer/Order";
import OrderItem from "../components/OrderItem";
import Display_man from "../customer/Display_man";
import Edit from "../manager/Edit";
import Add from "../manager/Add";
import OrderManage from "../manager/OrderManage";
import OrderItemManage from "../manager/OrderItemManage";
import FindOrder from "../manager/FindOrder";
import Users1 from "../manager/Users1";
import DelConfirm from "../manager/delConfirm";
import SearchOrder from "../pages/SearchOrder";
import Statistics from "../customer/Statistics";
import StatDetail from "../customer/statDetail";
import Sales from "../manager/Sales";
import Buyers from "../manager/Buyers";
import SearchBooks from "../customer/SearchBooks";

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/details" element={<Details />} />
                <Route path="/details2" element={<Details2 />} />
                <Route path="/details3" element={<Details3 />} />
                <Route path="/cart" element={<MyCart />} />
                <Route path="/cart/confirm" element={<Confirm />} />
                <Route path="/display" element={<Display />} />
                <Route path="/order" element={<Order />} />
                <Route path="/orderItem" element={<OrderItem />} />
                <Route path="/searchOrder" element={<SearchOrder />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/statDetail" element={<StatDetail />} />
                <Route path="/searchBooks" element={<SearchBooks />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/manage" element={<Home />} >
                <Route path="/manage/users" element={<Users />} />
                <Route path="/manage/users1" element={<Users1 />} />
                <Route path="/manage/books" element={<Books />} />
                <Route path="/manage/info" element={<Info />} />
                <Route path="/manage/display" element={<Display_man />} />
                <Route path="/manage/edit" element={<Edit/>} />
                <Route path="/manage/addBook" element={<Add />} />
                <Route path="/manage/order" element={<OrderManage />} />
                <Route path="/manage/orderItem" element={<OrderItemManage />} />
                <Route path="/manage/findOrder" element={<FindOrder />} />
                <Route path="/manage/confirm" element={<DelConfirm />} />
                <Route path="/manage/sales" element={<Sales /> } />
                <Route path="/manage/buyers" element={<Buyers />} />
            </Route>
        </Routes>
    </Router>
)

export default BaseRouter
