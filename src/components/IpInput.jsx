export default function IPInput({setIp, ip, setError, error, handleSearch }){
    return(
        <div className=' bg-[url(assets/pattern-bg-mobile.png)] bg-no-repeat bg-cover sm:bg-[url(assets/pattern-bg-desktop.png)]' >
                <div className='text-center text-white pt-6 text-2xl font-medium sm:text-3xl lg:text-4xl '>
                    <h1>IP Address Tracker</h1>
                </div>
                <div className='flex justify-center mt-5 pb-32'>
                    <form onSubmit={handleSearch}>
                        <input onChange={(e)=> setIp(e.target.value)} onKeyDown={()=>setError(false)} value={ip} type="text" placeholder='Search For Any IP address' className='border-1 py-2 px-5 outline-none rounded-tr-none rounded-tl-xl rounded-bl-xl md:w-[340px] lg:w-[400px]  ' />
                        <button className='bg-black rounded-tr-xl rounded-br-xl   rounded-l-none py-[14px] px-3 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="none" stroke="#fff" strokeWidth="2" d="M2 1l6 6-6 6"/></svg>
                        </button>
                        {error && <p className='text-red-900'>You Have Not Add Any IP Address</p>}
                    </form>
                </div>
            </div>
    )
}