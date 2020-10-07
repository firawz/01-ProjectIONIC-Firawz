import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonButton,
  IonToolbar,
  IonChip,
  IonLabel,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonList,
  IonItem,
  IonText,
  IonLoading,
  IonAvatar,
} from "@ionic/react";
import { useSelector } from "react-redux";
import { logoutUser } from "../Config/firebase";
import { useHistory } from "react-router";
import "../css/MainScreen.css";
import { logOutOutline, gameControllerOutline } from "ionicons/icons";
import axios from "axios";

const MainScreen: React.FC = () => {
  const username = useSelector((state: any) => state.user.email);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  async function logout() {
    await logoutUser();
    history.replace("/mainpage");
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "c0503b675bmshf80a13747b833b3p193e49jsncbaee52730db",
        useQueryString: true,
      },
    })
      .then((response) => {
        const data = response.data.results;
        console.log(data, "ini data");
        setGames(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (games.length < 1) {
    return (
      <IonContent>
        <IonButton onClick={() => setLoading(true)}>Show Loading</IonButton>
        <IonLoading
          cssClass="my-custom-class"
          isOpen={loading}
          onDidDismiss={() => setLoading(false)}
          message={"Please wait..."}
          duration={5000}
        />
      </IonContent>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid fixed={true}>
            <IonRow>
              <IonCol>
                <IonTitle style={{ marginTop: 5 }}>
                  WELCOME USER {username}
                </IonTitle>
              </IonCol>
              <IonCol></IonCol>
              <IonCol>
                <IonChip onClick={logout} color="Danger" class="logoutBtn">
                  <IonIcon icon={logOutOutline} color="dark-tint" />
                  <IonLabel>logout</IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {games.map((el: any) => {
            return (
              <IonItem key={el.id}>
                <IonGrid fixed={true}>
                  <IonRow>
                    <IonCol>
                      <IonAvatar style={{marginLeft:100, marginTop:50}}>
                        <img src={el.background_image} />
                      </IonAvatar>
                    </IonCol>
                    <IonCol>
                      <IonLabel style={{ marginTop:50 }}>
                        {el.name}
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {el.genres.map((tag: any) => {
                        return (
                          <IonChip style={{ padding: 8, marginTop:30, marginBottom:30 }}>
                            <IonIcon icon={gameControllerOutline} />
                            <IonLabel>{tag.name}</IonLabel>
                          </IonChip>
                        );
                      })}
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            );
          })}
        </IonList>
        <IonText></IonText>
      </IonContent>
    </IonPage>
  );
};

export default MainScreen;
