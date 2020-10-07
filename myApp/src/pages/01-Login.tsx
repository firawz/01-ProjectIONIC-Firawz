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
  IonLoading,
  IonChip,
  IonIcon,
  IonLabel,
  IonRow,
} from "@ionic/react";
import {
  arrowBackCircleOutline,
} from "ionicons/icons";

import { loginUser } from "../Config/firebase";
import { toast } from "../toast";
import { useDispatch } from "react-redux";
import { setUserState } from "../redux/action";
import { useHistory } from "react-router";
import "../css/login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = async () => {
    setLoading(true);
    const result: any = await loginUser(email, password);
    if (result) {
      dispatch(setUserState(result.user.email));
      history.replace("/dashboard");
      toast("Login Success");
    } else {
      toast("Invalid email or password");
    }
    setLoading(false);
    console.log(`${result ? "Login Success" : "Login Failed"}`);
  };

  function goBack() {
    history.replace("/mainpage");
  }

  return (
    <IonPage style={{ display: "flex" }}>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textAlign: "center" }}>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Loading..." duration={0} isOpen={loading} />
      <IonContent class="background">
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
          <IonGrid fixed={true}>
            <IonRow>
              <IonCol>
                <IonButton class="login" onClick={userLogin}>
                  Login
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton class="register" routerLink="/register">
                  Register
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
