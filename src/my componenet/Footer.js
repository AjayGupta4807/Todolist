import React from 'react'

export const Footer = () => {
  let footerstyle = {
    position: "relative",
    top:"93vh",
    width:"100%"
  }
  return (
       <footer className='bg-dark text-light py-3' style = {footerstyle}>
<p className='text-center'> copyright &copy; mytodolist.com</p>
       </footer>
  )
}

