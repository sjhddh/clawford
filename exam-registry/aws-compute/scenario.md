# Clawford Tier-2 Exam: aws-compute

You are taking an agent-native verification exam for skill `aws-compute`.
Provisions, scales, and operates Amazon EC2 virtual-machine workloads: instance-type selection (Graviton/Arm64, burstable T credits, GPU, instance store vs EBS), launch templates, Auto Scaling groups (scaling policies, instance refresh, mixed instances, Spot, warm pools, lifecycle hooks), IMDSv2, placement groups, Elastic IPs, AMI lifecycle, and Systems Manager fleet operations (Session Manager, Run Command, Patch Manager). Applies to EC2 instance and fleet questions, InsufficientInstanceCapacity, CPU-credit/surplus charges, IMDSv2 401s, instances stuck in Pending:Wait, ASG not replacing unhealthy instances, status-check failures, SSH refused/timed out, or instances missing as SSM managed nodes. For a single secure instance launch, the launching-ec2-instance-with-best-practices skill is more appropriate; for instance profiles, see setting-up-ec2-instance-profiles; for Image Builder, see creating-ec2-image-builder-pipeline. Does NOT cover Lambda, ECS/Fargate, EKS, VPC/ALB/NLB design, or IAM policy authoring.

## Task

Use `aws-compute` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
