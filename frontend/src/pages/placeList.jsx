import React, { useEffect, useState } from 'react'
import axios from 'axios'


const PlaceList = () => {
    const [place, setPlace] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`http://192.168.18.210:4321/place`)
        setPlace(response.data)
    }

    useEffect(() => {
        fetchData()
        
    },[])

  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">nomor</th>
        <th scope="col">nama produk</th>
        <th scope="col">UserId</th>
        <th scope="col">harga</th>
        <th scope="col">expire</th>
        <th scope="col">created time</th>
      </tr>
    </thead>
    <tbody>
      {place.map((item, index )=> (
        <tr key={item.id}>
            <td>{(index + 1)}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.latitude}</td>
            <td>{item.longitude}</td>
            <td>{item.type_placeId}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default PlaceList