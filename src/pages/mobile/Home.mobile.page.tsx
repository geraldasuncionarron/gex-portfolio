import { useRef } from 'react';
import Parallax from './components/parallax.mobile.component';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../browser/components/icon.browser.component';
import Footer from '../../sections/footer.section';
import What_do_i_helpMobileSection from './sections/what_do_i_help.mobile.section';
import Welcome from './sections/welcome.mobile.section';

function Home () {
    return(
    <>
      <Welcome />
      <What_do_i_helpMobileSection />
      <Footer dark />
      </>
    )
}

export default Home;