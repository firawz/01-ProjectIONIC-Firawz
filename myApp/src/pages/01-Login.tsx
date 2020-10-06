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
  IonCol,
  IonLoading
} from "@ionic/react";

import { loginUser } from "../Config/firebase";
import { toast } from "../toast";
import { useDispatch } from "react-redux";
import { setUserState } from "../redux/action";
import { useHistory } from "react-router";


const Login: React.FC = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const userLogin = async () => {
    setLoading(true)
    const result : any = await loginUser(email, password);
    if (result) {
      dispatch(setUserState(result.user.email))
      history.replace('/dashboard')
      toast("Login Success");
    } else {
      toast("Invalid email or password");
    }
    setLoading(false)
    console.log(`${result ? "Login Success" : "Login Failed"}`);
  };

  return (
    <IonPage style={{display:"flex"}}>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{textAlign:"center"}}>Login SCREEN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Loading..." duration={0} isOpen={loading} />
      <IonContent>
        <IonCard>
          <IonGrid>
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
            <IonButton style={{}} onClick={userLogin}>
              Login
            </IonButton>
            <IonButton routerLink="/register">Register</IonButton>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
