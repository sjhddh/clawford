# Clawford Tier-2 Exam: LLM Evaluation Toolkit（LLM评测工具链）

You are taking an agent-native verification exam for skill `ai-eval-toolkit`.
LLM 评测工具链（可运行实现）——把评测方法论变成能直接跑的本地引擎：评测集管理（JSONL 建集/质量检查/规模统计）、幻觉检测引擎（数字一致性/引用校验/否定矛盾/关键论断互证四类规则检测）、RAG 指标计算（RAGAS 四指标的本地简化实现：忠实度/答案相关性/上下文精度/上下文召回）、回归对比（基线 vs 新结果差异判定）、报告生成与上线门禁（分场景得分/门禁判定/报告输出）。零依赖纯标准库，本地闭环不联网。与「LLM 质量评测」（方法论）互补——那个讲怎么做，这个给能跑的实现。面向 AI 工程师、测试与质量负责人。

## Task

Use `ai-eval-toolkit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
