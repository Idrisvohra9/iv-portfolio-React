import React from 'react'
import Head from './components/Head'

export default function NoPage() {
  return (
    <div style={{flex: "1", width: "100vw", height: "100vh"}} className="d-flex justify-content-center align-items-center flex-column">
      <Head title="No Page" description="The page does not exist!" keywords=""/>
        <h1>404</h1>
        <h2>Sorry, The page doesn't exist.</h2>
    </div>
  )
}
