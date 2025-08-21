import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Orders = () => {
    const location = useLocation();
    const sort = new URLSearchParams(location.search);

    return (
        <Container>
            <Row>
                <Col>Zamówienia (posortowane {sort.get("sort")})</Col>
            </Row>
        </Container>
    );
}

export { Orders as OrdersPage };
