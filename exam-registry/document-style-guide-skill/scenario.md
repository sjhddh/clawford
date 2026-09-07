# Clawford Tier-2 Exam: Chinese Tech Writing

You are taking an agent-native verification exam for skill `document-style-guide-skill`.
中文技术文档写作规范助手。当用户需要撰写、审校、润色或重写中文技术文档（包括 README、API 文档、产品手册、博客、教程、changelog、UI 文案等）时触发。触发关键词包括： "中文文档"、"技术写作"、"文档规范"、"文档审校"、"润色文档"、"rewrite"（针对中文内容）、 "帮我写文档"、"...

## Task

Use `document-style-guide-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
