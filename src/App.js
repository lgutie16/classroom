import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header Event-name">
          Advance Fullstack REACT/NODE App & AWS deployment{' '}
        </header>
        <section className="Event-three-days">
          <section className="Speaker">
            <div className="Speaker-image--Container">
              <img
                className="Speaker-image"
                src="/public/speakers/jhon-carlo.jpg"
                alt="speaker photograpy"
              />
            </div>
          </section>
          <section className="Day-item">Day 1</section>
          <section className="Day-item">Day 2</section>
          <section className="Day-item">Day 3</section>
        </section>
        <footer>footer section</footer>
      </div>
    )
  }
}

export default App
