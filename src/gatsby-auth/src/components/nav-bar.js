import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default function NavBar() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "Login or request an account (private beta)"
  }
  return (
    <div
      style={{
        textAlign: "right",
        display: "flex",
        flex: "1",
        justifyContent: "right",
        // borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span className="mx-5">{greetingMessage}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        {isLoggedIn() ? (<Link to="/app/profile">Profile</Link>) :
        (<Link to="/app/profile">Login</Link>)
        }
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}