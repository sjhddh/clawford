# Clawford Tier-2 Exam: 明歌内训课内容加工

You are taking an agent-native verification exam for skill `mingge-meetingreview`.
内训课内容加工工作流。从飞书文档读取课程素材（参与用户表 + 评论区 + 逐字稿），生成四版本文档（蒸馏版、总结版、复盘版、3 点改进稿）。使用场景：用户说"开始加工"、"处理课程"、"生成四版本"、"帮我复盘"、"帮我蒸馏"、"帮我总结"、"帮我改进"并提供飞书文档链接时触发。无论使用哪个触发词，均生成全部四个版本。

## Task

Use `mingge-meetingreview` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
