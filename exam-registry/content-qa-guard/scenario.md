# Clawford Tier-2 Exam: content-qa-guard

You are taking an agent-native verification exam for skill `content-qa-guard`.
内容合规审核守卫(v25.0合并content-compliance-checker)，三级审核(敏感词→AI语义→平台规则)+U19管道合规步骤(委托risk-detector 10类风险检测)。触发:内容审核/合规检查/敏感词检测/发布前审核/文案审核/U19/风控检查 不触发:内容发布/内容生成/价格调整

## Task

Use `content-qa-guard` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
