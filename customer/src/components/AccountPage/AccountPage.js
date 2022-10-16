import React, { useEffect, useState } from 'react';
import './AccountPage.css';
import { FormCreateOrder } from '../FormCreateOrder/FormCreateOrder';
import { OrderCard } from '../OrderCard/OrderCard';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Calendar } from '../Calendar/Calendar';
import { getOrders } from '../services/methods';
import { FormChangeOrder } from '../FormChangeOrder/FormChangeOrder';

function Orders({ data, sendEvent }) {
  let array = data.map((elem, id) => {
    return <OrderCard key={id} data={elem} sendEvent={sendEvent} />
  })
  return (
    <div className='accout-page__cards'>
      {array}
    </div>
  );
}
function AccountPage({ id = 1 }) {
  let [data, setData] = useState([]);
  let [event, sendEvent] = useState();
  useEffect(() => {
    getOrders(id).then(result => {
      setData(result);
    });
  }, [id, event])
  let navigate = useNavigate();
  return (
    <div className='account-page'>
      <nav className='nav'>
        <ul className='nav__inner'>
          <li><button onClick={() => navigate('calendar')} className='nav-button button_show-calendar'></button></li>
          <li><button onClick={() => navigate('orders')} className='nav-button button_show-all'></button></li>
          <li><button onClick={() => navigate('orders/create-order')} className='nav-button button_make-order'></button></li>
        </ul>
      </nav>
      <div className='account-page__content'>
        <Routes>
          <Route path='orders/*' element={<Orders data={data} sendEvent={sendEvent} />}></Route>
          <Route path='orders/create-order' element={<FormCreateOrder customerId={id} sendEvent={sendEvent} />}></Route>
          <Route path='calendar' element={<Calendar />}></Route>
          <Route exact path='orders/change-order/:jobId' element={<FormChangeOrder customerId={id} sendEvent={sendEvent} />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export { AccountPage };