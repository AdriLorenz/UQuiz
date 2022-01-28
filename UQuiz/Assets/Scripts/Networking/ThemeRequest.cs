using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

using Newtonsoft.Json;
using System.Threading.Tasks;

public class ThemeRequest
{
    public async Task<Theme> Get(string url) {

        using var www = UnityWebRequest.Get(url);
        www.SetRequestHeader("Content-Type", "application/json");

        var operation = www.SendWebRequest();

        while (!operation.isDone) {
            await Task.Yield();
        }

        var jsonResponse = www.downloadHandler.text;

        if (www.result != UnityWebRequest.Result.Success) {
            Debug.LogError($"Failed: {www.error}");
        }

        try {
            List<Theme> result = JsonConvert.DeserializeObject<List<Theme>>(jsonResponse);
            foreach (Theme theme in result) {
                Debug.Log($"theme_id: {theme.theme_id},  user_name: {theme.theme_name}");
            }

            Debug.Log($"Success: {www.downloadHandler.text}");
            return result[0];
        } catch (UnityException ex) {
            Debug.LogError($"{this} could not parse json {jsonResponse}. {ex.Message}");
            return default;
        }

    }
}
