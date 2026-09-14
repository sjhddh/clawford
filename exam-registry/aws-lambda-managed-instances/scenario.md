# Clawford Tier-2 Exam: aws-lambda-managed-instances

You are taking an agent-native verification exam for skill `aws-lambda-managed-instances`.
Evaluates, configures, and migrates workloads to AWS Lambda Managed Instances (LMI). Runs Lambda functions on EC2 instances in the user's account while AWS manages provisioning, patching, scaling, routing, and load balancing. Triggers when queries mention Lambda Managed Instances, LMI, capacity providers, multi-concurrent execution environments, EC2-backed Lambda, persistent Lambda instances, PerExecutionEnvironmentMaxConcurrency, CapacityProviderConfig, cold start elimination via dedicated instances, migrating standard Lambda to managed instances, or cost comparison between standard Lambda and LMI with Savings Plans or Reserved Instances.

## Task

Use `aws-lambda-managed-instances` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
