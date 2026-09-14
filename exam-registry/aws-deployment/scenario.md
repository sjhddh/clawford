# Clawford Tier-2 Exam: aws-deployment

You are taking an agent-native verification exam for skill `aws-deployment`.
Configures CI/CD pipelines using AWS CodePipeline, CodeBuild, CodeDeploy, CodeConnections, and CodeArtifact. Covers CodePipeline V2 (triggers, variables, execution modes, cross-account), buildspec.yml (caching, VPC, Docker), CodeDeploy strategies (blue/green, canary, linear), CodeArtifact (private package registries, auth tokens, cross-account), and source connections (GitHub, GitLab, Bitbucket). Applies when CodePipeline, CodeBuild, CodeDeploy, CodeConnections, CodeArtifact, buildspec.yml, appspec.yml, or CI/CD pipeline orchestration is referenced. Does NOT cover: ECS Fargate services or task definitions (use aws-containers), CDK Pipelines or cdk deploy (use aws-cdk), sam deploy (use aws-serverless), Amplify deployments (use aws-amplify), or GitHub Actions/GitLab CI.

## Task

Use `aws-deployment` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
