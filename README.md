# <img src="public/icons/icon_48.png" width="45" align="left">  Coauthor

A GPT-3 powered English-to-LaTeX translator that fits neatly into your Overleaf workflow.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Introducing Coauthor 🧑‍🔬<br><br>Simplify your research or homework workflow with automated English to LaTeX generation, powered by AI.<br><br>Plus, Coauthor integrates seamlessly with Overleaf. <a href="https://t.co/7S6eMjBdtP">pic.twitter.com/7S6eMjBdtP</a></p>&mdash; Varun Shenoy (@varunshenoy_) <a href="https://twitter.com/varunshenoy_/status/1599844361470377984?ref_src=twsrc%5Etfw">December 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Features

- Convert English descriptions of formulae to LaTeX ("the gradient of A is B transposed plus C")
- Describe matrices Matlab style ("A = [1, 2, 3; 2, 4, 5]")
- Simply write out names of equations from famous papers to insert them in ("The equation for Multihead Attention from Attention is All You Need").
- Automatically create typeset tables ("A table with three columns titled Name, School, and Email").
- And many more left for you to discover...

## Install

1. Navigate to the "build" folder.
2. Open up `contentScript.js`. Replace the one instance of "YOUR API KEY" with [a valid OpenAI API key](https://beta.openai.com/account/api-keys).
3. Go to `chrome://extensions/` in your browser and check the box for `Developer mode` in the top right.
4. Load an unpacked extension. Select the `build` folder.
5. Refresh any Overleaf tabs that you have open.

You're ready to go! Right click on highlighted text within Overleaf and select "Convert to LaTeX" 🎉

## Contribution

Suggestions and pull requests are welcomed!

