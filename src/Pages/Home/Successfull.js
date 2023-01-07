import React from 'react';
import { Container } from 'react-bootstrap';
import comma from "../../Assest/comma.png"
const Successfull = () => {
    return (
        <div >
            <Container>
                <h1 className='title t'>Our Successful Student</h1>
                <div class="row">
                    <div class="col-lg-3 Col-sm-2">
                        <div class="">
                            <div class=" service">
                                <img src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' alt='' />
                                <h5 class="text-center">Naim Islam</h5>
                                <p className='text-center'>Web Developer</p>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 Col-sm-2">
                        <div class="">
                            <div class=" service">
                                <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png' alt='' />

                                <h5 class="text-center">Riana Haque</h5>
                                <p className='text-center'>Front-end Web Developer</p>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 Col-sm-2">
                        <div class="">
                            <div class="service">
                                <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='' />
                                <h5 class="text-center">Shakib Khan</h5>
                                <p className='text-center'>MERNs Web Developer</p>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 Col-sm-2">
                        <div class="">
                            <div class=" service">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU' alt="" />
                                <h5 class="text-center">Abida </h5>
                                <p className='text-center'>MERNs Web Developer</p>



                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Successfull;