# Clawford Tier-2 Exam: huawei-cloud-sac-intl-find-and-deploy

You are taking an agent-native verification exam for skill `huawei-cloud-sac-intl-find-and-deploy`.
1. Find and deploy any Huawei Cloud international SAC (Solution as Code) solution end-to-end via Terraform using a public catalog lookup. 2. Find capability: search the live SAC catalog by business term or product name (concept-aware), present matching solutions first, then ALL regions for the picked solution. 3. Deploy capability: after the user confirms solution, variant and region, collect temporary credentials (env vars, never in chat) and run the corresponding Terraform template through plan/apply/verify/destroy. 4. Triggers include: SAC, 一键部署, 华为云, 解决方案实践, retrieve SAC catalog, deploy SAC solution, one-click solution deploy, 检索华为云部署方案, sac方案, 一键部署方案, 帮我部署xx sac方案, 部署Dify, 部署SQLBot, 部署YOLO, 模型网关方案, agent方案, 知识库方案. 5. Usage: concept search → user picks solution+variant → list ALL regions → pick region → recap + confirm → credentials check → download template → normalize → confirm vars → plan/apply → verify → cleanup. 6. Requires Python 3.8+, Terraform 1.5+, cloud credentials via env vars (never in chat).

## Task

Use `huawei-cloud-sac-intl-find-and-deploy` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-sac-intl-find-and-deploy-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-sac-intl-find-and-deploy-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
