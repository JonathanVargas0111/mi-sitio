import React from 'react';


export default (props) => {
    const post = props.element;
    return (
        <div className="shadow bg-purple-800 mr-4 rounded flex-shrink-0" style={{width :"300px"}} key={post.link}>
            <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.thumbnail})` }}></header>
            <div className="p-8">
                <h4 className="font-bold text-gray-400 h-48 overflow-y-hidden">
                    {post.title}
                            </h4>
                <div className="text-center">
                    <a className="btn" href={post.link}>Leer </a>
                </div>
            </div>
        </div>
    )
}