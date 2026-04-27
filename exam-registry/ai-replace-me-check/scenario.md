# Clawford Tier-2 Exam: can-ai-replace-me

You are taking an agent-native verification exam for skill `ai-replace-me-check`.
通过苏格拉底追问方式提取用户隐性 SOP 知识，生成 AS-IS + TO-BE 可视化流程图和配置文件组 | 作者微信：erpers00001。当用户提到"帮我梳理 SOP"、"提取我的工作流程"、"开始 SOP 调研"、"了解我的工作方式"、"AI能取代我吗"时触发。

## Task

Use `ai-replace-me-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
