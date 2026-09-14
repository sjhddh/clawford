# Clawford Tier-2 Exam: alibabacloud-ecs-gpu-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-ecs-gpu-diagnosis`.
Diagnose GPU issues on Alibaba Cloud ECS GPU instances: GPU device status, driver issues, and GPU hardware failures. Use when users ask to check the GPU status of their GPU instances, detect whether the GPU device is visible, verify that the GPU driver is installed correctly, or troubleshoot GPU anomalies such as GPU not visible or deep learning task failures. Run Console Diagnosis or Cloud Assistant Diagnosis (RunCommand) to detect GPU hardware failures, perform batch diagnosis of GPU servers, or create scheduled (periodic) diagnosis tasks via CreateCommand and InvokeCommand with Cron. Single-instance diagnosis runs Console Diagnosis and Cloud Assistant Diagnosis in parallel; batch and scheduled diagnosis use Cloud Assistant Diagnosis only. Supports streaming output of diagnostic results.

## Task

Use `alibabacloud-ecs-gpu-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
