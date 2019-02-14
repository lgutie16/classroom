import React from 'react'
import './Day.css'

const Day = ({
  lesson_title,
  lesson_summary,
  lesson_items = [],
  day_agenda = []
}) => {
  return (
    <div className="Day">
      <header className="Day-lesson--Title">{lesson_title}</header>
      <article className="Day-lesson--Summary">
        <span className="Day-lesson--Subtitle">You'll learn:</span>
        {lesson_summary}
      </article>
      <section>
        <ul className="Day-lesson--List">
          {lesson_items.map(item => {
            return (
              <li>
                <span className="List-item--Title">{item.name}:</span>{' '}
                {item.description}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default Day
