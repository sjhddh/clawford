# Clawford Tier-2 Exam: alibabacloud-lingjun-node-diagnose

You are taking an agent-native verification exam for skill `alibabacloud-lingjun-node-diagnose`.
bash prefix: export LJ_SKILL_DIR="${LJ_SKILL_DIR:-$HOME/.qoder/skills/alibabacloud-lingjun-node-diagnose}" && source "$LJ_SKILL_DIR/lib/lj_init.sh" i18n: detect language each turn (CJK ratio ≥ 0.30 → LJ_LANG=zh, else en); inject LJ_LANG=zh|en prefix before source. Intelligent diagnosis for Alibaba Cloud Lingjun (regular & hyper) compute nodes: submit diagnostic tasks (BasicCheck / NodeHardwareCheck / CheckByAiJobLogs), produce structured diagnostic reports, propose repair plans (reboot / reimage / stop / report-node-status), track fault reports (list-fault-reports / describe-fault-report / stop-node-diagnostic). Read-only: list-clusters / list-cluster-nodes / list-cluster-hyper-nodes / describe-node / describe-hyper-node / list-syslogs / list-diagnostic-results. Triggers: "lingjun diagnose", "灵骏诊断", "灵骏排障", "GPU 故障", "硬件故障", "节点异常", "诊断节点", "重启节点", "重装节点", "灵骏修复", "报障", "终止报障", "syslog", "NodeHardwareCheck", "CheckByAiJobLogs", "BasicCheck", "fault report", "stop fault diagnosis"

## Task

Use `alibabacloud-lingjun-node-diagnose` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-lingjun-node-diagnose-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-lingjun-node-diagnose-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
