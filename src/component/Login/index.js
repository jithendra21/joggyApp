import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    userName: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  submitFrom = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
      console.log(data)
    }
    this.setState({
      userName: '',
      password: '',
    })
  }

  onEnterUsername = event => {
    this.setState({userName: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {userName} = this.state
    return (
      <>
        <label className="username-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={userName}
          onChange={this.onEnterUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="password-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onEnterPassword}
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    return (
      <div className="Login-container">
        <form className="form-container" onSubmit={this.submitFrom}>
          <img
            className="login-image"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
          />
          <div className="user-name-con">{this.renderUserName()}</div>
          <div className="password-con">{this.renderPassword()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
