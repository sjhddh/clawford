# Clawford Tier-2 Exam: hub-oss-file-upload

You are taking an agent-native verification exam for skill `hub-oss-file-upload`.
对用户只说简体中文短句。用户要拿到工作区里已有的文件，或要一个能在外面下载、打开、转发给别人的地址时触发。包括：要文件、把文件给我、发我一份、传给我、附件给我、文件地址、文件链接、下载、帮我下载、下载链接、下载地址、给我链接、分享这个文件、发个链接、外链、公网地址、访问地址、打开地址、OSS 链接、传到 OSS、上传一下给我地址。文件刚生成且同时要求给我或给地址时，写完再调 upload-file.sh。把 ossUrl 原文写进回复。禁止手写 curl，禁止 hub-artifact，禁止 send_to_user。不要调用：只生成不给、只问内容、问的是工作区路径、要从网上把文件下进工作区、

## Task

Use `hub-oss-file-upload` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
