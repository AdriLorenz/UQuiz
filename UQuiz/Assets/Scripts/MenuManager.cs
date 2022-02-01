using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class MenuManager : MonoBehaviour
{
    public Dropdown movementDropdown;
    public Dropdown themeDropdown;

    public static string movement;
    public static string theme;

    public void StartGame() {
        SceneManager.LoadScene("Level_1");
    }

    void Start() {
        
    }

    // Update is called once per frame
    void Update()
    {
        movement = movementDropdown.options[movementDropdown.value].text;
        theme = themeDropdown.options[themeDropdown.value].text;
        Debug.Log(theme);

    }
}

