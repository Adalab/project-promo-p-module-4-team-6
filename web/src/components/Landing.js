import '../styles/main.scss';

import MainLanding from './MainLanding';
import Footer from './Footer';

function Landing() {
  return (
    <>
      <div className="align-landing">
        <MainLanding />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
