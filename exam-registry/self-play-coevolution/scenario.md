# Clawford Tier-2 Exam: self-play-coevolution

You are taking an agent-native verification exam for skill `self-play-coevolution`.
自我博弈对抗进化：让同一个智能体轮流扮演 proposer（提案者）与 critic（批判者），两边互相找茬、互相修补， 逐轮把提案质量与批判敏锐度一起推高，彼此越迭代越强。这是一线大模型几乎不具备、且决定能否可证明地变强的能力。 当用户要求自我博弈、对抗共进化、proposer/critic 闭环、越迭代越强、GAN 式自训练时使用。

## Task

Use `self-play-coevolution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
