let SelectTypeVehicle = ({ vehicle, vehicleChartr, hadleChangeVehicleChartr }) => {
  if (!vehicle && vehicle === '') {
    return null;
  }
  let case1 = ['28 м', '28 мп', '32 м', '35 м', '45 м', '45 мп', '70 м'];
  let case2 = ['100 т.', '110 т.', '16 т.', '160 т.', '25 т.', '35 т.', '50 т.', '60 т.', '70 т.'];
  let case3 = ['Вилочный', 'Вилочный Диз 3т/6м',
    'Вилочный Диз 5т/6м', 'Вилочный Диз 7т/6м', 'Ричтрак контейнерный',
    'с боковым поворотом', 'Телескопический',
    'Телескопический 6т/8м', 'Телескопический 9т/6м', 'Фронтальный',
    'Фронтальный 3м3'];
  let options = [];
  switch (vehicle) {
    case 'Автовышка': {
      options = case1.map((elem, id) => <option key={id}>{elem}</option>)
      break;
    }
    case 'Кран': {
      options = case2.map((elem, id) => <option key={id}>{elem}</option>)
      break;
    }
    case 'Погрузчик': {
      options = case3.map((elem, id) => <option key={id}>{elem}</option>)
      break;
    }
    default: {
      return [];
    }
  }
  return (
    <div className='form-pair'>
      <label>Параметр техники</label>
      <select className='form-order__input' value={vehicleChartr} onChange={hadleChangeVehicleChartr}>
        {options}
      </select>
    </div>
  )
}
export { SelectTypeVehicle }