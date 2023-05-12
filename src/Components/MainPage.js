import React from 'react'
import mainPage from "../Images/mainPage.jpg"
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <>
            <div className="position-relative">

                <div className='position-absolute'>
                    <img className='mainPage_image' src={mainPage}  />
                </div>

                <div className='text-white'>
                    <div style={{
                        position: "absolute", left: "50%", marginTop: "15%"
                    }}>
                        <div className="d-flex text-center align-item-center" style={{
                            fontSize: "50px",
                            color: "#fff"
                        }}>
                            Welcome To Our Pizza Customization App - DevOps(CI-CD)
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Link to="/CustomizePage">
                                <button className="btn btn-primary" type="button" style={{ background: "#ECA502", border: "none", color: "#000", fontSize: "20px", padding: "15px", borderRadius: "15px", fontWeight: "700" }}>Customize Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage