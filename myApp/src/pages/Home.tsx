import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText} from '@ionic/react';
import React from 'react';
import { Plugins } from '@capacitor/core';
import '../css/Home.css'
import { useHistory } from 'react-router';
const { SplashScreen } = Plugins;
// Hide the splash (you should do this on app launch)
const Home: React.FC = () => {
  const history = useHistory()
  
  SplashScreen.hide();
  
  // Show the splash for two seconds and then auto hide:
  SplashScreen.show({
    showDuration: 2000,
    autoHide: true
  });
  
  const moveToMainPage = () =>{
    history.replace('/MainPage')
  }

  return (
    <IonPage>
      <IonContent class='home'>
        <IonButton onClick={moveToMainPage} class='home'>
        <IonText>Acess Login page</IonText>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
