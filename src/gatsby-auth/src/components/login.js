import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
            <div className="m-5 bg-red-200 rounded-sm p-5 content-center">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input type="text" name="username" onChange={this.handleUpdate} />
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
            <br />
            <div className="mt-2">
                <input className="px-2" type="submit" value="Log In" />
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Login