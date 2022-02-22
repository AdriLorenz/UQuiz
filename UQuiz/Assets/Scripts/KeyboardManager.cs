using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class KeyboardManager : MonoBehaviour
{
    string word = null;
    int wordIndex = 0;
    string alpha;
    public InputField fieldText = null;
    public InputField email;
    public InputField password;
    

    public void AlphabetFunction (string alphabet) {

        if (fieldText == email) {
            if (word == password.text) {
                word = null;
                    
                wordIndex++;
                word = word + alphabet;
                email.text = word;
            } else {
                wordIndex++;
                word = word + alphabet;
                email.text = word;
            }
                
        } else if (fieldText == password) {
            if (word == email.text) {
                word = null;

                wordIndex++;
                word = word + alphabet;
                password.text = word; 
            } else {
                wordIndex++;
                word = word + alphabet;
                password.text = word;       
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
        if (fieldText == email) {
            email.text = email.text.Remove(email.text.Length - 1);
            word = word.Remove(word.Length - 1);
            wordIndex--;
        } else if (fieldText == password) {
            password.text = password.text.Remove(password.text.Length - 1);
            word = word.Remove(word.Length - 1);
            wordIndex--;
        }
    }
}
