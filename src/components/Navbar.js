import React, { useState } from 'react'
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
function NavBar({ fetchData }) {
    const [searchQuery, setSearchQuery] = useState('')

    const handelSearch = (e) => {
        let value = e.target.value
        setSearchQuery(value)
    }
    const getSearch = () => {
        fetchData(searchQuery)
    }
    return (
        <>
            <Navbar bg="primary" className='text-light' expand="lg">
                <Container fluid className='justify-content-between'>
                    <Navbar.Brand href="#" className='text-light fw-bold fs-3 fst-italic'>Pixpay Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>

                        <Form className="d-flex my-sm-3 my-md-0 ">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handelSearch}
                            />
                            <Button variant="outline-light " onClick={getSearch}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar