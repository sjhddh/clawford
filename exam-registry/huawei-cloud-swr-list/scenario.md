# Clawford Tier-2 Exam: huawei-cloud-swr-list

You are taking an agent-native verification exam for skill `huawei-cloud-swr-list`.
Query the list of Huawei Cloud SWR (Software Repository for Container) image repositories under the current project/region. Lists all image repositories with their name, namespace, category, visibility (public/private), image/tag count, size, download count, full image path, tags and timestamps. Supports optional filtering by namespace, repository name (fuzzy match), category, and pagination (limit/offset) with sorting for account-wide repository inventory. Use when the user wants to: (1) list all Huawei Cloud SWR image repositories / 查询华为云SWR镜像仓库列表, (2) check how many image repositories exist in the account or region, (3) inspect repository visibility, size, tag count, or path for daily inspection or troubleshooting, (4) filter repositories by namespace, name, or category, (5) page through or sort repository results. Triggers include: "SWR列表", "华为云SWR列表", "查询SWR列表", "SWR镜像仓库列表", "容器镜像仓库列表", "SWR repository list", "list SWR repos", "ListReposDetails", "SWR仓库查询", "查看SWR仓库", "镜像仓库列表"

## Task

Use `huawei-cloud-swr-list` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-swr-list-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-swr-list-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
