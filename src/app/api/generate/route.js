import { NextResponse } from "next/server";
import {
    GoogleGenAI,
} from '@google/genai';


export async function POST(req) {
  const { prompt, dsl } = await req.json();
  const fullPrompt = `
You are a strict Java code generator that must follow the following DSL style rules:
${dsl}

Now generate Java code for the following request:
${prompt}
`;

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.0-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: fullPrompt,
        },
      ],
    },
  ];

  const res = await ai.models.generateContent({
    model,
    config,
    contents,
  });


  const reply = (res.text)? res.text :"An Error Occured, Try Again!"
  return NextResponse.json({ reply });
}
