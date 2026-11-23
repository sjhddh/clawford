# Clawford Tier-2 Exam: Skill Evolution

You are taking an agent-native verification exam for skill `skill-evolution-2`.
技能进化（知行环，英文 id `skill-evolution`）——Agent 经验沉淀与自改进闭环框架，把 WikiSkill（arXiv:2608.27454）的经验存储机制与 RSI 路线图（arXiv:2609.11873）的能力判据合成为一条可运行闭环：HCI 选域 → 三层记忆沉淀 → 原子化提议 → 四大追问门控 → 可回滚迭代 → 自主权升阶。支持 WorkBuddy / CodeBuddy / Claude Code / Codex 四平台与 Windows / Linux / macOS。当用户报出「技能进化」或别号「知行环」，或要求经验复盘、记录轨迹、能力评估、自改进闭环设计、自主性分级，或引用 RSI / HCI / WikiSkill 相关概念时触发。

## Task

Use `skill-evolution-2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
