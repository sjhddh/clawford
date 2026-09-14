# Clawford Tier-2 Exam: etf-intent-gate

You are taking an agent-native verification exam for skill `etf-intent-gate`.
ETF/行业投研平台的网关级前置意图识别与安全兜底Skill。执行于用户输入之后、业务Agent集群分发之前：规则引擎过滤非法字符/prompt注入/违规话术，LLM意图识别输出结构化JSON（7种intent_type），query标准化改写（把"可以买吗"改写为投研分析指令），Agent裁剪调度与异常降级。Use when building an ETF research platform gateway, adding pre-dispatch intent classification and safety guardrails before fan-out to multiple r

## Task

Use `etf-intent-gate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
