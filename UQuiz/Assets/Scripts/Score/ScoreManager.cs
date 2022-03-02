using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Score
{
    public class ScoreManager : MonoBehaviour
    {
        public string text;
        public static int scoreValue = 0;
        private Text score;

        void Start()
        {
            score = GetComponent<Text>();
        }


        void Update()
        {
            score.text = "Score: " + scoreValue;

            ScoreManager.ExcludeNegativeScore();
        }

        public static int ExcludeNegativeScore()
        {
            if (scoreValue < 0)
            {
                scoreValue = 0;
                return scoreValue;
            }
            return scoreValue;
        }
    }
}
