# Clawford Tier-2 Exam: huawei-cloud-ces-alarm-rules-list

You are taking an agent-native verification exam for skill `huawei-cloud-ces-alarm-rules-list`.
1. 华为云 CES（云监控）告警规则只读盘点：主路径 `hcloud CES ListAlarmRules --cli-region=<region>`（GET /v2/{project_id}/alarms），hcloud 缺失时 回退官方 SDK `huaweicloudsdkces` v2。 2. 单条规则详情（`--rule-id`）：`ListAlarmRules --alarm_id` + `ListAlarmRulePolicies`（阈值策略）+ `ListAlarmRuleResources`（关联资源）+ 通知对象，用于告警治理逐一核查。 3. 三种输出：默认规则名称列表；`--table` 输出 规则ID·名称·资源类型·监控维度·指标·阈值与比较符·告警级别·当前状态·是否启用·通知方式； `--json` 输出接口原始结构。 4. 四类过滤：`--name`（服务端透传 + 客户端模糊）、`--alarm-level`（1 紧急~4 提示）、 `--alarm-state`（ok/alarm/insufficient_data/invalid）、`--resource-type`； 后三者在 KooCLI 7.3.12 的 ListAlarmRules 中没有对应 query 参数，翻全量后客户端过滤。 5. `--limit` 1~100 + `--offset` 自动翻页（`--max-pages` 上限保护），区域默认 cn-north-4； 当前告警状态由 v1 `ListAlarms` 只读补齐（v2 列表响应无 alarm_state）， `insufficient_data` 独立标注「数据不足」，不与「正常」混同。 6. 内置写意图守卫：create / update / delete / enable / disable / batch- / add / remove 等意图在任何命令执行前拒绝，退出码 1；本 skill 严格只读。 7. 触发词：「告警规则盘点」「查询CES告警规则」「告警规则列表」「告警阈值策略」 「告警规则详情」「ces alarm rules list」「alarm rule inventory」「告警治理盘点」。 8. 离线单元测试（mock hcloud / SDK）覆盖守卫、翻页、状态补齐、四类过滤、 三种输出形态、单条详情、错误分类与后端回退。

## Task

Use `huawei-cloud-ces-alarm-rules-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
