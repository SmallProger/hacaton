import React from 'react';
import { FormOrder } from '../FormOrder/FormOrder'
import { changeOrder } from '../services/methods'
import { useParams } from 'react-router-dom';

function FormChangeOrder({ customerId, sendEvent }) {
  const params = useParams();
  return (
    <FormOrder customerId={customerId} id={params.jobId} requestFunc={changeOrder} sendEvent={sendEvent} />
  )
}

export { FormChangeOrder };