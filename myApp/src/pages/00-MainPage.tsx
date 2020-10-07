import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonChip,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
import React from "react";
import "../css/Mainpage.css";

const Mainpage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>Welcome to our apps</IonToolbar>
      </IonHeader>
      <IonContent class="background">
        <IonButton class="mainPageText">Please login or register</IonButton>
        <IonButton class="btn btn1" fill="outline" routerLink="/register">
          Register
        </IonButton>
        <IonButton class="btn btn2" fill="outline" routerLink="/login">
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Mainpage;
