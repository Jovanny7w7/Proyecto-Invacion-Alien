import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from "@ionic/react";

interface NewsCardProps {
  title: string;
  subtitle: string;
  text: string;
  image?: string; // Imagen opcional para la noticia
}

const NewsCard: React.FC<NewsCardProps> = ({ title, subtitle, text, image }) => {
  return (
    <IonCard className="news-card">
      {image && <IonImg src={image} className="news-card-image" />}
      <IonCardHeader>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{text}</IonCardContent>
    </IonCard>
  );
};

export default NewsCard;
