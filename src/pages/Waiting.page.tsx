function Waiting () {
    return (
        <div className="Parallax-default" style={{ 
            minHeight: window.innerHeight,
            backgroundImage: "url('./assets/images/splash.jpg')"
        }}>
            <svg style={{ paddingTop: 70 }}>
                <image href="../assets/images/gex_logo_plain.svg" className='Logo'/>
            </svg>
        </div>
    );
}

export default Waiting;