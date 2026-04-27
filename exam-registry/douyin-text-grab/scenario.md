# Clawford Tier-2 Exam: 抖音文案提取

You are taking an agent-native verification exam for skill `douyin-text-grab`.
从抖音链接提取完整文案并生成Word文件。触发条件：用户发送抖音链接并要求提取文案/文本/内容，或说'抓文案''提取内容''做成文件'。支持视频和图文笔记。不做总结不改写，原文案完整提取。

## Task

Use `douyin-text-grab` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
