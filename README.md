<p align="center">
    <img title="Petra" height="200" src="https://res.cloudinary.com/nimiafrica/image/upload/v1644094450/petra-logo_mdgwlr.svg" width="50%"/>
</p>

# Petra React Library

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#build-tools)
- [References](#references)


<a id="about"></a>

## About

This is a react package for implementing Petra checkout with different payment methods.

<a id="getting-started"></a>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.
See [references](#references) for links to dashboard and API documentation.


### Installation

```bash
$ npm install @thepetra/react
```

## Usage

```js
import React from 'react'
import { useThePetra } from '@thepetra/react'
// ...


export default function App() {
  const config = {
    key: 'PUBLIC_KEY',
    amount: 9000,
    email: 'john@thepetra.co',
    currency: 'USD',
    metadata: {
      first_name: 'John',
      last_name : 'Legend'
    },
    onSuccess: (data) => {
      console.log('🚀 onSuccess', data)
    },
    onError: (error) => {
      console.log('🚀 onError', error)
    },
    onClose: (error) => {
      console.log(`🚀 onClose: SDK closed by ${error}`)
    }
  }

  const handlePayment = useThePetra(config)
  return (
    <div className='App'>
      <h1>ThePetra SDK</h1>
      <button onClick={handlePayment}>Pay with Petra</button>
    </div>
  )
}
```


Please checkout [The Petra Documentation](https://docs.thepetra.co) for other information.


<a id="deployment"></a>

## Deployment

- Switch to Live Mode on the Dashboard
- Use the Live Public API key

<a id="build-tools"></a>
## Built Using

- [Typescript](https://www.typescriptlang.org/)
- React

## Contributors

- [Emmanuel Adebayo](https://github.com/toluwaanimi)
- [Joshua Oladokun](https://github.com/sukiejosh)


<a id="references"></a>
## Petra API  References

- [Petra API Doc](https://docs.thepetra.co/docs)
- [Petra Inline Payment Doc](https://docs.thepetra.co/docs/javascript-sdk)
- [Petra Dashboard](https://app.thepetra.co/auth/login)
