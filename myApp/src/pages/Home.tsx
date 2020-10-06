import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BEST APPS EVER</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
          <IonToolbar>
            <IonButton routerLink='/login'>Login</IonButton>
            <IonButton routerLink='/register'>Register</IonButton>
          </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Home;
