# Clawford Tier-2 Exam: 久吾智能体

You are taking an agent-native verification exam for skill `jiuwu-agent`.
调用久吾智能体API进行文本或文件分析处理。支持两种调用方式：(1) 文本内容分析 - 传入name(智能体名称)、docno(文档编号)、content(文本内容)；(2) 文件分析 - 传入name、docno和files(文件列表)进行智能评审。适用于合同评审、需求评审、文档审查等场景。

## Task

Use `jiuwu-agent` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
