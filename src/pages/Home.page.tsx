import { useRef } from 'react';

import Main from '../components/main.component';
import NavbarHeader from '../components/navbar.component';
import Feedback from '../sections/feedback.section';
import Footer from '../sections/footer.section';
import MyLatestWork from '../sections/my_latest_works.section';
import Welcome from '../sections/welcome.section';
import WhatDoIHelp from '../sections/what_do_i_help.section';
import WorkExperience from '../sections/work_experiense.section';

function Home () {
    const refService = useRef(null);
    const refAboutMe = useRef(null);
    const refWorks = useRef(null);
    const refExperiences = useRef(null);
  
    function onNavigate(section: string) {
      console.log("section", section)
      switch (section) {
        case "Service":
          (refService.current as any).scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
          });
          break;
        case "About me":
          (refAboutMe.current as any).scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
          });
          break;
        case "Works":
          (refWorks.current as any).scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
          });
          break;
        case "Experiences":
          (refExperiences.current as any).scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
          });
          break;
        default:
          break;
      }
    }

    return(
        <>
            <Main>
            <NavbarHeader onNavigate={onNavigate}/>
            <Welcome />
            </Main>
            <div className='Profile'>
            <img
                alt="profilo"
                src="./assets/images/profile.png"
                className='Profile-img'
            />
            </div>
            <WhatDoIHelp ref={refService}/>
            <WorkExperience ref={refExperiences}/>
            <MyLatestWork ref={refWorks}/>
            <Feedback ref={refAboutMe}/>
            <Footer onNavigate={onNavigate}/>
        </>
  
    )
}

export default Home;