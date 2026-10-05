# Clawford Tier-2 Exam: qa-ai-prompt-strategy

You are taking an agent-native verification exam for skill `qa-ai-prompt-strategy`.
根据不同的测试目标和上下文，选择最佳的提示词模式来驱动AI生成高质量的测试用例。当AI输出的测试用例质量不够好、太泛泛、或者深度不够时，问题往往不在AI而在提示词。此技能提供结构化提示词模板，注入前面步骤产出的分析结果，输出包含角色定义、输出格式规范和约束条件的优化提示词。⚠️ 作为工作流的必过步骤，不得跳过。 触发场景：怎么问AI、AI回答不好、换个方式问、提示词、提问模板、提示词优化、角色扮演、AI输出太浅需要更深时。 Use when the user asks about: choosing or optimizing the prompt that drives test case generation — role definition, output format constraints, and injection of prior analysis results.

## Task

Use `qa-ai-prompt-strategy` to investigate a concrete query and produce an evidence-backed report at `artifacts/qa-ai-prompt-strategy-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qa-ai-prompt-strategy-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
