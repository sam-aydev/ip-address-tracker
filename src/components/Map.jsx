import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import styles from './IPBody.module.css'
import L from 'leaflet'
import mark from '../assets/icon-location.svg'



const newicin =  L.icon({
        iconUrl: mark,
        iconSize: [30, 40]
    })



export default function Map({loc}){
    return(
        <div className='-mt-48   flex-row'>
                <MapContainer className={`${styles.map} -z-10`}  center={[loc.lat, loc.lng]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[loc.lat, loc.lng]} icon={newicin} >
                        <Popup>
                        `{loc.country}, {loc.city}` <br /> The map is presently in {loc.city}.
                        </Popup>
                    </Marker>
                    <ChangeCenter position={[loc.lat, loc.lng]} />
                </MapContainer>
                </div>
    )
}

function ChangeCenter({position}){
    const map = useMap()
    map.setView(position)

    return null
}