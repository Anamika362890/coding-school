import React from 'react';
import "../Home/Banner.css"

const Banner = () => {
    return (



        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://miro.medium.com/max/1400/1*2xsLeLNqKwIoGOQlw8O6Ug.png" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210215160315/FREE-Python-Course-For-Beginners.png" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span> */}
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span> */}
            </a>
        </div>

    );
};

export default Banner;