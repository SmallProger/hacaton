import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { wrappHandleChangeFunc } from '../services/helpFuncs';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import "@fullcalendar/daygrid/main.css";
import './Calendar.css';
import { SelectTypeVehicle } from '../SelectTypeVehicle/SelectTypeVehicle';

const TEST_DATA1 = [
  {
    vehicle: 'Погрузчик',
    model: 'Вилочный',
    event: {
      id: 1,
      title: 'Погрузчик Вилочный',
      start: '2022-10-18T10:00:00',
      end: '2022-10-19T12:00:00',
    }
  },
  {
    vehicle: 'Погрузчик',
    model: 'Вилочный',
    event: {
      id: 2,
      title: 'Погрузчик Вилочный',
      start: '2022-10-19T10:00:00',
      end: '2022-10-19T12:00:00',
    }
  },
  {
    vehicle: 'Погрузчик',
    model: 'Вилочный',
    event: {
      id: 3,
      title: 'Погрузчик Вилочный',
      start: '2022-10-17T10:00:00',
      end: '2022-10-17T12:00:00',
    }
  },
  {
    vehicle: 'Погрузчик',
    model: 'Вилочный',
    event: {
      id: 4,
      title: 'Погрузчик Вилочный',
      start: '2022-10-16T10:00:00',
      end: '2022-10-14T12:00:00',
    }
  }
]
const TEST_DATA2 = [
  {
    vehicle: 'Погрузчик',
    model: 'Телескопический',
    event: {
      id: 1,
      title: 'Погрузчик Телескопический',
      start: '2022-10-18T10:00:00',
      end: '2022-10-19T12:00:00',
    }
  },
  {
    vehicle: 'Погрузчик',
    model: 'Телескопический',
    event: {
      id: 2,
      title: 'Погрузчик Телескопический',
      start: '2022-10-19T10:00:00',
      end: '2022-10-19T12:00:00',
    }
  },
  {
    vehicle: 'Погрузчик',
    model: 'Телескопический',
    event: {
      id: 3,
      title: 'Погрузчик Телескопический',
      start: '2022-10-17T10:00:00',
      end: '2022-10-17T12:00:00',
    }
  },
  {
    vehicle: 'Погрузчик',
    model: 'Телескопический',
    event: {
      id: 4,
      title: 'Погрузчик Телескопический',
      start: '2022-10-16T10:00:00',
      end: '2022-10-14T12:00:00',
    }
  }
]



function CalendarChooseParam({ vehicle, hadleChangeVehicle, vehicleChartr, hadleChangeVehicleChartr }) {
  return (
    <div className='calendar-choose-param'>
      <div className='form-pair'>
        <label>Вид</label>
        <select id='vehicle' value={vehicle} placeholder="Выберите технику из списка" selected={false} className={'form-order__input'} onChange={hadleChangeVehicle}>
          <option>Погрузчик</option>
          <option>Кран</option>
          <option>Автовышка</option>
        </select>
      </div>
      <SelectTypeVehicle vehicle={vehicle} vehicleChartr={vehicleChartr} hadleChangeVehicleChartr={hadleChangeVehicleChartr} />
    </div>
  )
}

function Calendar() {
  let [vehicle, setVehicle] = useState('Погрузчик');
  let [vehicleChartr, setVehicleChartr] = useState("");

  let hadleChangeVehicle = wrappHandleChangeFunc(setVehicle);
  let hadleChangeVehicleChartr = wrappHandleChangeFunc(setVehicleChartr);


  return (
    <div className="calendar" >
      <CalendarChooseParam
        vehicle={vehicle}
        hadleChangeVehicle={hadleChangeVehicle}
        hadleChangeVehicleChartr={hadleChangeVehicleChartr}
        vehicleChartr={vehicleChartr}
      />
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin]}
        events={TEST_DATA1.map(elem => elem.event)}
        height={'100%'}
      />
    </div>
  );

}

export { Calendar }