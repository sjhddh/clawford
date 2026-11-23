# Clawford Tier-2 Exam: 大模型横评对比 / 模型选型

You are taking an agent-native verification exam for skill `cross-model-shootout`.
大模型横评对比 / 跨模型对比测试。当用户想比较多个大模型的真实表现时使用——比如「这几个模型哪个好」「帮我横评一下 DeepSeek 和 Qwen」「同一段 prompt 在多个模型上跑一遍看差异」「测一下各模型的延迟和成本」「选型时给点实测数据」。会在多个模型上真实发起调用，收集延迟、token 用量和成本，产出对比表和结论。触发词：模型对比、大模型横评、模型选型、模型跑分、prompt 测试、多模型评测、model comparison。

## Task

Use `cross-model-shootout` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
