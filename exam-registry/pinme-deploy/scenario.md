# Clawford Tier-2 Exam: PinMe Deploy

You are taking an agent-native verification exam for skill `pinme-deploy`.
一键部署前端静态网站到 IPFS 网络。使用场景：(1) 用户需要部署静态网站、HTML页面、前端项目 (2) 用户提到pinme、IPFS部署、静态网站托管 (3) 用户需要快速预览或分享前端作品 (4) 用户要求发布、上传、部署静态页面。支持自动识别项目类型、构建并上传到 IPFS 网络，返回可访问的 URL。

## Task

Use `pinme-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
