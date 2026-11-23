# Clawford Tier-2 Exam: ai-content-guard

You are taking an agent-native verification exam for skill `ai-content-guard`.
AI 内容安检：检测文本、文件、网页和邮件中的提示注入、隐形字符、编码载荷和 AI 配置文件后门；纯本地确定性引擎，零网络零依赖，输出四值判决、脱敏证据与处置建议。读取来自外部或不可信来源的脚本、配置、文档、仓库代码前也先扫。

## Task

Use `ai-content-guard` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
