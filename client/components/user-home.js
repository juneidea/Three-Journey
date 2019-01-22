import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AOS from 'aos';
AOS.init();

export const UserHome = props => {

  return (
    <div>
    <div className="background">
      <video autoPlay loop muted className="video-background">
        <source src="assets/theloop2.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="outline">
      <div className="head">
        <h1>Three.js Journey</h1>
        <p><a href="#top" >What is Three.js</a></p>
        <p><a href="/examples/helloworld" target="_blank">Hello World of Three.js</a></p>
        <p><a href="/examples/video-texture-360" target="_blank">360 Video</a></p>
        <p><a href="/examples/panoramacube" target="_blank">360 Image</a></p>
        <p><a href="/examples/aviator" target="_blank">Models and Animation</a></p>
        <p><a href="https://tympanus.net/Development/RainEffect/index.html#slide-1" target="_blank">Outro</a></p>
      </div>
      <div className="story-outline">
        <section className="blank" id="top" ><i class="fas fa-angle-double-down"></i></section>
        <section id="story1"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >What is
        <p >three.js is a JavaScript library that using WebGL 3D rendering so it allow us to put 3D content on a website fast through JavaScript function</p></section>
        <section id="story2"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >Hello World</section>
        <section id="story3" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        ><img src="assets/CubeScript.png" />
        </section>
        <section id="story4" data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          ><video autoPlay loop muted className="video-hello">
          <source src="assets/helloworld.mp4" type="video/mp4" />
          </video>
        </section>
        <section id="story5" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          >360 Video</section>
        <section id="story6" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          ><img src="assets/GUID-F2013F67-2A66-4C24-BAAB-CD869B108734.png" /></section>
        <section id="story7" data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        ><video autoPlay loop muted className="video-hello">
        <source src="assets/neotrade2.mp4" type="video/mp4" />
        </video>
        </section>
        <section id="story8" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          >360 image</section>
        <section id="story9" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        ><img src="assets/imageCube.jpg" /></section>
        <section id="story10" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          >VR</section>
        <section id="story11" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        ><img src="assets/vrjs-threejs-boxes-demo.jpg" /></section>
        <section id="story12" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          >Models and Animation</section>
        <section id="story13" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        ><img src="assets/airplane.png" /></section>
        <section id="story14" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        ><img src="assets/scene.png" /></section>
        <section id="story15" data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          >Outro</section>
      </div>
    </div>
  </div>
  )
}

const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
