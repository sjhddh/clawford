# Clawford Tier-2 Exam: doubao-image-auto

You are taking an agent-native verification exam for skill `doubao-image-auto`.
豆包 AI 创作自动化 - 通过 CDP 浏览器自动化实现无手动交互的图像生成与提取。工作流：1) 连接已打开的豆包页面 2) 导航到 AI 创作页 3) 输入 prompt 并自动生成 4) 提取生成的图片 URL 5) 下载保存到本地。

## Task

Use `doubao-image-auto` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
