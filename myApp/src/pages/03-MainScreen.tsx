import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonButton,
  IonToolbar,
  IonLoading
} from "@ionic/react";
import { useSelector } from "react-redux";
import {logoutUser} from '../Config/firebase'
import { useHistory } from "react-router";


const MainScreen: React.FC = () => {
  const username = useSelector((state: any) => state.user.email);
  const history = useHistory()
  
  // Ini Gakepake
  const [loading, setLoading] = useState()
  
  
  async function logout(){
    await logoutUser()
    history.replace('/login')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MAIN SCREEN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>{username} heloo people</p>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MainScreen;
