import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default (props)=>{
    const data = useStaticQuery(graphql`
    {
        allEducationJson{
            edges{
                node{
                    slug
                    title
                    description
                }
            }
        }
    }    
    `)

    return(
        <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center text-blue-400">Conoce sobre mi formación educativa</h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allEducationJson.edges.map((element, index)=>{
                        const {node} = element;
                        return(
                            <article className="flex-1 bg-purple-800 shadow m-4 max-w-sm p-4 rounded">
                                <header>
                                        <p className="font-bold leading-loose text-blue-400">{node.title}</p>
                                        <div className="mt-4">
                                            <p className="text-gray-300">
                                                {node.description}
                                            </p>
                                            <Link to={`/${node.slug}`} className="inline-block bg-purple-700 text-gray-300 mt-4 rounded p-2"> Ver mas</Link>
                                        </div>
                                </header>
                            </article>
                        );
                    })
                }

            </nav>
        </div>
    );
}