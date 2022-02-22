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

    static JSONNode response;

    WebSocket ws;
    int index;
    void Start()
    {
        response = null;
        StartCoroutine(WebsocketData());

        StartCoroutine(GetRanking());
    }

    
    void Update()
    {    }

    IEnumerator GetRanking() {
        yield return new WaitForSeconds(1);

        name1_points.text = response[0]["user_score"].ToString();
        name1.text = response[0]["user"]["user_name"];

        name2.text = response[1]["user"]["user_name"];
        name2_points.text = response[1]["user_score"];

        name2.text = response[1]["user"]["user_name"];
        name2_points.text = response[1]["user_score"];

        name3.text = response[2]["user"]["user_name"];
        name3_points.text = response[2]["user_score"];

        name4.text = response[3]["user"]["user_name"];
        name4_points.text = response[3]["user_score"];

        name5.text = response[4]["user"]["user_name"];
        name5_points.text = response[4]["user_score"];

        yield return null;
    }
    public IEnumerator WebsocketData() {
        
        ws = new WebSocket("ws://localhost:8080");
        ws.Connect();
        Debug.Log("asf");
        ws.OnMessage += (sender, e) => {
            // Debug.Log("Message recieved from " + ((WebSocket)sender).Url + ", Data : " + e.Data[0].ToString());
            response = JSON.Parse(e.Data);
            Debug.Log(response[0]["user_score"]);
        };

        ws.Send("Hello");
        yield return null;
    }
}
