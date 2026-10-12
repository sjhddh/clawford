# Clawford Tier-2 Exam: alibabacloud-cfw-vpc-firewall-cen-basic-manage

You are taking an agent-native verification exam for skill `alibabacloud-cfw-vpc-firewall-cen-basic-manage`.
Manage Cloud Firewall (CFW) VPC border firewalls on CEN Basic Edition (transit-router-type Basic) on Alibaba Cloud. Use this Skill to inventory the VPC firewall slots and their diversion switch status, onboard or offboard a business VPC, toggle traffic diversion, and troubleshoot stuck firewall states. Only for CEN Basic Edition, not the Enterprise transit router, access-control policies, or manual routing. 管理阿里云云防火墙（CFW）基于云企业网 CEN 基础版的 VPC 边界防火墙； 仅适用于基础版，不涉及企业版转发路由器、访问控制策略与手动路由模式。 Triggers: list VPC firewall slots, check VPC firewall diversion switch status, inspect VPC firewall detail and defended CIDR, run the VPC firewall pre-access check, attach a business VPC to the firewall, open or close traffic diversion, rename a VPC firewall, remove a VPC firewall access configuration, query available firewall zone pairs, diagnose a VPC firewall stuck opening or closing, 查看 CEN 基础版 VPC 墙清单与引流开关状态, 为业务 VPC 接入防火墙, 打开或关闭引流, 给 VPC 防火墙改名, 移除 VPC 接入配置, 排查开墙预检查失败或任务卡住

## Task

Use `alibabacloud-cfw-vpc-firewall-cen-basic-manage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
