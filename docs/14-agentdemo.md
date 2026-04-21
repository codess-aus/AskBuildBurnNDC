https://github.com/codess-aus/AskBuildBurnNDC/blob/6cbab8381814793d2018e6876319a03875ddc6da/images/15-Agentdemo.png

“Alright, Demo 3 is called ‘The Fleet,’ and it is Agent Mode in action.

This demo is aimed at a very specific burnout driver: expanded scope and unmanageable workload. That moment where a request sounds reasonable, but the minute you start, you realize it touches everything.

The scenario is a classic: we want to refactor logging across a codebase. Not just one file. Across multiple modules, multiple call sites, and ideally without breaking tests or losing observability along the way.

Here’s what I’m going to show.

First, I’ll ask Agent Mode to refactor logging across multiple files. You’ll see it scan the project, identify patterns, and propose a consistent approach.

Second, you’ll see it do real multi step work: analysing the codebase, creating a new module to centralize logging, and then updating call sites so the entire system moves together instead of drifting into a half migrated state.

Third, I’ll have it generate or update tests, and create a commit so the work is reviewable like any normal change. That is important because the output of agent mode should still fit your team’s workflow.

And finally, I’ll deliberately let a test fail, because this is where agent mode becomes more than autocomplete. I want you to see self correction: it reads the failure, traces it back to the change, and iterates until the suite is green.

Throughout the demo, watch for the control points. I can pause it, I can redirect it, and I approve the risky steps. It is a fleet of assistants, but you are still the captain.

Alright, let’s switch to VS Code and run the fleet.”

https://github.com/codess-aus/AskBuildBurnNDC/blob/bc6e19a60c06e2c19cd6e5a86b85fe7543996779/videos/Demo%203%20-%20Agent%20Mode%20(smaller).mp4
