import React, { useEffect, useState } from 'react'
import Delivery from "../Images/delivery.jpg"
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import swal from 'sweetalert';

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

        if (!firstName || !lastName || !number || !address) {
            const error = {};

            if (!firstName) error.firstName = "First Name is Required !";
            if (!lastName) error.lastName = "Last Name is Required !";
            if (!number) error.number = "Number is Required !";
            if (!address) error.address = "Address is Required !";

            return setError({ ...error });
        }else{
            const willDelete =  swal({
                title: "Are you sure?",
                text: "Do you want to deliver ?",
                icon: "warning",
                showCancelButton: true,
                dangerMode: true,
                buttons : true
              });

              console.log(willDelete, "will")

              willDelete.then(() =>  swal("Delivered", "Your order will be deliverd !", "success")).catch((error) =>  console.log(error))
               
            //   if (willDelete) {
            //     swal("Deleted!", "Your imaginary file has been deleted!", "success");
            //   }else{
            //     swal("Deleted!", "Your imaginary file has been deleted!", "danger");
                
            //   }
        }

        

    }

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {



        Geocode.setApiKey("ENTER_YOUR_API_KEY");

        Geocode.setLanguage("en");

    
        Geocode.setRegion("es");

    
        Geocode.setLocationType("ROOFTOP");

        Geocode.enableDebug();

      
        Geocode.fromLatLng(latitude, longitude).then(
            (response) => {
                const address = response.results[0].formatted_address;
                let city, state, country;
                for (let i = 0; i < response.results[0].address_components.length; i++) {
                    for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                        switch (response.results[0].address_components[i].types[j]) {
                            case "locality":
                                city = response.results[0].address_components[i].long_name;
                                break;
                            case "administrative_area_level_1":
                                state = response.results[0].address_components[i].long_name;
                                break;
                            case "country":
                                country = response.results[0].address_components[i].long_name;
                                break;
                        }
                    }
                }
                setAddress(address)
            },
            (error) => {
                console.error(error);
            }
        );

        // Get latitude & longitude from address.
        Geocode.fromAddress("Eiffel Tower").then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
            },
            (error) => {
                console.error(error);
            }
        );
    }, [latitude, longitude])

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error(error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }



    };

    const containerStyle = {
        width: '300px',
        height: '300px',
       
        margin : "auto"
    };

    const center = {
        lat: latitude,
        lng: longitude
    };



    return (
        <>
            <Navbar />
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
                    <div className="d-flex justify-content-center mt-5 mx-5">
                        <div class="card">
                            <div class="card-body">
                                <form>

                                    <div className="row">
                                        <div className="col-6">
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

                                        </div>
                                        <div className="col-6">
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

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
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

                                        </div>

                                        <div className="col-12">

                                            <div class="input-group  px-4 pt-4">
                                                <button class="input-group-text btn btn-primary" type="button" onClick={handleGetLocation}>Your Address</button>
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
                                        </div>
                                    </div>





                                    {
                                        address && <div className="row mt-4">

                                        <div className="col-12">
                                            <LoadScript
                                                googleMapsApiKey="ENTER_YOUR_API_KEY"
                                            >
                                                <GoogleMap
                                                    mapContainerStyle={containerStyle}
                                                    center={center}
                                                    zoom={18}
                                                >
                                                   
                                                    <Marker
                                                        position={{
                                                            lat: latitude,
                                                            lng: longitude
                                                        }}
                                                    />
                                                </GoogleMap>
                                            </LoadScript>
                                        </div>
                                    </div>
                                    }


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