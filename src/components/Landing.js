import { Link } from 'react-router-dom';
import Card from './Card';
import Postit from './Postit';
import '../styles/css/Landing.css';

export default function Landing() {
  return (
    <div>
      {/* <header>
        <Link to="#" className="get-started-header">Get Started!</Link>
      </header> */}
      <main>
        <section className="logo-section">
          <h1>Game Sketch</h1>
          <Link to="#" className="get-started-logo">Get Started!</Link>
        </section>
        <section className="bulletin-board">
          <div className="card-row">
            <Card>
              <h2>What is Game Sketch?</h2>
              <p>
                Game Sketch is your solution to bring your game idea to full fruition.
                Conceptualize everything including story, characters, dialogue, and environments,
                so that you are fully prepared to start implementing your next game idea.
              </p>
            </Card>
            <Postit color="yellow">
              <span className="smiley-icon icon"></span>
            </Postit>
          </div>
          <div className="postit-row">
            <Postit color="yellow">
              <span className="free-icon icon"></span>
              <p><strong>100% FREE</strong><br/>Other competitors cost as much as $60+.<br/> Game Sketch will always be free!</p>
            </Postit>
            <Postit color="green">
              <span className="lightbulb-icon icon"></span>
              <p><strong>Very intuitive</strong><br/>There's no need for tutorials, you'll be able to get started right away.</p>
            </Postit>
            <Postit color="purple">
              <span className="bicep-icon icon"></span>
              <p><strong>It's powerful</strong><br/>Text, flowcharts, and image sketches can all be done in-app.</p>
            </Postit>
          </div>
          <div className="card-row">
            <Postit color="yellow">
              <span className="icon"></span>
            </Postit>
            <Card>
              <h2>Is Game Sketch for me?</h2>
              <p>
                Yes!<br/><br/>
                Use as much or as little as you want. Maybe you want to sketch out ideas for
                dialogue or story by using flow charts. Or, maybe you just want to spitball a
                couple ideas by writing them down in plain text on digital index cards. It's
                all up to you!
              </p>
            </Card>
          </div>
        </section>
        <section className="features-section">
          <h2>Features:</h2>
          <ul>
            <li>Various templates to help you conceptualize characters, environments, dialogue, everything else.</li>
            <li>
              Manage dialogue and story using flow charts, or simply write out ideas in plain text.
            </li>
            <li>
              Quickly sketch icons, portraits, and images with a simple in-app editor. 
              You can upload images once you get something finalized.
            </li>
            <li>Fully customizable themes (dark mode included!).</li>
            <li>Publish and share your sketch with friends!</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2022 Dominic Grondin. All Rights Reserved.</p>
      </footer>
    </div>
  )
}