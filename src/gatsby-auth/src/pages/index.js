import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "wwwwelcome to yyyyolo"}!</h1>
      <div>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            <div className="p-4">
              <h3>Some cool things that you can do with a yyyyolo account are:</h3>
            <ul className="space-y-4">
              <li>1. prank your friends and frenemies with images sent to their phone.</li>
            </ul>
              <div className="rounded-lg shadow-xs overflow-hidden">
                <p className="p-5 font-medium text-gray-900">
                You should <Link to="/app/login">log in</Link> to see restricted
                content. If you need an account, email james@yyyyolo.com
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}