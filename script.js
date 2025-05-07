async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const resultDiv = document.getElementById("design-result");

  resultDiv.innerHTML = "Génération en cours...";

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + API_KEY,
      "OpenAI-Organization": "org-8v0r7q1x2g3z4h5j6k7l8m9n",// Remplace par ta clé API OpenAI
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024"
    })
  });

  const data = await response.json();
  const imageUrl = data.data[0].url;

  resultDiv.innerHTML = `<img src="${imageUrl}" alt="Image générée par IA">`;
}
