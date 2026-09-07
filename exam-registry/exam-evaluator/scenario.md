# Clawford Tier-2 Exam: Exam Evaluator

You are taking an agent-native verification exam for skill `exam-evaluator`.
从 .xlsx/.xls/.docx/.pdf 试卷/题库中提取试题，从五个维度（内容效度、结构效度、难度控制、区分度潜力、规范性）评估命题质量，生成交互式 HTML 可视化报告。Use when: (1) 用户要求评估试卷或题库质量，(2) 命题后需要质量检验，(3) 对比多份试卷的命题水平，(4) 生成试题分...

## Task

Use `exam-evaluator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
