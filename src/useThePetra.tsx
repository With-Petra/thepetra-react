import { useEffect, useState } from 'react'
import { ConfigProps } from './types'

declare const window: Window &
  typeof globalThis & {
    ThePetra: any
  }

const loadedScripts: {
  src?: string
} = {}

type ScriptStatusType = {
  loaded: boolean
  error: boolean
}

const url = 'https://cdn.thepetra.co/inline.js'

// @ts-ignore
const useThePetra = (props: ConfigProps) => {
  const [state, setState] = useState<ScriptStatusType>({
    loaded: false,
    error: false
  })

  useEffect(() => {
    const scriptTag = document.getElementById('petraScript')
    const scriptSrc = scriptTag && scriptTag.getAttribute('src')

    if (scriptSrc)
      return setState({
        loaded: true,
        error: false
      })

    loadedScripts.src = url
    const script = document.createElement('script')
    script.id = 'petra-js'
    script.type = 'application/javascript'
    script.src = url
    script.async = true

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      })
    }

    const onScriptError = () => {
      delete loadedScripts.src

      setState({
        loaded: true,
        error: true
      })

      throw new Error('Unable to load ThePetra pay modal')
    }

    script.addEventListener('load', onScriptLoad)
    script.addEventListener('complete', onScriptLoad)
    script.addEventListener('error', onScriptError)

    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', onScriptLoad)
      script.removeEventListener('complete', onScriptLoad)
      script.removeEventListener('error', onScriptError)
    }
  }, [])

  const handlePayment = () => {
    if (state.error) throw new Error('Unable to load ThePetra  modal')
    if (state.loaded) {
      const petra =
        window.ThePetra &&
        new window.ThePetra({
          ...props, amount: +props.amount,
          pKey : props.key
        })
      return petra.open()
    }
  }
  return handlePayment
}

export default useThePetra
