import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getIconByName from "../config/icons.config"

function Icon ({ name, color = "#212529", size="3x" }: any) {

    const icon = getIconByName(name);
    
    return (
        <FontAwesomeIcon icon={icon} color={color} size={size} />
    )
}

export default Icon