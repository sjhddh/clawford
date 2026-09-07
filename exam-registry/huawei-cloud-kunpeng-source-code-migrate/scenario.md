# Clawford Tier-2 Exam: huawei-cloud-kunpeng-source-code-migrate

You are taking an agent-native verification exam for skill `huawei-cloud-kunpeng-source-code-migrate`.
Analyze the migrability of C/C++/ASM/Fortran/Go/Java/Python/Scala source code to Kunpeng (ARM64) platform using Huawei DevKit CLI tool. Connect to the source server via SSH, install DevKit, scan source code, and generate a migration assessment report. If the user does not have a remote server, this skill can automatically provision a Kunpeng ECS instance on Huawei Cloud (Guiyang Region 1) using hcloud CLI. Use this skill when the user wants to: (1) assess source code portability/migrability to Kunpeng ARM platform, (2) scan C/C++/ASM/Fortran/Go/Java/Python/Scala code for migration issues, (3) generate a Kunpeng migration report for their software project, (4) check source code compatibility with ARM64/Kunpeng architecture, (5) provision a Kunpeng server on Huawei Cloud for migration assessment. Trigger: user mentions "鲲鹏移植", "鲲鹏迁移", "Kunpeng migration", "Kunpeng porting", "源码迁移", "源码移植", "ARM64迁移", "ARM移植评估", "DevKit", "可迁移性分析", "migrability", "porting assessment", "migration report", "鲲鹏评估", "购买鲲鹏服务器", "鲲鹏云服务器", "Kunpeng ECS"

## Task

Use `huawei-cloud-kunpeng-source-code-migrate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
