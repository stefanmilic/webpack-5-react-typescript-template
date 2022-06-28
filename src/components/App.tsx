// No need to import "react" just for JSX in React 17+
import Recipes from './Recipes';

import '../styles/index.scss';

const App = () => {
  return (
    <>
      {/* <section className="hero"></section> */}
      <main>
        <section>
          <h1>Oh Herro, React TypeScript</h1>
          {/* <img src={sword} alt='sword' width='250' />
          <img src={swordSvg} alt='sword' width='250' /> */}
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
