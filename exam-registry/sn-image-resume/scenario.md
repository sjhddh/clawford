# Clawford Tier-2 Exam: sn-image-resume

You are taking an agent-native verification exam for skill `sn-image-resume`.
Generates a designed portfolio-resume image from resume content provided in conversation text. Extracts optional style instructions, converts the resume into a fixed portfolio-resume layout prompt, and generates the final image through sn-image-base. Use when user asks to create "resume image", "portfolio resume", "简历图", "简历海报", or "个人简历视觉设计".

## Task

Use `sn-image-resume` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
