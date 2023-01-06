import React from 'react';
import { Container } from 'react-bootstrap';
import comma from "../../Assest/comma.png"
const Successfull = () => {
    return (
        <div>
            <section>
                <Container>
                    <div id="success" class="container">
                        <h1 className='title'>Meet Our Successful Student</h1>




                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-5">
                            <div class="col">
                                <div class="card">
                                    <img src="https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-539784676.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold">Awlad Hossain</h4>
                                        <p class="card-text gray">UIUX Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="images/student/student-2.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold">Jannatul Islam</h4>
                                        <p class="card-text gray">Motion Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="images/student/student-3.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold">Imran Hossain</h4>
                                        <p class="card-text gray">Graphics Designer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="images/student/student-3.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold">Imran Hossain</h4>
                                        <p class="card-text gray">Graphics Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="images/student/student-4.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold">Nishi Akter</h4>
                                        <p class="card-text gray">Web Developer</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class=" d-flex justify-content-center my-5">
                        <button class="  btn blue1 text-white mb-5 mt-3 ">
                            <h4 class="px-3 pt-2 pb-1">View All</h4>
                        </button>
                    </div>
                </Container>
            </section>
            {/* <!-- Successfull Students End-->
            <!-- Students Feedback Strat --> */}
            <section class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="card p-5 ">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <img className='h-50 w-50' src={comma} alt="" />
                                </div>
                                <div>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star-half-stroke text-warning"></i>
                                </div>
                            </div>
                            <p class="gray pt-5 text-justify">This is very helpfull course.The team members are aslo very
                                helpfull.I think this is the best website for a student for complete any course.This is very
                                helpfull course.The team members are aslo very
                                helpfull.I think this is the best website for a student for complete any course.This is very
                                helpfull course.The team members are aslo very
                                helpfull.I think this is the best website for a student for complete any course.
                            </p>
                            <div class="  d-flex align-items-center ">
                                <div>
                                    <img class=" w-100 h-100" src="images/student/student-5.png" alt="" />
                                </div>
                                <div class="ps-4 ">
                                    <p class="h5">Awlad Hossain</p>
                                    <small class="gray">Motion Designer</small>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="card p-5 ">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <img src="images/comma.png" />
                                </div>
                                <div>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star-half-stroke text-warning"></i>
                                </div>
                            </div>
                            <p class="gray pt-5 text-justify">This is very helpfull course.The team members are aslo very
                                helpfull.I think this is the best website for a student for complete any course.This is very
                                helpfull course.The team members are aslo very
                                helpfull.I think this is the best website for a student for complete any course.This is very
                                helpfull course.The team members are aslo very
                                helpfull.I think this is the best website for a student for complete any course.
                            </p>
                            <div class="  d-flex align-items-center ">
                                <div>
                                    <img class=" w-100 h-100" src="images/student/student-6.png" alt="" />
                                </div>
                                <div class="ps-4 ">
                                    <p class="h5">Shanta Akter</p>
                                    <small class="gray">Graphics Designer</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Successfull;