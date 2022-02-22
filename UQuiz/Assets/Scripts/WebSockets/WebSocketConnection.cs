using WebSocketSharp;
using UnityEngine;

public class WebSocketConnection : MonoBehaviour
{
    WebSocket ws;
    int index;
    void Start()
    {
        ws = new WebSocket("ws://localhost:8080");
        ws.Connect();
        Debug.Log("asf");
        ws.OnMessage += (sender, e) => {
            Debug.Log("Message recieved from " + ((WebSocket)sender).Url + ", Data : " + e.Data);
            JsonUtility.ToJson(e.Data);
        };

        ws.Send("Hello");
    }

    
    void Update()
    {
    }
}
