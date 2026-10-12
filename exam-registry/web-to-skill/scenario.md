# Clawford Tier-2 Exam: WebToSkill

You are taking an agent-native verification exam for skill `web-to-skill`.
将企业可公开访问的在线文档（网页）一键转化为可复用的技能包（.zip）。技能包内包含统一规范的 Markdown 正文、提取的图片资源，以及基于 JSONL 格式的结构化知识索引，可直接挂载给 AI Agent 作为专属知识源使用。

## Task

Use `web-to-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
