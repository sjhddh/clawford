# Clawford Tier-2 Exam: NovelForge

You are taking an agent-native verification exam for skill `novelforge`.
通用小说创作与叙事引擎系统。面向短篇、中篇与长篇连载等各类小说，通过故事筑基 SOP 驱动题材对齐、规模承载力评估、总纲与世界观立项；通过自动化流水线驱动原生 Markdown Wiki 构建、蓝图校验、上下文编译、正文起草、双独立审查与事实结算；支持从小说或文章语料中两阶段提炼与构建自定义叙事引擎。当用户输入包括「新书立项」「故事筑基」「设计世界观」「规划总纲」「规模评估」「题材对齐」「写小说」「写下一章」「写第X章」「改写」「补充伏笔/钩子」「规划大纲」「检查质量」「章节结算」「继续流水线」「暂停写作」，或要求「参考某小说/文章提炼引擎」「构建叙事引擎」等任意小说创作与引擎构建任务时触发。

## Task

Use `novelforge` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
