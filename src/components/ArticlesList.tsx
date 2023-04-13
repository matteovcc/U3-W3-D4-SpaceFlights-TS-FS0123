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
            <Container className="mt-4">
                <Row className="g-2">
        {articles && articles.map((article) => (
                    <Col md={4} key={
                        article.id
                    } className="mb-2 text-center">
           
            <Card className="rounded shadow-lg h-100" style={{backgroundColor:"lightgray"}}>
      <Card.Img variant="top" src={article.image_url} style={{height:200}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className="fst-italic">
          {article.summary}
        </Card.Text>
        <div className="mt-auto">
        <Link to={"/details/" + article.id} >
        <Button variant="warning" className="text-white fw-semibold">Vedi Dettagli</Button>
        </Link>
        </div>
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