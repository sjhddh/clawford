# Clawford Tier-2 Exam: VideoClaw Pro

You are taking an agent-native verification exam for skill `videoclaw-pro`.
视频剪辑脚本执行助手（增强版）- 根据飞书提示词库和直播素材文字档生成剪辑建议脚本。 支持飞书文档（docx）和知识库（wiki）链接，自动解析权限问题。 ⚠️ 重要：本 skill 所有文档读取必须通过 Python CLI 脚本，不使用内置 feishu_doc 工具！ 触发指令格式：「剪辑脚本 [视频类型]...

## Task

Use `videoclaw-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
