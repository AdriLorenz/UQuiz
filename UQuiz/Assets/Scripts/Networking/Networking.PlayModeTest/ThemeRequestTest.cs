using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEngine.UI;

using UnityEngine.Networking;
using SimpleJSON;


public class ThemeRequestTest
{
    string firstTheme;

    [UnityTest]
    public IEnumerator ThemeRequestSendThemes_Correct()
    {
        using (UnityWebRequest request = UnityWebRequest.Get("http://localhost:5000/themes"))
        {
            request.SetRequestHeader("Content-Type", "application/json");

            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.Log(request.error);
            }
            else
            {
                //Debug.Log(request.downloadHandler.text);

                JSONArray itemsData = (JSONArray) JSON.Parse(request.downloadHandler.text);
                firstTheme = itemsData[0]["theme_name"];

                Debug.Log(firstTheme.ToString());
            }
            Assert.AreEqual(UnityWebRequest.Result.Success, request.result);
        }
        
    }

    [UnityTest]
    public IEnumerator ThemeRequestSendThemes_Incorrect()
    {
        using (UnityWebRequest request = UnityWebRequest.Get("http://localhost:5000/themes"))
        {
            request.SetRequestHeader("Content-Type", "application/json");

            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.Log(request.error);
            }
            else
            {
                //Debug.Log(request.downloadHandler.text);

                JSONArray itemsData = (JSONArray) JSON.Parse(request.downloadHandler.text);
                JSONNode themes = itemsData["theme_name"];
                firstTheme = itemsData[0]["theme_name"];

                Debug.Log(firstTheme.ToString());
            }
            Assert.AreEqual(UnityWebRequest.Result.Success, request.error);
        }
    }
}
