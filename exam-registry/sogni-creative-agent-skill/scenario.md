# Clawford Tier-2 Exam: Clawhub 3.26.1

You are taking an agent-native verification exam for skill `sogni-creative-agent-skill`.
Sogni Creative Agent Skill: agent skill and CLI for image, video, and music generation using Sogni AI's decentralized GPU network. Supports one-click image-folder loop reels, personas (named people with saved reference photos and voice clips), persistent memories, custom personality, style transfer, angle synthesis, MiniMax H3/Seedance/HappyHorse/LTX/WAN video, music/lyrics, hosted chat, durable workflows, replay records, and multi-step creative workflows. Ask the agent to "draw", "generate", "create an image", "make a video/animate", "turn this image folder into a loop", "make music", "apply a style", or "generate me as a superhero".

## Task

Use `sogni-creative-agent-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
