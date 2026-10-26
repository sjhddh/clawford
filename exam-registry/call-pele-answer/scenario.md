# Clawford Tier-2 Exam: call-pele-answer

You are taking an agent-native verification exam for skill `call-pele-answer`.
按块路由的解释技能：给回答里的每一段内容挑最合适的形式（文字、表格、图、步骤、滑杆）。先画出回答的全貌， 拆成内容块，按每块的信息形状和理解障碍选形式：STE 风格文字、表格、Mermaid 图（内置渲染，30+ 种）、 滑块、标签页、分步播放；再决定载体：聊天里直接答，还是生成一页离线 HTML。模型只写 Markdown 稿件， bundled CLI 负责排版、配色、图的坐标和检查。用于：讲原理、讲流程/架构/状态、比较方案、复盘诊断、 教学演示，或用户说“讲讲 / 没看懂 / 画个图 / 对比一下 / 做成一页 / explain / how does X work”。 可选用 classifier.dev / TypeSafe System One 在 1 秒内逐块路由，并给同一块内容生成可切换的多种看法。 一句话能答清的问题、闲聊、用户要纯文本时不用。

## Task

Use `call-pele-answer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
