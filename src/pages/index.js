import React from "react"
import { Link } from "gatsby"
import { Jumbo } from "../components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <button>CONTACT ME</button>
    <br />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="https://github.com/iblurdesigner">iblurdesigner</Link>
    <Link to="https://www.linkedin.com/in/blurdev/">blurdev</Link>
    <Link to="https://www.behance.net/iblurdesigner">iblurdesigner</Link>
  </Layout>
)

export default IndexPage
