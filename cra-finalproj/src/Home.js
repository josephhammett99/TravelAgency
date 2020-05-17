import React from 'react';

const Home = () => {
    return (
        <foos>
            <div className="body">
                <div className="bg-header">
                    <div className="container">
                        <h1 className="service">Jimbo's Getaway Service</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 covid-bar">
                                <p>Please review the latest information related to COVID-19 to see how it impacts your travel plans.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container text-box">
                        <div className="row head-box">
                            <div className="col-sm-12">
                                <img className="img-responsive headd" src='/media/yacht.jpg' alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="vibe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eligendi molestiae
                                    veniam ipsa exercitationem voluptatum delectus quam? Odit incidunt quasi perspiciatis in magni
                                    iure ea repudiandae dolorum suscipit autem ipsam sint voluptatem saepe obcaecati odio sequi
                                    reiciendis laborum tempore aliquam aperiam, quos, voluptas rem doloribus ipsum. Nulla dolorum
                                    quia amet! Ea animi eius nam sint. Veniam aspernatur aperiam nobis ex doloribus possimus, libero
                                    nulla a reprehenderit quam tempore magnam illum ad voluptas magni temporibus voluptatum cumque
                                    facilis distinctio culpa autem repellat laborum! Consequatur itaque vero incidunt quam accusamusvoluptatem.</p>
                                <button type="button" className="blinking bubbon">FIND YOUR NEXT TRIP NOW!!!!!!</button>
                            </div>
                        </div>
                    </div>

                    <div className="container deal-box">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Check out our deals!</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="thumb img-responsive small" src='/media/rainingMoney.jpg' alt="" />
                                <p>Save up to 0.5%!</p>
                            </div>
                            <div className="col-md-4">
                                <img className="thumb img-responsive small" src='/media/friends.jpg' alt="" />
                                <p>Buy 2 tickets now and get one 3% off!</p>
                            </div>
                            <div className="col-md-4">
                                <img className="thumb img-responsive small" src='/media/casinoBar.png' alt="" />
                                <p>ADULTS ONLY! Save 50% and get 200 dollars worth of coupons!</p>
                            </div>
                        </div>
                    </div>
                    <div className="container news-box">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>NEWS</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="thumb2 img-responsive" src='/media/jeff.jpg' alt="" />
                            </div>
                            <div className="col-sm-8">
                                <p className="news-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi
                                    officia vitae mollitia consectetur excepturi, voluptatem expedita debitis quaerat repudiandae culpa
                                    atque nulla quas dicta quisquam soluta, earum suscipit unde tempora! Unde qui libero deserunt
                                    dignissimos possimus illo inventore at eos, fugiat quibusdam animi praesentium quam, laborum veniam
                                    et excepturi magni odio eaque tenetur itaque numquam repellat ipsam. Dolorum suscipit mollitia
                                    magnam repellendus? Laboriosam rerum, blanditiis officiis veritatis quas ratione quo distinctio ab
                                    dolorum, pariatur numquam consequuntur sapiente molestiae reprehenderit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-box">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>CONTACT US FOR SUPPORT</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="bubbon2">Go to support page</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </foos>
    );
}


export default Home;