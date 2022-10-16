import React, { useEffect, useState } from 'react';
import { wrappHandleChangeFunc } from '../services/helpFuncs';
import cn from 'classnames';
import './FormOrder.css';
import { useNavigate } from 'react-router-dom';
import { SelectTypeVehicle } from '../SelectTypeVehicle/SelectTypeVehicle';


function FormOrder({ requestFunc, customerId, id, sendEvent }) {
  let [startDate, setstartDate] = useState('');
  let [endDate, setendDate] = useState('');
  let [vehicle, setVehicle] = useState('Погрузчик');
  let [vehicleChartr, setVehicleChartr] = useState('Вилочный');
  let [data, setData] = useState({});
  let navigate = useNavigate();

  let handleChangeStartDate = wrappHandleChangeFunc(setstartDate);
  let handleChangeEndDate = wrappHandleChangeFunc(setendDate);
  let hadleChangeVehicle = wrappHandleChangeFunc(setVehicle);
  let hadleChangeVehicleChartr = wrappHandleChangeFunc(setVehicleChartr);

  useEffect(() => {
    setData({
      startDate: new Date(startDate).getTime() / 1000,
      endDate: new Date(endDate).getTime() / 1000,
      customerId,
      requiredVehicle: {
        type: `${vehicle} ${vehicleChartr}`
      },
      status: 'newstatus',
      lon: 1,
      lat: 2,
      executorId: 2,
      title: "string"
    })
  }, [endDate, startDate, vehicle, id, vehicleChartr])

  return (
    <>
      <div className='background-low-opactiy'></div>
      <div className='form-order'>
        <form className="form-order__content">
          <div className='form-pair'>
            <label>Дата начала работ</label>
            <input onChange={handleChangeStartDate} value={startDate} className={'form-order__input'} type="date" name="order_startDate" required />
          </div>
          <div className='form-pair'>
            <label>Дата окончания работ</label>
            <input onChange={handleChangeEndDate} value={endDate} className={'form-order__input'} type="date" name="order_endDate" required />
          </div>
          <div className='form-pair'>
            <label>Необходимая техника</label>
            <select id='vehicle' value={vehicle} placeholder="Выберите технику из списка" selected={false} className={'form-order__input'} onChange={hadleChangeVehicle}>
              <option>Погрузчик</option>
              <option>Кран</option>
              <option>Автовышка</option>
            </select>
          </div>
          <SelectTypeVehicle vehicle={vehicle} vehicleChartr={vehicleChartr} hadleChangeVehicleChartr={hadleChangeVehicleChartr} />
          <div className='form-pair'>
            <button onClick={(event) => { event.preventDefault(); requestFunc(data, id); navigate(-1); sendEvent(id) }} className="button form-order__button" type="submit" name="form-order_submit">Отправить</button>
            <button onClick={() => navigate(-1)} className='button'>Вернуться назад</button>
          </div>
        </form>
      </div>
    </>
  )
}

export { FormOrder };