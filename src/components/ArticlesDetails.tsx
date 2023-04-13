import { useEffect, useState } from "react";
import { IntArticles } from "../interfaces/IntArticles";
import {useParams} from "react-router-dom"

const ArticlesDetails = () => {
    const params = useParams();
    const [articles,setArticles] = useState<IntArticles>()
    const URL = "https://api.spaceflightnewsapi.net/v4/articles/" 

    const fetchDetails = async () => {
        try {
            const response = await fetch(URL + params.article_id + "/")
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <>
        {articles && 

           ( <div className="mx-auto">
        <h2>{articles.title}</h2>
        <img src={articles.image_url} alt={articles.title} />
        <p>Descrizione: {articles.summary}</p>
        <p>Data di pubblicazione:{articles.published_at}</p>
        <p>Modificato in data: {articles.updated_at}</p>
        <a href={articles.url}>Read more</a>
      </div>)
        }
        </>
    )
}

export default ArticlesDetails
