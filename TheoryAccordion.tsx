import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonAvatar,
  IonList,
  IonBadge,
  IonChip,
  IonIcon,
  IonProgressBar,
  IonSearchbar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonRippleEffect,
} from "@ionic/react"
import { thumbsUp, thumbsDown, chatbubble, share, eye, flame, star, time, trendingUp } from "ionicons/icons"

export default function TheoryAccordion() {
  const items = [
    {
      h: "Encubrimiento Global",
      t: "Gobiernos coordinan desinformación para ocultar pactos extraterrestres que datan desde 1947.",
      img: "https://tse1.mm.bing.net/th/id/OIP.oesRg1DyuoQ2ezTgc2ZfHgHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Gobierno",
      trending: true,
      views: 15420,
      likes: 892,
      dislikes: 156,
      credibility: 78,
      lastUpdate: "2 horas",
      comments: [
        {
          user: "Carlos",
          text: "Esto tiene sentido, he leído casos similares en documentos desclasificados.",
          time: "3h",
          likes: 24,
          verified: true,
        },
        {
          user: "Lucía",
          text: "Podría ser una estrategia militar encubierta. Los patrones son muy claros.",
          time: "5h",
          likes: 18,
          verified: false,
        },
        {
          user: "Dr. Martinez",
          text: "Como investigador, puedo confirmar que hay inconsistencias en los reportes oficiales.",
          time: "1d",
          likes: 67,
          verified: true,
        },
        {
          user: "Ana_Researcher",
          text: "He encontrado conexiones con el Proyecto Blue Book.",
          time: "2d",
          likes: 43,
          verified: true,
        },
      ],
    },
    {
      h: "Programa de Híbridos",
      t: "Programa secreto de hibridación extraterrestre-humana para infiltración social y evolución controlada.",
      img: "https://tse4.mm.bing.net/th/id/OIP.eoyqDQHU7mHnr4QUkPpjiAHaEZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Biología",
      trending: true,
      views: 23100,
      likes: 1205,
      dislikes: 289,
      credibility: 65,
      lastUpdate: "6 horas",
      comments: [
        {
          user: "Ana",
          text: "Suena a película, pero hay testimonios muy fuertes de abducidos.",
          time: "1h",
          likes: 31,
          verified: false,
        },
        {
          user: "Miguel",
          text: "Yo no lo creo completamente, pero da miedo pensarlo seriamente.",
          time: "4h",
          likes: 12,
          verified: false,
        },
        {
          user: "Prof_Genetics",
          text: "Desde el punto de vista genético, sería técnicamente posible.",
          time: "8h",
          likes: 89,
          verified: true,
        },
        {
          user: "TestigoX",
          text: "Conozco personas que han pasado por experiencias similares.",
          time: "12h",
          likes: 56,
          verified: false,
        },
        {
          user: "BiologaMarina",
          text: "Los patrones de ADN que he analizado son... inquietantes.",
          time: "1d",
          likes: 134,
          verified: true,
        },
      ],
    },
    {
      h: "Minado Lunar",
      t: "La Luna es un puesto de reabastecimiento y minería de Helio-3 para civilizaciones avanzadas.",
      img: "https://tse1.mm.bing.net/th/id/OIP.nGhWy7yXmMEzoA9pbJvxIAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Espacio",
      trending: false,
      views: 8750,
      likes: 445,
      dislikes: 78,
      credibility: 82,
      lastUpdate: "1 día",
      comments: [
        {
          user: "Sofía",
          text: "Me recuerda a teorías de minería espacial que ya están siendo desarrolladas.",
          time: "2h",
          likes: 28,
          verified: false,
        },
        {
          user: "David",
          text: "¿Y si los cráteres son en realidad bases de extracción?",
          time: "6h",
          likes: 19,
          verified: false,
        },
        {
          user: "AstroFísico_NASA",
          text: "El Helio-3 es realmente valioso para la fusión nuclear.",
          time: "1d",
          likes: 156,
          verified: true,
        },
      ],
    },
    {
      h: "Experimento Filadelfia 2.0",
      t: "Continuación secreta del experimento de invisibilidad naval con tecnología cuántica moderna.",
      img: "https://pm1.narvii.com/6351/34ca8ebb0f5084715c5b611e35d9145ced1b62e1_hq.jpg",
      category: "Militar",
      trending: true,
      views: 19800,
      likes: 756,
      dislikes: 134,
      credibility: 71,
      lastUpdate: "4 horas",
      comments: [
        {
          user: "NavalHistorian",
          text: "Los registros oficiales tienen demasiadas lagunas temporales.",
          time: "1h",
          likes: 45,
          verified: true,
        },
        {
          user: "QuantumPhysics",
          text: "La tecnología cuántica actual podría hacer esto posible.",
          time: "3h",
          likes: 67,
          verified: true,
        },
        {
          user: "ExMilitar_US",
          text: "He visto cosas que no puedo explicar en mis años de servicio.",
          time: "8h",
          likes: 89,
          verified: true,
        },
        {
          user: "Investigador_2024",
          text: "Las anomalías electromagnéticas siguen ocurriendo.",
          time: "12h",
          likes: 34,
          verified: false,
        },
      ],
    },
    {
      h: "Portal del Triángulo de las Bermudas",
      t: "Punto de entrada dimensional utilizado para transporte intergaláctico y experimentos temporales.",
      img: "https://tse4.mm.bing.net/th/id/OIP.-oux5-Re6Efrt0mvOVKTMwHaEI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Dimensional",
      trending: false,
      views: 12300,
      likes: 567,
      dislikes: 98,
      credibility: 59,
      lastUpdate: "8 horas",
      comments: [
        {
          user: "PilotoComercial",
          text: "He volado sobre esa zona y los instrumentos se vuelven locos.",
          time: "2h",
          likes: 78,
          verified: true,
        },
        {
          user: "MarineBiologist",
          text: "La vida marina en esa área tiene comportamientos anómalos.",
          time: "5h",
          likes: 52,
          verified: true,
        },
        {
          user: "TimeResearcher",
          text: "Las distorsiones temporales son medibles con el equipo adecuado.",
          time: "1d",
          likes: 123,
          verified: true,
        },
      ],
    },
    {
      h: "Pirámides de Giza: Generadores de Energía",
      t: "Las pirámides fueron construidas como generadores de energía libre por una civilización tecnológicamente avanzada.",
      img: "https://pixelmas.com/wp-content/uploads/2023/08/alien-pyramid.webp",
      category: "Arqueología",
      trending: true,
      views: 31500,
      likes: 1834,
      dislikes: 267,
      credibility: 85,
      lastUpdate: "30 min",
      comments: [
        {
          user: "Arqueólogo_Cairo",
          text: "Las mediciones electromagnéticas son consistentes con esta teoría.",
          time: "1h",
          likes: 156,
          verified: true,
        },
        {
          user: "IngenieroCivil",
          text: "La precisión de construcción requiere tecnología que no existía oficialmente.",
          time: "2h",
          likes: 134,
          verified: true,
        },
        {
          user: "EgyptologyExpert",
          text: "Los jeroglíficos muestran tecnología que no entendemos completamente.",
          time: "4h",
          likes: 198,
          verified: true,
        },
        {
          user: "PhysicsProf",
          text: "Los cristales de cuarzo en la estructura podrían generar piezoelectricidad.",
          time: "6h",
          likes: 267,
          verified: true,
        },
        {
          user: "AncientTech",
          text: "He encontrado evidencia de maquinaria avanzada en los textos.",
          time: "12h",
          likes: 89,
          verified: false,
        },
      ],
    },
  ]

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
        minHeight: "100vh",
        padding: "20px",
        animation: "backgroundShift 10s ease-in-out infinite alternate",
      }}
    >
      <IonHeader style={{ marginBottom: "20px" }}>






      </IonHeader>

      <IonAccordionGroup style={{ borderRadius: "15px", overflow: "hidden" }}>
        {items.map((x, i) => (
          <IonAccordion
            key={i}
            value={`a${i}`}
            style={{
              marginBottom: "15px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(108,117,125,0.3)",
              overflow: "hidden",
              animation: `slideInUp 0.6s ease-out ${i * 0.1}s both`,
            }}
          >
            <IonItem slot="header" style={{ "--background": "transparent" }}>
              <IonLabel>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#212529", fontWeight: "bold" }}>{x.h}</span>
                  {x.trending && (
                    <IonBadge color="medium" style={{ animation: "bounce 2s infinite" }}>
                      <IonIcon icon={flame} style={{ marginRight: "4px" }} />
                      Trending
                    </IonBadge>
                  )}
                  <IonChip color="dark" style={{ fontSize: "0.8em" }}>
                    {x.category}
                  </IonChip>
                </div>
                <div style={{ display: "flex", gap: "15px", marginTop: "5px", fontSize: "0.8em", color: "#6c757d" }}>
                  <span>
                    <IonIcon icon={eye} /> {x.views.toLocaleString()}
                  </span>
                  <span>
                    <IonIcon icon={thumbsUp} /> {x.likes}
                  </span>
                  <span>
                    <IonIcon icon={chatbubble} /> {x.comments.length}
                  </span>
                  <span>
                    <IonIcon icon={time} /> {x.lastUpdate}
                  </span>
                </div>
              </IonLabel>
            </IonItem>

            <div className="ion-padding" slot="content" style={{ background: "rgba(248,249,250,0.8)" }}>
              <IonCard style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)" }}>
                <IonImg
                  src={x.img}
                  style={{
                    maxHeight: "250px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <IonCardHeader>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <IonCardTitle style={{ color: "#212529" }}>{x.h}</IonCardTitle>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <IonText style={{ fontSize: "0.8em", color: "#6c757d" }}>Credibilidad: {x.credibility}%</IonText>
                      <IonProgressBar
                        value={x.credibility / 100}
                        style={{
                          width: "60px",
                          height: "6px",
                          "--progress-background":
                            x.credibility > 70 ? "#495057" : x.credibility > 50 ? "#6c757d" : "#adb5bd",
                        }}
                      />
                    </div>
                  </div>
                </IonCardHeader>
                <IonCardContent style={{ color: "#495057" }}>
                  {x.t}

                  <div style={{ display: "flex", gap: "10px", marginTop: "15px", justifyContent: "center" }}>
                    <IonButton
                      fill="outline"
                      size="small"
                      color="dark"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <IonIcon icon={thumbsUp} slot="start" />
                      {x.likes}
                      <IonRippleEffect />
                    </IonButton>
                    <IonButton
                      fill="outline"
                      size="small"
                      color="medium"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <IonIcon icon={thumbsDown} slot="start" />
                      {x.dislikes}
                      <IonRippleEffect />
                    </IonButton>
                    <IonButton
                      fill="outline"
                      size="small"
                      color="dark"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <IonIcon icon={share} slot="start" />
                      Compartir
                      <IonRippleEffect />
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>

              <IonList style={{ background: "transparent", marginTop: "20px" }}>
                <h3 style={{ color: "#212529", display: "flex", alignItems: "center", gap: "10px" }}>
                  <IonIcon icon={chatbubble} />
                  Comentarios de la Comunidad ({x.comments.length})
                </h3>
                {x.comments.map((c, idx) => (
                  <IonItem
                    key={idx}
                    style={{
                      "--background": "rgba(248,249,250,0.8)",
                      marginBottom: "10px",
                      borderRadius: "10px",
                      border: "1px solid rgba(108,117,125,0.2)",
                    }}
                  >
                    <IonAvatar slot="start" style={{ animation: `pulse 3s infinite ${idx * 0.5}s` }}>
                      <img src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${c.user}`} alt="avatar" />
                    </IonAvatar>
                    <IonLabel>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <h2 style={{ color: "#212529", margin: 0 }}>{c.user}</h2>
                        {c.verified && (
                          <IonBadge color="dark" style={{ fontSize: "0.7em" }}>
                            <IonIcon icon={star} style={{ marginRight: "2px" }} />
                            Verificado
                          </IonBadge>
                        )}
                        <IonText style={{ fontSize: "0.7em", color: "#adb5bd" }}>hace {c.time}</IonText>
                      </div>
                      <p style={{ color: "#495057", margin: "5px 0" }}>{c.text}</p>
                      <div style={{ display: "flex", gap: "15px", fontSize: "0.8em", color: "#6c757d" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <IonIcon icon={thumbsUp} />
                          {c.likes}
                        </span>
                        <span style={{ cursor: "pointer" }}>Responder</span>
                      </div>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>

              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <IonButton
                  expand="block"
                  fill="outline"
                  color="dark"
                  style={{
                    "--border-color": "#495057",
                    "--color": "#495057",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <IonIcon icon={chatbubble} slot="start" />
                  Agregar Comentario
                  <IonRippleEffect />
                </IonButton>
                <IonButton fill="outline" color="medium" style={{ position: "relative", overflow: "hidden" }}>
                  <IonIcon icon={trendingUp} />
                  <IonRippleEffect />
                </IonButton>
              </div>
            </div>
          </IonAccordion>
        ))}
      </IonAccordionGroup>

      <style jsx>{`
        @keyframes backgroundShift {
          0% { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
          50% { background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); }
          100% { background: linear-gradient(135deg, #dee2e6 0%, #ced4da 100%); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
