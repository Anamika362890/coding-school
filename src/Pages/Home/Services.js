import React from 'react';
import { Container } from 'react-bootstrap';
import { FaAdjust, FaAndroid, FaArchive, FaAsymmetrik, FaCaretRight, FaLaptop } from 'react-icons/fa';
import "../Home/Banner.css"

const Services = () => {
    return (
        <div >
            <Container>
                <h1 className='title'>Our Services</h1>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="">
                            <div class=" service">
                                <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Capture_27_1200x768.png?size=690:388' alt='' />
                                <h5 class="text-center">Online Classes</h5>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="">
                            <div class=" service">
                                <img src='https://storage.googleapis.com/sales.appinst.io/2016/04/useapp.png' alt='' />

                                <h5 class="text-center ">Use Mobile App</h5>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="">
                            <div class="service">
                                <img src='https://anthill.co.uk/wp-content/uploads/2022/05/8-Essential-Customer-Service-Support-Skills-Banner-1.png' alt='' />
                                <h5 class="text-center">All Time Support</h5>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="">
                            <div class=" service">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa01bJfT6W9HF3LL08cCUPavs913PBzoXdYeZLkgtPFgraiZ_POCk9S8-7zIB588K0maE&usqp=CAU' alt="" />
                                <h5 class="text-center">Special  treatment</h5>


                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;