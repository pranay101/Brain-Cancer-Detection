import React  from 'react';
import "../App.css"
const Navbar = ({setOpenAbout}) => {
  return (
    <div className='Navbar'>
        <h4>Nimje Cancer and Research Center</h4>
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a onClick={() => setOpenAbout(true)} >About</a></li>
                <li><a target='blank' href="https://github.com/pranay101/Brain-Cancer-Detection">Github</a></li>
                <li><a target='blank' href="https://github.com/pranay101/Brain-Cancer-Detection">Research Paper</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar