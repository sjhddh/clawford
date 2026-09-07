# Clawford Tier-2 Exam: 应用题数学建模教练

You are taking an agent-native verification exam for skill `xiaozhi-math-word-problem-coach`.
初中数学应用题的"文字→方程"专项：只处理列不出式子这一步。典型触发："这道数学应用题读了三遍不知道怎么列方程""不知道设什么为x""行程/工程/浓度/利润/增长率题总是列错式子""条件之间的关系理不清"。核心方法：数量关系三步提取法（识别量→用中文说关系→翻译成等式）。不处理：方程列出来之后的解方程与计算（转 xiaozhi-math-problem-solving-coach）、纯几何/代数运算题、错题收录与统计（转 xiaozhi-correction-notebook）、概念本身没建立（转 xiaozhi-math-concept-explainer）、物理的受力/电路应用题（转物理 SKILL）。

## Task

Use `xiaozhi-math-word-problem-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
