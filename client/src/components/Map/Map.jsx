import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import Pin from '../Pin/Pin';

function Map({items}) {
    const position = [20.654040088504303, -103.32597958149671]
  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={true} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.length > 0 && items.map(item => (
        <Pin item={item} key={item.id}/>
      ))}
    </MapContainer>
  );
}

export default Map;
