import { LIGHT_GRAY } from "../../../../config/colors.config";
import { WorkExperience } from "../../../../config/data.config";
import Icon from "./icon.browser.component";

function VerticalBullet () {
    return(
        <ul className="Vertical-bullet mt-4">
            {
                WorkExperience.map(({ title, job, description, icons }) => {
                    return (
                        <li className="Bullet">
                            <h1 style={{ color: "white" }}>{title} <span style={{ fontSize: 22, color: LIGHT_GRAY}}>{job}</span></h1>
                            <p style={{ fontSize: 19, color: LIGHT_GRAY}}>{description}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "15%" }}>
                                {icons?.linkedin ? <a href={icons?.linkedin}><Icon name="linkedin" /></a> : null}
                                {icons?.playstore ? <a href={icons?.playstore}><Icon name="googleplay" /></a> : null}
                                {icons?.appstore ? <a href={icons?.appstore}><Icon name="appstore" /></a> : null}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default VerticalBullet;