import { useEffect, useState } from "react";
import { IntArticles } from "../interfaces/IntArticles";
import {useParams} from "react-router-dom"

const ArticlesDetails = () =>{
    const params = useParams();
    const [articles,setArticles] = useState<IntArticles[]>([])

    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/:id` + params.article_id)
            if(response.ok){
                const data = await response.json()
                setArticles(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetails();
    })
    
    return(
        <div></div>
    )
}

export default ArticlesDetails