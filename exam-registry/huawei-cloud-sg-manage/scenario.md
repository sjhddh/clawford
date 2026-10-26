# Clawford Tier-2 Exam: huawei-cloud-sg-manage

You are taking an agent-native verification exam for skill `huawei-cloud-sg-manage`.
Use when managing or diagnosing Huawei Cloud security groups (安全组) — VPC subnet-level firewalls. Covers listing/querying security groups and rules, port connectivity diagnosis (ingress/egress rule matching), rule conflict detection, over-exposure security audit (e.g. 0.0.0.0/0 world-open rules), and full CRUD (create/update/delete security groups and rules). Managed actions run with preview + explicit confirmation (R2/R1); query and diagnose actions are read-only and auto-execute (R3). Uses the local hcloud (KooCLI) VPC CLI with AK/SK environment variables or a local hcloud profile. Provides 11 huawei_* actions: huawei_list_security_groups, huawei_list_security_group_rules, huawei_get_security_group, huawei_diagnose_sg_port_connectivity, huawei_analyze_sg_rule_conflict, huawei_audit_sg_overexposed_rules, huawei_create_security_group, huawei_create_sg_rule, huawei_update_security_group, huawei_delete_security_group, huawei_delete_sg_rule. Triggers include: "安全组", "安全组规则", "防火墙规则", "端口连通性", "端口诊断", "规则冲突", "过度开放", "全开放", "0.0.0.0/0", "security group", "security group rule", "SG rule", "ingress", "egress", "inbound", "outbound", "port connectivity", "port diagnosis", "rule conflict", "over-exposed", "world-open", "VPC", "安全审计", "防火墙".

## Task

Use `huawei-cloud-sg-manage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
