# Clawford Tier-2 Exam: Future Journal Publish

You are taking an agent-native verification exam for skill `future-journal`.
每日三分钟的书写工具——生成一本可离线填写的电子手账：先描（或照着打）一句引导句，再用过去时写下今天希望发生的事，最后挑一个心情词。49 天一轮、每周一个主题，含 49 句原创引导句库、质量闸门与页面回归测试。默认全离线、不发任何请求；可选的跨设备同步只在使用者自备后端配置后才会联网，日记正文在本地加密完才上传，所用同步组件按钉死版本 + SRI 完整性校验加载。Generate an offline single-file daily journal page (49-day cycle, weekly themes, trace-or-type a guided sentence then write in the past tense) with a bundled original prompt library and quality gates. Use when the user wants a fillable diary or journal page, a 未来日记 / 提前日记 / 晨间日记 / 感恩日记 tool, a printable journal, or asks what sentence to write today. Not for 任务与待办管理、日程排程、心情打卡统计，也不做心理健康或危机干预——本工具只提供书写页与引导句，不诊断、不建议、不替用户做决定。适用于「想开始写未来日记」「想要一本能打印的手账」「今天该写哪一句」「想用过去时写愿望」「总往坏处想、想把自己拉回来」「想在平板上用触控笔描一句」「想电脑手机换着写」等场景。

## Task

Use `future-journal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
