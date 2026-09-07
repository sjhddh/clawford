# Clawford Tier-2 Exam: mckinsey-library

You are taking an agent-native verification exam for skill `mckinsey-library`.
麦肯锡风格咨询交付 skill（中文名「麦肯锡资料库顾问」）。核心差异：方法论不是通用知识，而是直接来自用户提供的 44 份真实麦肯锡资料库（已全量吸收、逐份落位）。客户上传材料后，先用七步成诗锁定问题，自主搜集并评估外部资料填补证据缺口，生成故事线 md，确认后出 PPT+战略文档+演讲稿三件套。具备：50+ 可视化布局目录、AX Labs 式可解释布局选型、python-pptx 复用绘图引擎、Critic 视觉质量门、端到端自主编排。触发：帮我做咨询方案、根据资料出 PPT、用麦肯锡方法梳理故事线、结构化客户输入、搜集外部资料支撑论证、写演讲稿、做图表/可视化。

## Task

Use `mckinsey-library` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
