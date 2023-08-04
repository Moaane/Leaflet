import React, { useEffect, useState } from 'react'
import axios from 'axios'


const placeList = () => {
    const [place, setPlace] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4321/place`)
        placeList(response.data)
    }


    useEffect(() => {
        fetchData()
        
    },[])

  return (
    <table class="table">
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

export default placeList