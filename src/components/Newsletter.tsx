import React from 'react'
import { Input } from "@/components/ui/input"

function Newsletter() {
  return (
    <div>
    
    <div className='row mt-10'>
        <div className='newsletter flex flex-col items-center justify-center'>
        <h1>Subscribe Our Newsletter</h1>
        <p>Get the latest information and promo offers directly</p>
        <div className=' newletterchild flex justify-between w-1/3'>
          <Input style={{border:"1px solid gray"}} placeholder='input email address' />

            <button>Get Started</button>
        </div>
        </div>

    </div>

    </div>
  )
}

export default Newsletter