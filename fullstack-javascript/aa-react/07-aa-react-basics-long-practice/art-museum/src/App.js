import React from "react";
import { Switch, Route } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import harvardArt from './data/harvardArt';


const App = () => {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />

      <Switch>
        <Route exact path="/">
          <h1>Harvard Art Museum</h1>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>

        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>

        <Route>
          <h2>404: Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;