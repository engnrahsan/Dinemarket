import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 flex justify-between  mt-20">
        <div>
          <Link href={"/"}>
          <Image style={{marginBottom:"25px"}} width={180} height={30} alt='' src="/images/logo1.webp" />
          </Link> 
          <p>Small, artisan label that offers a thoughtfully curated collection of
            high quality everyday essentials made.</p>

        </div> 
        <div className='footercontent'>
          <h3>Company</h3>
          <ul>
            <li>About</li><li>Terms of Use</li><li>Privacy Policy</li><li>How it Works</li><li>Contact Us</li>
          </ul>
        </div>
        <div className='footercontent'>
          <h3>
          Support
          </h3>
          <ul><li>Support Carrer</li><li>24h Service</li><li>Quick Chat</li></ul>
        </div> 
        <div className='footercontent'>
          <h3>
          Contact
          </h3>
        <ul><li>Whatsapp</li><li>Support 24h</li></ul>
        </div>
      </div>
      <div className="flex justify-between items-center p-10  " style={{borderTop:"1px solid gray",marginTop:"40px"}}>
        <p><p>Copyright © 2022 Dine Market</p></p>
        <p><p>Design by. <span>Weird Design Studio</span></p></p>
        <p><p>Code by. <span>shabrina12 on github</span></p></p>
      </div>
    </footer>
  )
}

export default Footer