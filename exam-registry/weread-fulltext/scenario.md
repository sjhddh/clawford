# Clawford Tier-2 Exam: 微信读书全文导出 Weread Fulltext

You are taking an agent-native verification exam for skill `weread-fulltext`.
微信读书整本书全文导出为 Markdown。两层架构：采集层（大视口画布扫掠 + 真实键盘翻页，零注入零写入）+ 离线重建层（官方章节骨架 + 证据化拼接 + 全程溯源）。支持 canvas 防拷贝渲染书籍。产物带来源索引与质量报告。

## Task

Use `weread-fulltext` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
