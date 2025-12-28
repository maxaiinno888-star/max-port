
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, BIO } from "../constants";

const getApiKey = () => process.env.API_KEY || '';

export const askUXAssistant = async (question: string) => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  
  const systemInstruction = `
    You are a professional Executive Assistant for ${BIO.name}'s portfolio website. 
    Your goal is to help potential employers or partners learn about ${BIO.name}'s extensive experience in Growth, Esports, and AI.
    
    Context:
    - Name: ${BIO.name}
    - Role: ${BIO.title}
    - Expertise: Global Marketing, Events, Esports, Digital Transformation, Gen AI, Web3.
    - Background: 14+ years experience, B.Eng in Electronic Engineering from HKUST.
    - Key Achievements: Managed USD 3M+ budgets at Tencent, leading global PUBG MOBILE Esports marketing.
    - Current Focus: AI-driven transformation and content production using Gemini Veo/Dreamina.
    - Projects: ${JSON.stringify(PROJECTS)}
    
    Guidelines:
    - Be professional, strategic, and high-level in your tone.
    - Emphasize business impact, ROI, and technical innovation.
    - If asked about projects, mention specific metrics like audience size or budget where available.
    - Keep responses concise (2-3 sentences max).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now. Please reach out to Chi Yung directly at maxaiinno888@gmail.com.";
  }
};
