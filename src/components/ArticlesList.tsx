import { useEffect, useState } from "react"
import { Card, Container, Row,Col,Button } from "react-bootstrap"
import {IntArticles} from "../interfaces/IntArticles"
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
            <Card >
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className="fst-italic">
          {article.summary}
        </Card.Text>
        <Button variant="warning">Vedi Dettagli</Button>
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