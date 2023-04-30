import React, { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import PizzaBase from "../Images/PizzaBase.jpg";
import { useNavigate } from "react-router-dom";

function PizzaCheckBox() {
  const navigate = useNavigate();

  const [availableIngredients, setAvailableIngredients] = useState([
    "Pepperoni",
    "mushroom",
    "Onions",
    "Green peppers",
    "Tomato_thumbnail",
    "Pedrons_thumbnail",
    "Black olives",
    "Extra cheese"
  ]);
  const [availableCheese, setAvailableCheese] = useState([
    "Mozzarella Cheese",
    "3 - Cheese",
    "Vegan Cheese",
  ]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  console.log("selectedIngredients")


  const handleIngredientChange = (event) => {
    const selectedIngredient = event.target.value;
    if (event.target.checked) {
      setSelectedIngredients((prevSelectedIngredients) => [
        ...prevSelectedIngredients,
        selectedIngredient,
      ]);
    } else {
      setSelectedIngredients((prevSelectedIngredients) =>
        prevSelectedIngredients.filter(
          (ingredient) => ingredient !== selectedIngredient
        )
      );
    }
  };

  const handleRedirect = () => {
    navigate("/SelectedIngredients", { state: ["PizzaBase",...selectedIngredients] });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ padding: 40 }}>
          <div style={{ maxHeight: 600, maxWidth: 600, position: "relative" }}>
            {selectedIngredients.map((data) => {
              console.log("data", data);
              return (
                <>
                  {data == "Extra cheese" ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        y: data ? 30 : -100,
                        opacity: data ? 1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        duration: 1,
                      }}
                      className="cheese z4"
                    >
                      <img
                        src={require(`../Images/${data}.jpg`)}
                        alt="Pizza Base"
                        height="90%"
                        width="90%"
                        style={{ borderRadius: "100%" }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        y: data ? 160 : -100,
                        opacity: data ? 1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        duration: 1,
                      }}
                      className="ingredients z4"
                    >
                      <img
                        src={require(`../Images/${data}.jpg`)}
                        alt="Pizza Base"
                        height="100%"
                        width="100%"
                        style={{ borderRadius: "100%" }}
                      />
                    </motion.div>
                  )}
                </>
              );
            })}
            <motion.div transition={{ duration: 1 }}>
              <img
                src={PizzaBase}
                alt="Pizza Base"
                height="100%"
                width="100%"
              />
            </motion.div>
          </div>
        </div>
        <div
          className="shadow-lg p-3 mb-5 bg-body rounded"
          style={{ margin: "10px", width: "30%", height: "300px" }}
        >
          <h3>Select Pizza Sauce</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Tomato Base
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              BBQ Base
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ borderRadius: "15px", margin: "10px" }}>
              <h3>Select Cheese</h3>
              {availableCheese.map((Cheese, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={Cheese}
                    onChange={handleIngredientChange}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    {Cheese}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ borderRadius: "15px", margin: "10px", height: "350px" }}
            className="shadow-lg p-3 mb-5 bg-body rounded"
          >
            <h3>Available Ingredients</h3>
            {availableIngredients.map((ingredient, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={ingredient}
                  onChange={handleIngredientChange}
                />
                <label className="form-check-label" for="flexCheckDefault">
                  {ingredient}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          borderRadius: "15px",
          maxHeight: "wrap-content",
          maxWidth: "wrap-content",
          margin: "10px",
        }}
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRedirect}
        >
          Continue to checkout
        </button>
      </div>
    </>
  );
}

export default PizzaCheckBox;
