# Clawford Tier-2 Exam: 支付宝开放平台密钥工具

You are taking an agent-native verification exam for skill `alipay-open-platform-keys`.
支付宝开放平台 RSA2 密钥：用 scripts/generate_alipay_rsa2_keys.sh（OpenSSL）生成公钥模式密钥对或证书模式 CSR；控制台绑定与支付宝公钥配置为必需外部步骤。 说明应用私钥/支付宝公钥职责、公钥与证书模式差异、验签排查要点。详见 SKILL 正文与 referenc...

## Task

Use `alipay-open-platform-keys` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
