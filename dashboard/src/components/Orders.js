import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("https://stocktradingwebsitebackend.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  });

  return (
    <div className="orders">
      {allOrders.length === 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
      <br></br>

      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        {/* name: String, qty: Number, price: Number, mode: String, */}
        <table> 
          <tr>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            <th>mode</th>
          </tr>

          {allOrders.map((order , idx) => {
            return (
              <tr key={idx}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
