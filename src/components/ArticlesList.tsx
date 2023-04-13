import { useEffect, useState } from "react"
import { Card, Container, Row,Col,Button } from "react-bootstrap"
import {IntArticles} from "../interfaces/IntArticles"
import { Link } from "react-router-dom"
const ArticleList = () => {

    
    const [articles,setArticles] = useState<IntArticles[]>([])

    const fetchArticles = async () => {
        try {
            const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles")
            if(response.ok){
                const data = await response.json()
                setArticles(data.results)
            }else{
                console.log("error fetching articles")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchArticles()
    },[])


    return(
        <>
            <Container>
                <Row>
        {articles && articles.map((article) => (
                    <Col md={6} key={
                        article.id
                    } className="mb-2 text-center">
            {/* <Card>
                <Card.Body>{article.image_url}</Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.published_at}</Card.Text>
            </Card> */}
            <Card className="d-flex flex-column rounded" style={{minHeight:500}}>
      <Card.Img variant="top" src={article.image_url} style={{height:200}} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className="fst-italic">
          {article.summary}
        </Card.Text>
        <Link to={"/details/" + article.id} >
        <Button variant="warning" className="mt-auto">Vedi Dettagli</Button>
        </Link>
      </Card.Body>
    </Card>
                    </Col>
                ))}
                </Row>
                </Container>
        </>
        )
}

export default ArticleList