# Clawford Tier-2 Exam: huawei-cloud-codearts-list

You are taking an agent-native verification exam for skill `huawei-cloud-codearts-list`.
1. List Huawei Cloud CodeArts resources (read-only) in a tenant region/project through KooCLI, routing by --resource to the correct CodeArts list API: projects (ProjectMan ListProjectsV4, GET /v4/projects), repos (CodeArtsRepo ListProjectRepositories, GET /v4/projects/{project_id}/repositories), pipelines (CodeArtsPipeline ListPipelines, POST /v5/{project_id}/api/pipelines/list), deploy-tasks (CodeArtsDeploy ListDeployTasks, GET /v2/{project_id}/tasks/list). Automatic fallback to the matching official Python SDK (huaweicloudsdkprojectman / huaweicloudsdkcodeartsrepo / huaweicloudsdkcodeartspipeline / huaweicloudsdkcodeartsdeploy) when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 名称/ID/状态/项目/可见性), --json (raw response items), and --names-only (compact name + ID inventory). 3. Project-scoped resources (repos / pipelines / deploy-tasks) take --project-id; when omitted the skill auto-resolves it from the project list and proceeds only if exactly one project exists. 4. Supports --name filtering (server-side where the API exposes it, client-side otherwise), client-side --status filtering, --region override (default cn-north-4) and automatic paging (offset/limit or page/size). 5. Explicit error hints for empty lists (「无 CodeArts 资源」), 403 / insufficient IAM permission (「请检查 IAM 权限」), missing or invalid AK/SK credentials, and hcloud not installed. 6. Built-in write-intent guard: any mutating intent (create / delete / update / run / start / stop / merge / batch ...) or any operation other than the four read-only List operations is rejected before execution — strictly read-only. 7. Offline unit tests (mocked hcloud subprocess) cover routing, output modes, filters, paging, project auto-resolution, error scenarios, SDK fallback, and the write-intent guard. 8. Triggers include: "list CodeArts projects", "CodeArts 项目列表", "查询CodeArts项目", "代码托管仓库列表", "CodeArts Repo 仓库列表", "流水线列表", "CodeArts Pipeline 列表", "部署任务列表", "CodeArts Deploy 任务", "CodeArts inventory", "DevOps 资产盘点", "华为云CodeArts列表".

## Task

Use `huawei-cloud-codearts-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
