import { Footer, FormStatus, Header, Input } from '@/presentation/components/'
import Context from '@/presentation/components/contexts/form/form-context'
import React, { useState } from 'react'

import Styles from './login.styles.scss'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={state}>
        <form action="" className={Styles.form}>
          <h2>login</h2>
          <Input type="email" name="email" placeholder="insert your e-mail" />
          <Input type="password" name="password" placeholder="insert your password" />
          <button data-testid='submit' disabled className={Styles.submit} type="submit">Enter</button>
          <span className={Styles.link}>Create account</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>

  )
}

export default Login
