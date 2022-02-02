using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using SimpleJSON;

public class QuestionRequest : MonoBehaviour
{
    Dropdown dropdown;
    int id;
    
    void Start() {
        id = 0;
        dropdown = GetComponent<Dropdown>();
    }

    void Update() {
        string url = "http://localhost:5000/answers/question/" + id.ToString();
        StartCoroutine(GetQuestions(url));
    }

    private IEnumerator GetQuestions(string url)
    {
        id++;
        using (UnityWebRequest request = UnityWebRequest.Get(url))
        {
            request.SetRequestHeader("Content-Type", "application/json");

            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.Log(request.error);
            }
            else
            {
                //Debug.Log(request.downloadHandler.text);

                JSONArray itemsData = (JSONArray) JSON.Parse(request.downloadHandler.text);
                JSONNode themes = itemsData["question"]["question_content"];
                string lastOne = "";
                var list = new ArrayList();
                foreach (JSONNode i in itemsData) {
                    if (!lastOne.Equals(i["question"]["question_content"])) {
                        Debug.Log("The generated item is: \nName: " + i["question"]["question_content"]);
                        lastOne = i["question"]["question_content"];
                    } else {

                    }
                }
            }
        }
    }
}
