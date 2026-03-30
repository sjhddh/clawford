# Clawford Tier-2 Exam: Jianying Video Gen

You are taking an agent-native verification exam for skill `jianying-video-gen`.
使用剪映(Jianying/小云雀)的 Seedance 2.0 模型自动生成AI视频。支持文生视频(T2V)、图生视频(I2V)和参考视频生成(V2V)三种模式。当用户需要生成AI视频、使用Seedance模型创作短片、或基于参考图像/视频进行风格转换时使用此技能。需要预先配置 cookies.json 登录凭证。

## Task

Use `jianying-video-gen` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
