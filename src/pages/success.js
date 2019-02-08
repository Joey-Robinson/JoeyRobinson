import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'

const SuccessPage = () => (
  <Layout>
    <div className="success">
      Congratulations your form was submiited, I'll get back to you as soon as I can.
      <Link to="/contact/">
        Back to contact page
      </Link>
    </div>
  </Layout>
)

export default SuccessPage