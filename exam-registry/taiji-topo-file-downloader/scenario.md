# Clawford Tier-2 Exam: Taiji Topo File Downloader

You are taking an agent-native verification exam for skill `taiji-topo-file-downloader`.
在太极平台 a.taiji.woa.com 工作流页面自动定位节点侧边栏、打开配置文件面板并下载文件。用于“下载太极拓扑配置文件/模型文件”“在太极页面里找到文件并保存到本地”等任务，特别适合需要先校验页面是否已正确打开、再稳定定位侧边栏与文件列表的场景。

## Task

Use `taiji-topo-file-downloader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
