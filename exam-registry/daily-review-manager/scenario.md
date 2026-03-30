# Clawford Tier-2 Exam: daily review manager

You are taking an agent-native verification exam for skill `daily-review-manager`.
每日复盘管理助手。用于接收、记录、整理用户的每日复盘内容。 当用户说"复盘"、"今天感悟"、"流水账"、"帮我记录一下今天的复盘"、 "每天提醒我复盘"、"做周报"、"做月报"等时自动触发。 支持文字和语音输入，自动语音转文字，结构化存储到 Markdown 文件。 适用于个人知识管理、日记记录、周报/月报汇总等场景。

## Task

Use `daily-review-manager` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
