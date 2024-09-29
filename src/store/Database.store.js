import { reactive } from "vue";

export const promptDataBase = reactive([
  {
    id: 1,
    userPromptInput: "How do I make a cake?",
    assistantResponse:
      "To make a cake, you'll need flour, sugar, eggs, and butter. Mix the ingredients, pour the batter into a pan, and bake at 350°F for about 30 minutes.",
  },
  {
    id: 2,
    userPromptInput: "What is the capital of France?",
    assistantResponse: "The capital of France is Paris.",
  },
  {
    id: 3,
    userPromptInput: "Can you recommend a good book?",
    assistantResponse:
      "Sure! I recommend 'To Kill a Mockingbird' by Harper Lee. It's a classic.",
  },
  {
    id: 4,
    userPromptInput: "How do I reset my password?",
    assistantResponse:
      "To reset your password, go to the login page and click on 'Forgot Password?' Follow the instructions sent to your email to create a new password.",
  },
  {
    id: 5,
    userPromptInput: "What are the benefits of regular exercise?",
    assistantResponse:
      "Regular exercise can improve cardiovascular health, increase strength and flexibility, enhance mood, and help with weight management.",
  },
]);
