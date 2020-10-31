import React from 'react'

export default (props)=>{

    const course = props.element;
    return (
    <div className="shadow p-8 bg-purple-800 mr-4 rounded" key={course.url}>
        <h4 className="font-bold text-gray-400">{course.title}</h4>
        <div className="text-center">
            <span className="inline-block bg-purple-700 text-gray-400 font-bold p-2 mt-2 rounded">Progreso {(course.progress)}%</span>
        </div>
    </div>
    )

}