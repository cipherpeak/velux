import { CompareDemo } from './CompareDemo'

function ServiceIntro() {
  return (
    <div className='w-full min-h-full bg-primary py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Grid Container */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Section - Intro Content */}
          <div className='space-y-8'>
            {/* Badge */}
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-white border border-secondary'>
              <span className='w-2 h-2 bg-secondary rounded-full mr-2'></span>
              <span className='text-secondary font-medium text-sm'>Premium Service</span>
            </div>

            {/* Heading */}
            <h1 className='text-4xl lg:text-5xl font-bold text-white leading-tight'>
              Professional Film 
              <span className='text-secondary'> Wrapping </span> 
              Services
            </h1>

            {/* Description */}
            <div className='space-y-4 text-lg text-white leading-relaxed'>
              <p>
                Transform your vehicle with our premium film wrapping services. 
                We use only the highest quality materials and cutting-edge techniques 
                to ensure a flawless finish that protects and enhances your vehicle's appearance.
              </p>
              <p>
                Whether you're looking for a complete color change, custom designs, 
                or protective coating, our expert team delivers exceptional results 
                that exceed expectations.
              </p>
            </div>

            {/* Features List */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {[
                '5+ Years Warranty',
                'Premium Quality Materials',
                'Expert Installation',
                'Quick Turnaround'
              ].map((feature, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <div className='flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center'>
                    <svg className='w-3 h-3 text-black' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-white font-medium'>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button className='bg-secondary text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg'>
                Get Free Quote
              </button>
              <button className='border-2 border-secondary text-white  px-8 py-3 rounded-lg font-semibold transition-all duration-200'>
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Section - Compare Demo */}
          <div className='relative'>
            <div className='sticky top-24'>
              <CompareDemo />
              
              {/* Decorative Elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl'></div>
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl'></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceIntro