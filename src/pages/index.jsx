import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ color: `purple`, fontSize: `2rem` }}>
        <h1>Faiz Hameed</h1>
        <p>Full Stack Web Developer</p>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
