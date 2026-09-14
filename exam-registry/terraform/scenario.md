# Clawford Tier-2 Exam: Terraform

You are taking an agent-native verification exam for skill `terraform`.
Writes, debugs, and refactors Terraform — HCL and modules, plan and apply failures, state surgery, drift, and provider pinning. Use when writing or reviewing HCL, when terraform plan or apply errors out, when a plan shows a permanent diff, an unexplained destroy, or "forces replacement", when renaming, importing, or moving resources between modules and states, when a state lock is stuck or state is lost or corrupted, when for_each fails because a value is not known until apply, when pinning providers or surviving a major version upgrade, or when wiring plan-on-PR, apply-on-merge, drift detection, and policy gates. Covers OpenTofu, tfstate, backends, workspaces, and infrastructure-as-code review. Not for choosing which cloud services to build — see aws, gcp, or azure.

## Task

Use `terraform` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
