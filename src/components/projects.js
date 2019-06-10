import React, {Component} from 'react'

class Projects extends Component {
    render () {
        return (
                 <section class="colorlib-work" data-section="projects">
                    <div class="colorlib-narrow-content">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 class="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h3 class="animate-box">More projects coming soon...</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div class="project" style={{backgroundImage: 'url(images/token.png)'}}>
                                    <div class="desc">
                                        <div class="con">
                                            <h3 className="project-title">Token</h3>
                                            <p className="project-desc">This is an MVP version of Token, an iOS mobile app that lets users share their travel experiences by packaging their photos and videos
                                                in the form of memory 'tokens'. Users can view these tokens for their personal use or share with others who are interested 
                                                your travel experiences. (Swift, iOS camera framework (SwiftyCam), Firebase)
                                            </p>
                                            <p class="icon">
                                                <span><a href="https://github.com/pjhernandez18/TokenApp-iOS/tree/cam" target="_blank"><i class="icon-github"></i></a></span>
                                                <span><a href="https://mailchi.mp/2f19900dd984/tokensignup" target="_blank"><i class="icon-world"></i></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div class="project" style={{backgroundImage: 'url(images/im-hungry.png)'}}>
                                    <div class="desc">
                                        <div class="con">
                                            <h3 className="project-title">I'm Hungry</h3>
                                            <p className="project-desc">A food and recipe recommendation app created with React, the Java Jetty server, and Firebase. The app recommends 
                                            recipes and restaurants related to a keyword, allows for the creation of shopping lists based on "Favorited" restaurants/recipes, 
                                            and features full user authentication. (React, Java, Pippo, Firebase)</p>
                                            <p class="icon">
                                                <span><a href="https://github.com/joshmin98/Im_Hungry_Redux/tree/master/backend" target="_blank"><i class="icon-github"></i></a></span>
                                             
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
                                <div class="project" style={{backgroundImage: 'url(images/thesupperclubsc.jpg)'}}>
                                    <div class="desc">
                                        <div class="con">
                                        <h3 className="project-title">The Supper Club SC</h3>
                                            <p className="project-desc">Co-founded and launched USC's first 'foodie' club. It's a place where students
                                            can enjoy eating good food with good people. We take bi-weekly trips to explore LA's rich and diverse food scene. I built 
                                            a static site with core HTML/CSS/Bootstrap elememnts to display club information and events.</p>
                                            <p class="icon">
                                            <span><a href="https://github.com/pjhernandez18/thesupperclub.github.io" target="_blank"><i class="icon-github"></i></a></span>
                                                <span><a href="https://thesupperclubsc.com" target="_blank"><i class="icon-world"></i></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                                <div class="project" style={{backgroundImage: 'url(images/trackchanges.png)'}}>
                                    <div class="desc">
                                        <div class="con">
                                            <h3 className="project-title">Track Changes</h3>
                                            <p className="project-desc">An iOS mobile application that integrates user's Spotify accounts to share music with other registered users.</p>
                                            <p class="icon">
                                                <span><a href="https://github.com/pjhernandez18/TrackChanges" target="_blank"><i class="icon-github"></i></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            
        )
    }

}

export default Projects