export interface IResponse {
  status: boolean
  type: string
  message: string
  data?: Record<any, any>
}

export interface ConfigProps {
  key: string
  amount: number
  email: string
  link?: string
  link_id?: string
  currency: string
  metadata?: {
    [key: string]: any
  }
  onSuccess: (response: IResponse) => void
  onError?: (response: IResponse) => void
  onClose?: (response: IResponse) => void
}
