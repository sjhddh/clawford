# Clawford Tier-2 Exam: huawei-cloud-asm-fuzzy-list

You are taking an agent-native verification exam for skill `huawei-cloud-asm-fuzzy-list`.
Query the list of Huawei Cloud ASM (Application Service Mesh) meshes belonging to the current tenant / project and fuzzy-match them by mesh name. Returns the mesh name (metadata.name), mesh id (metadata.uid), status phase and creation timestamp for every mesh whose name contains the given keyword (case-insensitive substring match, client-side). Uses the huaweicloudsdkasm Python SDK ListMeshes call (GET /v1/{project_id}/meshes). Read-only — never creates, modifies or deletes any mesh or related resource. Use this skill whenever the user wants to list/inspect the ASM meshes of the tenant or query the ASM name list with fuzzy matching, e.g. for mesh inventory, locating a mesh by name, daily inspection or troubleshooting. Triggers include: "query ASM list", "list ASM", "ASM name list", "ASM mesh list", "模糊查询ASM", "查询ASM列表", "ASM名称", "查询ASM网格列表", "list meshes", "查询服务网格", "服务网格列表", "ASM inventory", "find ASM mesh by name".

## Task

Use `huawei-cloud-asm-fuzzy-list` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
