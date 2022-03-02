using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace KeyboardController {
    public class KeyboardManager : MonoBehaviour
{
    string word = null;
    int wordIndex = 0;
    string alpha;
    public InputField fieldText = null;
    public InputField email = null;
    public InputField password = null;
    

    public void AlphabetFunction (string alphabet) {
        if (fieldText == email) {
            Debug.Log("1");
            if (word == password.text) {
                word = null;
                Debug.Log("2");
                wordIndex++;
                word = word + alphabet;
                email.text = word;
            } else {
                wordIndex++;
                word = word + alphabet;
                email.text = word;
                Debug.Log("3");
            }
                
        } else if (fieldText == password) {
            Debug.Log("4");
            if (word == email.text) {
                word = null;
                Debug.Log("5");
                wordIndex++;
                word = word + alphabet;
                password.text = word; 
            } else {
                wordIndex++;
                word = word + alphabet;
                password.text = word;
                Debug.Log("6");    
            }   
        }
    }

    void Update() {
        if (email.isFocused) {
            fieldText = email;
        } else if (password.isFocused) {
            fieldText = password;
        }
    }

    public void DeleteEntireWord() {
        fieldText.text = null;
        word = null;
        wordIndex = 0;
    }

    public void DeleteLastLetter() {
        try {
            if (fieldText == email) {
                email.text = email.text.Remove(email.text.Length - 1);
                word = word.Remove(word.Length - 1);
                wordIndex--;
            } else if (fieldText == password) {
                password.text = password.text.Remove(password.text.Length - 1);
                word = word.Remove(word.Length - 1);
                wordIndex--;
            } 

        } catch (System.Exception ex) {
            Debug.Log(ex);
        }
    }
}

}

