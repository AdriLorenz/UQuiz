using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.TestTools;
using KeyboardController;

public class KeyboardTest
{
    InputField email;
    InputField password;

    [UnityTest]
    public IEnumerator KeyboardTestEnterA_Correct()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject keyboard = new GameObject();
        var keyboardManager = keyboard.AddComponent<KeyboardManager>();

        keyboardManager.email = email;
        keyboardManager.password = password;

        keyboardManager.fieldText = email;
        keyboardManager.AlphabetFunction("a");
        var keyPushed = keyboardManager.email.text;
        yield return null;

        Assert.AreEqual("a", keyPushed);
    }

    [UnityTest]
    public IEnumerator KeyboardTestEnterA_Incorrect()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject keyboard = new GameObject();
        var keyboardManager = keyboard.AddComponent<KeyboardManager>();

        keyboardManager.email = email;
        keyboardManager.password = password;

        keyboardManager.fieldText = email;
        keyboardManager.AlphabetFunction("a");
        var keyPushed = keyboardManager.email.text;
        yield return null;

        Assert.AreEqual("b", keyPushed);
    }

    [UnityTest]
    public IEnumerator KeyboardTestDeleteText_Correct()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject keyboard = new GameObject();
        var keyboardManager = keyboard.AddComponent<KeyboardManager>();

        keyboardManager.email = email;
        keyboardManager.password = password;

        keyboardManager.fieldText = email;

        keyboardManager.DeleteEntireWord();
        var textDeleted = keyboardManager.fieldText.text;
        yield return null;

        Assert.AreEqual(string.Empty, textDeleted);
    }

        [UnityTest]
    public IEnumerator KeyboardTestDeleteText_Incorrect()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject keyboard = new GameObject();
        var keyboardManager = keyboard.AddComponent<KeyboardManager>();

        keyboardManager.email = email;
        keyboardManager.password = password;

        keyboardManager.fieldText = email;

        keyboardManager.DeleteEntireWord();
        var textDeleted = keyboardManager.fieldText.text;
        yield return null;

        Assert.AreEqual("wrong", textDeleted);
    }

    [UnityTest]
    public IEnumerator KeyboardTestDeleteChar_Correct()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject keyboard = new GameObject();
        var keyboardManager = keyboard.AddComponent<KeyboardManager>();

        keyboardManager.email = email;
        keyboardManager.password = password;

        email.text = "test";

        keyboardManager.fieldText = email;
        keyboardManager.fieldText.text = email.text;

        keyboardManager.DeleteLastLetter();
        var textDeleted = keyboardManager.fieldText.text;
        yield return null;

        Assert.AreEqual("tes", textDeleted);
    }

    [UnityTest]
    public IEnumerator KeyboardTestDeleteChar_Incorrect()
    {
        GameObject canvas1 = new GameObject();
        email = canvas1.AddComponent<InputField>();

        GameObject canvas2 = new GameObject();
        password = canvas2.AddComponent<InputField>();

        GameObject keyboard = new GameObject();
        var keyboardManager = keyboard.AddComponent<KeyboardManager>();

        keyboardManager.email = email;
        keyboardManager.password = password;

        email.text = "test";

        keyboardManager.fieldText = email;
        keyboardManager.fieldText.text = email.text;

        keyboardManager.DeleteLastLetter();
        var textDeleted = keyboardManager.fieldText.text;
        yield return null;

        Assert.AreEqual("testt", textDeleted);
    }
}
