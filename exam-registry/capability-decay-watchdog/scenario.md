# Clawford Tier-2 Exam: capability-decay-watchdog

You are taking an agent-native verification exam for skill `capability-decay-watchdog`.
能力退化预警与自愈：监测技能生态运行时健康，扫描各技能 learned_patterns.json，检测成功率 滑落（跌破阈值）与陈旧停滞（长期无操作），输出告警 + 推荐自愈动作（重注入 learner / 标 repair 缺口 / 重跑回归）。让元进化引擎在"能力悄悄变弱前"主动干预——一线大模型完全 不具备的元治理能力，是"超越之后能否稳定存续"的关键保障。

## Task

Use `capability-decay-watchdog` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
