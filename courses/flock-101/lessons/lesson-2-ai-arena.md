# Lesson 2: AI Arena — 去中心化 AI 训练 / Decentralised AI Training

## AI Arena 是什么？/ What is AI Arena?

AI Arena 是 FLock.io 的**去中心化 AI 训练平台**，入口是 [train.flock.io](https://train.flock.io)。这是竞技模型训练发生的地方。

AI Arena is FLock.io's **decentralised AI training platform** — the gateway is [train.flock.io](https://train.flock.io). It's where competitive model training happens.

把它想象成 **Kaggle 竞赛**，但是：
- 运行在区块链基础设施上 / Runs on blockchain infrastructure
- 使用真实 FLOCK 代币进行质押和奖励 / Uses real FLOCK tokens for staking and rewards
- 任何人都可以作为 Training Node 或 Validator 参与 / Anyone can participate as a Training Node or Validator

---

## 四种参与角色 / The Four Participant Roles

### 1. Task Creators / 任务创建者
- 定义想要的 AI 模型类型 / Define what kind of AI model they want built
- 向平台提交任务 / Submit tasks to the platform
- 示例："我们需要一个能以 >90% 准确率检测胸部 X 光片肺结节的模型"

> ⚠️ 目前，所有任务都由 FLock.io 团队创建。社区任务创建即将开放。

### 2. Training Nodes / 训练节点
- 开发或微调模型以满足任务要求 / Develop or fine-tune models to meet task requirements
- **必须质押 FLOCK 代币**才有资格参与 / **Must stake FLOCK tokens** to be eligible
- 如果模型表现好，获得质押奖励 / If they produce a good model, they earn staking rewards
- 如果行为恶意，质押会被 Slash / If they behave maliciously, their stake gets slashed

**为什么需要质押？** 质押既是质量门槛，也是安全保证金。有真金白银在里面的节点有动力做诚实、高质量的工作。

### 3. Validators / 验证者
- 评估 Training Nodes 提交的模型 / Evaluate models submitted by Training Nodes
- 提交影响奖励分配的验证评分 / Submit validation scores that influence reward distribution
- 也需要质押 FLOCK 代币参与 / Also stake FLOCK tokens to participate

**Validator 激励：** 准确、诚实验证 = 更多奖励。虚假验证会被 Slash 机制惩罚。

### 4. Delegators / 委托者
- 没有训练或验证的技术能力 / Don't have technical skills to train or validate
- 将 FLOCK 代币委托给 Training Node 或 Validator / Delegate FLOCK tokens to a Training Node or Validator
- 分享委托对象的奖励 / Share in the rewards earned by their delegatee
- 委托对象设置**奖励分享比例** — 比例越高，委托者获得的越多

**示例：** 你将 1,000 FLOCK 质押给奖励分享比例为 90% 的 Training Node。他们赚了 100 FLOCK 奖励。你获得 90 FLOCK，他们保留 10 FLOCK。

---

## gmFLOCK — 游戏代币 / The Gaming Token

gmFLOCK 是 FLock 的**市场驱动机制**，用于 AI Arena 的代币经济学和排放分配。

- 可转让 / Transferable
- 限制使用 / Restricted use — 只能用于：质押为 Training Nodes、Validators 或 Delegators
- 故意设置限制，以防止纯粹投机性交易干扰训练经济

---

## 真实示例：你的 FLOCK/USDC 仓位 / Real Example: Your FLOCK/USDC Position

如果你一直在关注 Aerodrome 监控，你已经是 **Delegator**！你在 FLOCK/USDC 流动性池中质押 FLOCK，赚取 AERO 排放奖励。在 AI Arena 中，委托是直接质押给网络中的 Training Nodes 或 Validators。

---

## 快速知识检验 / Quick Knowledge Check

1. Training Node 和 Validator 的区别是什么？/ What's the difference between a Training Node and a Validator?
2. 为什么 Training Node 需要质押 FLOCK？/ Why does a Training Node need to stake FLOCK?
3. 如果 Validator 提交虚假评分，会发生什么？/ If a Validator submits a fake score, what happens?

---

*下一课 / Next: [Lesson 3 — FL Alliance](lesson-3-fl-alliance.md)*
