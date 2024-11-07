import React from 'react';

const Gauge = ({ value }) => {
  const constrainedValue = Math.min(100, Math.max(0, value));
  const angle = (constrainedValue / 100) * 180;

  return (
    <div className='flex items-center justify-center h-screen w-full bg-black'>
      <div className="relative w-96 h-36 opacity-65">
        {/* Outer dotted border div with higher z-index */}
                <span className='absolute bottom-0'>0%</span>
                <span className='absolute pt-10 pl-9'>25%</span>
                <span className='absolute pl-40'>50%</span>
                <span className='absolute pl-80 pt-9'>75%</span>
                <span className='absolute bottom-0 right-0'>100%</span>
                
        <div className="ds absolute top-0 left-0 border-2 border-dotted border-purple-500 w-full h-full z-30">
          {/* Inner div */}
          <div className="border-2 border-dotted border-purple-500 w-72 ml-10 mt-8">
            <div className=" w-full h-36 ">
              {/* Background arc showing only the rounded line */}
              <div
                className=" w-72 h-72 rounded-full"
                style={{
                  background: `conic-gradient( #7f1dff ${angle}deg ,transparent ${angle}deg)`, // Make the center transparent
                  transform: 'rotate(270deg)',
                  borderRadius: '50%',
                  position:'absolute',
                  transformOrigin: '',
                  
                  
                 
                  backgroundSize: '50% 25%',
                
                
                }}
              >
                {/* Pointer */}
                <div
                  className="absolute bottom-32 left-36 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[30px] border-b-white border-l-transparent border-r-transparent"
                  style={{ transform: `rotate(${angle-10 }deg)` }}
                />
              </div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gauge;
