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
  IonModal,
  IonLoading,
} from "@ionic/react";
import { toast } from "../toast";
import { registerUser } from "../Config/firebase";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setLoading(true);

    if (email.trim() === "" || password.trim() === "") {
      return toast("Email or Password required", 4000);
    }
    // Masukin Try Catch
    const result = await registerUser(email, password);

    if (result) {
      toast("Registration success!");
      // return aja gausah return true
      return true;
    }
    setLoading(false);
  };

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
        <IonGrid>
          <IonRow>
            <IonButton routerLink="/login">Back to login page</IonButton>
          </IonRow>
          <IonCol>
            <IonText>Email</IonText>
            <IonCard>
              <IonInput
                type="email"
                className="block text-gray-700 text-sm font-bold mb-2"
                placeholder="Email"
                onIonChange={(e: any) => setEmail(e.target.value)}
              />
            </IonCard>
            <IonText>Password</IonText>
            <IonCard>
              <IonInput
                type="password"
                placeholder="Password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              />
            </IonCard>
          </IonCol>
          <IonButton onClick={register}>Register</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
