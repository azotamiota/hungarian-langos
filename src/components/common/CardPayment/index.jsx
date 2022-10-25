import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { CheckoutForm } from '..';

const stripePromise = loadStripe('pk_test_51Lwj4oDcBksgiExXhIApbYlRxDG6BoTXVzFBJrKyhK4JPg1NKh0w3MjinrspY1gHeoUtGrmJlW7jdwSyQsqDocpq004xL23N7H');
function CardPayment() {
  const options = {
    clientSecret: 'pi_3LwjhIDcBksgiExX3yYQfRvB_secret_doildZpkkq9n6d9yT7pm22K9M',
  }
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  )
}

export default CardPayment