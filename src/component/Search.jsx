import React, { useState } from "react";

function Search(props) {
    const [artist,setArtist] = useState('')
    
    const submitHandler = (e)=>{
        e.preventDefault();
        props.findArtist(artist)
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="search">Search Artist</label>
                                <div className="input-group mt-2 mb-2">
                                    <input type="search" name="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} id="artist" className="form-control me-1 rounded-end"/>
                                    <button onClick={submitHandler} className="btn btn-outline-success rounded"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search

// router is used to navigate 