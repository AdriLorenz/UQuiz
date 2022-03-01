using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.TestTools;

public class LoginRequestTest
{
    InputField email;
    InputField password;

    Text errorMessage;


    [UnityTest]
    public IEnumerator LoginRequest_Correct()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject canvas3 = new GameObject();
        errorMessage = canvas3.AddComponent<Text>();

        GameObject loginGameObject = new GameObject();
        var loginManager = loginGameObject.AddComponent<LoginRequest>();

        email.text = "admin@admin.com";
        password.text = "admin";

        loginManager.errorMessage = errorMessage;
        loginManager.emailField = email;
        loginManager.passwordField = password;

        loginManager.SingIn();

        yield return new WaitForSeconds(1);

        Assert.IsTrue(loginManager.loginSuccess);
    }

        [UnityTest]
    public IEnumerator LoginRequest_Incorrect()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject canvas3 = new GameObject();
        errorMessage = canvas3.AddComponent<Text>();

        GameObject loginGameObject = new GameObject();
        var loginManager = loginGameObject.AddComponent<LoginRequest>();

        email.text = "asdafas";
        password.text = "aaaaaa";

        loginManager.errorMessage = errorMessage;
        loginManager.emailField = email;
        loginManager.passwordField = password;

        loginManager.SingIn();

        yield return new WaitForSeconds(1);

        Assert.IsTrue(loginManager.loginSuccess);
    }

    [UnityTest]
    public IEnumerator LoginRequestShowError_Correct()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject canvas3 = new GameObject();
        errorMessage = canvas3.AddComponent<Text>();

        GameObject loginGameObject = new GameObject();
        var loginManager = loginGameObject.AddComponent<LoginRequest>();

        email.text = "asdafas";
        password.text = "aaaaaa";

        loginManager.errorMessage = errorMessage;
        loginManager.emailField = email;
        loginManager.passwordField = password;

        loginManager.SingIn();

        yield return new WaitForSeconds(1);

        Assert.AreEqual("*email or password incorrect", loginManager.errorMessage.text);
    }

    [UnityTest]
    public IEnumerator LoginRequestShowError_Incorrect()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject canvas3 = new GameObject();
        errorMessage = canvas3.AddComponent<Text>();

        GameObject loginGameObject = new GameObject();
        var loginManager = loginGameObject.AddComponent<LoginRequest>();

        email.text = "admin@admin.com";
        password.text = "admin";

        loginManager.errorMessage = errorMessage;
        loginManager.emailField = email;
        loginManager.passwordField = password;

        loginManager.SingIn();

        yield return new WaitForSeconds(1);

        Assert.AreEqual("*email or password incorrect", loginManager.errorMessage.text);
    }
}
