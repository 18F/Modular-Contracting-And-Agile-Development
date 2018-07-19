---
layout: page
title: Learn More
description: Review a list of commonly asked questions from our partners.
permalink: /learn-more/
---

## Working with 18F

There are a number of concerns we've heard expressed in many of our workshops and conversations. Here's how we answer some of them:

### Vendor cost evaluation in agile and modular contracts

Vendors submit proposals with associated costs, staffing plans, and their suggested technical approach even though the exact deliverables are not known. In modular procurement vendors have a better sense cost estimate because the contracts are more tightly scoped and more frequent..

### Avoiding Federal approval delays in modular contracting.

While the federal government has up to 60 days to approve our Advance Planning Documents and our RFPs for projects involving federal grants, as  a Federal entity 18F is committed to working with our federal partners to reduce the burden on state agencies to get smaller contracts approved. The approval cycle is to ensure that states are mitigating risk—and one of the best ways to do that is with shorter, lower-cost contracts.

### Using the 18Fs Agile Blanket Purchase Agreement (BPA)

18F’s Agile BPA is only available for use by 18F and its partner agencies. As 18F can directly support states by establishing an Intergovernmental Cooperative Agreement with them, then any state or local entity can avail themselves of the services offered on it.

### Open source software product support

We work to ensure that an appropriate acquisition plan is in place, so that an open source solution will be maintained after the product is launched, just like closed source software.

### Ensuring accountability without having a single systems integrator

The government is always accountable to deliver on its mission, not your vendor. In the same way that most manufacturing companies rely on multiple suppliers, companies that need digital products have expanded their procurement practices with multisourcing, to reduce the type of risk that comes from vendor lock-in with a single systems integrator. Moreover, decaders of large-scale IT failures indicate that a single systems integrator have provided neither the control nor the accountability needed for the government to succeed. 

### Building an agile skill set in-house

This is where 18F, in particular, can help the most.

### Our mainframe is 30 years old and I can’t risk doing anything to make it stop working because it’s the only thing we have that works.

We can help you identify strategies to mitigate the risks of moving away from a legacy mainframe system. For example:

* Mainframes are designed to be highly efficient in executing very specific functions; split those functions out one by one and replace them.
* Use proxies to abstract out new code from legacy code.
* Ensure there are swift fallback/reversion processes in place as you migrate.
* Use agile prioritization techniques to identify priorities for the migration process, taking into consideration risk, timing, effort, and benefit.

The key to success is migrating piece by piece. Aiming to do a single cut over to a new system is extremely risky.

### Holding vendors accountable without traditional requirements documentation

In waterfall development documentation provides a blueprint and oversight thorughout development, because there's no product to assess or examine until the end of the project. Agile Independent Vertification & Validation must concentrate on evaluating the actual product, each sprint, throughout the development period.

Within the agile process, expectations are managed by having incremental releases. Working software (or lack thereof) is the measure of a vendor's performance. A good vendor is not just one that delivers software functionality, but can also easily adapt to changing needs.

### Working with vendors to ensure delivery

Vendors that can do agile work will respond to the way you are working. We recommend having an empowered government product owner — a single person who acts as the point of contact for the vendor, and who can serve as a zealous advocate for the success of the project. In a well-run agile project you will get working product from your vendors every two weeks. This product is the basis on which to evaluate their performance.

If you don’t, then you have a problem you need to conduct an assessment as to what is preventing your team from delivering. Does your vendor truely have the right skill set? Are they given access to users regularly? Is there onerous stakeholder review?

### IV&V and governance in agile development

With iterative development the completed stories becomes an indication of work completed that can be used to determine the amount of output. IV&V activties can concentrate on the working software rather than documentation.

### What to do if something goes wrong

If you discover a bug in open source software, you hire a vendor to fix it. It doesn’t have to be the same vendor that originally produced the code. In fact, the bug could simply be added to the product backlog and the next vendor would pick it up.

If a vendor isn’t producing to the level you expect, you can simply not hire them for any subsequent work. Before removing your vendor, make sure you've done all you can to remove the impediments to prevent them from delivering. If you have not, you will likely see the same results with a follow on vendor.

The amount of time and effort lost is limited to that one development period, possibly as short as a few weeks, rather than the entire life of the project.


### Managing multiple many vendors using different languages.

You would ensure that the vendors:

- Build to common standards that are determined and controlled either by the state or by the entire technical project team
- Build with agreed engineering practices across the entire program
- Use IV&V to monitor consistency across teams
- Use project-wide "Definition of Ready" and "Definition of Done"
- Organize by "Feature Teams"
- Conduct synchronized, system-wide sprint reviews
- Maintain standards for automated test
- Deliver code with good test coverage
- Use current and popular languages, tools and frameworks
- Include "non-functional requirements (NFRs)" in all solicitations, specifying required technology stack, tools, and other technical constraints

### How to maintain a system with multiple modules through the life of the project

If the modules are open source and built with standard languages, libraries, and frameworks, other vendors can jump in to add features or make fixes as necessary. This frees the government from having to rely on any given vendor for anything as new vendors can swap in and out. In writing subsequent contracts, be sure to include clauses that permit or require the vendor to apply their changes to any relevant sections of the code.

By leveraging configuration-as-code principles, you can work to minimize institutional knowledge of the deployment processs. By maintaining public backlogs, and keeping the artifacts public after a vendor offboards, you can create a reference of previous decisions that may have impacted the development of the site. Consistent government involvement in the role of the product owner, will also help keep continuity across module development. Increasing competition amongst vendors can help keep costs down to the state.

### Accepting failure when something goes wrong

One of the most challenging cultural changes that happens when introducing agile development is accepting small failures as a learning process. With every release, you would have deployed code that is tested in the field. From this field testing you can learn about places to improve or invalidate assumptions You could have an acceptance period. The state would be responsible for problems discovered after this period. It would be treated as fresh development that can be contracted out to any developer. This is a fact of (software development) life that has to be accepted.


### Fitting modules together

There are two distinct levels of "fitting together."
* One is at the user interface level where good and consistent application of HCD principles across all modules will provide similar user experiences to people using each module. For instance, if I have to look up a person, the presentation of that person’s information should look the same regardless of which module I am currently working in. We recommend leveraging a shared design framework such as the US Web Design System so that developers can  build indepently and still look like it is consistent. We also recommend having a shared style guide so that content has a consistent voice.
* The second "fitting together" is at the technical level by creating documented interfaces - i.e. connection points using either a REST or graphSQL Application Protocol Interfaces. This allows one module to query another module without knowing the internals of another. This allows various modules to communicate via a service architecture. 

### Role of the system integrator in incremental delivery

In a modular software development project, a system integrator coordinates from both a technical, operational, and personnel (both with government and vendor) to ensure that technical decisions are interoperable, minimize technical debt or risk, and most importantly support the most end-user centered design. They will also need to be involved in acquisitions to help scope out the various modules. They often work with or also are the Product Manager to help the product team deliver.