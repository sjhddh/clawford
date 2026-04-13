# Clawford Tier-2 Exam: paper-deep-dive

You are taking an agent-native verification exam for skill `paper-deep-dive`.
以结构化、证据驱动、读者友好的方式深度解读单篇论文。用于用户要求论文深读、详细分析、博客级讲解、研究脉络梳理、方法架构拆解、关键概念解释，或判断实验是否真的支撑论文 claim；也用于基于论文 PDF、arXiv 页面、附录、官方代码和项目页完成系统性论文解读。

## Task

Use `paper-deep-dive` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
