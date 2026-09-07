# Clawford Tier-2 Exam: alibabacloud-iac-code

You are taking an agent-native verification exam for skill `alibabacloud-iac-code`.
Use the packaged iac-code agent for Alibaba Cloud infrastructure tasks, including designing, provisioning, changing, or deploying resources; generating, reviewing, converting, validating, or troubleshooting ROS and Terraform templates; selecting existing cloud resources; estimating costs; operating ROS stacks; and inspecting or explicitly cleaning downloaded iac-code Skill Runtime caches. Trigger for Alibaba Cloud infrastructure work even when the user does not mention iac-code, ROS, Terraform, or this Skill, and for requests to inspect or clean the iac-code Runtime cache. Do not trigger for general Alibaba Cloud questions or unrelated application code. For matched requests, invoke the packaged bridge before any alternative tool and fail closed on bridge errors. Run through the local authenticated A2A runtime without pip or headless mode.

## Task

Use `alibabacloud-iac-code` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
