# Clawford Tier-2 Exam: alibabacloud-ecs-vpc-publicnetwork-troubleshoot

You are taking an agent-native verification exam for skill `alibabacloud-ecs-vpc-publicnetwork-troubleshoot`.
Use when an ECS instance cannot reach the internet, its public IP is unreachable, ping to the public network times out, a security group blocks public access, or a VPC cloud service (DataWorks / SAE / ACK) cannot access the public network. Diagnoses Alibaba Cloud ECS public network access and VPC cloud service public egress: ECS public IP reachability and security-group blocking (auto-handling the NAT-gateway egress path for instances without a public IP), plus NAT gateway / SNAT / route / EIP checks for DataWorks, SAE, ACK and others. Triggers: "ECS public network access diagnosis", "ECS public IP reachability", "ECS security group blocking public access", "ECS cannot access the public network", "ECS NAT gateway SNAT egress troubleshooting", "VPC cloud service public network access", "DataWorks cannot access the public network", "SAE public network egress failure", "ACK public network unreachable", "VPC NAT gateway SNAT route EIP check"

## Task

Use `alibabacloud-ecs-vpc-publicnetwork-troubleshoot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
