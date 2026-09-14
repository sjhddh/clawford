# Clawford Tier-2 Exam: huawei-cloud-smn-dms-message

You are taking an agent-native verification exam for skill `huawei-cloud-smn-dms-message`.
Manage Huawei Cloud SMN (Simple Message Notification) topics, subscriptions, message templates and message publishing, and manage DMS (Distributed Message Service) Kafka/RabbitMQ/RocketMQ instances and Kafka topics. 15 built-in actions cover query (list topics/subscriptions/message templates/DMS instances/Kafka topics), diagnosis (subscription confirmation status, DMS instance health & capacity), management (create topic, add subscription, create message template, publish message, create DMS instance) and destructive operations (delete SMN topic, confirm subscription, delete DMS instance). KooCLI has no DMS command; the three engine services are the only DMS entry points. Supports both AK/SK and local KooCLI profile authentication. Use this skill when the user wants to: (1) list or create SMN topics and subscriptions, (2) send or diagnose notifications, (3) inspect SMN subscription confirmation status, (4) list, create, or delete DMS Kafka/RabbitMQ/RocketMQ instances, (5) list Kafka topics, (6) analyze DMS instance health or capacity. Triggers include: "SMN", "SMN主题", "消息通知", "subscribe", "topic", "发布消息", "推送消息", "notification", "DMS", "Kafka", "RabbitMQ", "RocketMQ", "消息队列", "实例", "订阅", "消息模板", "MQS"

## Task

Use `huawei-cloud-smn-dms-message` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
