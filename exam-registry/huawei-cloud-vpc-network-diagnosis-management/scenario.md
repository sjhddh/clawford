# Clawford Tier-2 Exam: huawei-cloud-vpc-network-diagnosis-management

You are taking an agent-native verification exam for skill `huawei-cloud-vpc-network-diagnosis-management`.
Use when managing Huawei Cloud VPC (Virtual Private Cloud) networks — VPC/subnet CRUD operations, network connectivity diagnosis, port connectivity diagnosis, and subnet CIDR conflict analysis. Covers listing VPCs/subnets/route tables, querying VPC/subnet details, creating/updating/deleting VPCs and subnets, and diagnosing why networks or business ports are unreachable (route table gaps, subnet CIDR overlaps, security group rule blocking, port status). Provides 14 huawei_* actions: huawei_list_vpcs, huawei_list_subnets, huawei_get_vpc, huawei_get_subnet, huawei_list_route_tables, huawei_diagnose_network_connectivity, huawei_diagnose_port_connectivity, huawei_analyze_subnet_cidr_conflict, huawei_create_vpc, huawei_create_subnet, huawei_update_vpc, huawei_update_subnet, huawei_delete_vpc, huawei_delete_subnet. Service keywords: vpc, subnet, route table, router, network, CIDR, security group, port, elastic network interface, VPC, 子网, 路由表, 网络, 网段, 连通性, 端口, 安全组. Triggers include: "网络不通", "业务端口不通", "端口不通", "VPC 创建", "创建子网", "删除 VPC", "删除子网", "子网网段冲突", "CIDR 冲突", "路由表", "连通性诊断", "create vpc", "create subnet", "delete vpc", "delete subnet", "subnet conflict", "port connectivity", "network diagnosis".

## Task

Use `huawei-cloud-vpc-network-diagnosis-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
