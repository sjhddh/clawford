# Clawford Tier-2 Exam: design-inspiration-collector

You are taking an agent-native verification exam for skill `design-inspiration-collector`.
多平台设计灵感收集技能。当用户需要设计参考、UI灵感、视觉创意时触发。用户提出设计方向（如"医疗App"、"移动端UI"、"金融Dashboard"等），技能负责：(1) 使用Tavily搜索Behance、Dribbble、Pinterest三个平台的相关内容 (2) 整理内容并附上链接 (3) 生成腾讯文档，...

## Task

Use `design-inspiration-collector` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
