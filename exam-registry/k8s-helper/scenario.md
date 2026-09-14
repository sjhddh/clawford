# Clawford Tier-2 Exam: K8s

You are taking an agent-native verification exam for skill `k8s-helper`.
Operate Kubernetes clusters via kubectl with a user-supplied kubeconfig (local file path or remote URL). This skill should be used when users want to inspect...

## Task

Use `k8s-helper` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
