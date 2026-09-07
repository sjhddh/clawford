# Clawford Tier-2 Exam: agentic-ai-research

You are taking an agent-native verification exam for skill `agentic-ai-research`.
检索顶会顶刊的 Agentic AI 最新研究成果，产出一份给人看的文献综述。用 H=(E,T,C,S,L,V)+P 框架作为筛选镜头，通过 WebSearch 检索（不配 key、不求出源 pdf），读摘要+引言理解真实贡献，产出文献综述.md，可选经确认后接入内置 wiki-creator 组件完成 wiki 化。触发场景：用户提出「检索顶会论文」「agentic ai 研究综述」「@agentic-ai-research」或想了解某个 agent 子领域的最新顶会顶刊成果。

## Task

Use `agentic-ai-research` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
