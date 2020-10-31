import React, {useEffect,useState} from "react";
/* import fetchRepo from "../libs/fetchRepo"; */
//import repos from '../data/repos';
import Repo from './repo';


export default()=>{
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposeCount] = useState([]);
    useEffect(()=>{
        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);
            setReposeCount(myRepos.length);
            myRepos = myRepos.slice(1, 8);
            return setRepos(myRepos); 
        }
        async function fetchRepos(){
            const response = await 
            fetch("https://api.github.com/users/JonathanVargas0111/repos");            
            myRepos = await response.json();    
            setReposeCount(myRepos.length);                        
            sessionStorage.setItem("repos",JSON.stringify(myRepos));
            setRepos(myRepos);
        }
        fetchRepos();
    },[]);
    return(
        <div className="max-w-8xl mt-12 sm:max-w-4xl mx-auto">
        <header className="text-center">
            <h2 className="text-2xl font-bold text-blue-500">Mi trabajo Open source</h2>
            <p className="text-gray-400">Colaboración y construcción  de código</p>
        </header>
        <div className="mt-6">
        <ul className="repos-list">
            {
            repos.map((repo)=>{
                return <Repo repo={repo} key={repo.id}/>
                })
            }
        </ul>
        </div>
        
        <div className="mt-8 text-center">
            <a 
            href="https://github.com/JonathanVargas0111" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
                Ver mas en GitHub ({reposCount});
            </a>
        </div>
    </div>
    );
};