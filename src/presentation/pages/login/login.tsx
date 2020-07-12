import { Footer, FormStatus, Header, Input } from '@/presentation/components/'
import Context from '@/presentation/components/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import React, { useEffect, useState } from 'react'

import Styles from './login.styles.scss'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    errorMessage: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.password, state.email])

  const isError = !!state.emailError || !!state.passwordError

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form action="" className={Styles.form}>
          <h2>login</h2>
          <Input type="email" name="email" placeholder="insert your e-mail" />
          <Input type="password" name="password" placeholder="insert your password" />
          <button data-testid='submit' disabled={isError} className={Styles.submit} type="submit">Enter</button>
          <span className={Styles.link}>Create account</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>

  )
}

export default Login
