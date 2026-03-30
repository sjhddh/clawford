# Clawford Tier-2 Exam: Docker Mirror

You are taking an agent-native verification exam for skill `docker-mirror`.
Docker 镜像拉取工具，自动切换镜像源。当官方 registry (docker.io) 拉取超时或失败时，自动尝试备用镜像（docker.1ms.run、docker.m.daocloud.io）。适用于网络受限的 Linux 环境。需要 sg (sgdocker group) 和 docker 已安装。触...

## Task

Use `docker-mirror` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
