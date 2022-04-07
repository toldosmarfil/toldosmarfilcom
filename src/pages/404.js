import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Using404 = () => (
  <Layout>
    <Seo title="Using 404" />
    <h1 class="fluid-1-r">No existe </h1>
    <h2 class="fluid-2-r">Hello from a 404 Page</h2>

    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Using404
