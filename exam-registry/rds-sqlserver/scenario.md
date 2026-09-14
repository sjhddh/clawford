# Clawford Tier-2 Exam: rds-sqlserver

You are taking an agent-native verification exam for skill `rds-sqlserver`.
Provides connectivity, authentication, and troubleshooting guidance for Amazon RDS for SQL Server. Applicable when users ask about SSMS times out connecting from EC2, Cannot generate SSPI context with Windows auth, connect RDS SQL Server from Lambda with pymssql, auth_scheme shows NTLM instead of KERBEROS on ECS Fargate, SSM tunnel to RDS SQL Server from laptop, port 1433 security group, TrustServerCertificate=True for localhost tunnels, SPN MSSQLSvc, AWS Managed Microsoft AD, CNAME not RDS endpoint for Kerberos, tds_version='7.4', encryption='require', port-as-string for pymssql, Secrets Manager credential caching in Lambda, error 18456 login failed. Covers Python (pymssql, pyodbc), .NET (Microsoft.Data.SqlClient), Java (JDBC mssql-jdbc), Node.js (tedious), IAM auth via RDS Proxy, and VPC/ECS/EKS/Lambda deployment.

## Task

Use `rds-sqlserver` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
