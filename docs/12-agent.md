![Chapter 12 Hero](images/13-agent.png)

“Alright, we have covered Plan Mode and Ask Mode. Now let’s meet Agent Mode.

Agent Mode is what you use when the work is not a single question and not a single edit. It is multi step work that spans files, requires iteration, and usually includes some form of verification.

Think of it as your autonomous coding collaborator. You give it a goal, and it can plan, execute, and iterate from prompt to working code across multiple files.

Here are the kinds of problems it is great at.

First: multi step task execution. If a change touches routing, auth, config, and docs, agent mode can walk the graph and keep track of the moving parts so you do not have to juggle everything in your head.

Second: refactoring across your codebase. Things like migrating callbacks to async await, renaming a public API consistently, or updating deprecated library usage across many modules. These are important, but they are draining. Agent mode can do the repetitive part while you focus on the decisions.

Third: generating comprehensive tests. This is one of my favorite uses because tests are where quality and confidence live. Agent mode can propose a full suite with edge cases and mocks, then you review and tune.

And fourth: surfacing security issues. Not by magically guaranteeing security, but by helping you look for common risk patterns and adding guardrails earlier, before problems reach production.

Now, quick reminder from rule zero. You own the code. Agent mode can do a lot, but you still review every change, you run the tests, and you confirm the architecture is still sane.

In the next demo, I’ll show what it looks like to hand a real, multi file task to agent mode, and how to keep it safe with tight constraints and clear acceptance criteria.”