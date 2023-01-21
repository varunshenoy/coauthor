'use strict';

const OPENAI_API_KEY = "YOUR API KEY";

const DEFAULT_PARAMS = {
  "model": "text-davinci-003",
  "temperature": 0.9,
  "max_tokens": 400,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}

export async function query(params = {}) {
  const params_ = { ...DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(OPENAI_API_KEY)
    },
    body: JSON.stringify(params_)
  };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  const data = await response.json();
  return data;
}

async function insertText(text) {

  var range = document.getSelection().getRangeAt(0);

  var prompt = `Convert English text to LaTeX. Include an equation environment if necessary. \nQ: ${text}\n A:`

  document.body.style.cursor = 'wait';
  const response = await query({ "prompt": prompt });
  const result = response.choices[0].text.trim();
  document.body.style.cursor = 'default';

  range.deleteContents();
  range.insertNode(document.createTextNode(result));
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'INSERT') {
    insertText(request.payload.message).then(sendResponse({}));
  }

  return true;
});
