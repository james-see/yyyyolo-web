import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="mx-5">Hello {isLoggedIn() ? getUser().name : "wwwwelcome to yyyyolo"}!</h1>
      <div>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            <div className="p-5">
              <h3 className="mb-4">Some cool things that you can do with a yyyyolo account are:</h3>
            <ul className="space-y-4">
              <li>1. prank your friends and frenemies with images sent to their phone (100 images for $10).</li>
              <li>2. leave a robot voice message of your choosing. <i>(coming soon)</i></li>
              <li>3. Send a happy birthday message. <i>(coming soon)</i></li>
            </ul>
              <div className="dicky">
                <p className="p-3 mt-5 font-medium text-gray-900">
                You should <Link to="/app/login">log in</Link> to see restricted
                content. <br /> YYYYOLO is in private beta. If you need an account, email <a href="mailto:james@yyyyolo.com">james@yyyyolo.com</a>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}