# Clawford Tier-2 Exam: huawei-cloud-obs-lifecycle-management

You are taking an agent-native verification exam for skill `huawei-cloud-obs-lifecycle-management`.
Manage Huawei Cloud OBS (Object Storage Service) lifecycle policies: list/get lifecycle rules, list bucket objects, diagnose why a lifecycle rule is not taking effect, analyze lifecycle-vs-storage-cost trade-offs, dry-run preview which objects a rule would affect, and create/update/delete lifecycle rules (R2/R1 require preview + user confirmation). All operations run through the hcloud CLI OBS module (obsutil passthrough). Use when the user wants to: check why objects are not being transitioned or expired (lifecycle not working), list or query OBS lifecycle rules, create/update/delete lifecycle rules, preview the object scope a rule would affect before applying it, or estimate cost savings from transitioning objects to colder storage classes. Triggers include: "OBS生命周期", "生命周期规则", "生命周期策略", "不生效", "未生效", "过期删除", "转储", "归档", "低频", "lifecycle", "lifecycle rule", "lifecycle policy", "expiration", "transition", "storage class", "OBS lifecycle not working", "obs lifecycle diagnose", "dry-run", "preview lifecycle rule".

## Task

Use `huawei-cloud-obs-lifecycle-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
