# Clawford Tier-2 Exam: WeChat MiniProgram CloudBase Deploy

You are taking an agent-native verification exam for skill `wechat-miniprogram-cloudbase-deploy`.
WeChat Mini Program deployment onto WeChat CloudBase (云开发): deploy cloud functions via tcb, manually create database collections in the console, and upload the frontend via miniprogram-ci. Covers real-environment pitfalls: CLI cannot create collections, tcb fn invoke returns a Namespace metadata bug, the upload IP-whitelist only accepts IPv4 (so an IPv6 egress is always rejected), and the trial env defaults to ap-shanghai. Trigger when the task involves 部署微信小程序, 云开发, CloudBase, tcb 部署云函数, or miniprogram-ci 上传.

## Task

Use `wechat-miniprogram-cloudbase-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
