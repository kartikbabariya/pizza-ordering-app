import React, { useState } from 'react'
import Delivery from "../Images/delivery.jpg"
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const DeliveryForm = () => {

    const localtion = useLocation()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [postCode, setPostCode] = useState("")

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        number: "",
        address: "",
        postCode: "",
    })

    const handleOrder = () => {

        if (!firstName || !lastName) {
            const error = {};

            if (!firstName) error.firstName = "First Name is Required !";
            if (!lastName) error.lastName = "Last Name is Required !";
            if (!number) error.number = "Number is Required !";
            if (!address) error.address = "Address is Required !";
            if (!postCode) error.postCode = "Post Code is Required !";

            return setError({ ...error });
        }

    }

    return (
        <>
            <Navbar/>
            <div className="row">
                <div className="col-6">
                    <div className="d-flex justify-content-center mt-5">
                        <img src={Delivery} alt="" style={{
                            height: "550px",
                            borderRadius: "15px"
                        }} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-center mt-5">
                        <div class="card">
                            <div class="card-body">
                                <form>

                                    <div class="input-group  px-4 pt-4">
                                        <span class="input-group-text">First name</span>
                                        <input type="text" aria-label="First name" class="form-control" value={firstName} onChange={(e) => {
                                            setFirstName(e.target.value);
                                            if (!e.target.value) {
                                                return setError({
                                                    ...error,
                                                    firstName: "First Name is Required!",
                                                });
                                            } else {
                                                return setError({
                                                    ...error,
                                                    firstName: "",
                                                });
                                            }
                                        }} />
                                    </div>
                                    {error.firstName && (
                                        <div class="px-4 text-left pt-2">
                                            <span
                                                className='text-danger'
                                                style={{
                                                    fontSize: "15px"
                                                }}
                                            >
                                                {error.firstName}
                                            </span>
                                        </div>
                                    )}

                                    <div class="input-group  px-4 pt-4">
                                        <span class="input-group-text">Last name</span>
                                        <input type="text" aria-label="First name" class="form-control" value={lastName} onChange={(e) => {
                                            setLastName(e.target.value); if (!e.target.value) {
                                                return setError({
                                                    ...error,
                                                    lastName: "Last Name is Required!",
                                                });
                                            } else {
                                                return setError({
                                                    ...error,
                                                    lastName: "",
                                                });
                                            }
                                        }} />
                                    </div>

                                    {error.lastName && (
                                        <div class="px-4 text-left pt-2">
                                            <span
                                                className='text-danger'
                                                style={{
                                                    fontSize: "15px"
                                                }}
                                            >
                                                {error.lastName}
                                            </span>
                                        </div>
                                    )}

                                    <div class="input-group  px-4 pt-4">
                                        <span class="input-group-text">Mobile Number</span>
                                        <span class="input-group-text">+44</span>
                                        <input type="text" aria-label="First name" class="form-control" value={number} onChange={(e) => {
                                            setNumber(e.target.value);
                                            if (!e.target.value) {
                                                return setError({
                                                    ...error,
                                                    number: "Number Name is Required!",
                                                });
                                            } else {
                                                return setError({
                                                    ...error,
                                                    number: "",
                                                });
                                            }
                                        }} />
                                    </div>

                                    {error.number && (
                                        <div class="px-4 text-left pt-2">
                                            <span
                                                className='text-danger'
                                                style={{
                                                    fontSize: "15px"
                                                }}
                                            >
                                                {error.number}
                                            </span>
                                        </div>
                                    )}

                                    <div class="input-group  px-4 pt-4">
                                        <span class="input-group-text">Address</span>
                                        <input type="text" aria-label="First name" class="form-control" value={address} onChange={(e) => {
                                            setAddress(e.target.value);
                                            if (!e.target.value) {
                                                return setError({
                                                    ...error,
                                                    address: "Address is Required!",
                                                });
                                            } else {
                                                return setError({
                                                    ...error,
                                                    address: "",
                                                });
                                            }
                                        }} />
                                    </div>

                                    {error.address && (
                                        <div class="px-4 text-left pt-2">
                                            <span
                                                className='text-danger'
                                                style={{
                                                    fontSize: "15px"
                                                }}
                                            >
                                                {error.address}
                                            </span>
                                        </div>
                                    )}

                                    <div class="input-group  px-4 pt-4">
                                        <span class="input-group-text">Post Code</span>
                                        <input type="text" aria-label="First name" class="form-control" value={postCode} onChange={(e) => {
                                            setPostCode(e.target.value);
                                            if (!e.target.value) {
                                                return setError({
                                                    ...error,
                                                    postCode: "Post Code is Required!",
                                                });
                                            } else {
                                                return setError({
                                                    ...error,
                                                    postCode: "",
                                                });
                                            }
                                        }} />
                                    </div>

                                    {error.postCode && (
                                        <div class="px-4 text-left pt-2">
                                            <span
                                                className='text-danger'
                                                style={{
                                                    fontSize: "15px"
                                                }}
                                            >
                                                {error.postCode}
                                            </span>
                                        </div>
                                    )}


                                    <div className='d-flex justify-content-center mt-3'>
                                        <button className='btn btn-primary' type='button' onClick={handleOrder}>
                                            Order Now
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryForm