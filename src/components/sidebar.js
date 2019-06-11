import React, {Component} from 'react'

class Sidebar extends Component {
    render () {
        return (
            <div>   
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                        <aside id="colorlib-aside" className="border js-fullheight">
                            <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/pj.jpg)'}} />
                            <h1><a href="index.html">PJ Hernandez</a></h1>
                            <span>Aspring Software Engineer</span>
                            </div>
                            <br/>
                            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                                <li><a href="#about" data-nav-section="about">About</a></li>
                                <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                                <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                                <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                </ul>
                            </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                    {/* Social Links */}
                    <ul>
                        <li><a href="https://www.facebook.com/paul.j.hernandez.7" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                        <li><a href="https://www.instagram.com/pjrhernandez/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/in/pj-hernandez/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                        <li><a href="https://github.com/pjhernandez18" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                    </ul>
                    </nav>
            <div className="colorlib-footer">
            <p><small>{/*-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
           Thanks to <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for the design inpiration for this site!
              </small></p>
              <p><small>
                
              </small></p>
            </div>
          </aside>
                </div>
            </div>

        )
    }



}
export default Sidebar