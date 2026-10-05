# Clawford Tier-2 Exam: agent-redteam-kit

You are taking an agent-native verification exam for skill `agent-redteam-kit`.
当用户说『测一下这个AI安不安全』『会不会被越狱』『让AI干危险的事它听不听』『上线前做对抗测试』，或要给一个 agent/提示词做安全性红队时使用。中英双库扫描越狱/危险能力请求（DAN/忽略指令/提权/数据外泄/自改进等），给出风险分级+加固建议，并设「危险操作闸门」（有门禁）。可运行脚本（redteam_scan 扫描器）。理论根基：LGD 三律之有门禁（危险动作先过闸）。触发词：红队、red team、越狱、jailbreak、对抗测试、prompt攻击、AI安全测试、危险指令、安全评估。

## Task

Use `agent-redteam-kit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
