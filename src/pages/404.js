import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Using404 = () => (
	<Layout>
		<Seo title="Using 404" />
		<div className="height-full is-flex align-center">
			<h1 class="fluid-1-r">Esta página no existe </h1>
			<h2 class="fluid-2-r mb-20">404 </h2>



			<Link to="/">Ir a Toldosmarfil.com </Link>
		</div>
	</Layout>
);

export default Using404
 