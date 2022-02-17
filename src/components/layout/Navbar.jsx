import React from 'react'
import { FaGithub } from "react-icons/fa"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
  return (
    <nav className="mb-12 shadow-lg navbar bg-neutral text-neutral-content">
      <div className="container mx-auto">
        Navbar
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Dev Finder"
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar