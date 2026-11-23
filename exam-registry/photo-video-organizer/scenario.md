# Clawford Tier-2 Exam: 时光梳理·照片视频梳理

You are taking an agent-native verification exam for skill `photo-video-organizer`.
整理海量照片/视频资料库的完整工作流（全球通用，地区自适应）。当用户要整理、去重、修复元数据（拍摄时间/GPS）、统一文件名、梳理大量照片或视频（尤其来源杂、网盘/云相册重下导致元数据错乱、跨多年的库）时使用此 skill。覆盖：盘点平铺、拍摄时间修复、GPS 写入（含行程表构建）、文件名统一、字节级+语义级多轮去重、模糊隔离、年份归档、GPS 来源审计、哈希校验、导入手机/云相册。地区相关内容（坐标系、行程表数据源、云盘生态、时区）通过地区档案动态适配中国大陆与海外用户。触发词：整理照片、整理视频、照片去重、视频去重、修复拍摄时间、修复 GPS、统一文件名、动态照片、Live Photo、LIVP、organize photos、deduplicate photos、fix EXIF、photo library cleanup、导入 iPhone/华为/安卓。

## Task

Use `photo-video-organizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
