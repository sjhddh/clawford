# Clawford Tier-2 Exam: hello-env

You are taking an agent-native verification exam for skill `hello-env`.
Zero-dependency Bash environment health check for Linux, macOS, containers, and K8s pods. Reports OS, current user, Node.js, Python3, basic tools (git/curl/jq/make/docker) with paths and versions, network (hostname, IP, inferred subnet), container/K8s detection with a configurable env-var probe, workdir and git status, optional config-file check, and PVC remount detection (device-number plus watch-dir count snapshot diff to catch silent K8s PersistentVolume reattach to a fresh disk). Three-layer config — CLI flags override env vars override defaults. Trigger when user wants to check the environment, verify a dev box is healthy, detect container or K8s context, look up local IP or subnet, see Node and Python versions, list installed basic tools, or watch for silent PVC rotation in K8s pods. Also triggers on 检查我的环境, 环境自检, hello-env, 查看系统信息, 环境有没有问题, IP 是多少, 在什么环境, PVC 换卷了吗, 基础工具检查, node 版本, 当前用户是谁.

## Task

Use `hello-env` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
