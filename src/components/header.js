import React from "react";
import illustration from "../img/undraw_developer_activity_bv83.svg";
import Form from "../components/contact.form";



export default () =>(
    <header className="bg-purple-900">
        <div className="container mx-auto p-4  max-w-8xl lg:max-w-4xl">
            <div className="justify-center items-center grid sm:grid-cols-2">
                <div className="flex-1">
                    <h1 className="font-bol text-blue-600 text-4xl sm:text-5xl">¡HOLA! Soy Jonathan Vargas</h1>
                    <p className="text-lg font-light text-gray-300">Creo aplicaciones Web como full stack developer</p>
                </div>
                <div>
                    <img src={illustration} alt="Code thinking" style={{height:"300px"}}></img>
                </div>
            </div>   
            <div>
                <Form/>
            </div>         
        </div>
        
    </header>
);   
