# Hustle-Employer

Hustle Employer is a web application that tries to combine the wonders of clean architecture with a reactive framework such as Vue.js. Those are the two key components used to provide a space for companies to interact and work with employees all over the world.

## Requirements

#### - Node.js.

You can download node latest version [here](https://www.npmjs.com/).
If you've Node already, check your Node version is at least above 14 using `node -v`

#### - npm

An npm version greater than 7 is required.
`install -g npm@7`

## Setup:

#### Run the Vue project locally:

1. Clone the project, and open a terminal inside it.

1. Run: `npm i`

1. Run: `npm run setup`

1. Run: `npm start`

#### Run tests

1. Run: `npm test`

## Key concepts:

We wanted to create a TypeScript based project whose business core's completely independent from User Interface Frameworks such as React, Angular or Vue. That’s why using npm workspaces was key to define a clear separation between core concerns and UI concerns.

Inside our core folder, you’ll find an _architecturally expressive structure_: first, centered around the main concepts- the _entities_ – then, separated by layer -domain: entities and value objects, application: use cases, presentation: presentation logic components and adapters: implementation details, such as API calls and other I/O protocols-. Additionally, we were keen on using _ports and adapters_ (adhering to the SOLID Dependency Inversion Principle) to ensure no use case depends on a certain infrastructure, that’s why you’ll find our app can run using an “In Memory Mock Repository”, or a real repository through an API, and it’ll work just the same. So, by defining abstractions between outside and inside layers, the _Dependency Rule_ was kept untouched.

Going deeper into our domain, it was implemented using the _Value Object Pattern_. Moreover, to hide constructors inside entities and value objects, the _Factory Method_ pattern was used. Finally, to ensure every entity has a valid state, every value object encapsulates all its data validation concerns, and handling exceptions by throwing a custom error.

Another key component was the _Presentation Logic Component_ Pattern (or PloC pattern), and it does exactly what it says: it extracts most presentation logic (state handling, mainly) that’d be otherwise inside our tightly coupled UI framework. Then, our UI components need only to subscribe to our PloC, and it’ll notify them about any state changes (such as a “successful job offers loaded” state, or a “Error at getting offers” state). Also, our Presentation Logic Components have their relevant Use Cases implementations injected, so they don’t care about concrete orchestration details, they need only to call the particular use case interface when UI components emit its respective events.

## References:

Ajaj, Z. (2017). Exploring Folds: A Powerful Pattern Of Functional Programming. Nimega, Netherlands. Medium. From https://medium.com/@zaid.naom/exploring-folds-a-powerful-pattern-of-functional-programming-3036974205c8

Hombergs, T. (2019). Get your Hands Dirty on Clean Architecture. Birmigham, England: Packt Publishing.

Martin, R. C. (2017). Clean Architecture: A Caftsman’s Guide to Software Structure and Design. Editorial: Pearson.

Sánchez Fernandez, J. (2021). Alejándonos de ReactJS y VueJS en Frontend usando Clean Architecture. Madrid, Spain. XurxoDev. From http://xurxodev.com/frontend-clean_architecture/

Sánchez Fernandez, J. (2020). El patrón BloC en Clean Architecture. Madrid, Spain. XurxoDev. From http://xurxodev.com/el-patron-bloc-en-clean-architecture/

Sánchez Fernandez, J. (2021). Cómo crear un Value Object en TypeScript. Madrid, Spain. XurxoDev. From http://xurxodev.com/como-crear-value-object-en-typescript/

Stemmler, K. (2019). An introduction to Domain-Driven Design – DDD w/ TypeScript. Toronto, Canada. From https://khalilstemmler.com/articles/domain-driven-design-intro/

Stemmler, K. (2019). Undestanding Domain Entities [with Examples] – DDD w/ TypeScrpit. Toronto, Canada. From https://khalilstemmler.com/articles/typescript-domain-driven-design/entities/

Stemmler, K. (2019). Implementing DTOs, Mappers & the Repository Pattern using the Sequelize ORM [with Examples] – DDD w/ TypeScrpit. Toronto, Canada. From https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/

Vegreville, B. (2019). Expressive error handling in TypeScript and benefits for Domain-driven design. Paris, France. Medium. From https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86
