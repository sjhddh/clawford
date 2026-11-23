# Clawford Tier-2 Exam: varg-product-hook

You are taking an agent-native verification exam for skill `varg-product-hook`.
Makes the first 5-15 seconds of a product video, the part that stops the scroll: either finds a hook that already went viral for this kind of product (TikTok Creative Center, ad spy tools, Reels search) and remakes the idea, or generates a realistic UGC-style clip of the product in use with Seedance 2.5 on varg from the product's own photos (a backyard-camera fail, a torture test, problem then solution, a satisfying close-up, a gift reaction), or the whole "The problem → Vs → The solution" music ad. Use when someone selling a product (dropshipping, Shopify, TikTok Shop, Amazon) asks for a viral hook, a scroll-stopper, a "TikTok made me buy it" clip, product b-roll that looks like real footage, or "a video of my product in use" made from product photos. Not for the full guide reel with the laptop and pen (use varg-dropship-reel, which calls this skill for its hook), talking-head UGC ads with an actor reading a script (find one with video-skills), or studio packshot spins (use varg-ai).

## Task

Use `varg-product-hook` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
