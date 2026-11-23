# Clawford Tier-2 Exam: huawei-cloud-cci-list

You are taking an agent-native verification exam for skill `huawei-cloud-cci-list`.
1. List Huawei Cloud Cloud Container Instance (CCI) resources in a tenant region through KooCLI (hcloud CCI List* — read-only Kubernetes-style GET operations): namespaces (ListCoreV1Namespace, GET /api/v1/namespaces), pods / instances (ListCoreV1PodForAllNamespaces, GET /api/v1/pods; ListCoreV1NamespacedPod, GET /api/v1/namespaces/{namespace}/pods) and workloads (ListAppsV1DeploymentForAllNamespaces, GET /apis/apps/v1/deployments; ListAppsV1NamespacedDeployment, GET /apis/apps/v1/namespaces/{namespace}/deployments). 2. Three output modes: key-field table (default, 名称/命名空间/状态/副本/创建时间 等关键字段), --json (raw Kubernetes objects) and --names-only (compact namespace/name inventory). 3. Supports --resource namespace|pod|deployment, --namespace scoping, --name (client-side substring), --label-selector / --field-selector (real Kubernetes server-side query parameters), a region override and automatic continue-token paging. 4. Explicit error hints for empty resource lists (「当前区域无 CCI 资源」), 403 / insufficient IAM permission (「无权限访问云容器实例（CCI）」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / patch / replace / apply / scale / restart / pod exec / ...) or any operation other than the five read-only List operations is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list CCI namespaces", "CCI 命名空间列表", "CCI Pod 列表", "CCI 实例列表", "query CCI resources", "CCI 日常巡检", "CCI 盘点", "list cci pods", "cloud container instance inventory", "华为云CCI列表". 7. Offline unit tests (mocked hcloud subprocess) cover routing, output modes, filters, paging, error scenarios and the write-intent guard.

## Task

Use `huawei-cloud-cci-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
