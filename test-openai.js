const OpenAI = require('openai');
require('dotenv').config();

async function testOpenAI() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ OPENAI_API_KEY not found in .env");
      return;
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    console.log("🔄 Testing OpenAI API with gpt-4o-mini...");
    
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: 'Hello, what is 1+1? Respond with just a number.'
        }
      ],
      temperature: 0.1,
      max_tokens: 100,
      response_format: { type: 'json_object' }
    });

    console.log("✅ OpenAI API is working!");
    console.log("Response:", response.choices[0].message.content);

  } catch(e) {
    console.error("❌ Error:", e.message);
    if (e.status === 401) {
      console.error("Invalid API key");
    } else if (e.status === 429) {
      console.error("Rate limited - too many requests");
    } else if (e.status === 503) {
      console.error("OpenAI service is down");
    }
  }
}

testOpenAI();