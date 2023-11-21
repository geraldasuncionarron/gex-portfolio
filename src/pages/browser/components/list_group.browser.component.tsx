import { ListGroup } from "react-bootstrap";
import IconList from "./icon_list.browser.component";
import { BLACK } from "../../../config/colors.config";

function List ({ data }: any) {
    return(
        <ListGroup as="ol">
            {
                data.map(({ iconName, iconColor, iconBackgroundColor, title, description, subdescription }: any) => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start mt-4"
                        style={{
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                        }}
                    >
                        <IconList props={{ name: iconName }} style={{
                            color: iconColor,
                            backgroundColor: iconBackgroundColor
                        } }/>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{title}</div>
                            <span style={{ color: BLACK }}>{description}</span><br/>
                            <span style={{ color: BLACK }}>{subdescription}</span>
                        </div>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default List;