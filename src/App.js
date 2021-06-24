import logo from "./logo.svg";
import "./app.css";

function App() {
  return (
    <div className="site-wrapper">
      <nav className="nav-bar">
        <div className="logo">SlowPony.io</div>
        <div className="burger-button">Burger Button</div>
      </nav>
      <div className="content-wrapper">
        <div className="myname-block">
          <div className="myname-images">
            <img src={"./imageplace1.png"} />
          </div>
          <div className="myname-text">
            <span className="mn-text-1">My name is</span>
            <span className="mn-text-2">Christian </span>
            <span className="mn-text-3"> Moore</span>
            <br /> <span className="mn-text-4">and I am a Florida-based freelance graphic designer who enjoys making eye-catching, energetic material for web, print, apps, and video games.</span>
          </div>
        </div>
        <div className="headshot-block">
          <div className="headshot-text">
            <span className="hs-text-1">Sorry,</span> <span className="hs-text-2">this was the</span> <span className="hs-text-3">best</span> <span className="hs-text-4">headshot I could find</span>
          </div>
          <div className="headshot-image">
            <img src={"./kawaii.png"} />
          </div>
        </div>
        <div className="print-block">
          <div className="print-icon">
            <h2>Print</h2>
            <img src={"./printicon.png"} />
          </div>
          <div className="print-content">
            <div className="print-carousel"></div>
          </div>
        </div>
        <div className="after-print"></div>
        <div className="ux-block">
          <div className="ux-icon"></div>
          <div className="ux-content"></div>
        </div>
        <div className="after-ux"></div>
        <div className="logos">
          <div className="logos-icon"></div>
          <div className="logos-content"></div>
        </div>
        <div className="after-logos"></div>
      </div>
    </div>
  );
}

export default App;
