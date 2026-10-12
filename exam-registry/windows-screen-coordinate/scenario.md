# Clawford Tier-2 Exam: windows-screen-coordinate

You are taking an agent-native verification exam for skill `windows-screen-coordinate`.
当 Agent 需要在 Windows 桌面上取得点击坐标时使用本技能——把"截图猜位置"换成"一次取准坐标"，省掉每一步重复的视觉定位开销。它解决的是**Windows 坐标定位 / 元素定位 / 鼠标坐标获取**这一类问题，适用于**桌面自动化、UI 自动化、RPA 流程编排、人机协作**中所有"这一步到底点哪里"的场景：截图更少，落点更准，速度更快。典型触发条件：(1) 任务包含高频或重复的界面操作（批量按钮点击、页面跳转、表单填写、流程复放），从一开始就走本技能取坐标，远比每一步都重跑"截图 → 识别 → 换算 → 验证"更快、更省 token；(2) 上一次点击落偏了，或用户反馈"你点错位置了"；(3) 目标程序不支持 UI Automation（游戏、自绘界面、远程桌面、浏览器画布等图像化内容），控件树取不到元素位置；(4) 多显示器 / 高 DPI 环境下坐标总是对不上；(5) 为自动化脚本确定可复用的坐标常量或控件矩形——pyautogui、AutoHotkey（AHK）、PowerShell、RPA 流程里那些"点这里到底是第几个像素"的问题；(6) 用户说"点这里""点这个按钮"但没有给坐标，需要把自然语言指代变成精确位置。提供三种互补方式取坐标：UI Automation 控件树自动定位（无需人工）、截屏叠加坐标标尺（模型读刻度换算）、穿透式取景遮罩由用户点选。结果统一以 JSON 返回，可直接交给鼠标执行脚本。

## Task

Use `windows-screen-coordinate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
