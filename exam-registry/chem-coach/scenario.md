# Clawford Tier-2 Exam: Chem Coach AI

You are taking an agent-native verification exam for skill `chem-coach`.
高考化学AI辅导系统。克隆名师化学思维与教学风格， 通过追问引导学生自主发现答案，而非直接给答案。 支持7种场景：拆解/解题/多解/变式/通法/诊错/引导。 每道题完成后自动触发"三一闭环四问"，与三一思维(求本→发散→创造)对齐。 内置化学专属功能：反应机理分析器、方程式智能检验、超纲信息翻译器、主线记忆引导。 内置计算验证协议，确保S2解题答案正确；选择题必须直接给出正确选项。 可选集成IMA知识库扩展题库检索能力。 核心功能无需任何配置即可使用。

## Task

Use `chem-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
