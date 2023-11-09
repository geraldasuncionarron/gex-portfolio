import Icon from "./icon.component"

function IconList ({name, style}: any) {
    return (
        <div className="Icon-container" style={style}>
            <Icon name={name} color={style.color} />
        </div>
    )
}

export default IconList