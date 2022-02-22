using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;

public class LoginRequest : MonoBehaviour
{

    public InputField emailField;
    public InputField passwordField;
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    IEnumerator Login (string email, string password) {
        WWWForm form = new WWWForm();
        form.AddField("email", email.ToLower());
        form.AddField("password", password.ToLower());

        using (UnityWebRequest www = UnityWebRequest.Post("http://localhost:5000/login", form)) {
            yield return www.SendWebRequest();
            var response = www.downloadHandler.text;

            Debug.Log(response);

            if (www.result != UnityWebRequest.Result.Success) {
                Debug.Log(www.error);
            } else {
                Debug.Log("Login complete");
            }
        }
    }

    public void SingIn () {
        StartCoroutine(Login(emailField.text, passwordField.text));
        Debug.Log(emailField.text);
        Debug.Log(passwordField.text);
    }
}
