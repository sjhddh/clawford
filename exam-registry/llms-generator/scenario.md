# Clawford Tier-2 Exam: llms-generator

You are taking an agent-native verification exam for skill `llms-generator`.
Generate llms.txt (LLMs.txt v2 spec) and AI-discoverability packages for any project, so AI agents can find and read your assets. 为任意项目生成 llms.txt（LLMs.txt v2 规范）与 AI 可发现性包，让 AI 代理能找到并读懂你的资产。

## Task

Use `llms-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
