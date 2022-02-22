using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEngine.UI;
using ThemeRequest;

using UnityEngine.Networking;
using SimpleJSON;


public class ThemeRequestTest
{
    // A Test behaves as an ordinary method
    [Test]
    public void ThemeRequestTestSimplePasses()
    {
        // Use the Assert class to test conditions
    }

    // A UnityTest behaves like a coroutine in Play Mode. In Edit Mode you can use
    // `yield return null;` to skip a frame.
    [UnityTest]
    public IEnumerator ThemeRequestSendThemes()
    {
        var networking = new GameObject();
        var themeRequest = networking.AddComponent<ThemeRequest.ThemeRequest>();

        yield return null;
        Assert.IsNotNull(themeRequest);
    }
}
