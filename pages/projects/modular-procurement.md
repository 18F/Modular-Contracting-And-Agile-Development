---
layout: page
title: Managing modular procurements
permalink: /modular-procurement/
---

Modular procurement is a procurement model that breaks what would traditionally be a large, monolithic contract into several shorter-term, lower dollar amount contracts.

Modular procurement does two things that make it easier to manage development: it segments risks and increases transparency. Segmenting risk means that what was a single, monolithic project is handled as smaller, discrete units. If one unit fails, that failure is isolated. Because each project is smaller, they are easier to comprehend and manage, making problems and risks smaller so you can recognize and resolve them more easily.

In practice, most traditional contracts already have multiple companies responsible for different parts of the effort, but you may not see that complexity until something goes wrong. The majority of large scale government IT projects fail, so it’s nearly inevitable that something will go wrong under a traditional procurement process.

The [Standish Group found](http://www.computerworld.com/article/2486426/healthcare-it/healthcare-gov-website--didn-t-have-a-chance-in-hell-.html) that:

> Of 3,555 projects from 2003 to 2012 that had labor costs of at least $10 million, only 6.4% were successful. The Standish data showed that 52% of the large projects were "challenged," meaning they were over budget, behind schedule or didn't meet user expectations. The remaining 41.4% were failures — they were either abandoned or started anew from scratch.


#### Modular procurement doesn't necessarily mean more work for your procurement team.

You do need to do some work up-front to change your procurement processes to support modular procurement. Modular procurement can actually reduce the work required, such as by simplifying vendor selection and speeding up the process.

#### Shorter contracts will reduce the risk of factors beyond your control.

Planning work for a successful six-month contract is easier than planning a successful six-year contract.

At its core, modular procurement supports iterative development. This means that you are continuously improving, rather than merely hoping for perfection at some point in the future. Building a Minimal Viable Product (MVP) and learning from it ultimately results in a better product than the traditional approach of trying to build a more complex ideal project all at once.

#### There are ways to make sure code is consistent and compatible while using multiple vendors.

There are well-documented, standardized software development practices that can be standardized across vendors, and tools to enforce those. By adopting a “programming style” and an automated style checking tool (known as a “linter”), your vendors can ensure the code style is consistent. By adopting other automated quality-checking tools (examples include Code Climate and HoundCI), your vendors can avoid other poor code quality practices. Because the code is open source, vendors can see the code they have to integrate with. By having automated integration and unit tests, your vendors can identify and fix code that breaks or doesn't integrate as soon as it’s written.

#### Onboarding vendors is more manageable when projects are modular.

One of the major burdens of onboarding is the time for a vendor to understand the entirety of a project. By reducing the size of each project and simplifying the specs, the time required to onboard vendors can be reduced substantially. This makes it manageable to onboard several vendors over the course of a complex project, and reduces the risk.

#### Pre-qualified agile vendor pools can help speed up modular procurement in the long run.

Agile vendor pools are groups of vendors that have been pre-qualified to work on modular procurements.

During the selection process, the vendor pool is asked to provide proof of their abilities through working code, rather than extensive documentation. That process can include:

* Developing a programming challenge for the vendor community (for example, the challenge for Mississippi’s agile vendor pool was to build a prototype of a website that lets parents or caseworkers search for child care providers in their vicinity).
* Defining a short period of time (days, not weeks) to build a prototype.
* Asking for a link to the working prototype as part of their proposal, as well as a link to the public source code.
* Evaluating the proposals based on adherence to coding and design best practices, proof they followed an agile methodology, and evidence of their user research.
* Selecting the best-performing companies for your pool. We recommend starting with a smaller number of companies, perhaps 8 to 10. This is a manageable number, and with a defined on and off-ramp process, the size of the pool can be modified as the amount of work that can be managed increases.
* Once your pool is created, you can write a “task order” (specific language varies from federal to state to local governments), or an RFP that only goes out to the vendors on the pool. Since they are all pre-qualified, you know they are all capable of doing the work, which lets you skip that stage of the evaluations for each subsequent RFP.
