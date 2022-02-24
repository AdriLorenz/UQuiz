using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.TestTools;
using SimpleJSON;

public class QuestionRequestTest
{
    string firstQuestion;

    [UnityTest]
    public IEnumerator QuestionRequestSendQuestion_Correct()
    {
        using (UnityWebRequest request = UnityWebRequest.Get("http://localhost:5000/questions/WithAnswers"))
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
                firstQuestion = itemsData[0]["question_content"];

                Debug.Log(firstQuestion.ToString());
            }
        }
        Assert.AreEqual("History", firstQuestion);
    }
    
    [UnityTest]
    public IEnumerator QuestionRequestSendQuestion_Incorrect()
    {
        using (UnityWebRequest request = UnityWebRequest.Get("http://localhost:5000/questions/WithAnswers"))
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
                firstQuestion = itemsData[0]["question_content"];

                Debug.Log(firstQuestion.ToString());
            }
        }
        Assert.AreEqual("History", firstQuestion);
    }
}
