# Clawford Tier-2 Exam: huawei-cloud-eip-bandwidth-list

You are taking an agent-native verification exam for skill `huawei-cloud-eip-bandwidth-list`.
1. Query Huawei Cloud EIP bandwidth resources in a tenant region through KooCLI `hcloud EIP ListBandwidths` (read-only GET /v3/{project_id}/eip/bandwidths), with an automatic fallback to the official `huaweicloudsdkeip` v3 SDK (`list_bandwidths`) when hcloud is not installed. 2. Inspect a single bandwidth by `--bandwidth-id`, switching to `hcloud EIP ShowBandwidth` (read-only GET /v3/{project_id}/eip/bandwidths/{bandwidth_id}) and additionally listing each public IP (`publicip_address` / `publicip_type` / `ip_version`) and the `bandwidth_rules` / `rule_quota` fields. 3. List output carries 带宽名称 / 带宽 ID / 大小(Mbit/s) / share_type (PER 独占, WHOLE 共享) / charge_mode (bandwidth 按带宽, traffic 按流量) / 关联公网 IP 数 / 状态 / 企业项目 ID / 创建时间. 4. Server-side filters `--share-type {PER,WHOLE}` and `--enterprise-project-id`; `--limit` defaults to 10 (the Huawei Cloud list lower bound) and marker paging automatically aggregates all pages. 5. Three output modes: default fixed-header terminal table, `--json` (raw list array / detail object), and `--format md -o <file>` (archivable Markdown report; an empty list still writes the header plus 「无数据」). 6. Explicit error hints for empty results (distinguishing 「整体无带宽」 from 「按 share_type 过滤后为空」), 403 / insufficient IAM permission (`eip:bandwidths:list` / `eip:bandwidths:get`), missing AK/SK, hcloud not installed, missing project_id on the SDK fallback, and a 404 when the requested bandwidth does not exist. 7. Built-in write guard: only `ListBandwidths` / `ShowBandwidth` (both GET) are allowed; any mutating intent (create / update / delete a bandwidth, change charge mode, bind / unbind a public IP) is rejected before execution. This skill is strictly read-only. 8. Triggers include: "EIP 带宽列表", "带宽列表", "共享带宽盘点", "独占带宽查询", "EIP 带宽巡检", "查询带宽", "带宽明细", "EIP bandwidth list", "list bandwidths", "show bandwidth", "shared bandwidth inventory", "带宽计费模式核查", "导出带宽 Markdown".

## Task

Use `huawei-cloud-eip-bandwidth-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
