export default function Testimonials() {
  return (
    <>
      <div className='flex flex-col pt-10 px-6 space-y-4 lg:items-center hidden'>
        <h1 className=' text-2xl font-bold lg:mx-auto lg:text-4xl'> What our happy client say</h1>
        <p className='text-gray-400 text-justify'>Several selected clients who already believe in our service</p>
        <div className='flex flex-col items-start space-y-5 px-3 lg:items-center '>
          <div className='flex flex-row space-x-4 mt-3 items-center lg:justify-evenly'>
            <img src='/Aavash.jpg' className='rounded-l-[389px] rounded-br-[389px] rounded-tr-none w-1/4 lg:w-1/3'></img>
            <div>
              <h1 className='font-bold text-lg'>Aavash Gyawali</h1>
              <p className='lg:text-gray-400 lg:text-justify lg:w-[400px] lg:block sm:hidden '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus doloribus facere atque voluptate, quam perferendis fugiat nemo ea molestiae quia voluptatibus ipsum consequatur rem delectus alias molestias quo officiis necessitatibus!</p>
            </div>
          </div>
          <p className='text-gray-400 lg:hidden  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus doloribus facere atque voluptate, quam perferendis fugiat nemo ea molestiae quia voluptatibus ipsum consequatur rem delectus alias molestias quo officiis necessitatibus!</p>

        </div>
      </div>

    </>
  )
}
