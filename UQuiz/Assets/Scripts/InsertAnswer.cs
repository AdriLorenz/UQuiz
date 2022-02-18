using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using Score;

public class InsertAnswer : MonoBehaviour
{
    public UnityEvent Correct;
    public UnityEvent Incorrect;
    private int index = 0;
    private string objectTag;
    private int collisionCounter = 0;

    void OnEnable()
    {
        collisionCounter = 0;
        index++;
    }

    void Start() {
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnCollisionStay(Collision collisionInfo)
    {
        objectTag = collisionInfo.gameObject.tag;
        if (objectTag != null && collisionCounter < 1) {
            if (index == 1) {
                if (collisionInfo.gameObject.tag == "correctAnswer" ) {
                    Debug.Log("Correct");

                    ScoreManager.scoreValue += 50;
                    Correct.Invoke();
                } else  {
                    Debug.Log("Wrong");

                    ScoreManager.scoreValue -= 25;
                    Incorrect.Invoke();
                }
            } else if (index == 2) {
                if (collisionInfo.gameObject.tag == "correctAnswer" ) {
                    Debug.Log("Correct");

                    ScoreManager.scoreValue += 50;
                    Correct.Invoke();
                } else  {
                    Debug.Log("Wrong");
                    
                    ScoreManager.scoreValue -= 25;
                    Incorrect.Invoke();
                }
            } else if (index == 3) {
                if (collisionInfo.gameObject.tag == "correctAnswer" ) {
                    Debug.Log("Correct");

                    ScoreManager.scoreValue += 50;
                    Correct.Invoke();
                } else  {
                    Debug.Log("Wrong");

                    ScoreManager.scoreValue -= 25;
                    Incorrect.Invoke();
                }
            }  
            collisionCounter++;
        }
    }
}
