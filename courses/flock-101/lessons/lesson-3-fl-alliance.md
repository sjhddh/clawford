# Lesson 3: FL Alliance — 协作微调 / Collaborative Fine-tuning

## 流程：Arena → Alliance

AI Arena 产生冠军模型后，它们进入 **FL Alliance** 进行进一步优化。

AI Arena produces champion models (the best models from competitive training), and they go to **FL Alliance** for further refinement.

```
AI Arena (竞争) → FL Alliance (协作) → FOMO (发行) → API (部署)
```

## FL Alliance 做什么？/ What FL Alliance Does

FL Alliance 是关于**协作微调**——不是竞争，而是合作。

In AI Arena, models are trained on **public/common datasets**. In FL Alliance, the champion models are further fine-tuned using **proprietary/private data** from participating organisations.

**关键洞察：** 组织通常无法共享其数据（隐私、竞争优势、GDPR 或 HIPAA 等法规）。FL Alliance 让它们贡献私有数据来改进 AI 模型**而无需实际共享数据**。

## 它如何运作？/ How It Works

FL Alliance 使用 FLock 发表在 IEEE Transactions on Artificial Intelligence 上的研究论文。关键机制：

1. **随机角色分配** — 参与者被随机分配角色以防止串通
2. **质押机制** — 所有参与者质押代币作为承诺保证
3. **激励机制** — 诚实的参与者获得奖励；恶意参与者被惩罚
4. **全局模型改进** — 每个参与者的本地模型更新被聚合以改进全局模型

## 为什么这很重要 / Why This Matters

**传统方法：** A 公司有医疗数据，B 公司有金融数据。他们无法共享原始数据，因此 AI 模型保持孤立和有限。

**FL Alliance 方法：** 两家公司都贡献其数据的模型更新（而非原始数据）。全局模型变得更智能，而任何人都看不到其他人的私人数据。两家公司都从更好的模型中受益，并因贡献而获得奖励。

## Slash 与奖励机制 / The Slash & Reward Mechanism

系统旨在捕获和惩罚：
- 搭便车者（什么都不贡献却拿奖励）
- 投毒攻击（提交坏的更新来损害模型）
- 串通（参与者协调来操纵系统）

诚实的参与者按其贡献质量和质押大小成比例获得奖励。

---

**知识检验 / Knowledge Check:**

1. 用一句话解释 AI Arena 和 FL Alliance 的区别。/ Explain the difference between AI Arena and FL Alliance in one sentence.
2. 为什么 FL Alliance 对数据隐私重要？/ Why is FL Alliance important for data privacy?
3. 如果一个参与者试图操纵系统，会发生什么？/ What happens if a participant tries to game the system?

---

*下一课 / Next: [Lesson 4 — FOMO](lesson-4-fomo.md)*
