import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_INSTRUCTION = `You are Suraksha AI, a compassionate and knowledgeable safety assistant specifically designed to help women in emergency and safety situations in India. Your role is to:

1. Provide immediate, practical safety advice
2. Stay calm and reassuring while being direct
3. Offer step-by-step guidance for various emergency scenarios
4. Suggest local emergency numbers and resources (India: Police 100, Ambulance 108, Women's Helpline 1091)
5. Help assess danger levels and recommend appropriate actions
6. Provide self-defense tips when relevant
7. Guide on how to use the Suraksha app features effectively

Key scenarios you help with:
- Feeling unsafe while walking alone
- Being followed or stalked
- Domestic violence situations
- Sexual harassment
- Medical emergencies
- Natural disasters
- Accident situations
- Mental health crises

Always prioritize:
- User's immediate safety
- Calling emergency services when needed
- Getting to a safe location
- Contacting trusted people
- Documenting evidence when safe to do so

Be empathetic, non-judgmental, and empowering. Keep responses concise (2-3 paragraphs max) but actionable. If the situation is life-threatening, immediately advise calling emergency services.`;

export const createChat = async () => {
  try {
    console.log('Initializing Gemini AI...');
    
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });
    
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 800,
        temperature: 0.8,
        topP: 0.95,
      },
    });
    
    console.log('Gemini AI initialized successfully');
    return chat;
  } catch (error) {
    console.error('Error initializing Gemini chat:', error);
    throw error;
  }
};

export const sendMessage = async (chat, message) => {
  try {
    console.log('Sending message to Gemini:', message);
    
    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();
    
    console.log('Received response from Gemini:', text);
    return text;
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    console.error('Error details:', error.message);
    throw error;
  }
};

// Quick safety tips
export const QUICK_TIPS = [
  "I'm being followed, what should I do?",
  "I feel unsafe walking alone",
  "Someone is harassing me",
  "I need emergency contacts",
  "Self-defense tips",
  "How to document evidence?",
];
