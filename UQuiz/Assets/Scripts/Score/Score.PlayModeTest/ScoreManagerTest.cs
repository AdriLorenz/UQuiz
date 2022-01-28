using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using Score;
using UnityEngine.UI;

public class ScoreManagerTest
{
    [Test]
    [TestCase(100, 50, 150)]
    [TestCase(0, 50, 50)]
    [TestCase(100, 50, 100)]
    [TestCase(0, 50, 0)]
    public void Sum_WhenAnswerIsCorrect(int actualScore, 
    int scoreAdded, int expectedScore)
    {
        // Arrange
        ScoreManager.scoreValue = 0;

        var scoreGameObject = new GameObject();
        scoreGameObject.AddComponent<ScoreManager>();
        scoreGameObject.AddComponent<Text>();
        
        // Act
        actualScore += ScoreManager.scoreValue;
        int result = scoreAdded + actualScore;
        ScoreManager.scoreValue = scoreAdded + actualScore;

        // Assert
        Assert.That(result, Is.EqualTo(expectedScore));
    }

    
    [Test]
    [TestCase(100, 25, 75)]
    [TestCase(0, 25, 0)]
    [TestCase(100, 25, 25)]
    [TestCase(0, 25, 25)]
    public void Subtract_WhenAnswerIsWrong(int actualScore, 
    int scoreAdded, int expectedScore)
    {
        // Arrange
        ScoreManager.scoreValue = 0;
        var scoreGameObject = new GameObject();
        scoreGameObject.AddComponent<ScoreManager>();
        scoreGameObject.AddComponent<Text>();

        // Act
        actualScore += ScoreManager.scoreValue;
        int operation = actualScore - scoreAdded;
        ScoreManager.scoreValue = actualScore - scoreAdded;
        int result = ScoreManager.ExcludeNegativeScore();

        // Assert
        Assert.That(result, Is.EqualTo(expectedScore));
    }
}
