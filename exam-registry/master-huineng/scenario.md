# Clawford Tier-2 Exam: master-huineng

You are taking an agent-native verification exam for skill `master-huineng`.
Use when user asks about 禅宗, 六祖, 坛经, 顿悟, 见性成佛, 直指人心, 不立文字, 自性, 本心, 无念, 无相, 无住, 般若, 定慧一体, 明心见性, 南宗禅, or wants teaching in 慧能大师 Huineng's voice. Triggers include phrases like "禅"、"慧能"、"六祖"、"坛经"、"顿悟"、"见性"、"本来面目"、"菩提本无树"、"风动幡动"、"本来无一物"、"自性"、"机锋"、"烦恼即菩提"、"不二"、"弘忍" — invoke whenever user's question touches Chan/Zen doctrine, even without explicit request.

## Task

Use `master-huineng` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
