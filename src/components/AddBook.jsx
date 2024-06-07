import React from 'react'
import Navbar from './Navbar'

const AddBook = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                      <label htmlFor="" className="form-label">Book Title</label>
                      <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <label htmlFor="" className="form-label">Category</label>
                    <select name="" id="" className="form-control">
                        <option value="options">options</option>
                        <option value="Romance">Romance</option>
                        <option value="Fantacy">Fantacy</option>
                        <option value="Fiction">Fiction</option>
                    </select>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                     <label htmlFor="" className="form-label">Published year</label>
                     <input type="number" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <label htmlFor="" className="form-label">Authour Name</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                     <label htmlFor="" className="form-label">Description</label>
                     <textarea name="" id="" className="form-control"></textarea>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <label htmlFor="" className="form-label">Distributer Name</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <label htmlFor="" className="form-label">Publisher Name</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <label htmlFor="" className="form-label">Price</label>
                    <input type="number" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
 
                    <label htmlFor="" className="form-label">Edition</label>
                    <input type="number" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                     <button className="btn btn-success">ADD</button>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddBook
