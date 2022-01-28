using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class BallController : MonoBehaviour
{
    public GameObject ballPrefab;
    private GameObject ball1;
    private GameObject ball2;
    private GameObject ball3;
    private GameObject ball4;

    public UnityEvent finished;

    void OnEnable() {
        despawn();
        spawn();
        finished.Invoke();
    }
    void Start() {

    }
    public void spawn()
    {
        ball1 = Instantiate(ballPrefab, new Vector3(-31.144f, 12.067f, 44.659f), Quaternion.identity);
        ball1.layer = LayerMask.NameToLayer("Grab");

        ball2 = Instantiate(ballPrefab, new Vector3(-31.668f, 12.067f, 44.659f), Quaternion.identity);
        ball2.layer = LayerMask.NameToLayer("Grab");

        ball3 = Instantiate(ballPrefab, new Vector3(-32.086f, 12.067f, 44.659f), Quaternion.identity);
        ball3.layer = LayerMask.NameToLayer("Grab");

        ball4 = Instantiate(ballPrefab, new Vector3(-32.474f, 12.067f, 44.659f), Quaternion.identity);
        ball4.layer = LayerMask.NameToLayer("Grab");

        Debug.Log("Balls have spawned");
    }

    public void despawn() {
        Destroy (ball1);
        Destroy (ball2);
        Destroy (ball3);
        Destroy (ball4);
        Debug.Log("Balls have despawned");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
