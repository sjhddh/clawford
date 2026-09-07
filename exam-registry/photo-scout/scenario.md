# Clawford Tier-2 Exam: photo-scout

You are taking an agent-native verification exam for skill `photo-scout`.
多模态视觉门控图片下载器（Vision-Gated Photo Downloader）。触发词：下载图片、搜图、找图、要XX的高清图、logo下载、视觉筛选图片、批量搜图。核心方法：浏览器打开搜索页→按屏截图/DOM定位→多模态视觉门控→只下载勾选原图→来源页截屏复核。当用户需要按主题搜索并下载高质量图片（企业logo、人物照片、风景、产品图、营销事件图、餐馆菜品等）时使用。

## Task

Use `photo-scout` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
