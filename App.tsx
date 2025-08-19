import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom"; // 👈 aquí sí se importa de react-router-dom
import { home, newspaper, bulb, addCircle, list, settings } from "ionicons/icons";

import Home from "./pages/Home";
import News from "./pages/News";
import Theories from "./pages/Theories";
import ReportSighting from "./pages/ReportSighting";
import SightingsList from "./pages/SightingsList";
import Settings from "./pages/Settings";

const App: React.FC = () => (
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/theories" component={Theories} />
          <Route exact path="/report" component={ReportSighting} />
          <Route exact path="/sightings" component={SightingsList} />
          <Route exact path="/settings" component={Settings} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="news" href="/news">
            <IonIcon icon={newspaper} />
            <IonLabel>Noticias</IonLabel>
          </IonTabButton>

          <IonTabButton tab="theories" href="/theories">
            <IonIcon icon={bulb} />
            <IonLabel>Teorías</IonLabel>
          </IonTabButton>

          <IonTabButton tab="report" href="/report">
            <IonIcon icon={addCircle} />
            <IonLabel>Reportar</IonLabel>
          </IonTabButton>

          <IonTabButton tab="sightings" href="/sightings">
            <IonIcon icon={list} />
            <IonLabel>Avistamientos</IonLabel>
          </IonTabButton>

          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settings} />
            <IonLabel>Ajustes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
