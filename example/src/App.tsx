import React from 'react'
import { useThePetra } from '@thepetra/react'

export interface IResponse{
  status : boolean
  type :string
  message : string
  data?: Record<any, any>
}

export default function App() {

  const config = {
    email : 'example@thepetra.co',
    amount: 100000,
    currency: 'USD',
    key: 'pk_test_WfomAlzMJoTL8UMCiATp0kYC6vQiy3F0',
    metadata: {
      first_name: 'Steve',
      last_name : 'Stone'
    },
    onSuccess: (data: IResponse) => {
      console.log('🚀 onSuccess', data)
    },
    onError: (error: IResponse) => {
      console.log('🚀 onError', error)
    },
    onClose: (error: IResponse) => {
      console.log(`🚀 onClose: SDK closed by ${error}`)
    }
  }

  const handlePayment = useThePetra(config)
  return (
    <div className='App'>
      <h1>ThPetra SDK </h1>
      <button onClick={handlePayment}>Pay with Petra</button>
    </div>
  )
}
