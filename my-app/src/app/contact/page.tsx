"use client"
import { useState } from "react"

export default function Contact() {
   const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [message,setMassage] = useState("")
   const[isClick,setClick] = useState(false)


   const submitHandler = (e)=>{
    e.preventDefault()
    setClick(true)

   }

  return (
    <main>
      <form className='flex  flex-col justify-center items-center gap-4 mt-8' onSubmit={submitHandler}>
        
        {/* child 1 */}
        <div className='flex flex-col justify-center gap-3'>
        <label htmlFor="name" className='text-white'>Name</label>
        <input type="text" placeholder='Enter your name'  className='py-2 w-96 rounded-lg px-2' 
        onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>

         
        {/* child 2 */}
        <div className='flex flex-col justify-center gap-3'>
        <label htmlFor="email" className='text-white'>Email</label>
        <input type="email" placeholder='Enter your email'  className='py-2 w-96 rounded-lg px-2'
         onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>


        
        {/* child 3 */}
        <div className='flex flex-col justify-centerx gap-3'>
        <label htmlFor="message" className='text-white'>Message</label>
        <input type="text" placeholder='Enter your message'  className='py-2 w-96 rounded-lg px-2'
         onChange={(e)=>setMassage(e.target.value)} value={message}/>
        </div>

          
        {/* child 4 */}
        <button type="submit" className='px-8 py-2 bg-white text-black font-medium text-lg rounded-lg hover:bg-gray-300'>Send</button>

      </form>
       
      {isClick && <div>
        <p className="text-white text-center">Name:{name}</p>
        <p className="text-white text-center">Email:{email}</p>
        <p className="text-white text-center">Message:{message}</p>
      </div>
      }
       
    </main>
  )
}
