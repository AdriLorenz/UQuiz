using System.Collections;
using UnityEngine;
<<<<<<< HEAD
=======
using UnityEngine.UI;
>>>>>>> 0677bb891e947b6b86cf9c72d3baac52ea3caec4
using UnityEngine.Networking;
using SimpleJSON;

public class QuestionRequest : MonoBehaviour
{
<<<<<<< HEAD

=======
    Dropdown dropdown;
>>>>>>> 0677bb891e947b6b86cf9c72d3baac52ea3caec4
    int id;
    

    void Start() {
        id = 0;
<<<<<<< HEAD
    }
=======
        dropdown = GetComponent<Dropdown>();
    }

>>>>>>> 0677bb891e947b6b86cf9c72d3baac52ea3caec4
    void Update() {
        string url = "http://localhost:5000/answers/question/" + id.ToString();
        StartCoroutine(GetQuestions(url));
    }

<<<<<<< HEAD
=======


>>>>>>> 0677bb891e947b6b86cf9c72d3baac52ea3caec4
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
