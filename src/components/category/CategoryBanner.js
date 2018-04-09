import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedWrapper from '../../utilities/AnimatedWrapper';
const CategoryBanner = (props) => (
  <section className={'hero is-danger' }>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {props.category} List
        </h1>
      </div>
    </div>
  </section>
)

export default AnimatedWrapper(CategoryBanner)