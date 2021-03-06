import React, {Component} from 'react'

class Home extends Component {
    render () {
        return (
                <div id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight js-fullwidth">
                    <ul className="slides">
                    <li style={{backgroundImage: 'url(images/barcelona.png)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                                <div className="desc banner-text">
                                    <h1 style={{"color": "white" , "font-family": 'Courier New', "font-weight": "normal"}}> > Paul Jerome R. Hernandez</h1>
                                    <h3> > Aspiring Software Engineer</h3>
                                    <h3> > Lifelong Student</h3>  
                                    <h3> > Traveller</h3>
                                    <h3> > _</h3>
                                    <br/>
                                    <div><a className="btn-cv" href="resume/Paul_Hernandez_Resume_v3.pdf" target="_blank" rel="noopener noreferrer">View CV <i className="icon-download4"/></a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    {/* <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                                <div className="desc">
                                <h1>I love building<br /> THINGS !!</h1>
                                <p><a className="btn btn-primary btn-learn" href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                                <div className="desc">
                                <h1>I often <br/>Write ... </h1>
                                <p><a className="btn btn-primary btn-learn" href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li> */}
                    </ul>
                </div>
        </div>    
        )
    }
}
export default Home
