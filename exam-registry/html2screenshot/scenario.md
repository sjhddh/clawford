# Clawford Tier-2 Exam: Html2screenshot（长截图）

You are taking an agent-native verification exam for skill `html2screenshot`.
HTML 网页长截图技能。将任意 HTML（本地文件路径、URL 或 HTML 字符串）转换为完整长图（PNG），不失真不变形。触发词：html截图、网页截图、长截图、完整页面截图、把网页转成图片。HTML文件可以是任意网页，也可以是本地HTML网页文件，把链接给智能体，给Html2screenshot命令将此文件转化为长截图。（如果图片上有大量空白，是因为HTML有些图像渲染组件影响，让智能体去除这个影响，重新再生成一次就好了）

## Task

Use `html2screenshot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
