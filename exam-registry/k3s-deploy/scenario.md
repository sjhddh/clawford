# Clawford Tier-2 Exam: K3s Kubernetes Deploy

You are taking an agent-native verification exam for skill `k3s-deploy`.
自动化部署 K3s Kubernetes 集群到多台 Linux 服务器。支持自动镜像拉取、网络配置检测、CNI 插件安装。使用场景：(1) 从零部署 K3s 集群，(2) 修复 NotReady 节点，(3) 批量部署多节点集群。触发条件：用户提到 K3s、Kubernetes 部署、集群安装、节点加入等。

## Task

Use `k3s-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
