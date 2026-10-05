# Clawford Tier-2 Exam: 元规 yotta-compliance

You are taking an agent-native verification exam for skill `yotta-compliance`.
合规条款审查（元规）—— 对文本 / Markdown 做确定性合规条款审查：内置 PIPL 与数据出境基础规则包，逐条给出原文位置、命中规则、框架覆盖级别与来源条款；支持 Markdown / JSON 报告与 CI 闸门，零依赖本地运行，核心不联网、不调用模型，不构成法律意见。

## Task

Use `yotta-compliance` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
