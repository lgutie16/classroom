import React, { Component } from 'react'
import Day from './Day'
import './App.css'

const events = [
  {
    title: ' Advance Fullstack REACT/NODE App & AWS deployment',
    speaker: {
      name: 'Jhon Carlo Buendia',
      description:
        "I've been building distributed applications on the Internet for more than 11 years, I am passionate about providing high quality solutions to customers in the fastest way possible."
    },
    days: [
      {
        lesson_title: 'Frontend remarks',
        lesson_summary:
          'Proper ways to setup frontend, folder structure, patterns and tools for component based projects',
        lesson_items: [
          {
            name: 'Libraries/react',
            description: 'How many exits, How to choose'
          },
          {
            name: 'React basis/concepts',
            description: 'Basic to advanced react concepts'
          },
          { name: 'CLIs', description: 'How to choose, how they work' },
          {
            name: 'Tools',
            description:
              'Folder structure, consistent code style, faster app with bundler analizers, hot reloading... more'
          }
        ]
      },
      {
        lesson_title: 'Backend and databases remarks',
        lesson_summary:
          'Proper ways to setup backend, folder structure, patterns and tools to build restfull APIs with multiple databases',
        lesson_items: [
          {
            name: 'NodeJS',
            description: 'Node main characteristics and functionality'
          },
          {
            name: 'Libraries/express',
            description: 'How many exits, How to choose'
          },
          {
            name: 'Express basis/concepts',
            description: 'Basic to advanced express and node concepts'
          },
          { name: 'CLIs', description: 'How to choose, how they work' },
          {
            name: 'Tools',
            description:
              'Folder structure, consistent code style, faster app with bundler analizers, hot reloading... more'
          }
        ]
      },
      {
        lesson_title: 'Deployment',
        lesson_summary:
          'Toolset to deploy an application, concepts of continuos integration and continuos delivery ',
        lesson_items: [{ name: 'tools/aws', description: '...' }]
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header Event-name">
          {/* events[0].title */}
        </header>
        <section className="Event-three-days">
          <section className="Speaker">
            <div className="Speaker-image--Container">
              <img
                className="Speaker-image"
                src="https://cdn.tekcrispy.com/wp-content/uploads/2018/10/avatar.png"
                alt="speaker photograpy"
              />
            </div>
            <article className="Speaker-info--Container">
              <span className="Speaker-info--Name">
                {events[0].speaker.name}
              </span>
              <p className="Speaker-info--Description">
                {events[0].speaker.description}
              </p>
            </article>
          </section>
          {events[0].days.map(day => {
            return (
              <section className="Day-item">
                <Day
                  lesson_title={day.lesson_title}
                  lesson_summary={day.lesson_summary}
                  lesson_items={day.lesson_items}
                />
              </section>
            )
          })}
        </section>
        <footer className="App-footer" />
      </div>
    )
  }
}

export default App
