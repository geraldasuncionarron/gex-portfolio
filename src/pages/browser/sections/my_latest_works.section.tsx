import { forwardRef, useEffect, useState } from "react";
import { Container, Fade } from "react-bootstrap";
import { BLACK, WHITE } from "../../../config/colors.config";
import Coin from "../components/coin.browser.component";

function MyLatestWork({}, ref: any) {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = (e: any) => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(ref.current.offsetTop - 100 > e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    
    return(
        <div className="Section" style={{ backgroundColor: WHITE }} id="work-experience" ref={ref}>
            <Fade in={!scrolling}>
                <Container>
                        <h1 className="Title" style={{ color: BLACK }}>My Sample works</h1>
                        <p className="Subtitle" style={{ color: BLACK }}>
                            I got a job that was in accordance with the salary and field of work. The process <br />of submitting an application was quite cosy.
                        </p>
                        <div style={{ marginTop: 100,justifyContent: "space-between", display: "flex" }}>
                            <div className="Card">
                                <h1 className="Title">Gex Token</h1>
                                <h3 className="Subtitle">(GEX)</h3>
                                <Coin />
                            </div>
                            <div className="Card">
                                <h1 className="Title">Gex NFT</h1>
                                <h3 className="Subtitle">(GEX)</h3>
                                <Coin />
                            </div>
                        </div>
                </Container>
            </Fade>
        </div>
    );
}

export default forwardRef(MyLatestWork);