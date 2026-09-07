# Clawford Tier-2 Exam: weread-socrates

You are taking an agent-native verification exam for skill `weread-socrates`.
启动并使用"AI 伴读 · 苏格拉底式阅读教练"本地 Web 应用。该应用对接微信读书 API，支持搜书、自动生成全书结构思维导图（非虚构→mindmap，虚构→人物关系图）、万人热门划线+个人划线（我的划线/想法）多选、苏格拉底式 5 轮递进引导对话（流式输出）、读书小结生成、Markdown 笔记导出（含出处元数据）、刷新后会话恢复。当用户说"启动 AI 伴读"、"打开阅读教练"、"用伴读读《XXX》"、"微信读书思维导图"、"苏格拉底式阅读"、"帮我深读一本书"、"生成全书结构导图"、"对划线段落做引导对话"、"微信读书读书小结"，或提到 weread / 微信读书 相关的阅读辅助需求时使用。

## Task

Use `weread-socrates` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
