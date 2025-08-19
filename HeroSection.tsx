"use client"

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonRow,
  IonCol,
  IonImg,
  IonBadge,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonAvatar,
} from "@ionic/react"
import {
  eyeOutline,
  peopleOutline,
  documentTextOutline,
  timeOutline,
  trendingUpOutline,
  starOutline,
} from "ionicons/icons"

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="floating-particles"></div>
      </div>

      <IonCard className="hero-card">
        <IonRow>
          <IonCol size="12" sizeMd="6" className="hero-text">
            <IonCardHeader>
              <div className="title-section">
                <IonBadge className="status-badge">ACTIVO</IonBadge>
                <IonCardTitle className="hero-title">Operación: CIELO VIOLETA</IonCardTitle>
              </div>
            </IonCardHeader>
            <IonCardContent>
              <p className="hero-subtitle">
                Rastrea señales, reporta naves y comparte teorías. El universo se está revelando…
              </p>

              <div className="recent-activity">
                <h4 className="activity-title">Actividad Reciente</h4>
                <IonItem className="activity-item" lines="none">
                  <IonAvatar slot="start" className="activity-avatar">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefanstefancik-91227.jpg&fm=jpg" alt="Investigador" />
                  </IonAvatar>
                  <IonLabel>
                    <h3>Dr. Martinez reportó avistamiento</h3>
                    <p>Hace 12 minutos</p>
                  </IonLabel>
                  <IonChip className="activity-chip">
                    <IonIcon icon={starOutline} />
                    <IonLabel>Verificado</IonLabel>
                  </IonChip>
                </IonItem>

                <IonItem className="activity-item" lines="none">
                  <IonAvatar slot="start" className="activity-avatar">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.64HuvrgznzzcEhJdRiZh3wHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Científico" />
                  </IonAvatar>
                  <IonLabel>
                    <h3>Ana_UFO compartió nueva teoría</h3>
                    <p>Hace 1 hora</p>
                  </IonLabel>
                  <IonChip className="trending-chip">
                    <IonIcon icon={trendingUpOutline} />
                    <IonLabel>Trending</IonLabel>
                  </IonChip>
                </IonItem>
              </div>

  
            </IonCardContent>
          </IonCol>

          <IonCol size="12" sizeMd="6" className="hero-image-col">
            <div className="image-container">
              <IonImg
                src="https://estaticos-cdn.prensaiberica.es/clip/2315cec5-d31f-4a57-95f9-12a75cdde899_16-9-discover-aspect-ratio_default_0.jpg"
                className="hero-image"
              />
              <div className="image-overlay">
                <IonChip className="location-chip">
                  <IonIcon icon={timeOutline} />
                  <IonLabel>Último avistamiento: Nevada, USA</IonLabel>
                </IonChip>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonCard>

      <style jsx>{`
        .hero-container {
          position: relative;
          padding: 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 0;
        }

        .floating-particles::before,
        .floating-particles::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: #6c757d;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-particles::before {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-particles::after {
          top: 60%;
          right: 15%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(108, 117, 125, 0.2);
          margin-bottom: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .stats-row {
          text-align: center;
        }

        .stat-item {
          padding: 10px;
        }

        .stat-icon {
          font-size: 24px;
          color: #495057;
          margin-bottom: 8px;
        }

        .stat-number {
          font-size: 24px;
          font-weight: bold;
          color: #212529;
          margin-bottom: 4px;
          animation: pulse 2s ease-in-out infinite;
        }

        .stat-label {
          font-size: 12px;
          color: #6c757d;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(108, 117, 125, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 1;
        }

        .title-section {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .status-badge {
          background: #28a745;
          color: white;
          font-size: 10px;
          padding: 4px 8px;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .hero-title {
          font-size: 28px;
          font-weight: bold;
          color: #212529;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hero-subtitle {
          font-size: 16px;
          color: #495057;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .recent-activity {
          background: rgba(248, 249, 250, 0.8);
          border-radius: 8px;
          padding: 16px;
          margin: 20px 0;
          border: 1px solid rgba(108, 117, 125, 0.2);
        }

        .activity-title {
          font-size: 14px;
          font-weight: bold;
          color: #495057;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .activity-item {
          background: white;
          border-radius: 6px;
          margin-bottom: 8px;
          padding: 8px;
          border: 1px solid rgba(108, 117, 125, 0.1);
          transition: transform 0.2s ease;
        }

        .activity-item:hover {
          transform: translateX(4px);
        }

        .activity-avatar {
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .activity-chip {
          background: #e9ecef;
          color: #495057;
        }

        .trending-chip {
          background: #343a40;
          color: white;
        }

        .hero-buttons {
          margin-top: 24px;
        }

        .primary-btn {
          --background: #495057;
          --background-hover: #343a40;
          --color: white;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .secondary-btn {
          --background: #6c757d;
          --background-hover: #5a6268;
          --color: white;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .tertiary-btn {
          --background: #adb5bd;
          --background-hover: #868e96;
          --color: #212529;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .tertiary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .image-container {
          position: relative;
          height: 100%;
        }

        .hero-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          filter: grayscale(20%);
          transition: all 0.3s ease;
        }

        .hero-image:hover {
          filter: grayscale(0%);
          transform: scale(1.02);
        }

        .image-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
        }

        .location-chip {
          background: rgba(255, 255, 255, 0.9);
          color: #495057;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 24px;
          }
          
          .stats-row {
            gap: 8px;
          }
          
          .stat-number {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}
