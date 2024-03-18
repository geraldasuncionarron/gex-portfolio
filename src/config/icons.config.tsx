import { faComputer, faMobile, faServer, faDatabase, faEnvelope, faArrowRight, faArrowLeft, faBars, faComment, faPaperPlane, faUser, faBell, faStar, faHome, faUserSecret, faPlus, faGear, faX } from '@fortawesome/free-solid-svg-icons'
import { faReact, faAppStore, faGooglePlay, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function getIconByName (name: string) {
    let icon = faReact;
    switch (name) {
        case "hamburger":
            icon = faBars;
            break;
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
        case "arrow-right":
            icon = faArrowRight;
            break;
        case "arrow-left":
            icon = faArrowLeft;
            break;
        case "comment":
            icon = faComment;
            break;
        case "send":
            icon = faPaperPlane;
            break;
        case "user":
            icon = faUser;
            break;
        case "notification":
            icon = faBell;
            break;
        case "star":
            icon = faStar;
            break;
        case "home":
            icon = faHome;
            break;
        case "agent":
            icon = faUserSecret;
            break;
        case "plus":
            icon = faPlus;
            break;
        case "settings":
            icon = faGear;
            break;
        case "x":
            icon = faX;
            break;
        default:
            break;
    }

    return icon;
}