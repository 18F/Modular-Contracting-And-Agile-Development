---
layout: page
title: Common questions from state partners
permalink: /common-questions/
---

There are a number of questions and concerns we've heard expressed in many of our workshops and conversations. Here's how we answer a few of them:

#### How do we evaluate vendors if they don’t estimate costs up front and the deliverables aren’t fixed? How is this better than knowing upfront costs and all deliverables and timelines?

Vendors would still be submitting proposals with associated costs, deliverables, etc. The difference with modular procurement is that what they are proposing against is much smaller and more frequent.

#### The federal government has up to 60 days to approve our Advance Planning Documents and our RFPs for projects involving federal grants. Doing more small procurements just means more delay. How can that be improved?

18F is committed to working with our federal partners to reduce the burden on state agencies to get smaller contracts approved. The approval cycle is to ensure that states are mitigating risk—and one of the best ways to do that is with shorter, lower-cost contracts. 

#### Can I just buy off 18Fs Agile Blanket Purchase Agreement (BPA)?

18F’s Agile BPA is only available for use by 18F and its partner agencies. As 18F can directly support states by establishing an Intergovernmental Cooperative Agreement with them, then any state or local entity can avail themselves of the services offered on it.

#### Who will I call when something goes wrong after launch?

We work to ensure that an appropriate acquisition plan is in place, so that an open source solution will be maintained, just like closed source software.

#### How can we ensure accountability without having a single systems integrator?

Paradoxically, the idea that a single systems integrator provides ultimate accountability and maximum control isn’t supported by decades of large-scale IT projects that used this approach. In the same way that most manufacturing companies rely on multiple suppliers, companies that need digital products have expanded their procurement practices with multisourcing, to reduce the type of risk that comes from vendor lock-in with a single systems integrator.

#### Agile seems to require different skills of my staff, how do I know what skill we need in house and how do we get that training? Or can I hire a vendor to do that?

This is where 18F, in particular, can help the most. 

#### Our mainframe is 30 years old and I can’t risk doing anything to make it stop working because it’s the only thing we have that works.

We can help you identify strategies to mitigate the risks of moving away from a legacy mainframe system. For example:

* Mainframes are designed to be highly efficient in executing very specific functions; split those functions out one by one and replace them.
* Use proxies to abstract out new code from legacy code.
* Ensure there are swift fallback/reversion processes in place as you migrate.
* Use agile prioritization techniques to identify priorities for the migration process, taking into consideration risk, timing, effort, and benefit.

The key to success is migrating piece by piece. Aiming to do a single cut over to a new system is extremely risky.

#### How do we hold vendors accountable without traditional requirements documentation?

Documentation as the bedrock of oversight is an artifact of waterfall development, because there's no product to assess or examine until the end of the project. Agile IV&V must concentrate on evaluating the actual product, each sprint, throughout the development period.

Within the agile process, expectations are managed by having incremental releases. Working software (or lack thereof) is the measure of a vendor's performance. A good vendor is not just one that delivers software functionality, but can also easily adapt to changing needs.

#### Once we hire an agile vendor, how do we know they’re going to deliver what we want?

Vendors that can do agile work will respond to the way you are working. We recommend having an empowered product owner — a single person who acts as the point of contact for the vendor, and who can serve as a zealous advocate for the success of the project. In a well-run agile project you will get working product from your vendors every two weeks. If you don’t, then you have a problem. If you do, then you can evaluate their deliverables every two weeks

#### What about governance? And IV&V? How does that work with agile development?

In a well-run agile project you will get working product from your vendors every two weeks. If you don’t, then you have a problem. If you do, then you can evaluate their deliverables every two weeks.

#### What happens if something goes wrong?

If you discover a bug in the software, you hire a vendor to fix it. It doesn’t have to be the same vendor that originally produced the code. In fact, the bug could simply be added to the product backlog and the next vendor would pick it up.

If a vendor isn’t producing to the level you expect, you can simply not hire them for any subsequent work. The amount of time and effort lost is limited to that one development period, possibly as short as a few weeks, rather than the entire life of the project.


#### How do we deal with so many vendors? What if they use different languages and we don’t have staff familiar with those.

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
- Include “non-functional requirements (NFRs)” in all solicitations, specifying required technology stack, tools, and other technical constraints

#### Let’s say we build a new system with 12 modules, how do we maintain that system? Do we keep all of those vendors on board through the life of the project?

No. If the modules are open source and built with standard languages, libraries, and frameworks, other vendors can jump in to add features or make fixes as necessary. This frees the state from having to rely on any given vendor for anything as new vendors can swap in and out.

With iterative and incremental goals of agile development, continuous integration and continuous deployment activities become de facto needs of systems.  As a result, comprehensive automation (testing and deployment) becomes baked in as part of the development process.  This automation helps reduce the reliance on institutional knowledge from vendors leading to the reduction of barriers to entry for other vendors to maintain the system.  Increasing competition amongst vendors and thus keeping costs down to the state.

#### What happens when something goes wrong and vendors all blame each other? How does the problem get fixed quickly and who pays for that?

With every release, you would have deployed code that is tested in the field. You could have an acceptance period. The state would be responsible for problems discovered after this period. It would be treated as fresh development that can be contracted out to any developer. This is a fact of (software development) life that has to be accepted.


#### How do all these modules really fit together?

There are two distinct levels of “fitting together.”
* One is at the user interface level where good and consistent application of HCD principles across all modules will provide similar user experiences to people using each module. For instance, if I have to look up a person, the presentation of that person’s information should look the same regardless of which module I am currently working in. 
* The second “fitting together” is at the technical level, and this is a key point. _The modules need not know about each other at all._ Each module should communicate directly with the database and act directly on data. There should be no need for “integration” between modules. So the modules fit together by operating on the same data independently.

#### Who is the system integrator? The state? A vendor? How does this work?

Just as the role of Project Manager changes in an agile project, so does the role of system integrator. The state can become the system integrator if there is the will and the budget, a system integrator can be engaged as in the past, or you can take advantage of the agile approach and not use a system integrator. There will be a few things that require an overall project view that require some technical expertise, but they will be orders of magnitude less than with a multi-vendor waterfall project.

