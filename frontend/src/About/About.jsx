import React from 'react'
import "../App.css"
import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
const About = ({setOpenAbout}) => {
  return (
    <div className='about'>
      <div>
        <XCircleIcon onClick={() => setOpenAbout(false)} className='closeButton' />
        <h1>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nemo, vitae optio temporibus aliquam quae! Deserunt tempora aliquam nemo voluptates facilis omnis fuga culpa doloremque eligendi sapiente similique, atque officia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis error sapiente repellendus, amet natus, eaque, corrupti impedit fuga odit ratione quis! Ut totam temporibus nihil porro dolor, molestias rem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae iste, fuga doloremque labore ipsam tenetur necessitatibus quod error excepturi sint vitae similique aliquid architecto rerum esse quo ut nobis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, provident asperiores? Itaque, explicabo quis! Tenetur hic impedit ex exercitationem placeat aliquam soluta aperiam dolor numquam, modi, ea, sequi vero harum.
        </p>
      </div>
    </div>
  )
}

export default About