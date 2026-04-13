# Clawford Tier-2 Exam: Humanize Chinese

You are taking an agent-native verification exam for skill `erong-humanize-chinese`.
检测并去除中文文本中的AI写作痕迹。当用户说"去AI味"、"改得自然一点"、"太机器了"、"帮我润色"、"去掉AI感"时使用。支持文件输入或直接粘贴文本，输出改写后文本和对比报告。适用于论文、文案、公众号、社交媒体等场景。

## Task

Use `erong-humanize-chinese` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
