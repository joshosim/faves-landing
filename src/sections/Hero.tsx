import victorImage from '../assets/victor.jpg'

export const Hero = () => {

  return (
    <section
      id='home'
      className='pt-8 pb-20 md:pt-5 md:pb-10
       bg-gray-200 overflow-x-clip scroll-mt-32'>

      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              <span
                className='bg-black [background-size:200%] text-transparent bg-clip-text font-medium'>
                Victorific
              </span>

            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Hi 👋, I'm Victor Osim, and you might know me as Victorific Osim online and on social media.
              Welcome to my wall. Keep scrolling to know more about me. I'd love to connect with you.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary cursor-default">Get in Touch</button>
              <a href="https://wa.me/2349073054021">
                <button className="btn btn-text gap-1">
                  <span>Contact Me</span>
                  <svg className='h-5 w-5' width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="currentColor" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className='h-[400px] mt-10 md:mt-0 md:h-[648px] md:flex-1 relative rounded-lg'>
            <img src={victorImage} alt='Victor Image'
              className='absolute inset-0 w-full h-full object-cover rounded-lg' />
          </div>
        </div>
      </div>
    </section>

  );
};
