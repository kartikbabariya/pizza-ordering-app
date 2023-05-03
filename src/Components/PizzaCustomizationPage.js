import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Navbar from './Navbar';
import PizzaBase from "../Images/PizzaBase.jpg"


const PizzaCustomizationPage = () => {

    const navigate = useNavigate()

    const [availableIngredients, setAvailableIngredients] = useState([
        { ingredient: 'Pepperoni', price: 1 },
        { ingredient: 'Mushroom', price: 1 },
        { ingredient: 'Tomato', price: 1 },
        { ingredient: 'Pedron', price: 1 },
        { ingredient: 'Olive', price: 1 },
        { ingredient: 'Sweet Corn', price: 1 },
    ]);

    const [pizzaSauce, setPizzaSauce] = useState([
        { ingredient: 'Cheese Sauce', price: 3 }, { ingredient: 'Tomato Sauce', price: 2 }])

    const [cheese, setCheese] = useState([
        { ingredient: 'Liquid Cheese', price: 5 }, { ingredient: 'Normal Cheese', price: 4 }])



    const [ingredients, setIngredients] = useState([]);

    const [errorShow, setErrorShow] = useState(false)
    const [error, setError] = useState("")

    const handleDragStart = (event, type) => {
        console.log("type", type)
        setErrorShow(false);
        event.dataTransfer.setData('text/plain', type.ingredient);
        let element = document.getElementById("div1")
        element.classList.add("my-class");
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        // let element = document.getElementById("div1")
        // element.classList.remove("my-class");
    };

    const handleDrop = (event) => {

        const type = event.dataTransfer.getData('text/plain');
        let element = document.getElementById("div1")

        if (!ingredients.includes(type)) {
            setIngredients([...ingredients, type]);
        element.classList.remove("my-class");
        } else {
            setErrorShow(true);
            setError("Items already exist !")
            element.classList.remove("my-class");
        }
    };

    //Handle Remove
    const handleRemove = (ingredient) => {
        setErrorShow(false);
        setIngredients(ingredients.filter((data) => data !== ingredient))
    }

    //Handle Route
    const handleCheckout = () => {
        navigate("/ShowIngredients", { state: ingredients })
    }

    return (
        <>
            <Navbar />
            {/* ----------- container ------------ */}
            <div class="container m-4">
                <div class="text-center">
                    <div class="row">
                        <div class="col-md-6     col-sm-12" style={{
                            background: "#121619",
                            borderRadius: "15px"
                        }}>
                            <div className='pizza' id="div1" style={{ maxHeight: 530, maxWidth: 530, position: "relative" }} onDragOver={handleDragOver}
                                onDrop={handleDrop}>
                                {
                                    ingredients.map((data) => {
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
                                    <img src={PizzaBase} alt="Pizza Base" height="100%" width="100%" />
                                </motion.div>

                            </div>

                            <button type="button" className='btn btn-primary mt-4' onClick={handleCheckout}>Checkout</button>
                        </div>
                        <div class="col-md-6 col-sm-12">


                            {/* ---------- Sauce ------------ */}

                            <div className="row mt-0">
                                <div className="col-6">
                                    <div class="card" style={{ background: "#59E4A8", borderColor: "#59E4A8" }}>
                                        <div class="card-body">
                                            <h5>Select Pizza Sauce</h5>
                                            {
                                                pizzaSauce.map((sauce, index) => {
                                                    return (
                                                        <>

                                                            <div class="input-group mt-3">
                                                                <div class="input-group-text" style={{ width: "100%", background: "#121619", border: "none" }} onDragStart={(event) => handleDragStart(event, sauce)}>


                                                                    <img className='my-1' src={require(`../Images/${sauce.ingredient}.jpg`)} alt="Pizza Base" height="60px" width="60px" style={{ borderRadius: "50%" }} />

                                                                    <div className='mx-3 text-white'>
                                                                        <div>
                                                                            <span>{sauce.ingredient}</span>
                                                                        </div>
                                                                        <div className='d-flex flex-start'>
                                                                            <span>{sauce.price}</span>
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
                                    <div class="card" style={{ background: "#59E4A8", borderColor: "#59E4A8" }}>
                                        <div class="card-body">
                                            <h5>Select Cheese</h5>
                                            {
                                                cheese.map((sauce, index) => {
                                                    return (
                                                        <>

                                                            <div class="input-group mt-3">
                                                                <div class="input-group-text" style={{ width: "100%", background: "#121619", border: "none" }} onDragStart={(event) => handleDragStart(event, sauce)}>
                                                                    <img className='my-1' src={require(`../Images/${sauce.ingredient}_thumbnail.jpg`)} alt="Pizza Base" height="60px" width="60px" style={{ borderRadius: "50%" }} />

                                                                    <div className='mx-3 text-white'>
                                                                        <div>
                                                                            <span>{sauce.ingredient}</span>
                                                                        </div>
                                                                        <div className='d-flex flex-start'>
                                                                            <span>{sauce.price}</span>
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

                            <div class="card mt-3" style={{ background: "#59E4A8", borderColor: "#59E4A8" }}>
                                <div class="card-body">
                                    <h5>Select Ingrediants</h5>
                                    <div class="d-flex justify-content-center" >
                                        <div className="row">
                                            {availableIngredients.map((ingredient, index) => {
                                                return (
                                                    <>
                                                        <div className="col-6">
                                                            <div class="input-group mt-3">
                                                                <div class="input-group-text" style={{ width: "100%", background: "#121619", border: "none" }} onDragStart={(event) => handleDragStart(event, ingredient)}>
                                                                    <img className='my-1' src={require(`../Images/${ingredient.ingredient}_thumbnail.jpg`)} alt="Pizza Base" height="60px" width="60px" style={{ borderRadius: "50%", objectFit: "contain" }} />

                                                                    <div className='mx-3 text-white'>
                                                                        <div>
                                                                            <span>{ingredient.ingredient}</span>
                                                                        </div>
                                                                        <div className='d-flex flex-start'>
                                                                            <span>&#163; {ingredient.price}</span>
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

export default PizzaCustomizationPage