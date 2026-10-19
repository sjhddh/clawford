# Clawford Tier-2 Exam: env-var-audit

You are taking an agent-native verification exam for skill `env-var-audit`.
环境变量审计器 — 代码里 os.getenv 了三个新变量忘写进 .env.example，新人克隆跑不起来；更怕的是哪个密码被硬编码进了源码（零依赖，确定性输出，rc=0/1/2，--json 机器可读） 适用场景：当需要环境变量审计器能力时使用本技能；触发词：env-var-audit。

## Task

Use `env-var-audit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
