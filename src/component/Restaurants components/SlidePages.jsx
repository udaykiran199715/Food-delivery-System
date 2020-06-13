import React from 'react'

export default function Slide() {
    return (
        <div className='mt-5' style={{ backgroundColor: 'rgb(4, 4, 39)' , padding:'20px'}}>
            <div className='row'>
                <div className='col-3'>
                    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 1.jpg" class="d-block w-100 h-150" alt="..." />
                            </div>
                            <div class="carousel-item" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 2.jpg" class="d-block w-100 h-150" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className='col-3'>
                    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 3.jpg" class="d-block w-100 h-150" alt="..." />
                            </div>
                            <div class="carousel-item" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 4.jpg" class="d-block w-100 h-150" alt="..." />
                            </div>

                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className='col-3'>
                    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 5.jpg" class="d-block w-100 h-150" alt="..." />
                            </div>
                            <div class="carousel-item" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 6.jpg" class="d-block w-100 h-150" alt="..." />
                            </div>

                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className='col-3'>
                    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 7.jpg" class="d-block w-100  " style={{height:'270px'}} alt="..." />
                            </div>
                            <div class="carousel-item" data-interval="3000">
                                <img src="Slide Photos/Slide Photo 8.jpg" class="d-block w-100 " style={{height:'270px'}} alt="..." />
                            </div>

                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}