import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComputer, faMobile, faServer, faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faReact, faAppStore, faGooglePlay, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Icon ({ name, color = "#212529" }: any) {

    let icon = faReact;
    switch (name) {
        case "email":
            icon = faEnvelope;
            break;
        case "github":
            icon = faGithub;
            break;
        case "instagram":
            icon = faInstagram;
            break;
        case "linkedin":
            icon = faLinkedin;
            break;
        case "googleplay":
            icon = faGooglePlay;
            break;
        case "appstore":
            icon = faAppStore;
            break;
        case "react":
            icon = faReact;
            break;
        case "computer":
            icon = faComputer;
            break;
        case "mobile":
            icon = faMobile;
            break;
        case "server":
            icon = faServer;
            break;
        case "database":
            icon = faDatabase;
            break;
        default:
            break;
    }
    
    return (
        <FontAwesomeIcon icon={icon} color={color} size="3x" />
    )
}

export default Icon