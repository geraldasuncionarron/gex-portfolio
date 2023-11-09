import './App.css';
import Main from './components/main.component';
import NavbarHeader from './components/navbar.component';
import Feedback from './sections/feedback.section';
import Footer from './sections/footer.section';
import MyLatestWork from './sections/my_latest_works.section';
import Welcome from './sections/welcome.section';
import WhatDoIHelp from './sections/what_do_i_help.section';
import WorkExperience from './sections/work_experiense.section';


function App() {
  return (
    <>
      <Main>
        <NavbarHeader />
        <Welcome />
      </Main>
      <div className='Profile'>
      <img
            alt="profilo"
            src="./assets/images/profile.png"
            className='Profile-img'
        />
      </div>
      <WhatDoIHelp />
      <WorkExperience />
      <MyLatestWork />
      <Feedback />
      <Footer />
    </>

  );
}

export default App;
