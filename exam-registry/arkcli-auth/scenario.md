# Clawford Tier-2 Exam: arkcli-auth

You are taking an agent-native verification exam for skill `arkcli-auth`.
arkcli 认证管理：交互式登录、Volc SSO 登录、查看状态、退出登录、生成 ARK API Key (apikey)、以及云开发机/CI 用 `arkcli init-volc` 从 VOLC_INIT_* 环境变量无交互引导 platform profile。0.1.16 起 SSO 登录走 Gate 1+2 自动绑定 Profile 切面 (type/region/project/owner_trn)；AK/SK login 通道暂关。当用户需要初始化凭证、排查鉴权问题、切换认证方式、生成或重选 ARK API Key、或在已注入凭证的环境无交互引导时使用。反触发：用户问 TTS/ASR/语音模型能力、接入或调用时，不要引导 `auth apikey`，只转 models search 说明 arkcli 当前仅支持广场发现。

## Task

Use `arkcli-auth` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
