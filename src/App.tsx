import { Application } from "@playcanvas/react";
import './App.css'
import Scene from "./Scene";

function App() {

  return (
    <>
      <div className="full-bleed">
        <Application className="playcanvas-app" graphicsDeviceOptions={{ antialias: false }}>
          <Scene />
        </Application>
      </div>
      <div className="absolute overlay">
        <div className="grow">
          <header>
            <h1>Pass It Down</h1>
            {/*<a href="https://developer.playcanvas.com/user-manual/react/" target="_blank">
              <img src={playcanvasLogo} className="playcanvas-logo logo" alt="PlayCanvas logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>*/}
          </header>
        </div>
        <div>
           {/*<span className="pill">
            Click Count: {count}
          </span>*/}
          <p>
            {/*Edit <code>src/Scene.tsx</code> and save to test HMR*/}
          </p>
        </div>
        <p className="read-the-docs">
          {/*Click on the PlayCanvas and React logos to learn more*/}
        </p>
      </div>
    </>
  )
}

export default App
