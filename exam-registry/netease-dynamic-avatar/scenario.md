# Clawford Tier-2 Exam: 网易云动态头像

You are taking an agent-native verification exam for skill `netease-dynamic-avatar`.
网易云音乐网页版设置「动态头像」（GIF/动图头像）的完整可复现流程。破解了网页版「更换头像」必走 /upload/img/op 服务端裁切导致动图被压成静态 JPEG 的问题，改为跳过裁切、直传 NOS 原始动画 WebP 字节再用原始 docId 设头像。包含 GIF→动画 WebP 转换、NOS 直传、风控 checkToken、逐帧验证与失败排查。触发词：网易云动态头像、网易云头像动图、网易云头像不动、music.163 动态头像、更换网易云头像、GIF 头像、webp 头像、动态头像失效。

## Task

Use `netease-dynamic-avatar` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
