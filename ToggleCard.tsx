import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonToggle } from "@ionic/react";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"; // Ajusta la ruta


export default function ToggleCard() {
  const [dark, setDark] = useLocalStorage("darkMode", true);

  // Aplicar el modo oscuro inmediatamente al cargar
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <IonCard className="card-blur">
      <IonCardHeader>
        <IonCardTitle>Tema</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Modo oscuro
        <IonToggle
          className="ion-margin-start"
          checked={dark}
          onIonChange={e => setDark(e.detail.checked)}
        />
      </IonCardContent>
    </IonCard>
  );
}
