# Clawford Tier-2 Exam: InspirAI Deploy

You are taking an agent-native verification exam for skill `inspirai-deploy`.
智能部署工具 - 自动检测部署策略，预检查、发布、监控一体化。支持 K8s/Helm、Docker Compose、Vercel、Fly.io。Triggers: '部署', 'deploy', '发布', '上线', '预检查', '部署监控', 'helm upgrade', 'docker compose...

## Task

Use `inspirai-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
