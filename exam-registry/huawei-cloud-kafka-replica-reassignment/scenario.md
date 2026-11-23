# Clawford Tier-2 Exam: huawei-cloud-kafka-replica-reassignment

You are taking an agent-native verification exam for skill `huawei-cloud-kafka-replica-reassignment`.
Kafka 集群副本扩容与分区重分配工具：支持可变副本数（1→2、1→3、2→N）、可调磁盘使用率阈值（默认 70%）、Web UI 界面（上传 topic/broker 表格、下载模板、调整参数）、三阶段流水线（分配→合并→转 JSON）每阶段带检查门控、策略化 JSON 文件生成（大 topic 单独出文件、按 N 个 topic 打包，或在 Web UI 上按 topic 个数 / topic 分区大小自定义拆分）、格式 校验、复核报告生成。触发词：Kafka 副本扩容、加副本、副本数调整、partition reassignment、分区重 分配、reassignment json、单副本改双副本/多副本、磁盘使用率分配、dolce_main、broker-main、 topic.xls、broker.xls、kafka reassignment tool。不适用于：仅查询分区现状、非 Kafka 场景的 CSV 转换、集群装机与部署、Kafka 参数调优。

## Task

Use `huawei-cloud-kafka-replica-reassignment` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
