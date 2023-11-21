import Footer from '../browser/sections/footer.section';
import What_do_i_helpMobileSection from './sections/what_do_i_help.mobile.section';
import Welcome from './sections/welcome.mobile.section';
import Work_experienseMobileSection from './sections/work_experiense.mobile.section';

function Home () {
    return(
    <>
      <Welcome />
      <What_do_i_helpMobileSection />
      <Work_experienseMobileSection />
      <Footer dark />
      </>
    )
}

export default Home;