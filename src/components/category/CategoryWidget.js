import React from 'react'
import { Link } from 'react-router-dom'

const CategoryWidget = (props) => (
  <Link to={props.linkTo} className="column">
    <p className={'notification is-centered-text ' + props.colorToApply}>
      <span className="title">{props.title} List</span>
      <br />
       The place where the {props.title} are available
    </p>
  </Link>
)

export default CategoryWidget