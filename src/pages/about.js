import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Timeline } from "../components/Timeline"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>
      I am a Frontend Developer with four years of experience in web
      development, I have been React Development certified. I also have
      knowledge of agile development, and UX / IU. <br />
      An additional plus that you will find in me is that I am an Advertising
      Graphic Designer.
    </p>
    <Timeline />
  </Layout>
)

export default SecondPage
