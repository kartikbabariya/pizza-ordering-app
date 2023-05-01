import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Navbar from './Navbar';

function PizzaCheckBox() {
 
  
  const navigate = useNavigate()

  const [availableIngredients, setAvailableIngredients] = useState([
      'Pepperoni',
      'Mushroom',
      'Tomato',
      'Pedron',
      'Olive',
      'Sweet Corn'
  ]);

  const [pizzaSauce, setPizzaSauce] = useState([
      'Cheese Sauce', 'Tomato Sauce'])

  const [cheese, setCheese] = useState(['Normal Cheese',
      'Liquid Cheese'])

  const [selectedIngredients, setSelectedIngredients] = useState([]);


  //Handle Route
  const handleCheckout = () => {
      navigate("/ShowIngredients", { state: selectedIngredients })
  }

  const handleIngredientChange = (event) => {
      const selectedIngredient = event.target.value;
      if (event.target.checked) {
          setSelectedIngredients((prevSelectedIngredients) => [...prevSelectedIngredients, selectedIngredient]);
      } else {
          setSelectedIngredients((prevSelectedIngredients) => prevSelectedIngredients.filter((ingredient) => ingredient !== selectedIngredient));
      }
  };


  return (
    <>
    <Navbar />
        {/* ----------- container ------------ */}
        <div class=" m-4">
            <div class="text-center">
                <div class="row">
                    <div class="col-md-6     col-sm-12" style={{
                        background: "#121619",
                        borderRadius: "15px"
                    }}>
                        <div style={{ maxHeight: 530, maxWidth: 530, position: "relative" }}>
                            {
                                selectedIngredients.map((data) => {
                                    console.log("data", data)
                                    return (
                                        <>

                                            <motion.div
                                                initial={{ opacity: 0 }}

                                                animate={{
                                                    y: data ? 130 : -100,
                                                    opacity: data ? 1 : 0,
                                                }}
                                                transition={{
                                                    type: "spring", duration: 1
                                                }}
                                                className="ingredients z4"
                                            >
                                                <img src={require(`../Images/${data}.jpg`)} alt="Pizza Base" height="100%" width="100%" style={{ borderRadius: "100%" }} />
                                            </motion.div>


                                        </>
                                    )
                                })
                            }

                            <motion.div transition={{ duration: 1 }} className="">
                                <img src={require("../Images/PizzaBase.jpg")} style={{
                                    height: "550px",
                                    width: "550px"
                                }} />
                            </motion.div>


                        </div>

                        <button type="button" className='btn btn-primary mt-4' onClick={handleCheckout}>Checkout</button>
                    </div>
                    <div class="col-md-6 col-sm-12">


                        {/* ---------- Sauce ------------ */}

                        <div className="row mt-0">
                            <div className="col-6">
                                <div class="card" style={{ background: "#fff", borderColor: "#fff" }}>
                                    <div class="card-body">
                                        <h5>Select Pizza Sauce</h5>
                                        {
                                            pizzaSauce.map((sauce, index) => {
                                                return (
                                                    <>

                                                        <div class="input-group mt-3">
                                                            <div class="input-group-text" style={{ width: "100%", background: "#121619", border: "none" }}>
                                                                <input class="form-check-input mt-0 mx-2" type="radio" name="flexRadioDefault" id={`flexRadioDefault${index}`} value={sauce} onChange={handleIngredientChange} />

                                                                <img className='my-1' src={require(`../Images/${sauce}.jpg`)} alt="Pizza Base" height="60px" width="60px" style={{ borderRadius: "50%" }} />

                                                                <div className='mx-3 text-white'>
                                                                    <div>
                                                                        <span>{sauce}</span>
                                                                    </div>
                                                                    <div className='d-flex flex-start'>
                                                                        <span>10</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5>Select Cheese</h5>
                                        {
                                            cheese.map((sauce, index) => {
                                                return (
                                                    <>

                                                        <div class="input-group mt-3">
                                                            <div class="input-group-text" style={{ width: "100%", background: "#121619", border: "none" }}>
                                                                <input class="form-check-input mt-0 mx-2" type="checkbox" name="flexRadioDefault" value={sauce} onChange={handleIngredientChange} />

                                                                <img className='my-1' src={require(`../Images/${sauce}_thumbnail.jpg`)} alt="Pizza Base" height="60px" width="60px" style={{ borderRadius: "50%" }} />

                                                                <div className='mx-3 text-white'>
                                                                    <div>
                                                                        <span>{sauce}</span>
                                                                    </div>
                                                                    <div className='d-flex flex-start'>
                                                                        <span>10</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---------- Ingrediants ----------- */}
                        <div class="card mt-3" style={{ background: "#ECA502", borderColor: "#ECA502" }}>
                            <div class="card-body">
                                <h5>Select Ingrediants</h5>
                                <div class="d-flex justify-content-center" >
                                    <div className="row">
                                        {availableIngredients.map((ingredient, index) => {
                                            return (
                                                <>
                                                    <div className="col-6">
                                                        <div class="input-group mt-3">
                                                            <div class="input-group-text" style={{ width: "100%", background: "#121619", border: "none" }}>
                                                                <input class="form-check-input mt-0 mx-2" type="checkbox" value={ingredient} onChange={handleIngredientChange} aria-label="Checkbox for following text input" />

                                                                <img className='my-1' src={require(`../Images/${ingredient}_thumbnail.jpg`)} alt="Pizza Base" height="60px" width="60px" style={{ borderRadius: "50%", objectFit : "contain" }} />

                                                                <div className='mx-3 text-white'>
                                                                    <div>
                                                                        <span>{ingredient}</span>
                                                                    </div>
                                                                    <div className='d-flex flex-start'>
                                                                        <span>10</span>
                                                                    </div>
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
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
}

export default PizzaCheckBox;
