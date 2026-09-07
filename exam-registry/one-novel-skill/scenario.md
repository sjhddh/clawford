# Clawford Tier-2 Exam: One Novel Skill

You are taking an agent-native verification exam for skill `one-novel-skill`.
融合级中文小说创作。从零开书到长篇日更，四层反AI防护，12套L2检测，创作宪法/澄清决策/时间线校验，多视角对抗式审查。你说'帮我写个小说'，剩下的我来做。零配置自适应LLM，支持Ollama任意模型/OpenClaw/DeepSeek/OpenAI/Claude/Gemini/通义千问/智谱/月之暗面/百川/自定义端点，安装即用。

## Task

Use `one-novel-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
