import React from "react";

const Deliver = () => {
  return (
    <>
      <div
        className="shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "50%", marginLeft: "350px", textAlign: "center" }}
      >
      <div className="row">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Number</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Number"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Address</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Address"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Post Code</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Post Code"
              />
            </div>
            <button className="btn btn-primary mt-3" type="button">
            Order Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Deliver;
