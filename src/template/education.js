import { graphql, Link } from 'gatsby';
import React from 'react';
import EdNav from "../components/education-nav";


export default (props)=>{
    const pageData = props.data.educationJson;
    return(
        <div>
            <header className="py-12 border-purple-600 border-solid border-t-8 ">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="inline-block text-gray-300 mt-4 "> Regresar al inicio </Link>
                    <h2 className="capitalize text-6xl font-bold  text-blue-600 ">{pageData.title}</h2>   
                    <p className="text-xl text-gray-300">{pageData.description}</p>    
                </div>               
            </header>
            <ul className="max-w-4xl mx-auto pb-8">
                {
                    pageData.items.map((item, index)=>(
                        <li className="bg-purple-800 shadow mt-4 flex" key={index}>
                            <p className="capitalize vertical-text">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">   
                                    <h3 className="text-gray-300 mb-3">{item.name}</h3>                                 
                                        {
                                            item.degree && <span className="inline-block p-2 bg-purple-700 text-gray-300">{item.degree}</span>
                                        }
                                        {
                                            item.platform && <p className="text-gray-300 text-sm">{item.platform}</p>
                                        }
                                        {
                                            item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-700 text-gray-300 mt-4 rounded p-2"> Ver mas </a>
                                        }                                    
                                </div>
                            </div>
                        </li>
                    ))                    
                }
            </ul>
            <EdNav/>
        </div>            
    );
}

export const query = graphql`
    query ($slug : String){
        educationJson(slug:{eq:$slug}){
            title
            description
            slug
            items{
                name
                degree
                score
                url
                platform
            }
        }
    }
`;