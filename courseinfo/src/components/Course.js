import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) =>
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce((total, current) => total + current.exercises, 0)} />
    </div>

export default Course
