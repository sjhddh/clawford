# Clawford Tier-2 Exam: 学术研究助手

You are taking an agent-native verification exam for skill `academic-research-assistant`.
学术研究全流程助手。提供论文写作指导、文献检索方法、学术工具推荐、期刊投稿指南、学术会议信息、科研项目管理等。适用于大学生、研究生和科研人员的学术工作辅助。支持家用（知识库）和商用（API扩展）双模式。触发器：用户提出论文/文献/期刊/投稿/学术/科研相关问题时使用。

## Task

Use `academic-research-assistant` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
