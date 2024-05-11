import React from 'react'
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const Contact = () => {

    const person = {
        name: 'John Doe',
        address: '123 Main St, City, Country',
        whatsapp: '+1234567890',
        instagram: 'https://www.instagram.com/johndoe/',
        youtube: 'https://www.youtube.com/channel/UC1234567890',
        linkedin: 'https://www.linkedin.com/in/johndoe/',
    };

    return (
        <div>
            <Container fluid className="project-section">
                <Particle />
                 
            </Container>
        </div>
    )
}

export default Contact