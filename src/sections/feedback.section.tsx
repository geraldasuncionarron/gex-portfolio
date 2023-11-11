import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Icon from "../components/icon.component";
import { useRef, useState } from "react";

const allCards = [{
    img: "./assets/images/profile.png",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    fullname: "Christian Corales",
    job: "Founding at Lista Ph"
},{
    img: "./assets/images/profile.png",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    fullname: "Christian Corales",
    job: "Founding at Lista Ph"
},{
    img: "./assets/images/profile.png",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    fullname: "Christian Corales",
    job: "Founding at Lista Ph"
}];

function Feedback() {
    const ref = useRef(null);
    const [counter, setCounter] = useState(1);

    const [cards] = useState([...allCards]);
    
    function scrollToIndex(operation: string) {
        if(ref.current) {
            const listNode: any = ref.current;
            console.log("counter", counter);
            let newCounter = counter
            if(operation === "add" && counter < (allCards.length - 1)) {
                newCounter = counter + 1;
             }
            if(operation === "substact" && counter > 1){
                newCounter = counter - 1;
             } 

            if(counter) {
                const imgNode = listNode.querySelectorAll('.Card-container')[newCounter];
                imgNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
                });
            }

            setCounter(newCounter)
        }
      }

    return(
        <div style={{ backgroundColor: "rgb(240, 239, 237)" }}>
            <Container className="Section">
                <h1 className="Title">People talk about me</h1>
                <p className="Subtitle">
                    I got a job that was in accordance with the salary and field of work. The process <br />of submitting an application was quite cosy.
                </p>
                <div className="Card-scroll" ref={ref}>
                    {
                        cards.map((card, i: number) =>  (
                            <div className="Card-container">
                                <Card.Img src={card.img} className="Card-img-profile"/>
                                <Card className="Card" style={{ width: '18rem' }}>    
                                    <Card.Body>
                                        <Card.Text style={{ marginTop: 50}}>{card.description}</Card.Text>
                                        <Card.Title style={{ textAlign: "center", fontSize: 22 }}>{card.fullname}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center", fontSize: 16 }}>{card.job}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div style={{ display: "table", marginLeft: "auto", marginRight: "auto"}}>
                    <div className="Card-button-container">
                        <Button className="Card-button" variant="primary" onClick={() => scrollToIndex("substact")}>
                            <Icon name="arrow-left" size="2x" />
                        </Button>
                        <Button className="Card-button" variant="primary" onClick={() => scrollToIndex("add")}>
                            <Icon name="arrow-right" size="2x" />
                        </Button>
                    </div>
                </div>
            </Container>
        </div>

    );
}

export default Feedback;