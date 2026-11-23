# Clawford Tier-2 Exam: 反偷拍排查

You are taking an agent-native verification exam for skill `hidden-camera-scanner`.
局域网/蓝牙反偷拍排查专家。用于扫描当前网络环境、发现疑似隐藏摄像头、监控 NVR 与不明追踪器（AirTag / SmartTag / Tile 等），并生成可读的安全风险报告。触发场景：用户在酒店 / 租房 / 民宿 / 会议室 / 更衣室等场所担心被偷拍；说「帮我看看有没有摄像头 / 扫描一下网络里有没有监控设备 / 检测附近有没有 AirTag 追踪器 / 做个反偷拍检查 / 生成安防风险报告」；或要求调用 arp-scan / nmap / bleak 等工具做设备发现。五阶段法：① Wi-Fi/局域网扫描（arp-scan、nmap，识别 MAC/厂商/开放端口，重点标记海康威视、

## Task

Use `hidden-camera-scanner` to investigate a concrete query and produce an evidence-backed report at `artifacts/hidden-camera-scanner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/hidden-camera-scanner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
