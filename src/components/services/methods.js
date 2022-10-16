const DEFAULT_IP = 'http://45.12.6.133:8080/';
const DEFAULT_API = 'api/customer/job';


async function makeOrder(valueParams) {
  let job = {
    ...valueParams,
  }
  let request = await fetch(DEFAULT_IP + DEFAULT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
  console.log(request);
  console.log(JSON.stringify(job));
  console.log(JSON.stringify(job))
  alert(request.ok ? 'Отправлено' : 'Ошибка');
}

async function changeOrder(valueParams, jobId) {
  let changedJob = {
    ...valueParams,
    id: jobId,
  }
  let request = await fetch(DEFAULT_IP + DEFAULT_API, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(changedJob),
  })
  console.log(JSON.stringify(changedJob))
  alert(request.ok ? 'Изменено' : 'Ошибка');
}

async function deleteOrder(jobId, ip = DEFAULT_IP, api = DEFAULT_API) {
  let request = await fetch(ip + api + '/' + jobId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      jobId,
    })
  })
  alert(request.ok ? 'Удалено' : 'Ошибка');
}

async function getOrders(customerId, ip = DEFAULT_IP, api = 'api/customer/jobs/') {
  console.log(customerId);
  let request = await fetch(ip + api + customerId);
  let response = await request.json();
  let data = response.map(elem => {
    let { title, status, id: jobId, lat, lon, modelVehicle: model, typeVehicle: type } = elem;
    return {
      title,
      status,
      lat,
      lon,
      executorId: 1,
      model: model,
      vehicle: type,
      jobId
    }
  })
  return data;
}

async function getExecutor(executorId, ip = DEFAULT_API, api = '/api/executor/') {
  let request = await fetch(ip + api + executorId);
  let response = await request.json();
  console.log(response, request);
  return response;
}

async function getVehiclesType(vehicle, vehicleChar, ip = DEFAULT_IP, api = '/api/vehicles/') {
  let request = await fetch(ip + api + vehicle + vehicleChar);
  let response = await request.json();
  console.log(response, request);
  return response;
}
export { changeOrder, makeOrder, deleteOrder, getOrders, getExecutor, getVehiclesType };