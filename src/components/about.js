import React, {Component} from 'react'

class About extends Component {
    render () {
        return(
            <div className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <h2 className="colorlib-heading">About Me</h2>
                        <p className="about-desc"> <img className="about-img" alt="PJ Hernandez"src="images/about-me.jpg"/>Hi! My name is Paul Jerome Hernandez, but most call me PJ. I grew up in the Philippines, and have lived in Indonesia, Singapore, and the United States. 
                            I'm an incoming senior at the University of Southern California studying Computer Science. I'm absolutely obsessed with developing user-driven applications and managing consumer-facing software products from ideation to launch.<br></br> <br></br>
                            I first stumbled on code in high school by building simple circuits using logic gates. I then got exposed to application development and decided to pursue 
                            CS in college. I got hooked by the idea of using technology to simply my own life and other people's lives. Now, I find myself navigating through 
                            this career in the hopes of being a part of an organization that empowers people and businesses through technology. <br></br> <br></br>
                            When I'm not thinking of tech, I'm also into fitness, brewing the perfect cup of coffee, being a foreigner in a new place, and playing competitive sports.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 className="colorlib-heading">Notable Expertise</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        <h3>Data Structures & Algorithms</h3>
                        <p>Coming from a rigorous CS curriculm, I've been taught to hone my fundamentals in devloping data structures and algorithms
                            that are both time and memory efficient.</p>
                            Java / C++ / Python
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <span className="icon">
                        <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                        <h3>Application Development</h3>
                        <p>I use what I learn in class and the resources around me to develop and deploy mobile and web applications. 
                        <br/>
                        </p>
                        HTML, CSS, Javascript, React, Redux, Swift, Node.js, Express.js, MySQL, AJAX, JQuery, Jekyll
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                        <h3>Product Management</h3>
                        <p>As part of USC's student-led product incubator, I was exposed
                            to what it means to be a product manager in all steps of the product lifecycle. I have a keen eye for design, and
                            a way of words to sell both developers and business stakeholders.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
      

        )
    }
}

export default About