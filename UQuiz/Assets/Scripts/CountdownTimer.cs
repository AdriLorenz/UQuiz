using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

public class CountdownTimer : MonoBehaviour
{
    float currentTime = 0f;
    float startingTime = 10f;
    int valueChanged = 0;
    private AudioSource beep;

    public UnityEvent CountdownOver;

    [SerializeField] Text countdownText;

    

    void Start()
    {
        beep = GetComponent<AudioSource>();
    }


    void Update()
    {
        Countdown();
    }

    void OnEnable() {
        currentTime = startingTime;
    }

    void OnDisable() {
        currentTime = 0f;
    }

    void Countdown () {
        currentTime -= 1 * Time.deltaTime;
        countdownText.text = currentTime.ToString("0");

        if (currentTime <= 0) {
            countdownText.gameObject.SetActive(false);
            CountdownOver.Invoke();
        }

        if ((int)currentTime != valueChanged) {
            valueChanged = (int)currentTime;
            beep.PlayDelayed(0.6f);
        }
    }
}
