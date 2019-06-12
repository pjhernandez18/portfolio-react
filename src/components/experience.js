import React, {Component} from 'react'

class Experience extends Component {

    render () {
        return (
                <div class="colorlib-experience" data-section="experience">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<h2 class="colorlib-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
				         <div class="timeline-centered">
					         <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-1">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					                  <h2>Undergraduate Research Assistant <span> USC ANRG Research Group - Fall 2018 - Los Angeles, CA</span></h2>
					                  <p>Worked as a researcher at USC's Autonomous Networks Research Group on the i3 team. i3 also known as the IoT Intelligent Integrator
                                          is a web-based platform that allows IoT device owners to sell real-time data on an online marketplace for public subscribers. 
                                          For proof of concept, the platform utilized MQTT, a publish-subscribe framework, which allowed the buyer and the seller to 
                                          transact payments. I was mainly responsible for streamlining deployment on various platforms using 
                                          Docker for ease of maintenance and distribution. <a href="https://i3.usc.edu/" target="_blank" rel="noopener noreferrer">Read more here</a>
                                      </p>
					               </div>
					            </div>
					         </article>
					         <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-2">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					               	<h2>Software Developer Intern <span>Lantrn - Summer 2018 - Hong Kong</span></h2>
					                  <p>
                                          Lantrn is a Hong Kong based baggage startup that specializes in producing high quality suitcases with built-in security systems. I worked on a various technical tasks
                                          including their kickstarter e-commerce site <a href="https://lantrn.co/" target="_blank" rel="noopener noreferrer">here</a> and product testing. Most notably, I worked on optimizing their 
                                          hardware device functionality tests by writing a Python algorithm that executes a comprehensive test using <a href="https://nordicsemi.com" target="_blank" rel="noopener noreferrer">Nordic</a> frameworks.
                                      </p>
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
            </div>
        )
    }
}
export default Experience