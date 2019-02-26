import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WorkItem from '../../components/workItem'
import reacttodo from '../../images/react-todo.png'

const ReactTodo = () => (
  <Layout>
    <SEO title="React Todo List" keywords={[`gatsby`, `application`, `react`]} />
    .
    <WorkItem
      imagesm={reacttodo}
      imagelg={reacttodo}
      title="Reat Todo List"
      date="2019"
      tech="React, CSS"
      goal="To make a simple todo list using react"
      livelink="https://react-todo-no-hooks.netlify.com/"
      ghlink="https://github.com/Joey-Robinson/react-todo-list-no-hooks"
    />
  </Layout>
)

export default ReactTodo
