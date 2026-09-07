# Clawford Tier-2 Exam: autonomous-deep-research

You are taking an agent-native verification exam for skill `autonomous-deep-research`.
自主深度研究（整合与进阶·元能力）。给定一个开放研究问题，agent 自主完成： 问题分解→多源检索(rag / web-fetch)→综合与交叉验证→反思覆盖度→迭代逼近答案。 对标一线大模型智能体的「深度研究」能力（如 Deep Research），且可离线/在线双模运行、 自带置信度校准与未解缺口标记。当需要对一个复杂、多侧面问题做有依据、可追溯、可迭代的研究时使用。

## Task

Use `autonomous-deep-research` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
