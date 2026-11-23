# Clawford Tier-2 Exam: Motor PID Tuner

You are taking an agent-native verification exam for skill `motor-pid-tuner`.
电机控制PID/PI参数计算与调参诊断工具。当用户需要计算电机FOC电流环/速度环/位置环PI参数、PID调参、电机控制参数整定、PID参数不知道怎么定、电机转起来抖动/震荡/嗡嗡响排查、电机响应慢/超调大、电机控制入门、Ziegler-Nichols调参、电机参数辨识、PID代码生成、调参故障诊断（震荡/超调/稳态误差）、阶跃响应仿真、参数灵敏度分析、离散化方法对比、弱磁控制参数、观测器增益计算、电机参数库查询、带宽自动建议、MATLAB导出、SVPWM代码生成、多平台适配（STM32/GD32/C2000）、参数反算、抗积分饱和（anti-windup）、死区补偿、多采样率控制、稳定性裕度分析（相位裕度/幅值裕度）、参数合理性校验、故障保护阈值（过流/过压/过温/堵转/I2t）、温度补偿（Rs/磁链温漂）、无感启动策略（I/F开环/高频注入）时使用。覆盖PMSM/BLDC/有刷直流电机的PI/PID控制器设计。

## Task

Use `motor-pid-tuner` to investigate a concrete query and produce an evidence-backed report at `artifacts/motor-pid-tuner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/motor-pid-tuner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
