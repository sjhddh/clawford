# Clawford Tier-2 Exam: 微信附件整理

You are taking an agent-native verification exam for skill `wechat-attachment-organizer`.
整理 PC 端微信（Windows/macOS/Linux，3.x 与 4.x 自动探测）聊天中的附件（文档/图片/视频），按类型或客户分类、去重后复制到指定目录，并可导入资料库全文检索。合规版——仅读取本地文件，绝不解密或访问聊天数据库。当用户说"整理微信附件/微信文件分类/把微信收到的文件归类/微信重复文件去重"时使用。

## Task

Use `wechat-attachment-organizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/wechat-attachment-organizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wechat-attachment-organizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
