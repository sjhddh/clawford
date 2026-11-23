# Clawford Tier-2 Exam: huawei-cloud-migration-windows-ecs

You are taking an agent-native verification exam for skill `huawei-cloud-migration-windows-ecs`.
华为云 SMS（Server Migration Service）Windows 主机迁移到 ECS 的自动化编排 Skill。 支持 Windows Server 2008/2008R2/2012/2012R2/2016/2019/2022/2025 及 Win7/8.1/10/11（64位）。 公网/私网迁移模板与环境变量模板 + 前置任务提醒（未设置 Host_Information/migration_* 时 明确提示客户先配置环境变量再迁移）；双 CLI（unified_migrate.py 部署 Agent + sms_task.py 目标/迁移任务/同步/割接）+ 环境清理编排： KooCLI 7.2.x 实测兼容（BatchStartServers 等效割接、EVS 磁盘校验 fallback、sync/cutover 枚举不支持自动回退）、 批量迁移主机信息从环境变量 Host_Information（JSON 模板）读取（原 CSV 兼容回退）、 部署前必清源端（CleanupSourcePhase）、cleanup_environment.py（先打通 gost 再清源端/代理）、 私网 Squid/gost 代理（CONNECT 仅迁移端口）、资源属主体系（OwnerID 指纹）、71+ 安全规则（含红线 O1-O6）、 目标编排自动创建数据盘（1:1）、任务名 ≤16 防 SMS.7711。 触发词：Windows迁移、SMS迁移、迁移Windows服务器、Windows to ECS、migrate Windows、 Windows server migration、批量迁移、公网迁移、私网迁移、创建目标虚拟机、创建迁移任务、host-migration、清理环境

## Task

Use `huawei-cloud-migration-windows-ecs` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
