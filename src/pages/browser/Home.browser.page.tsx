import { useRef } from 'react';
import Footer from './sections/footer.section';
import Welcome from './sections/welcome.section';
import WhatDoIHelp from './sections/what_do_i_help.section';
import WorkExperience from './sections/work_experiense.section';
import MyLatestWork from './sections/my_latest_works.section';

function Home () {
    const refService = useRef(null);
    const refAboutMe = useRef(null);
    const refWorks = useRef(null);
    const refExperiences = useRef(null);
  
    function onNavigate(section: string) {
      switch (section) {
        case "Service":
          (refService.current as any).scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
          });
          break;
        /*
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
        */
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
            <Welcome />
            <WhatDoIHelp ref={refService}/>
            <WorkExperience ref={refExperiences}/>
            <MyLatestWork ref={refWorks}/>
            {/*<Feedback ref={refAboutMe}/>*/}
            <Footer onNavigate={onNavigate}/>
        </>
  
    )
}

export default Home;