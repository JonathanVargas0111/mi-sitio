import React from "react";

export default () =>(
    <form className="mt-2 md:4 text-center">  
        <label htmlFor="contact-content" className="block text-gray-300 text-sm mb-2">Cuéntame de esa idea que quieres hacer realidad:</label>        
        <div className="flex shadow rounded bg-white border p-2">
            <textarea 
            id="contact-content"
            name="contact-content"
            className="flex-1 pt-2 px-3 text-gray-400 focus:outline-none focus:shadow-outline">
            </textarea>
            <button className="btn ml-5">Enviar</button> 
        </div>  
    </form>
);

