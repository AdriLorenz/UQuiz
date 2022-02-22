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
        StartCoroutine(getThemes());
        StartCoroutine(getMovement());
    }

    // Update is called once per frame
    void Update()
    {
    }

    IEnumerator getThemes() {
        new WaitForSeconds(1);
        if (themeDropdown.options.Count != 0) {
            theme = themeDropdown.options[themeDropdown.value].text;
            yield return "yes";
        } else {
            yield return "no";
        }
    }

    IEnumerator getMovement() {
        new WaitForSeconds(1);
        if (movementDropdown.options.Count != 0) {
            movement = movementDropdown.options[movementDropdown.value].text;
            yield return "yes";
        } else {
            yield return "no";
        }
    }
}

