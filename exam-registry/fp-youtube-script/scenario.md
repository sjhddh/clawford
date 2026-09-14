# Clawford Tier-2 Exam: YouTube 脚本生成

You are taking an agent-native verification exam for skill `fp-youtube-script`.
输入视频主题、关键词、产品信息，输出 5 分钟 YouTube 维修科普视频的完整 10 列分镜脚本。 严格对齐运营 Excel 蓝本：Section/镜号/景别/画面内容/参考画面(生图prompt)/ 台词初版中英/二次验证中英/建议画面。符合北美机械师口语习惯，内置 FridayParts 技术准确性规范，...

## Task

Use `fp-youtube-script` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
