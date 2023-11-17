# Networking and LLM in the Age of AI — Pt. I: The Exploration Begins
> *A series to explore how to leverage LLM for networking tasks*

The rise of chatGPT and large language models ( LLM ) has provided us much glimpse into the future of possibilities in transforming various domains — however, so far networking has not been explored as much.

In this series, we’ll take a deep-dive into chatGPT APIs to explore the potentials of LLMs to empower networking management, or IT Operations in general. No AI/ML knowledge is required to follow this series


## Introduction
In this first chapter, we’ll briefly discuss the mission, topics to be covered, a high-level application flow and finally answer some common questions.

Since my background is NX-OS/ACI, I will demonstrate with those tech. We’ll leverage chatGPT model “gpt-4” for all demonstrations.

## Mission
The mission of this exploration is to understand efficacy of LLM to manage networks without hallucinations. We’ll start with simple use case and slowly ramp up complexity. We will use LLMs to drive all networking configurations change while we provide prompts in plain English. There will not be any pretty graphical UI, but only conversations

## Topics To Be Covered
* Explore the basics of instructions, function calling, context and prompts in chatGPT
* Explore chatGPT’s function calling feature to perform API requests against an ACI environment
* Review chatGPT's responses to different questions, and explore how we can improve them
* Explore Using RAG ( Retrieval Augmented Generation ) to retrieve knowledge in real-time for a smoother experience

## High Level Flow
The general idea is that the user would request for either information or for change to a network in human language. This request will be translated via chatGPT, matching a function call that gets executed. Then we return the final results back to the user

![high_level_flow](../../../images/high_level_flow.png)

## Questions that you might have
> ***Q: Will network engineers become obsolete because of LLMs ?***

A: No. On the contrary, expert level knowledge will become even more critical. However we will need strong communication skills to train, instruct and educate LLM models using precise languages.

Networking is a very unique domain with lots of proprietary information (closed language syntax compared to general programming language, hence you typically contact tech support or specialist for assistance).

Not only there are technology differences (Firewall vs. Router vs. Load Balancers), there are different hardware with different capabilities, different firmware with different features, makes it extremely complex for any LLM to be able to handle.

Hence for any LLMs to become useful, we need to infuse it with knowledge so that it can empower us.

> ***Q: How will LLM impact network engineers ?***

A: LLM will become a powerful assistance to network engineers. This is similar to other domains impacted by LLMs. Networking designs and intention will remain to be the most complex component that no LLM can replace.

However, tasks such as routine networking configuration changes will become easier, safer, more transparent and eventually fully autonomous with minimal instructions from a user ( which will likely enhance today’s typical IaC )

Additionally, networking operations, troubleshooting, information gathering, and taking actions in real-time will become easier because LLM is much more user friendly and can understand complex requests.

Overtime, the role of networking engineer will slowly shift from technical oriented to business aligned allowing us to focus more on designing robust, resilient, extensible and flexible networks.

The better a network follows a design pattern, the easier it will be for AI/LLM to manage and maintain. The current state of LLMs cannot replace human, but it can reduce the burden from network engineers of daily mundane tasks.

> ***Q: How is this different from network automations?***

A: There are several areas an AI agent can outperform traditional automation tools such as Ansible, Terraform or even Python based scripts.

AI/LLM agent can consult real-time knowledge base when making decisions and provide necessary recommendations.
AI/LLM agent can engage in conversations, allowing the user to better understand how/why a task will be implemented.
Most importantly, AI/LLM agent can reason and observe the environment when encountering an error. For example: if you made a typo in a CLI command, an AI agent can help correct it where as Ansible / Terraform will simply error out.
AI/LLM agent can also look up networking topologies to better understdand its options when making configuration changes.

> ***Q: Does network engineers need to pick up AI skills?***

A: Not exactly AI/ML skills, but I encourage any network engineers to pick up skills that can leverage the AI technology. This includes LLM prompt engineering, basic Python knowledge and APIs. We should treat software like chatGPT as a dev tool, rather than a product.

Work on prompting, instruction and context building skills. If a network engineer can provide well structured intention, instructions, guidance, prompts and context for an LLM model, it will become an extremely powerful assistant. Throughout the series, you’ll see how I use my own knowledge in ACI/NX-OS to drive better performance of the model.

However, if I were to try building a model for deploying cloud infrastructure, I would not be as efficient becuase I lack such expertise. 

Most importantly, you need to understand the nuances in networking. Common and generic knowledge will be easy for an LLM to pick up, but nuances come from experience in real world implementations. This is similiar to how we can easily learn generic networking concepts and knowledge, but takes time for us to learn how these knowledge is applied to a specific networking environment

## One Last Thought

With the revolution of LLM, your imagination is the limit, it’s only a matter of whether you can ask the right question and provide the right guidance to an LLM model