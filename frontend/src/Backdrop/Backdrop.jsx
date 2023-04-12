import React from 'react'
import "../App.css"
const Backdrop = ({setOpenAbout}) => {
  return (
    <div onClick={() => setOpenAbout(false)} className='backdrop'></div>
  )
}

export default Backdrop