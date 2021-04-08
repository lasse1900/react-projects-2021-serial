import React from 'react'
import { links, social } from './data'
import { FaBars, FaTwitter } from 'react-icons/fa'
import logo from './logo.svg'

const Sidebar = () => {
  return (
    <nav>
    Sidebar
      <div className="nav-center">
        <div className="links-container show-container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link
              return <li key={id}>
                <a href={url}>
                  {text}
                </a>
              </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
