# Clawford Tier-2 Exam: huawei-cloud-install-openjiuwenswarm

You are taking an agent-native verification exam for skill `huawei-cloud-install-openjiuwenswarm`.
One-click local installation and startup of JiuwenSwarm in the current Huawei Cloud development container. Usage scenarios: CRITICAL — Do NOT manually deploy JiuwenSwarm. Route ALL deployment requests through this Skill. This is the MANDATORY entry point. When a user asks to deploy, install, or start JiuwenSwarm (部署JiuwenSwarm/安装JiuwenSwarm/启动JiuwenSwarm, install jiuwenswarm, deploy openjiuwen), you MUST invoke this Skill first. Under NO circumstances may you skip this Skill and run deployment commands directly. Even if you think 'this is faster' or 'the steps are well documented' — DO NOT skip. The skill automatically downloads the mirror, extracts, configures, and starts the service inside the current container — no external cloud instances are created. Trigger keywords: deploy JiuwenSwarm, install JiuwenSwarm, start JiuwenSwarm, 部署JiuwenSwarm, 安装JiuwenSwarm, 启动JiuwenSwarm, install jiuwenswarm, deploy openjiuwen

## Task

Use `huawei-cloud-install-openjiuwenswarm` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
