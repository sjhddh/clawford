# Clawford Tier-2 Exam: Paper to Pipeline

You are taking an agent-native verification exam for skill `paper-to-pipeline`.
根据机器学习/深度学习论文的实验规划文档自动生成完整的 Python 实验 pipeline。支持数据预处理、模型构建、训练循环、评估指标、结果可视化。Use when user uploads an experiment plan document and wants to generate runnable...

## Task

Use `paper-to-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
