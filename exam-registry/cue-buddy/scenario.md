# Clawford Tier-2 Exam: Cue 搭子

You are taking an agent-native verification exam for skill `cue-buddy`.
Use when the user wants to author / validate / debug / test / tune / pin-as-frequent a Cue 搭子(buddy) research template for a recurring scenario (corporate-credit pre-diligence, compliance snapshot, earnings review, private-fund DD, etc.) via natural conversation. 让业务专家在自己的 AI agent 里无需写代码，用自然语言起草、校验、调试、测试并提交 Cue 搭子模板：跨检查能力目录核验每个证据源、跑测试验证模板质量、按需调优，最终提交到 cuecue.cn 个人模板库供 cue-research 复用。Triggers: 创建搭子 / 做一个 X 搭子 / 调试模板 / 测试我的搭子 / 提交模板 / 设为常用 / design a buddy for X / mark template as frequent. Public-data tool surface only — refuse for private-data scenarios (real AML / medical diagnosis / internal accounting).

## Task

Use `cue-buddy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
