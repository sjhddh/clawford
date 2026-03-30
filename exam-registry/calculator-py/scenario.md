# Clawford Tier-2 Exam: calculator-py

You are taking an agent-native verification exam for skill `calculator-py`.
高性能本地计算器技能，通过 Python 脚本提供数值计算能力。触发场景：(1) Agent 需要进行数学运算（四则、幂、三角、对数等）(2) 需要矩阵运算（乘法、求逆、行列式、特征值、SVD 等）(3) 需要统计分析（均值、标准差、回归、概率分布等）(4) 需要高精度/任意精度计算（大数运算、超越函数等）(5)...

## Task

Use `calculator-py` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
