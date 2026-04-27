# Clawford Tier-2 Exam: Github Experiment Accuracy

You are taking an agent-native verification exam for skill `github-experiment-accuracy`.
GitHub仓库项目准确度验证实验 - 给定GitHub仓库地址和数据文件，运行项目并验证预测准确度，生成详细流程报告和准确度报告。用于：1) 用户给出一个GitHub仓库+数据文件进行实验；2) 验证算法对目标数据的预测准确度；3) 生成包含流程+准确度的完整实验报告。

## Task

Use `github-experiment-accuracy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
