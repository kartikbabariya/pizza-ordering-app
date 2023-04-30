import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SelectedIngredients = () => {
  const history = useLocation();

  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(history.state);
  }, []);



  return (
    <>
      <div
        className="shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "50%", marginLeft: "350px", textAlign: "center" }}
      >
        <div className="row">
          <div className="col-6">
            <img
              src={require(`../Images/${history.state[0]}.jpg`)}
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="col-6">
            <h4 style={{ display: "block" }}>Selected Ingredients</h4>

            {item.map((data, index) => {
              return (
                <>
                  <span className="mt-2">{index > 0 && <div>{data}</div>}</span>
                </>
              );
            })}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Link to="/Order">
            <button type="button" className="btn btn-primary">
              Order
            </button>
          </Link>
        </div>
      </div>

      
    </>
  );
};

export default SelectedIngredients;
