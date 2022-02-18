using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class QuestionWithAnswersModel
{
    public string question_content;
    public int question_id;
    public string correctAnswer;
    public string wrongAnswer1 ;
    public string wrongAnswer2;
    public QuestionWithAnswersModel(string question_content, int id, string correctAnswer, string wrongAnswer1, string wrongAnswer2){
        this.question_content = question_content;
        this.question_id = id;
        this.correctAnswer = correctAnswer;
        this.wrongAnswer1 = wrongAnswer1;
        this.wrongAnswer2 = wrongAnswer2;
    }
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
