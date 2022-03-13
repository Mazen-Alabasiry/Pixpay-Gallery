import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { HeartFill, ChatSquareDots, CloudDownload } from 'react-bootstrap-icons'
import './Gallery.css'
function Gallery({ data }) {
    return (
        <>
            <Container className='my-3 card-container justify-content-md-between justify-content-center ' >
                {data.hits ? data.hits.map(card =>
                    <Card className='card shadow' key={card.id}>
                        <Card.Img className='img-fluid card-image' variant="top" src={card.largeImageURL} />
                        <Card.Body>
                            <Row className='row'>
                                <Col>
                                    <HeartFill color='red' />
                                    <span>{card.likes}</span>
                                </Col>
                                <Col><ChatSquareDots /> <span>{card.comments}</span></Col>
                                <Col><CloudDownload /> <span>{card.downloads}</span></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ) : ''}
            </Container>


        </>
    )
}

export default Gallery