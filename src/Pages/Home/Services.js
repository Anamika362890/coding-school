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
                    <div class="col-lg-3 ">
                        <div class="">
                            <div class=" ser d-flex">
                                <img src='https://cdn-icons-png.flaticon.com/512/5433/5433973.png' alt='' />
                                <h5 class="text-center">Online Classes</h5>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 ">
                        <div class="">
                            <div class=" ser d-flex">
                                <img src='https://previews.123rf.com/images/daboost/daboost1508/daboost150800022/44363235-apps-icons-flying-around-smartphone-white-background.jpg' alt='' />

                                <h5 class="text-center ">Use Mobile App</h5>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 ">
                        <div class="">
                            <div class="ser d-flex">
                                <img src='https://thumbs.dreamstime.com/b/phone-icon-gold-round-button-gold-round-button-golden-coin-shiny-frame-shadow-luxury-realistic-border-concept-abstract-167075837.jpg' alt='' />
                                <h5 class="text-center">All Time Support</h5>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 Col-sm-2">
                        <div class="">
                            <div class=" ser d-flex">
                                <img src='data:image/png;base64,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' alt="" />
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