https://github.com/codess-aus/AskBuildBurnNDC/blob/95f895e12fc75f791e1be8a1764e6cfb44a58408/images/9-Plandemo.png

“Alright, let’s make this real with a quick demo.

Here’s the scenario. You are mid flow, and you get a message like this from ‘The Boss’: ‘We need to add authentication to the orders API. OAuth2, JWT tokens, the usual. Can you scope it out today?’

https://github.com/codess-aus/AskBuildBurnNDC/blob/95f895e12fc75f791e1be8a1764e6cfb44a58408/images/8-demo.png

That sounds straightforward, but it is actually a perfect example of why decision fatigue happens. ‘The usual’ hides a lot of decisions: which OAuth flow, who is the identity provider, what claims do we need, what is the threat model, what endpoints are public, what is the rollout plan, what breaks if we get it wrong.

This is the blank page moment. Not because you do not know how auth works, but because you are staring at a cloudy request with too many implied requirements.

So in Demo 1, I’m going to use Plan Mode in action to reduce scope ambiguity.

I will start with that vague feature request: ‘Add OAuth2 authentication with JWT support.’
Then I’ll show Copilot doing what a good senior engineer does: asking clarifying questions before writing code.
And once we have answers, I’ll have it produce a structured implementation plan with a TODO list that I can hand to myself, or hand to the team.

And finally I’ll point out where Spec Kit fits, because the fastest way to keep plans consistent is to encode the rules once, like security requirements, logging standards, and how we do configuration.

Alright, let’s switch over to VS Code and walk through it.”

<add demo1 video here>
