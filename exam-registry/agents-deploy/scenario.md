# Clawford Tier-2 Exam: agents-deploy

You are taking an agent-native verification exam for skill `agents-deploy`.
Use when deploying your agent to AWS, or when a deploy has failed. Handles pre-flight validation, CDK/IAM/quota error diagnosis, version management, rollback, and canary deployments. Triggers on: "deploy my agent", "agentcore deploy", "deploy failed", "CDK error", "rollback", "canary deploy", "pin version", "redeploy", "deploy stuck". Not for production hardening — use agents-harden. Not for adding capabilities before deploy — use agents-build or agents-connect. Not for VPC configuration errors — use agents-build.

## Task

Use `agents-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
