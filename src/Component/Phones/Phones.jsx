import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Phone from './Phone';
import { Audio } from 'react-loader-spinner'

const Phones = () => {

    const [phones, setPhones] = useState([])
    const [loding, setLoading] = useState(true)


    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(phones => {
                const phoneData = phones.data.data
                const phonePrice = phoneData.map(phone => {
                    const Obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("-")[1])
                    }
                    return Obj
                })
                console.log(phonePrice)
                setPhones(phonePrice)
                setLoading(false)
            })
    }, [])


    return (
        <div className='flex flex-col'>
            <div className='flex justify-center'>
                {
                    loding && <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />
                }
            </div>


            <div>
                <h1 className='text-5xl text-center font-bold my-6'>Best Collection Phones : {phones.length}</h1>
                {
                    phones.map(phones => <Phone phones={phones}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;