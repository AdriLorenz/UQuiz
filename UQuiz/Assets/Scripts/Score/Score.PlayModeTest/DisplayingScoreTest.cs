using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEngine.UI;
using Score;

public class DisplayingScoreTest
{
    [UnityTest]
    public IEnumerator ShowText_WhenAnswerIsSelected_Correct()
    {
        // Arrange
        GameObject screenScore = new GameObject();
        var scoreText = screenScore.AddComponent<Text>();
        var scoreManager = screenScore.AddComponent<ScoreManager>();
        string newText = "funciona";
        string expectedTest = "funciona";

        // Act
        scoreText.text = newText;
        
        // Assert
        Assert.AreEqual(expectedTest, scoreText.text);
        yield return null;
    }

    [UnityTest]
    public IEnumerator ShowText_WhenAnswerIsSelected_Incorrect()
    {
        // Arrange
        GameObject screenScore = new GameObject();
        var scoreText = screenScore.AddComponent<Text>();
        var scoreManager = screenScore.AddComponent<ScoreManager>();
        string newText = "funciona";
        string expectedTest = "No funciona";

        // Act
        scoreText.text = newText;
        
        // Assert
        Assert.AreEqual(expectedTest, scoreText.text);
        yield return null;
    }
}
