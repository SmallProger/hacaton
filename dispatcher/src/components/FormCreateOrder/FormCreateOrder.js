import React from 'react';
import { FormOrder } from '../FormOrder/FormOrder'
import { makeOrder } from '../services/methods'

function FormCreateOrder({ customerId, sendEvent }) {
  console.log('FormCreateOrder', customerId)
  return (
    <FormOrder customerId={customerId} requestFunc={makeOrder} sendEvent={sendEvent} />
  )
}

export { FormCreateOrder };