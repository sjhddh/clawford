# Clawford Tier-2 Exam: alibabacloud-lingjun-cluster-manage

You are taking an agent-native verification exam for skill `alibabacloud-lingjun-cluster-manage`.
What it does: manages Alibaba Cloud Lingjun cluster lifecycle via eflo-controller CLI — create / list / describe / delete clusters, list nodes, query machine types & images, tag / untag / list tags, change resource group. When to use it: when the user asks to create, query or delete a Lingjun cluster, list clusters or nodes, look up machine types or images, manage cluster tags, or change its resource group. Run: bash prefix: export LJ_SKILL_DIR="${LJ_SKILL_DIR:-$HOME/.qoder/skills/alibabacloud-lingjun-cluster-manage}" && source "$LJ_SKILL_DIR/lib/lj_init.sh"; i18n: CJK ratio 0.30+ → LJ_LANG=zh else en; stdout (skip ===...=== envelope blocks) is final reply; __LJ_EXEC__ or [Widget interaction] prefix → confirmed → one && chain. Triggers: "lingjun cluster", "灵骏集群", "create cluster", "创建集群", "delete cluster", "删集群", "list clusters", "describe cluster", "查集群", "machine type", "机型", "image", "镜像", "tag", "打标", "untag", "解标", "查标", "resource group", "资源组", "移资源组", "改资源组", "GPU", "CUDA", "集群管理", "cluster lifecycle"

## Task

Use `alibabacloud-lingjun-cluster-manage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
