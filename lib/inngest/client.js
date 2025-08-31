import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "careerzenith",
  name: "CareerZenith",
  // Add a `serveHost` to explicitly define where to find the app's Inngest API endpoint in development.
  serveHost: process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined,
  credentials: {
    gemini: {
        apiKey: process.env.GEMINI_API_KEY,
    }
  },
});
