import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getIconByName from "../../../../config/icons.config"
import { LIGHT_GRAY } from "../../../../config/colors.config";

function Icon ({ name, color = LIGHT_GRAY, size="3x" }: any) {

    const icon = getIconByName(name);
    
    return (
        <FontAwesomeIcon icon={icon} color={color} size={size} />
    )
}

export default Icon