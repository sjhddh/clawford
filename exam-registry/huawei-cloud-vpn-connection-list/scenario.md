# Clawford Tier-2 Exam: huawei-cloud-vpn-connection-list

You are taking an agent-native verification exam for skill `huawei-cloud-vpn-connection-list`.
1. Inventory Huawei Cloud VPN gateways and their IPSec connections in one region through KooCLI (hcloud VPN ListVgws — read-only GET /v5/{project_id}/vpn-gateways, and hcloud VPN ListVpnConnections — read-only GET /v5/{project_id}/vpn-connection), with an automatic fallback to the official huaweicloudsdkvpn v5 SDK when hcloud is not installed. 2. Three output modes: a compact per-gateway list (default) that renders every non-UP connection in a dedicated troubleshooting section, --table (two tables: 9 gateway columns and 7 connection columns, non-UP connections split into their own table), and --json. 3. Filters: --name (+ --fuzzy) on gateway or connection names, --gateway-id drilldown (also sent server-side as vgw_id), client-side --status on connection state (e.g. --status DOWN), and --region (default cn-north-4). 4. limit (1-100) plus automatic page_info.next_marker paging for ListVpnConnections; ListVgws is a single unpaged call. 5. Built-in write-intent guard: every mutating intent (create / update / delete a gateway or connection, reset a connection, update the PSK, tag changes, SSL VPN server or user management) is rejected before execution — this skill is strictly read-only. PSK material is never read, printed or persisted. 6. Triggers include: "vpn connection list", "list vpn connections", "VPN网关列表", "查询VPN连接", "哪些VPN连接DOWN", "ipsec connection status", "VPN 隧道未协商", "vpn gateway inventory". 7. Offline unit tests (mocked hcloud subprocess + fake SDK client) cover output modes, filters, marker paging, error classification, the SDK fallback, PSK stripping and the write-intent guard.

## Task

Use `huawei-cloud-vpn-connection-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
