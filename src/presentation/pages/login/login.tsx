import Logo from '@/presentation/components/spinner/logo/logo'
import Spinner from '@/presentation/components/spinner/Spinner'
import React from 'react'

import Styles from './login.styles.scss'



const Login: React.FC = () => (
  <div className={Styles.login}>
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
    <form action="" className={Styles.form}>
      <h2>login</h2>
      <div className={Styles.inputWrap}>
        <input type="email" name="email" placeholder="insert your e-mail" />
        <span className={Styles.status} >🔴</span>
      </div>
      <div className={Styles.inputWrap}>
        <input type="password" name="password" placeholder="insert your password" />
        <span className={Styles.status} >🔴</span>
      </div>
      <button className={Styles.submit} type="submit">Enter</button>
      <span className={Styles.link}>Create account</span>
      <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner} />
        <span className={Styles.error}>
          error
        </span>
      </div>
    </form>
    <footer className={Styles.footer} />
  </div>
)

export default Login
