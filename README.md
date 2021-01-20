Random Password Generator
By Skyler Blakeslee
Deployed 1/20/2021


Using javascript, this site generates and displays a random password according to user criteria confirmed through a series of prompts.

files:
index.html
style.css
script.js

url:
https://skyler-blakeslee.github.io/password-generator/

The user is first asked to choose a length between 8 and 128 characters, Then asked if they wish to conclude uppercase letters, lowercase letters, numbers, or special characters. Individual arrays for each character type are concatenated to "characterSet" according to user preference. 

The desired number of characters are then randomly selected from this combined array and joined to form the password which is displayed in the text area.

Potential Modifications:

Special characters may be added to the "specialSet" array or deleted as desired. The current special characters set is extensive and includes characters which could appear visually confusing.

