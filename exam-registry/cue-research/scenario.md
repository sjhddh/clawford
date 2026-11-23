# Clawford Tier-2 Exam: Cue 深研

You are taking an agent-native verification exam for skill `cue-research`.
Use when the user asks a research question they want Cue to run — against a saved 搭子(buddy) template or as free-form deep research. 在 AI agent 里用自然语言把调研问题交给 Cue 深研平台：自动匹配 ≤2 个搭子（或走带隐私脱敏与公开信源约束的自由式深研），确认 credits 后后台执行，取回带来源链接的报告，满意可一键沉淀为搭子。Triggers: 帮我查/调研/研究 + 主体或话题; ask Cue about X; 用 Cue 跑一下 Y; 看看哪个搭子能查 X; 把刚才那次调研存成搭子. Public-data scope only — refuse for private-data scenarios (real AML / medical / internal accounting).

## Task

Use `cue-research` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
