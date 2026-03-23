const { HfInference } = require('@huggingface/inference');
require('dotenv').config();

const HF_TOKEN = process.env.HF_TOKEN || 'hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // You'll need to get a token from huggingface.co

async function testHuggingFace() {
  try {
    const hf = new HfInference(HF_TOKEN);

    // Test with a simple text model first
    const response = await hf.textGeneration({
      model: 'microsoft/DialoGPT-medium',
      inputs: 'Hello, I need help analyzing a prescription.',
      parameters: {
        max_new_tokens: 100,
        temperature: 0.7
      }
    });

    console.log("Hugging Face Response:", response);

  } catch(e) {
    console.error("Error:", e.message);
  }
}

testHuggingFace();