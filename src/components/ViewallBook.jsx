import React from 'react'
import Navbar from './Navbar'

const ViewallBook = () => {
  return (
    <div>
        <Navbar/>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Authour</th>
      <th scope="col">Publisher</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Two Roads</td>
      <td>Anna Merry</td>
      <td>2022</td>
      <td>500</td>
    </tr>
    <tr>
      <td>Blocks</td>
      <td>Jacob</td>
      <td>2024</td>
      <td>600</td>
    </tr>
    <tr>
    <td>Gate</td>
      <td>Abhi</td>
      <td>2024</td>
      <td>500</td>
    </tr>
    <tr>
    <td>hp</td>
      <td>Hari</td>
      <td>1999</td>
      <td>640</td>
    </tr>
    <tr>
    <td>college</td>
      <td>anugrah</td>
      <td>m2019</td>
      <td>500</td>
    </tr>
    <tr>
    <td>Flying</td>
      <td>anugrah</td>
      <td>2013</td>
      <td>1000</td>
    </tr>
    <tr>
    <td>bye bye</td>
      <td>aAlfiya</td>
      <td>2000</td>
      <td>600</td>
    </tr>
    <tr>
    <td>Girls</td>
      <td>Geethangali</td>
      <td>2022</td>
      <td>550</td>
    </tr>
  </tbody>
</table>  
    </div>
  )
}

export default ViewallBook
