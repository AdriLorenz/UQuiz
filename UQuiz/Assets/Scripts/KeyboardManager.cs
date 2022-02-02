using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class KeyboardManager : MonoBehaviour
{
    string word = null;
    int wordIndex = 0;
    string alpha;
    public Text myName = null;
    
    public void AlphabetFunction (string alphabet) {
        if (myName.text.Length < 10) {
            wordIndex++;
            word = word + alphabet;
            myName.text = word;
        }
    }

    void Update() {
        myName.text = myName.text;
        Debug.Log(wordIndex);
    }

    public void DeleteEntireWord() {
        myName.text = null;
        word = null;
        wordIndex = 0;
    }

    public void DeleteLastLetter() {
        myName.text = myName.text.Remove(myName.text.Length - 1);
        word = word.Remove(word.Length - 1);
        wordIndex--;
    }
}
