async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
      "OpenAI-Organization": "org-8v0r7q1x2g3z4h5j6k7l8m9n",
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    }),
  });

  const data = await response.json();
  const imageUrl = data.data[0].url;
  document.getElementById(
    "design-result"
  ).innerHTML = `<img src="${imageUrl}" alt="Image générée">`;
}
