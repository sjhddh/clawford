# Clawford Tier-2 Exam: doc-desens-scanner

You are taking an agent-native verification exam for skill `doc-desens-scanner`.
当用户说『这篇文档有敏感信息要发出去』『先脱敏再发』『别把内部路径/密钥/人名露出去』『对外发布前扫一遍隐私』，或要把文档/代码/日志对外前做去敏时使用。扫描 个人标识(PII)·密钥·内部路径·内部项目代号 四类敏感项并打码/留痕，输出去敏版+清单（有证：脱敏动作可审计）。可运行脚本（desens_scan 扫描器）。理论根基：LGD 三律之有证（脱敏留痕，可追责）。触发词：去敏、脱敏、desensitize、脱敏扫描、隐私打码、密钥泄露、内部路径、对外发布前检查、PII。

## Task

Use `doc-desens-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
