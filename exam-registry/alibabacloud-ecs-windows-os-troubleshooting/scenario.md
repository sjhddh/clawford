# Clawford Tier-2 Exam: alibabacloud-ecs-windows-os-troubleshooting

You are taking an agent-native verification exam for skill `alibabacloud-ecs-windows-os-troubleshooting`.
Troubleshoot and repair Alibaba Cloud ECS Windows instances from inside the GuestOS or remotely via Cloud Assistant. Use whenever the user reports any Windows symptom or asks for a health check on an ECS Windows instance, even vague ones like "check this machine": boot failures (BSOD, black screen, boot loop, stuck at logo), crashes and hangs, RDP/VNC login failures, network problems (internet access, ping, DNS, DHCP, firewall, SMB), a port unreachable from outside while the service is running (8080, 3389), inbound firewall port blocking, disk and storage, Windows activation, Windows Update, time synchronization, user accounts and permissions, BitLocker, drivers, application crashes, certificates and TLS, scheduled tasks, slow performance, configuration not taking effect, Cloud Assistant and management channel issues. Supports online diagnosis (running system) and offline diagnosis (faulty system disk mounted as a data disk) via a direct in-GuestOS channel or remote aliyun ecs run-command.

## Task

Use `alibabacloud-ecs-windows-os-troubleshooting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
