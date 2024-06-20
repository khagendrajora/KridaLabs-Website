import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ContactUS = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSending(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();
    if (!name || !email || !message || !name.trim() || !email.trim() || !message.trim()) {
      setIsSending(false);
      toast.error("Please fill in all the fields!");
      return;
    }
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwJReOiKVD6SZNluWdi0QijXNDeGT-w7GJbfwRLtVyNdUT9S2MGWbdOxWzWWqmYBdKw/exec', {
        redirect: "follow",
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setIsSending(false);
      if (data.result === "success") {
        toast.success("Your message has been sent successfully.")
        form.reset();
      } else {
        toast.error("Message sending failed.");
      }
    } catch {
      setIsSending(false);
      toast.error("Something went wrong. Please check internet connection.");
    }
  };

  return (
    <>
      <div id="contactUs"></div>
      <div className='flex flex-col pt-10 px-5 space-y-1 lg:flex-row lg:justify-between xl:justify-evenly lg:items-center'>
        <div className="p-6 sm:hidden lg:flex lg:w-1/2 lg:justify-center ">
          <img src="/Group 143.svg" className="w-[541px]"></img>
        </div>
        <div className="px-10 lg:w-1/2 xl:w-1/3 lg:flex-col  lg:space-y-4 ">
          <h1 className=' text-4xl font-bold'>Contact Us</h1>
          <p className='text-gray-400 text-justify my-5  '>Get in touch us to kickstart your ideas.</p>

          <form className='space-y-4' onSubmit={handleSubmit}>
            <input type='text' name='email' placeholder='Your Email' className='p-3 pl-7 text-black bg-blue-100 rounded-md w-full' />
            <input type='text' name='name' placeholder='Name' className='p-3 pl-7 text-black bg-blue-100 rounded-lg w-full' />
            <textarea typeof='text' name='message' placeholder='Message' cols={3} rows={5} className='p-3 pl-7 text-black bg-blue-100 rounded-lg w-full' />
            <button className="flex items-center bg-blue-700 text-white xl:text-[20px] text-[20px] lg:text-[15px] lg:p-4 font-bold p-5 px-[40px] rounded-[60px] hover:bg-blue-500 transition duration-300" type='submit'>
              {isSending && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>}
              <span>Contact Now</span>
            </button>
          </form>

        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  )
}
