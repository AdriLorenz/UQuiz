using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using UnityEngine.SceneManagement;
using SimpleJSON;

public class LoginRequest : MonoBehaviour
{
    public Text errorMessage;
    public InputField emailField;
    public InputField passwordField;
    public static string userName;

    public bool loginSuccess;
    // Start is called before the first frame update
    void Start()
    {
        errorMessage.text = null;
        loginSuccess = false;
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
                ShowErrors();
            } else {
                Debug.Log("Login complete");
                loginSuccess = true;
                GetUserName(response);
                
            }
        }
    }

    public void SingIn () {
        StartCoroutine(Login(emailField.text, passwordField.text));
        Debug.Log(emailField.text);
        Debug.Log(passwordField.text);
    }

    public void ShowErrors() {
        errorMessage.text = "*email or password incorrect";
    }

    public void GetUserName(string response) {
        JSONNode itemsData = JSON.Parse(response);
        userName = itemsData["user_name"];
        Debug.Log(userName);
        SceneManager.LoadScene("Menu");

    }
}
