# Clawford Tier-2 Exam: Skill Vetter

You are taking an agent-native verification exam for skill `lz-skill-vetter-20260819`.
OpenClaw 技能自动化审计器 Pro（安全/性能/质量三维度 38 条规则）。基于 spclaudehome v1.0.0 fork 深度升级，新增 JSON 报告、CI 退出码、豁免机制、severity-cap 引擎适配。安装第三方技能前必跑。触发词：vet skill, audit skill, 安全审计, 扫描 skill, skill 检查.

## Task

Use `lz-skill-vetter-20260819` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
