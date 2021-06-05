import './App.css';
import { Tutorial, Author } from './tabs';
import BgVideo from './video/vid-bg.mp4';



function App() {

  return (
  <>
  <video autoPlay muted className="bg-vid">
  <source src={BgVideo} type="video/mp4" />
  </video>
    <div className="container">
    <div className="main-content-top">
      <h1>...Spread the JOY!</h1>
      <h2>The Spread operator usage for inline styles in React (with ES6 - ES12)</h2>
      <p className="date">June 5, 2021</p>
    </div>

    <div className="main-content-bottom">
    <h3 className="p-content"><strong>The Spread Syntax - '...' (Yep, 3 dots) comes very handy when it comes to customize our inline styles in React - let's see how:</strong></h3>
    <p>You will need a basic knowledge of the <b><i>Spread Operator</i></b> and <b><i>React</i></b>.
          not familiar with those topics? no problem! here is a cool article about
              <a href="https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab" target="_blank"> The Spread Operator</a> and here is a
            <a href="https://www.taniarascia.com/getting-started-with-react/" target="_blank"> React Tutorial: An Overview and Walkthrough.</a>
        Now that we all caught up, let's continue:
    </p>
    <div className="commands">
     <Tutorial />
    </div>

    <div className="author-note">
    <p>
        <strong>...and that's it folks! </strong>
              <br />
            <strong>💪 Keep on learning and spread the joy..!</strong></p>
          </div>
      </div>
      <div className="author">
       <Author />
      </div>
    </div>
    </>
  );
}

export default App;
