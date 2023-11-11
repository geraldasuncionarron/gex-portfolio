import { Button, Card } from "react-bootstrap";
import Icon from "../components/icon.component";
import { forwardRef, useEffect, useRef, useState } from "react";

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

function Feedback({}, ref: any) {
    const refCards = useRef(null);
    const [counter, setCounter] = useState(0);

    const [cards] = useState([...allCards]);

    useEffect(() => {
        scrollToIndex("add");
    }, [])
    
    function scrollToIndex(operation: string) {
        if(refCards.current) {
            const listNode: any = refCards.current;
            console.log("counter", operation, counter, allCards.length);
            let newCounter = counter
            if(operation === "add" && counter < (allCards.length - 1)) {
                newCounter = counter === -1 ? 1 : counter + 1;
             }
            if(operation === "substact" && counter >= 0){
                newCounter = counter - 1;
             } 

             console.log("newCounter", newCounter);
            if(newCounter > -1) {
                const cardList = listNode.querySelectorAll('.Card-container') as NodeList;
                console.log("list", cardList);
                const cardNode = cardList[newCounter] as HTMLInputElement;
                console.log("card selected", cardList[newCounter]);
                for (let i = 0; i < allCards.length; i++) {
                    const element = cardList[i] as HTMLInputElement
                    element.classList.remove("Card-active")
                }
                
                cardNode.classList.add("Card-active");
                cardNode.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }

            setCounter(newCounter)
        }
      }

    return(
        <div style={{ backgroundColor: "rgb(240, 239, 237)" }} id="about-me" ref={ref}>
            <div className="Section">
                <h1 className="Title">People talk about me</h1>
                <p className="Subtitle">
                    I got a job that was in accordance with the salary and field of work. The process <br />of submitting an application was quite cosy.
                </p>
                    <div className="Card-scroll" ref={refCards}>
                        {
                            cards.map((card, i: number) =>  (
                                <div className="Card-container">
                                    <Card.Img src={card.img} className="Card-img-profile"/>
                                    <Card className="Card">    
                                        <Card.Body style={{ minWidth: 400 }}>
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
            </div>
        </div>

    );
}

export default forwardRef(Feedback);