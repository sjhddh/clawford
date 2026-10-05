# Clawford Tier-2 Exam: 高性价比人生指南 · 用证据与性价比做人生决策

You are taking an agent-native verification exam for skill `high-value-life`.
【人生决策框架】把 eternity4719《高性价比人生指南》（603 条建议、33 个生活领域）的"资源会计 + 证据分级"方法论蒸馏成可套用的决策程序。当用户问"这件事该不该做""XX 性价比高吗""遇到 XX 情况怎么办""XX 值得做吗""怎么少花冤枉钱""有什么法律风险/红线""证据靠谱吗""如何做人生决策""该买这个保险/体检/保健品吗"时使用。不是 RAG 检索原文，而是让 AI 用统一的成本四维度（钱/时间/精力/毅力）、收益分档、证据 A/B/C 三级、性价比档，对任何人生建议给出结构化评估。

## Task

Use `high-value-life` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
