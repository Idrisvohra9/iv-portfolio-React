import React from 'react'
import { Helmet } from 'react-helmet'

export default function NoPage() {
  return (
    <div style={{flex: "1", width: "100vw", height: "100vh"}} className="d-flex justify-content-center align-items-center flex-column">
      <Helmet>
        <title>No Page</title>
        <meta name="description" content="The page does not exist!"/>
      </Helmet>
        <h1>404</h1>
        <h2>Sorry, The page doesn't exist.</h2>
    </div>
  )
}
