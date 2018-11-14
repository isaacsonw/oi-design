import React, { Component } from 'react'

class LandingPage extends Component{
  render(){
    return(
      <div>
      <header className="landing__header">
      <div className="g1"></div>
      <div className="g__middle"></div>
      <div className="g2"></div>
      <section className="landing__section">
      <h2>Creative <span>Software Design</span></h2>
      <p>We make your ideas come to life through Technology.</p>
      <em>Oi-Hub</em>
      </section>
      <section className="spinner__dots">
      <div className="dots"></div>
      <span>www.oi-hub.com</span>
      </section>
      </header>
      </div>
    )
  }
}

export default LandingPage