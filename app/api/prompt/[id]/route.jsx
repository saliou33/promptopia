import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch prompt", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();
    const exPrompt = await Prompt.findById(params.id);

    if (!exPrompt) return new Response("Prompt not found", { status: 404 });

    exPrompt.prompt = prompt;
    exPrompt.tag = tag;

    await exPrompt.save();

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted sucessfully", { status: 200 });
  } catch (err) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
};
