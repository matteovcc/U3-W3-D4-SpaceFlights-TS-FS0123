import { useEffect, useState } from "react";
import { IntArticles } from "../interfaces/IntArticles";
import {useParams} from "react-router-dom"
import { Badge } from "react-bootstrap";

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

           ( <div className="d-flex  justify-content-center p-3">
            <div>
        <h3>{articles.title}</h3>
        <h5 className="fst-italic">{articles.news_site}</h5>
        <img src={articles.image_url} alt={articles.title} style={{width:400,objectFit:"contain",borderRadius:10}} />
            </div>
            <div className="mt-2">
        <p><strong>Descrizione:</strong> <br />{articles.summary} </p>
        
        <p><strong>Data di pubblicazione:</strong> <br />{articles.published_at}</p>
        <p><strong>Modificato in data:</strong> <br /> {articles.updated_at}</p>
        <Badge bg="warning"><a href={articles.url}>Read more</a></Badge>
            </div>
      </div>
      )
        }
        </>
    )
}

export default ArticlesDetails
