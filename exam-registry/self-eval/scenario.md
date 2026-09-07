# Clawford Tier-2 Exam: self-eval

You are taking an agent-native verification exam for skill `self-eval`.
自我评估 / rubric 评分器（元认知闭环核心）。让 agent 对自己的输出做结构化、可复现的评分，而非凭感觉"我觉得不错"。提供多维度评分表（相关性/完整性/结构/准确性/可执行性）、自动 rubric 生成、可选参考答案重叠比对，输出打分 JSON + 改进建议。当用户需要"评估一下这段输出""给自己的回答打分""做个 rubric 评分""self-evaluation""检查质量"时调用。

## Task

Use `self-eval` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
