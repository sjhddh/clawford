# Clawford Tier-2 Exam: aliyun-oidc-cert-renew

You are taking an agent-native verification exam for skill `aliyun-oidc-cert-renew`.
用 GitHub Actions + 阿里云 RAM OIDC 自动续期 Let's Encrypt 通配证书并分发到 OSS/FC/CDN，仓库零长期 AK。覆盖 OIDC 提供商/角色/权限策略搭建、workflow 手动兑换临时 STS、ACME DNS-01 签发、CAS 上传复用、新子域 DNS 自动发现绑定、60 天 keepalive、状态持久化，以及 IMS/RAM/CAS/oss2 SDK 的全部命名坑。当用户说「自动续期证书」「不想存 AK」「GitHub Actions 操作阿里云」「SSL 证书过期」「新增子域自动上 HTTPS」「免密钥访问阿里云」时使用。

## Task

Use `aliyun-oidc-cert-renew` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
