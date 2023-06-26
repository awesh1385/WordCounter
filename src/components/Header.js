import React from 'react'

export const Header = ({heading, subHeading}) => {
  return (
   <header>
    <h1>{heading}</h1>
    <p>{subHeading}</p>
   </header>
  )
}

export default Header