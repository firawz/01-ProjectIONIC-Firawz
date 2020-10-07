import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonToolbar,
  IonText,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonLoading,
  IonIcon,
  IonLabel,
  IonChip
} from "@ionic/react";
import {
  arrowBackCircleOutline,
} from "ionicons/icons";

import { toast } from "../toast";
import { registerUser } from "../Config/firebase";
import { useHistory } from "react-router";


const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  
  const register = async () => {
    setLoading(true);

    if (email.trim() === "" || password.trim() === "") {
      return toast("Email or Password required", 4000);
    }

    const result = await registerUser(email, password);

    if (result) {
      toast("Registration success!");
      return true;
      setLoading(false);
    }
    
  };

  function goBack(){
    history.replace('/login')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>REGISTER SCREEN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading
        message="Registration on progress"
        duration={0}
        isOpen={loading}
      />
      <IonContent>
      <IonChip onClick={goBack} class="backToMainPage">
          <IonIcon
            style={{ paddingRight: 7 }}
            icon={arrowBackCircleOutline}
            color="dark-tint"
          />
          <IonLabel>Back to Main page</IonLabel>
        </IonChip>
        <IonCard class="card">
          <IonCol>
            <IonText class="text" style={{ margin: 20 }}>
              Email
            </IonText>
            <IonCard>
              <IonInput
                class="text"
                type="email"
                className="block text-gray-700 text-sm font-bold mb-2"
                placeholder="Email"
                onIonChange={(e: any) => setEmail(e.target.value)}
              />
            </IonCard>
            <IonText class="text" style={{ margin: 20 }}>
              Password
            </IonText>
            <IonCard>
              <IonInput
                class="text"
                type="password"
                placeholder="Password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              />
            </IonCard>
          </IonCol>
                <IonButton class='register' onClick={register}>
                  Register
                </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
