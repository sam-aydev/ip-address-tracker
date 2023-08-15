export default function IPInfo({loc, info}){
    return(
        <div className='space-y-4  shadow-xl mx-auto -mt-24 overflow-visible sm:w-3/4 sm:flex sm:justify-center sm:items-center sm:px-4 sm:space-x-6 md:space-x-14 md:mt-2 pt-4 py-8 bg-white w-1/2 rounded-xl'>
                            <div  className='sm:text-left'>
                                <p className='text-gray-500 text-[12px] text-center sm:text-[10px] md:text-[13px] sm:mt-4 sm:text-left'>IP ADDRESS </p>
                                <h2 className='text-center font-bold text-black lg:pt-2 lg:text-xl'>{info.ip}</h2>
                            </div>
                            <div className='sm:border-r-2 sm:pr-3 sm:border-l-2 md:pr-5 md:pl-4 sm:text-left '>
                                <p className='text-gray-500 text-[12px] text-center sm:text-[10px] md:text-[13px] sm:text-left '>LOCATION </p>
                                <h2 className='text-center font-bold text-black md:text-[17px] lg:pt-2  sm:text-left lg:text-xl'>{loc.region}, {loc.country} {loc.postalCode}</h2>
                            </div>
                            <div className='  sm:text-left'>
                                <p className='text-gray-500 text-[12px] text-center sm:text-[10px] md:text-[13px] sm:text-left'>TIMEZONE </p>
                                <h2 className='text-center font-bold lg:pt-2  lg:text-xl'>{loc.timezone}</h2>
                            </div>
                            <div className='sm:border-l-2  sm:pl-3 sm:text-left'>
                                <p className='text-gray-500 text-[12px] text-center sm:text-[10px] md:text-[13px] sm:text-left'>ISP</p>
                                <h2 className='text-center font-bold lg:pt-2 sm:text-left lg:text-xl'>{info.isp}</h2>
                            </div>
        
                    
        </div>
    )
}