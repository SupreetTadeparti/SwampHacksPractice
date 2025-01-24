export default {
  async fetch(request, env) {
    const tasks = [];

    const url = new URL(request.url);
    const prompt = url.searchParams.get("prompt");

    if (!prompt) {
      return new Response(
        'Please provide a prompt using the "prompt" query parameter.',
        {
          status: 400,
        }
      );
    }

    // prompt - simple completion style input
    let simple = {
      prompt: prompt,
    };
    let response = await env.AI.run("@cf/meta/llama-3.2-1b-instruct", simple);
    tasks.push({ inputs: simple, response });

    // messages - chat style input
    let chat = {
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that gives gardening recommendations based on location, season and effort.",
        },
      ],
    };
    response = await env.AI.run("@cf/meta/llama-3.2-1b-instruct", chat);
    tasks.push({ inputs: chat, response });

    return Response.json(tasks);
  },
};
