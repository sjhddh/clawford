# Clawford Tier-2 Exam: LLM Output Explainer

You are taking an agent-native verification exam for skill `llm-output-explainer`.
卡帕西 LLM 输出讲解方法论（Explain It Like I'm ...）。当用户要求把复杂概念、论文、代码、产品、方案、调研结果"讲清楚/讲明白/深入浅出/通俗讲解/做个讲解/explain like I'm X"、要求面向特定受众（领导/客户/新员工/公众/跨部门）改写或呈现内容、或要求生成讲解类工件（STE100 受控语言文本、修辞性 Mermaid 图表、单文件 HTML 交互讲解页、Manim 讲解视频、一次性演示工具）时使用。流程：受众四问 → 决策矩阵选机制 → 分层拆解 → 生成 → 验收清单自检 → 交付。仅在用户需要"讲解/理解/呈现"时触发；普通总结、翻译、润色任务不要触发。

## Task

Use `llm-output-explainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
