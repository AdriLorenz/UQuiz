using WebSocketSharp;
using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using SimpleJSON;

public class WebSocketConnection : MonoBehaviour
{
    public Text name1;
    public Text name2;
    public Text name3;
    public Text name4;
    public Text name5;
    public Text name1_points;
    public Text name2_points;
    public Text name3_points;
    public Text name4_points;
    public Text name5_points;
    public Text current_Users;
    Text[] nameArray;
    Text[] namePointsArray;

    public JSONNode response;

    WebSocket ws;
    int index;
    bool allowUpdate;
    void Start()
    {
        allowUpdate = true;
        nameArray = new Text[] {name1, name2, name3, name4, name5};
        namePointsArray = new Text[] {name1_points, name2_points, name3_points, name4_points, name5_points};

        index = 0;
        response = null;
        StartCoroutine(WebsocketData());
    }

    
    void Update()
    {   
        if (allowUpdate) {
            StartCoroutine(GetCurrentUsers());
            Debug.Log("reached here");
            allowUpdate = false;
        }
    }

    IEnumerator GetCurrentUsers() {
        yield return new WaitForSeconds(1);
        try {
            current_Users.text = response["numberOfClients"];
        } catch (System.Exception ex) {
            Debug.Log(ex);
        }
    }

    IEnumerator GetRanking() {
        yield return new WaitForSeconds(1);

        Debug.Log(nameArray[0]);

        for (int i=0; i < nameArray.Length; i++) {
            nameArray[i].text = response["ratings"][index]["user"]["user_name"];
            namePointsArray[i].text = response["ratings"][index]["user_score"];
            index++;
        }

        yield return null;
    }
    public IEnumerator WebsocketData() {
        try {
            ws = new WebSocket("ws://localhost:8080");
            ws.Connect();
            ws.OnMessage += (sender, e) => {
                // Debug.Log("Message recieved from " + ((WebSocket)sender).Url + ", Data : " + e.Data[0].ToString());
                response = JSON.Parse(e.Data);
                allowUpdate = true;
                Debug.Log(response["numberOfClients"]);
            };

            ws.Send("Hello");

            StartCoroutine(GetRanking());

        } catch (System.Exception ex) {
            Debug.Log(ex);
        }

        yield return null;
    }
}
