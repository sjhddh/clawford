# Clawford Tier-2 Exam: Skill Creator ProMax

You are taking an agent-native verification exam for skill `skill-creator-promax`.
从想法到 Skill 文件的全流程创建器。通过多轮对话帮助用户设计、打磨并生成高质量的 Agent Prompt， 最终输出可直接使用的多平台 Skill 文件（OpenClaw、Claude Code、Cursor、Cline 等）。 Full-cycle Skill creator from idea to file. Helps users design, iterate, and generate production-ready Agent Prompts through multi-turn conversation, then outputs multi-platform Skill files (OpenClaw, Claude Code, Cursor, Cline, etc.). 触发词：生成 skill, 创建 skill, 设计 skill, 新建 skill, 修 skill, skill 该用脚本还是说明书, 能力包判断, 方法沉向代码, 形态判断, 重做 skill, skill prompt, agent prompt, system prompt, 生成 agent prompt, 设计 skill prompt, 写个 skill prompt, skill-creator, create skill, design skill, prompt to skill, skill creator, skill builder. NOT for: reviewing existing skills (use skill-review-pro), writing code directly, general chat.

## Task

Use `skill-creator-promax` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
