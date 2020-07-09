import Footer from '@/presentation/components/footer/footer'
import { FormStatus } from '@/presentation/components/form-status/form-status'
import { Input } from '@/presentation/components/input/input'
import Header from '@/presentation/components/login-header/login-header'
import React from 'react'

import Styles from './login.styles.scss'



const Login: React.FC = () => (
  <div className={Styles.login}>
    <Header />
    <form action="" className={Styles.form}>
      <h2>login</h2>
      <Input type="email" name="email" placeholder="insert your e-mail" />
      <Input type="password" name="password" placeholder="insert your password"/>
      <button className={Styles.submit} type="submit">Enter</button>
      <span className={Styles.link}>Create account</span>
      <FormStatus />
    </form>
    <Footer />
  </div>
)

export default Login
