import Context from '@/presentation/components/contexts/form/form-context'
import React, { useContext } from 'react'

import Styles from './input.styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input: React.FC<Props> = (props: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }
  const { errorState } = useContext(Context)
  const error = errorState[props.name]
  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status} >{getStatus()}</span>
    </div>
  )
}
export default Input
