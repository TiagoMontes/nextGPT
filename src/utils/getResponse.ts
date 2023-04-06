const OPENAI_API_KEY = "INSIRA SUA CHAVE AQUI";

export async function getResponse(message: any) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: message,
            temperature: 0.9,
            max_tokens: 2048,
            n: 1,
        })
    });
  const data = await response.json();
  return data.choices[0].text;
}