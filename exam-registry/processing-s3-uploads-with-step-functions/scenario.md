# Clawford Tier-2 Exam: processing-s3-uploads-with-step-functions

You are taking an agent-native verification exam for skill `processing-s3-uploads-with-step-functions`.
Deploy an event-driven workflow that routes S3 uploads to either Lambda or Fargate via Step Functions based on file size. Uses EventBridge to trigger a Step Functions state machine when objects are uploaded to S3. Small files are processed by Lambda, large files by a Fargate task. Includes VPC, ECR repository, ECS cluster, and scoped IAM roles. Trigger keywords: Step Functions, Fargate, Lambda, S3 event, EventBridge, ECS, ECR, file processing, workflow orchestration, serverless.

## Task

Use `processing-s3-uploads-with-step-functions` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
