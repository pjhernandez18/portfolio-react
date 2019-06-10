import React, {Component} from 'react'

class Contact extends Component {
    render () {
        return (
            
			<div class="colorlib-contact" data-section="contact">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span class="heading-meta">Get in Touch</span>
                        <h2 class="colorlib-heading">Thanks for stopping by!</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="colorlib-icon">
                                <i class="icon-mail"></i>
                            </div>
                            <div class="colorlib-text">
                                <p><a href="mailto:pjhernan@usc.edu">pjhernan@usc.edu</a></p>
                            </div>
                        </div>

                        <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="colorlib-icon">
                                <i class="icon-linkedin2"></i>
                            </div>
                            <div class="colorlib-text">
                                <p><a href="https://linkedin.com/in/pj-hernandez" target="_blank">PJ Hernandez</a></p>
                            </div>
                        </div>

                        <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="colorlib-icon">
                                <i class="icon-phone"></i>
                            </div>
                            <div class="colorlib-text">
                                <p><a href="tel://">+1 (765) 464 9977</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Contact