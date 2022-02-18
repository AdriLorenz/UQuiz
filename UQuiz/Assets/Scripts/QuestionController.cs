using System.Collections;
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using SimpleJSON;
using System.Linq;
using UnityEngine.Events;

public class QuestionController : MonoBehaviour
{
    int index = 0;

    List<string[]> allQuestions;
    string[] questions;
    List<Color> colors;
    List<float> positions;
    public Text questionContent;
    public Text correctAnswer;
    public Text wrongAnswer1;
    public Text wrongAnswer2;

    public GameObject blueCube;
    public GameObject greenCube;
    public GameObject redCube;

    private GameObject blue;
    private GameObject green;
    private GameObject red;

    public UnityEvent SnapZone;
    public UnityEvent Exit;

    
    // Start is called before the first frame update
    void Start()
    {   
        
    }

    void OnEnable() {
        index++;

        questionContent.GetComponent<Text>();

        questions = new string[100];

        colors = new List<Color> { Color.blue, Color.green, Color.red };
        correctAnswer.GetComponent<Text>().color = RandomColor();
        wrongAnswer1.GetComponent<Text>().color = RandomColor();
        wrongAnswer2.GetComponent<Text>().color = RandomColor();

        positions = new List<float> { 22.72714f, -11.36378f, -45.45461f };
        correctAnswer.GetComponent<RectTransform>().anchoredPosition = new Vector2(correctAnswer.GetComponent<RectTransform>().anchoredPosition.x, RandomPosition());
        wrongAnswer1.GetComponent<RectTransform>().anchoredPosition = new Vector2(wrongAnswer1.GetComponent<RectTransform>().anchoredPosition.x, RandomPosition());
        wrongAnswer2.GetComponent<RectTransform>().anchoredPosition = new Vector2(wrongAnswer2.GetComponent<RectTransform>().anchoredPosition.x, RandomPosition());

        StartCoroutine(ExecuteQuestion());
    }

    private float RandomPosition() {
        var random = new System.Random();
        int randomIndex = random.Next(positions.Count);
        float randomPosition = positions[randomIndex];

        positions.Remove(randomPosition);

        Debug.Log(randomPosition);

        return randomPosition;
    }

    private Color RandomColor(){
        var random = new System.Random();
        int randomIndex = random.Next(colors.Count);
        Color randomColor = colors[randomIndex];

        colors.Remove(randomColor);

        Debug.Log(randomColor);

        return randomColor;
    }

    // Update is called once per frame
    void Update()
    {
    }
    IEnumerator ExecuteQuestion() {
        
        yield return new WaitForSeconds(0.5f);
        foreach (QuestionWithAnswersModel item in QuestionRequest.questionsWithAnswers) {
            Debug.Log("Index is: " + index);
            index++;
            if (index == 2) {
                Debug.Log(item.question_content);
                questions[0] = item.question_id.ToString();
                questions[1] = item.question_content.ToString();
                questions[2] = item.correctAnswer.ToString();
                questions[3] = item.wrongAnswer1.ToString();
                questions[4] = item.wrongAnswer2.ToString();
                SpawnCubes_1();
                SnapZone.Invoke();
                break;
            } else if (index == 5) {
                questions[0] = item.question_id.ToString();
                questions[1] = item.question_content.ToString();
                questions[2] = item.correctAnswer.ToString();
                questions[3] = item.wrongAnswer1.ToString();
                questions[4] = item.wrongAnswer2.ToString();
                Debug.Log("I reached here");
                SpawnCubes_1();
                SnapZone.Invoke();
                break;
            } else if (index == 9) {
                questions[0] = item.question_id.ToString();
                questions[1] = item.question_content.ToString();
                questions[2] = item.correctAnswer.ToString();
                questions[3] = item.wrongAnswer1.ToString();
                questions[4] = item.wrongAnswer2.ToString();
                SpawnCubes_1();
                SnapZone.Invoke();
                break;
            } else {

            }
        }
        questionContent.text = questions[1].ToString();
        correctAnswer.text = questions[2].ToString();
        wrongAnswer1.text = questions[3].ToString();
        wrongAnswer2.text = questions[4].ToString();
    }

    public void SpawnCubes_1() {
        if (correctAnswer.GetComponent<Text>().color == Color.blue) {
            blue = Instantiate(blueCube, new Vector3 (-2.42f, 9.359f, 61.319f), Quaternion.identity);
            blue.tag = "correctAnswer";

            green = Instantiate(greenCube, new Vector3 (-2.42f, 9.359f, 60.25f), Quaternion.identity);
            red = Instantiate(redCube, new Vector3 (-2.42f, 9.359f, 59.145f), Quaternion.identity);
            green.tag = "wrongAnswer";
            red.tag = "wrongAnswer";
        } else if (correctAnswer.GetComponent<Text>().color == Color.green) {
            green = Instantiate(greenCube, new Vector3 (-2.42f, 9.359f, 60.25f), Quaternion.identity);
            green.tag = "correctAnswer";

            blue = Instantiate(blueCube, new Vector3 (-2.42f, 9.359f, 61.319f), Quaternion.identity);
            red = Instantiate(redCube, new Vector3 (-2.42f, 9.359f, 59.145f), Quaternion.identity);
            blue.tag = "wrongAnswer";
            red.tag = "wrongAnswer";
        } else if (correctAnswer.GetComponent<Text>().color == Color.red) {
            red = Instantiate(redCube, new Vector3 (-2.42f, 9.359f, 59.145f), Quaternion.identity);
            red.tag = "correctAnswer";

            blue = Instantiate(blueCube, new Vector3 (-2.42f, 9.359f, 61.319f), Quaternion.identity);
            green = Instantiate(greenCube, new Vector3 (-2.42f, 9.359f, 60.25f), Quaternion.identity);
            blue.tag = "wrongAnswer";
            green.tag = "wrongAnswer";
        }
    }

    public void RemoveCubes() {
        Destroy(blue);
        Destroy(green);
        Destroy(red);
    }
}
