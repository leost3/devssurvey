import Context from '@/presentation/components/contexts/form/form-context'
import React, { useContext } from 'react'

import Styles from './input.styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }
  const getStatus = (): string => {
    return error ? '🔴' : '🔵'
  }

  const getTitle = (): string => {
    return error || 'ok'
  }

  const error = state[`${props.name}Error`]
  return (
    <div className={Styles.inputWrap}>
      <input onChange={handleChange} data-testid={props.name} {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status} >{getStatus()}</span>
    </div>
  )
}
export default Input
