import React from 'react'

const Navbar = (props) => {


  return (
    <nav class="navbar" style={{ background: "#59E4A8" }}>
      <div class="container">
        <div class="navbar-brand text-white">
          {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" /> */}
          Pizza Ordering App
        </div>

        {/* {
          props &&
          <div className='text-end'>
            <div className='d-flex justify-content-center'>
              <div className='mt-1'>
                <span style={{ fontSize: "22px", color: "black", fontWeight: "600" }}> Total Price : {props.price} </span>
              </div>
            </div>
          </div>
        } */}

      </div>
    </nav>
  )
}

export default Navbar
