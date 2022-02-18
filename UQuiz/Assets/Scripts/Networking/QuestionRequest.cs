using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using SimpleJSON;

public class QuestionRequest : MonoBehaviour
{
    public static JSONNode questions;
    public static List<QuestionWithAnswersModel> questionsWithAnswers;
    
    void Start() {
        string url = "http://localhost:5000/questions/WithAnswers";
        questionsWithAnswers = new List<QuestionWithAnswersModel>();
        StartCoroutine(GetQuestions(url));
    }

    void Update() {
        
    }

    private IEnumerator GetQuestions(string url)
    {
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
                QuestionRequest.questions = itemsData;
                // var list = new ArrayList();
                foreach (JSONNode i in itemsData) {
                    // Debug.Log("The generated item is: \nquestion content: " + i["question_content"]);
                    var wrongAnswer1 = "";
                    var wrongAnswer2 = "";
                    var correctAnswer = "";
                    var incorrectAnswerCounter = 0;
                    
                    for (int x=0; x < i["answers"].Count; x++) {
                        
                        if (i["answers"][x]["answer_status"].AsBool == true) {
                            correctAnswer = i["answers"][x]["answer_content"].ToString();
                            // Debug.Log("correct answer: " + i["answers"][x]["answer_content"].ToString());
                        }
                        else{
                            if(incorrectAnswerCounter == 0){
                                wrongAnswer1 = i["answers"][x]["answer_content"].ToString();
                                // Debug.Log("incorrect answer 1: " + i["answers"][x]["answer_content"].ToString());
                                incorrectAnswerCounter++;
                            }
                            else {
                                wrongAnswer2 = i["answers"][x]["answer_content"].ToString();
                                // Debug.Log("incorrect answer 2: " + i["answers"][x]["answer_content"].ToString());
                            } 
                        }

                    }
                    
                    questionsWithAnswers.Add(new QuestionWithAnswersModel (i["question_content"].ToString(),
                    i["question_id"].AsInt, correctAnswer, wrongAnswer1, wrongAnswer2));
                    // Debug.Log(questionsWithAnswers.Count);
                }
            }
        }
    }
}
