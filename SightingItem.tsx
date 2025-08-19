import { IonCard, IonCardContent, IonImg, IonLabel, IonNote } from "@ionic/react";
import type { Sighting } from "../types";

export default function SightingMiniCard({ s }: { s: Sighting }) {
  return (
    <IonCard className="card-blur mini-card">
      <div className="mini-card-container">
        {s.photo && (
          <IonImg src={s.photo} className="mini-card-img" />
        )}
        <IonCardContent className="mini-card-content">
          <IonLabel>
            <h3>{s.lugar}</h3>
            <p>{s.descripcion}</p>
            <IonNote>Tipo: {s.tipoNave} · Hostil: {s.esHostil ? "Sí" : "No"}</IonNote>
            <br />
            <IonNote>Reportado por {s.nombre}</IonNote>
          </IonLabel>
        </IonCardContent>
      </div>
    </IonCard>
  );
}
