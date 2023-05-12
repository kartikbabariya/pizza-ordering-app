import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const ShowIngredients = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [selectedIngredient, setSelectedIngredients] = useState([]);

  console.log("location", location)

  useEffect(() => {
    setSelectedIngredients(location?.state)
  }, [])

  //Handle Order
  const handleOrder = () => {
    navigate("/order")
  }



  return (
    <>
      <Navbar />

      <div class="container m-4">
        <div class="text-center">
          <div class="row">
            <div class="col-md-6     col-sm-12" style={{
              background: "#121619",
              borderRadius: "15px"
            }}>

              {
                selectedIngredient?.map((data) => {
                  console.log("data", data)
                  return (
                    <>

                      <div
                        className="ingredients z4"

                        style={{
                          height: "500px",
                          widows: "500px",
                          marginTop: "20px",
                          marginLeft: "80px"
                        }}
                      >
                        <img src={require(`../Images/${data}.jpg`)} alt="Pizza Base" height="100%" width="100%" style={{ borderRadius: "100%" }} />
                      </div>


                    </>
                  )
                })
              }


              <img src={require("../Images/PizzaBase.jpg")} style={{
                height: "550px",
                width: "550px"
              }} />

            </div>
            <div class="col-md-6 col-sm-12">


              {/* ----------Selected Ingrediants ----------- */}
              <div class="card mt-3" style={{ background: "#59E4A8", borderColor: "#59E4A8" }}>
                <div class="card-body">
                  <h5>Selected Ingrediants</h5>
                  <div class="d-flex justify-content-center" >
                    <div className="row">
                      {selectedIngredient.map((ingredient, index) => {
                        return (
                          <>
                            <div className="col-6">
                              <div class="input-group mt-3" style={{ width: "100%" }}>
                                <div class="input-group-text" style={{ width: "100%", background: "#121619", border: "none" }}>

                                  <img className='my-1' src={require(`../Images/${ingredient}.jpg`)} alt="Pizza Base" height="60px" width="60px" style={{ borderRadius: "50%" }} />

                                  <div className='mx-3 text-white'>
                                    <div>
                                      <span>{ingredient}</span>
                                    </div>
                                    {/* <div className='d-flex flex-start'>
                                      <span>{ingredient.price}</span>
                                    </div> */}
                                  </div>
                                </div>
                              </div>

                            </div>
                          </>
                        )
                      }
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="button" className='btn btn-primary mt-4' onClick={handleOrder}>Order</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShowIngredients;
