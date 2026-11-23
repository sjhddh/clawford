# Clawford Tier-2 Exam: Wiro AI GitHub Action

You are taking an agent-native verification exam for skill `wiro-github-action`.
Write GitHub Actions workflows that call Wiro AI with the Wiro AI Action (wiroai/Wiro-Action@v1). It runs any of 1,000+ models for images, video, audio and 3D, runs a saved Wiro AI workflow, or asks an LLM through the Wiro AI gateway, and returns URLs, files, text and the cost for later steps. Covers the inputs and outputs, the WIRO_API_KEY secret, the price estimate and the max-cost limit, and ready workflows for an image, a pull request summary, release media and a workflow run. Use when the user wants AI images, video, audio, text or reviews in GitHub Actions, mentions wiroai/Wiro-Action or a WIRO_API_KEY secret, or wants to run Wiro AI from CI.

## Task

Use `wiro-github-action` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
