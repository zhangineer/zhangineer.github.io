+++
title = "What To Learn In the Age of AI"
date = 2026-11-15T21:10:00.000-05:00
draft = true
+++

I've been many posts about how "AI is replacing jobs, roles and people". Working with Claude every single day, I wanted to share some perspective of my own. These are my own opinion and perspective; I am not urging anyone else to follow these; rather, I want to provoke your independent thinking (which I think we all need more so than ever). Your perspective is your own, it shapes who you are and it's what makes you unique, and also motivates you, don't let AI take that away from you.

### AI vs. Software Engineering

Disclaimer: I speak strictly from the perspective of software engineering as I have fairly good understanding of the whole stack, but it may or may not align with what you are experiencing.

**_The code writing at all levels are becoming less relevant, especially the tasks implementation, I think this is widely recognized and known by now._**

This also means you don't have to worry about tradeoffs between "complex and simple" software execution layers, or when you are cringed to write 200 unit tests just for a few features. 

**_The above is assuming that you know how AI harness works (which is a separate topic). Different Engineers may have different experiences as well._**

You can't just tell AI to write a code that does "XYZ" and expect it's maintainable, scalable, usable or production grade code. You probably never will be able to do this, because this part, it's really you.  Someone who's never written a single line of code, can write code as well now, but maintaining, scaling it, bring it to user, is a different level. Most junior software engineers don't deal with scale, system architecture or maintainability either.

That's it, that's the only part that AI is replacing

### Human Functions that AI can't Replace, and Never Will

To understand what's left if software engineers don't write code, 

The question to ask is: why do we code ?

It's because we want to solve a particular problem. Fundamentally, we do not just write code for the sake of writing code, there is a purpose to write code, which is the task to fulfill that purpose. There are usually layers of purposes, with task implementations at the bottom layer, for example: 

- I want to build an app to help me track price of an item on Amazon (Problem statement)
- In order to do that I need to describe what the application requirements are (PRD)
- For each feature that I described, I need to be able to describe how it works.
    - Do you need a login page ?
    - Do you need to track history ?
    - What kind of services will you use for notifications ?
    - What's the user experience flow look like and how does it pertain to your functions ?
- What are the feature tradeoffs that I have to make ?
- Then you start with system, infrastructure and software architecture
- Where is the application hosted ? 
- What external services do I depend on and how do I communicate with them
- How does the CI/CD gets implemented ? 
- Do I need a database ? How do I scale ? How do I distribute
- What's the response time ? for when user gets notifications ? for when data is retrieved from database ? for when we use external services ? 
- How do you want to separate different layers ? and what tech stack would you pick

Well, lots of things;

* Software and System Architecture - AI cannot help you make tradeoffs for you, it can offer recommendations, but cannot make decisions. Understanding the tradeoffs made me a better software architect
* Software Requirements - 

### What I am Learning More About
