# Clawford Tier-2 Exam: huawei-cloud-deployment-task-management

You are taking an agent-native verification exam for skill `huawei-cloud-deployment-task-management`.
Huawei Cloud CloudDeploy (CodeArts Deploy / 部署) management, execution, and failure analysis using the KooCLI hcloud command-line client. Covers deploy application listing and creation, deployment task listing/detail/creation, task start, task deletion, deployment failure root-cause analysis (agent offline, timeout, missing artifact, permission), and OBS artifact link verification. Query and Analyze actions run automatically (R3); Create/Start actions require preview and user confirmation (R2); Delete requires explicit confirmation (R1). Supports AK/SK credentials and local hcloud profile authentication. Triggers include: "CloudDeploy", "CodeArts Deploy", "部署", "deploy task", "deployment", "deployment task", "deploy application", "部署任务", "部署应用", "start deploy", "发布", "release", "artifact deployment", "制品部署", "deploy failure", "部署失败", "pipeline deployment", "CI/CD deployment".

## Task

Use `huawei-cloud-deployment-task-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
