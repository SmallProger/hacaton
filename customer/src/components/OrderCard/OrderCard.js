import React, { useEffect, useState } from 'react';
import './OrderCard.css';
import { deleteOrder, changeOrder, getExecutor } from '../services/methods';
import { useNavigate } from 'react-router-dom';

function OrderCard({ data, sendEvent }) {
  let { jobId, title, lon, lat, status, model, vehicle, executorId } = data;
  let [isDeleted, setDeleted] = useState(false);
  let [isChanged, setChanged] = useState(false);
  let [executorInfo, setExecutorInfo] = useState([]);
  console.log(jobId, executorId)
  let navigate = useNavigate();
  useEffect(() => {
    getExecutor(executorId).then(result => {
      setExecutorInfo(result);
    })
  }, [executorId])
  useEffect(() => {
    console.log('here')
    sendEvent(jobId);
  }, [isDeleted, isChanged])

  function onDelete() {
    return () => {
      deleteOrder(jobId);
      setDeleted(true);
    }

  }
  function onChange() {
    return () => {
      navigate(`change-order/${jobId}`);
      setChanged(true);
    }
  }
  if (isDeleted) {
    return null;
  } else {
    return (
      <div className='order-card'>
        <ul className='order-card__info-list'>
          <li className='order-card__pair'>
            <span>Описание заказа:</span><div className='order-card__description'>{title}</div>
          </li>
          <li className='order-card__pair'><span>Статус:</span><span>{status}</span></li>
          <li className='order-card__pair'><span>Транспорт:</span><span>{vehicle ? vehicle : null}</span></li>
          <li className='order-card__pair'><span>Модель транспорта:</span><span>{model ? model : null}</span></li>
          <li className='order-card__pair'><span>Исполнитель:</span><span>{executorInfo.name ? executorInfo.name : 'Вася'}</span></li>
          <li className='order-card__pair'><span>Координаты:</span><span>{`{${lon}; ${lat}}`}</span></li>
        </ul>
        <div className='order-card__buttons'>
          <button className='button' onClick={onChange()}>Изменить заказ</button>
          <button className='button button_delete' onClick={onDelete()}></button>
        </div>
      </div>
    )
  }
}

export { OrderCard }