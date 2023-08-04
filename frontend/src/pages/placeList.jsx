import React, { useEffect, useState } from 'react'
import axios from 'axios'


const PlaceList = () => {
    const [place, setPlace] = useState([])
    const [type, setType] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`http://192.168.18.210:4321/place`)
        setPlace(response.data)
    }

    const datafetch = async () => {
        const response = await axios.get(`http://192.168.18.210:4321/placetype`)
        setType(response.data)
    }

    useEffect(() => {
        fetchData()
        datafetch()
    },[])

  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">number</th>
        <th scope="col">Place Name</th>
        <th scope="col">Description</th>
        <th scope="col">latitude</th>
        <th scope="col">longitude</th>
        <th scope="col">type place</th>
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
            <td>{item.typeName}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default PlaceList