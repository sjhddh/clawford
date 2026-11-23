# Clawford Tier-2 Exam: huawei-cloud-elb-list

You are taking an agent-native verification exam for skill `huawei-cloud-elb-list`.
1. List Huawei Cloud Elastic Load Balance (ELB) load balancers in a tenant region through KooCLI (hcloud ELB ListLoadbalancers — read-only GET /v3/{project_id}/elb/loadbalancers), with an automatic fallback to the official huaweicloudsdkelb v3 SDK when hcloud is not installed. 2. Output modes: standardized table (default, exactly two columns — ID and 名称, no other fields), --json (raw response array with every returned field), and --names-only (compact load balancer name list). 3. Every list query (default table or --names-only) also generates a Markdown document whose content is the standardized ID + 名称 list (Markdown table `| ID | 名称 |`). It is written to `elb-list.md` by default; use `--md-out <path>` to change the path (missing parent directories are created automatically) or `--no-md` to disable. `--json` never writes the document. 4. Supports --id / --name / --vpc-id / --provisioning-status / --operating-status / --enterprise-project-id / --vip-address filtering (all real server-side ListLoadbalancers query parameters), region override, --project-id, and automatic marker paging. 5. Explicit error hints for empty ELB lists (「当前区域无负载均衡器（ELB）」), 403 / insufficient IAM permission (「无权限访问弹性负载均衡（ELB）」), missing or invalid AK/SK credentials, missing project_id on the SDK fallback, and hcloud not installed. 6. Built-in write-intent guard: any mutating intent (create / delete / update / modify / clone / restore / enable / disable / associate / detach / change) or any operation other than ListLoadbalancers is rejected before execution — this skill is strictly read-only. 7. Triggers include: "list ELB", "elb list", "负载均衡器列表", "查询 ELB", "查询负载均衡器", "ELB 实例列表", "elastic load balancer inventory", "list loadbalancers", "华为云 ELB", "负载均衡器名称列表". 8. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, marker paging, error scenarios, SDK fallback, the standardized output, the Markdown generation, and the write-intent guard.

## Task

Use `huawei-cloud-elb-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
