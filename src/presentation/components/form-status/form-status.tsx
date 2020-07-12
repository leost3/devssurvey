import Context from '@/presentation/components/contexts/form/form-context'
import React, { useContext } from 'react'

import Spinner from '../spinner/Spinner'
import Styles from './form-status.styles.scss'

const FormStatus: React.FC = () => {
  const { state: { isLoading, mainError } } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span data-testid="main-error" className={Styles.error}>
        {mainError}
      </span>}
    </div>
  )
}

export default FormStatus
