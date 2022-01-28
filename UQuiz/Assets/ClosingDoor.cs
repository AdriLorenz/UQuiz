using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClosingDoor : MonoBehaviour
{
    public static bool touchingCol = false;

    public GameObject screen;
    public GameObject snapZone;
    public GameObject table;

    public GameObject door;

    public AudioClip doorClosingSound;

    new AudioSource audio;
    private int counter;

    void Start()
    {
        counter = 0;
        audio = door.GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnTriggerEnter(Collider other) {
         if (other.tag == "Player") {
                Debug.Log("funsiona");
                touchingCol = true;

                Destroy (screen);
                Destroy (snapZone);
                Destroy (table);

                if (counter != 1) {
                    audio.PlayOneShot(doorClosingSound, 0.7f);
                    counter++;
                }
         }
     }
}
