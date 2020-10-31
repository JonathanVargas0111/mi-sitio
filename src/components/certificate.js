import React from 'react';

export default (props) => {
    const certificate = props.element;

    return (<div className="shadow p-8 bg-purple-800 mr-4 rounded"key={certificate.code} >
        <h4 className="font-bold text-gray-400">{certificate.title}</h4>
        <div className="text-center">
            <span className="inline-block bg-purple-700 text-gray-400 font-bold p-2 mt-2 rounded">Calificación {certificate.score}</span>
        </div>
    </div>);
}