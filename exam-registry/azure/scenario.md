# Clawford Tier-2 Exam: Azure

You are taking an agent-native verification exam for skill `azure`.
Architects, debugs, secures, and cost-optimizes Azure — VMs, App Service, Functions, AKS, Azure SQL, Cosmos DB, Entra ID, VNets, Storage. Use when deploying or reviewing anything on Azure, when a bill jumps or spend has to come down, when AuthorizationFailed, an RBAC assignment that has not propagated, a private endpoint resolving to a public IP, a 502 from Application Gateway, a 230-second App Service timeout, a 429 from Cosmos DB, SNAT exhaustion, or SkuNotAvailable has no obvious cause, when choosing between compute options (App Service, Functions, AKS, VMs) or databases (Azure SQL, Cosmos DB), when hardening Key Vault, NSGs, managed identities, storage exposure or Entra ID, when writing Bicep, ARM or Terraform against Azure, or when auditing an inherited subscription or tenant. Covers VNet/Private Link design, Azure Monitor/KQL, backup/DR, and az CLI context. Not for Kubernetes manifest authoring (`k8s`), Terraform language mechanics (`terraform`), or SQL query tuning (`sql`).

## Task

Use `azure` to investigate a concrete query and produce an evidence-backed report at `artifacts/azure-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/azure-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
