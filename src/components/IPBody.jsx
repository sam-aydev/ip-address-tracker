import { useEffect, useState } from 'react'


import styles from './IPBody.module.css'
import IPInput from './IpInput'
import Map from './Map'
import IpInfo from './IpInfo'
import Loader from './Loader'




const BASE_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_kcjbl7e6DOgYycwnnOnJBGclZiKXm"
// ?apiKey=at_kcjbl7e6DOgYycwnnOnJBGclZiKXm&ipAddress=8.8.8.8

// https://geo.ipify.org/api/v2/country,city?apiKey=at_kcjbl7e6DOgYycwnnOnJBGclZiKXm&ipAddress=8.8.8.8

export default function IPBody(){
    const [info, setInfo] = useState({})
    const [loc, setLoc] = useState({lat:0, lng:9})
    const [ip, setIp] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    

    useEffect(function(){
        async function getInfo(){
                try{
                    setLoading(true)
                    const res = await fetch(`${BASE_URL}`)
                    const data = await res.json()
                    setLoading(false)
                    console.log(data)
                    setInfo(data)
                    setLoc(data.location)

                } catch(err){
                    setError(err.message)
                    setLoading(false)
                }
        }
        getInfo()
        

    },[])

    async function handleSearch(e){
                try{
                e.preventDefault()
                setLoading(true)
                if(!ip) setError(true)  
                const res = await fetch(`${BASE_URL}&ipAddress=${ip}`)
                const data = await res.json()
                setLoading(false)
                console.log(data)
                setInfo(data)
                setLoc(data.location)
            } catch(err){
                setError(err.message)
                setLoading(false)
            }

    }  
    


    // useEffect(function(){
    //     navigator.geolocation.getCurrentPosition((pos)=>
    //     console.log(pos)
    //     )
    // })
    if(error) alert(error)
    
    return(
        <div>
            <IPInput handleSearch={handleSearch} setIp={setIp} ip={ip} setError={setError} error={error}/>
            

             

             <div className={`${styles.mapContainer} -mt-16  flex-column `}  >
                {loading ? <Loader /> : <IpInfo loc={loc} info={info}  />}
                <Map loc={loc}/>
            </div>

        </div>

    )
}


