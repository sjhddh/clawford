# Clawford Tier-2 Exam: aws-resilience-lifecycle

You are taking an agent-native verification exam for skill `aws-resilience-lifecycle`.
Guides the end-to-end AWS resilience lifecycle integrating Resilience Hub v2, Fault Injection Service, and Application Recovery Controller. Covers the Define → Test → Operate workflow: from policy creation through failure mode assessment, to FIS experiment validation, to ARC operational controls. Applicable when the user wants a complete resilience strategy, needs to connect findings to experiments to controls, or is planning a resilience program. Also applicable for the meta question of whether marking NGRH findings as resolved is enough, whether they are "done" after resolving findings, or how to validate findings before resolving them. Not applicable for resolving or remediating a specific individual finding (see resilience-hub-failure-mode-assessment), or when a single service is explicitly named (e.g. "what FIS experiment should I run").

## Task

Use `aws-resilience-lifecycle` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
