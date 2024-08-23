import React from "react";

function Login() {
  return (
    <div className='h-screen w-full flex flex-col gap-4 items-center justify-center px-8'>
      <h1 className='text-3xl font-medium'>Login</h1>
      <div className='flex flex-col gap-2 w-full'>
        <label htmlFor='' className='font-medium'>
          Email
        </label>
        <input
          required
          type='Email'
          name='email'
          className='w-full p-2 border-b-2 border-[#5fcde6] bg-neutral-100 outline-none'
        />
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <label htmlFor='' className='font-medium'>
          Password
        </label>
        <input
          required
          type='password'
          name='password'
          className='w-full p-2 border-b-2 border-[#5fcde6] bg-neutral-100 outline-none'
        />
      </div>
      <button className='w-full py-2 px-8 border-2 font-medium bg-[#5fcde6] rounded text-[white] transition-all hover:bg-[white] hover:text-[#5fcde6]'>
        Send Message
      </button>
    </div>
  );
}

export default Login;
