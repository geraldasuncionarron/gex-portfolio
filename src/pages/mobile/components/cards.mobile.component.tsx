import { useRef, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import Icon from "../../browser/components/icon.browser.component";
import { WorkExperience } from "../../../config/data.config";
import { BLACK } from "../../../config/colors.config";

function Cards () {
    const [cards] = useState([...WorkExperience]);
		const [showModal, setShowModal] = useState(false);
		const [description, setDescription] = useState("");
		function onOpenModal (description: string) {
			setDescription(description)
			setShowModal(true)
		}
  
    return (
    <>
        <div className="Card-scroll">
                {
                    cards.map(({ title, job, description, icons}, i: number) =>  (
                        <Container>
                            <Card>   
                                <Card.Body style={{ minWidth: 300 }}>
                                    <Card.Title style={{ textAlign: "center", fontSize: 22 }}>{title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center", fontSize: 16 }}>{job}</Card.Subtitle>
                                    <Card.Text style={{ marginTop: 50, color: BLACK }}>{description.substring(0, 100)}</Card.Text>
																		{description.length > 100 ? <p style={{ color: "blue" }} onClick={() => onOpenModal(description)} >Show more</p> : null}
                                    <div style={{ display: "flex" }}>
                                        {icons?.linkedin ? <a href={icons?.linkedin} style={{ marginRight: 10 }}><Icon name="linkedin" size="2x" /></a> : null}
                                        {icons?.playstore ? <a href={icons?.playstore} style={{ marginRight: 10 }}><Icon name="googleplay" size="2x"  /></a> : null}
                                        {icons?.appstore ? <a href={icons?.appstore}><Icon name="appstore"  size="2x" /></a> : null}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Container>
                    ))
                }
        </div>
				<Modal centered show={showModal} onHide={() => setShowModal(false)}>
					<Modal.Header closeButton>
					</Modal.Header>
					<Modal.Body style={{ maxHeight: 400, overflowY: "scroll" }}>{description}</Modal.Body>
				</Modal>
    </>
    )
}

export default Cards