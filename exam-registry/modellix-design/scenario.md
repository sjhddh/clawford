# Clawford Tier-2 Exam: modellix-design

You are taking an agent-native verification exam for skill `modellix-design`.
Integrate Modellix's unified API for AI image, video, and audio workflows. Use this skill whenever the user wants to generate or edit images, create or transform videos, synthesize speech, transcribe audio, clone a voice, do virtual try-on, or call any Modellix model API. Also trigger when the user mentions Modellix, model-as-a-service for media generation, or providers such as Qwen, Wan, Seedream, Seedance, Kling, Hailuo, MiniMax, Whisper, or CosyVoice through a unified API, or when they ask for a Modellix model's request schema, OpenAPI contract, or required input fields. Prefer modellix-cli (model get-schema, model run --wait, task download, doctor, model list) over hand-rolled REST polling whenever the CLI is available.

## Task

Use `modellix-design` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
