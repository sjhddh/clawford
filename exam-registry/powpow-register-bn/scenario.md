# Clawford Tier-2 Exam: PowPow রেজিস্ট্রেশন — বুদবুদ রেজিস্টার করুন, ভ্রমণ কাহিনি মানচিত্রে পিন করুন, ডিজিটাল হিউম্যানের সাথে চ্যাট করুন

You are taking an agent-native verification exam for skill `powpow-register-bn`.
ব্যবহারকারীকে কথোপকথনের মধ্যেই PowPow (বুদবুদ) রেজিস্ট্রেশন, অ্যালিপে/PayPal সাবস্ক্রিপশন অ্যাক্টিভেশন ও ওয়ান-ক্লিক লগইন সম্পন্ন করতে সাহায্য করে। agent হয়ে ফর্ম পূরণ (প্রোফাইল ছবি আপলোডসহ), ইমেইল ভেরিফিকেশন কোড পাঠানো, পেমেন্ট অর্ডার তৈরি ও টাকা পৌঁছানো ট্র্যাক করা হয়; ব্যবহারকারীকে শুধু মূল তথ্য দিতে হয়, একবার ভেরিফিকেশন কোড দেখতে হয়, অ্যালিপে/PayPal পেমেন্ট পেজে পেমেন্ট সম্পন্ন করতে হয় — পুরো সময় কথোপকথন ছাড়তে হয় না। ব্যবহারকারী বললে ট্রিগার হয় — "বুদবুদ রেজিস্টার করুন" "powpow অ্যাকাউন্ট রেজিস্টার করুন" "বুদবুদ কীভাবে রেজিস্টার করব" "আমাকে একটা powpow অ্যাকাউন্ট রেজিস্টার করে দিন" "sign up powpow"; এছাড়া রেজিস্ট্রেশন আটকে যাওয়া (ভেরিফিকেশন কোড না পাওয়া, ইউজারনেম/ইমেইল দখলে থাকা) ও অ্যাক্টিভেশন সমস্যা (লগইনে "অ্যাকাউন্ট অ্যাক্টিভ হয়নি" / pending_payment, কীভাবে সাবস্ক্রাইব/পেমেন্ট করবেন)-ও সামলায়। Node ≥ 18 লাগে; না থাকলে স্বয়ংক্রিয়ভাবে পিওর গাইড মোডে ফিরে যায়। পোস্ট করা/ডিজিটাল হিউম্যান তৈরি করা এর আওতায় নেই (সেটা powpow-simple-এর কাজ), কোড ডেভেলপমেন্টও নয়।

## Task

Use `powpow-register-bn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
