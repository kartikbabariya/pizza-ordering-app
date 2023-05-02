import React from 'react'

const Navbar = (props) => {

  console.log(props)

  return (
    <nav class="navbar" style={{ background: "#ECA502" }}>
      <div class="container">
        <div class="navbar-brand text-white">
          {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" /> */}
          Pizza Ordering App
        </div>

        {
          props &&
          <div className='text-end'>
            <div className='d-flex justify-content-center'>
              <div className='mt-1'>
                <span className='text-white' style={{fontSize : "22px"}}>Total Price : <span style={{ color: "black" , fontWeight : "600"}}>  {props.price} </span></span>
              </div>
              
            </div>
          </div>
        }

      </div>
    </nav>
  )
}

export default Navbar
