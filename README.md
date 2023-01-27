# <img src="public/icons/icon_48.png" width="45" align="left">  Coauthor

*Copilot for Overleaf*

A GPT powered English-to-LaTeX translator that fits neatly into your Overleaf workflow. In other words, an absolute life-saver for non-math majors.

![Coauthor demo](demo.gif)

## Features

- Convert English descriptions of formulae to LaTeX ("the gradient of A is B transposed plus C")
- Describe matrices Matlab style ("A = [1, 2, 3; 2, 4, 5]")
- Simply write out names of theorems or equations and translate them directly ("The equation for Multihead Attention from Attention is All You Need" or "Insert the Time Hierarchy Theorem").
- Automatically create typeset tables ("A table with three columns titled Name, School, and Email").
- And many more left for you to discover...

## Install

1. Navigate to the "build" folder.
2. Open up `build/contentScript.js`. Replace the one instance of "YOUR API KEY" with [a valid OpenAI API key](https://beta.openai.com/account/api-keys).
3. Go to `chrome://extensions/` in your browser and check the box for `Developer mode` in the top right.
4. Load an unpacked extension. Select the `build` folder.
5. Refresh any Overleaf tabs that you have open.

You're ready to go! Right click on highlighted text within Overleaf and select "Convert to LaTeX" 🎉

## Contribution

Suggestions and pull requests are welcomed!

