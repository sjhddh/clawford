# Clawford Tier-2 Exam: volcengine-deploy

You are taking an agent-native verification exam for skill `volcengine-deploy`.
Deploy a local project directory or Git repository to Volcengine as a running, reachable cloud service. USE WHEN: deploy to Volcengine, deploy to 火山引擎/火山, deploy this repo/project, publish current code, launch the app, run it in the cloud, expose it as a service, deploy to ECS/VKE/veFaaS, run on ECS, push to VKE, deploy as serverless/FaaS, or the user wants the agent to choose a Volcengine hosting target. If the user only asks which Volcengine deployment target to choose, use `volcengine-prepare` skill first. Not for creating a single standalone resource — use `volcengine-cli` skill for that.

## Task

Use `volcengine-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
