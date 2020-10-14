const express = require('express');

const app = express();

const books = [
  {
    slug: 'fullstack-graphql',
    title: 'Fullstack GraphQL',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20201009162511543_Book-Cover-1228h.jpg',
    description: 'The Complete Guide to Writing GraphQL Servers and Clients with TypeScript',
    authors: [
      {
        name: 'Gaetano Checinski',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/books/fullstack-graphql/gaetano-checinski.jpg',
        bio: `I'm a Software Architect and Entrepreneur from London. I've been a consultant for adopting React and GraphQL in companies like The Times, YLD, and others.\nI've encountered tons of real-world challenges implementing GraphQL in the real-world and I've condensed my learnings down into this book.`
      },
      {
        name: 'Roy Derks',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/books/fullstack-graphql/roy-derks.jpg',
        bio: `I lead engineering teams at Vandebron and teach folks how to use React and GraphQL through conference speaking and writing.\nImplementing a flexible, optimized GraphQL server is tricky, but in this book, I'll show you how.`
      },
    ],
    chapters: [
      {
        title: 'Why GraphQL?',
        sections: ['Usage-driven-fetching', 'Comparison vs. REST APIs']
      },
      {
        title: 'Hello GraphQL',
        sections: ['Using the Playground', 'First GraphQL Queries']
      },
      {
        title: 'Basic GraphQL App Clients',
        sections: ['GraphQL in Node.js', 'GraphQL in React']
      },
      {
        title: 'Apollo Client and React',
        sections: ['Setting up Apollo', 'React Apollo Hooks']
      },
      {
        title: 'Typescript and GraphQL',
        sections: ['graphql-codegen', 'Building queries and mutations']
      },
      {
        title: 'GraphQL Server and Databases',
        sections: ['Handling pagination', 'Mutation resolvers']
      },
      {
        title: 'Caching and batching',
        sections: ['Optimized queries', 'Batching with DataLoader']
      },
      {
        title: 'TypeORM and TypeGraphQL',
        sections: ['Setting up the ORM', 'Writing resolvers']
      },
      {
        title: 'Authentication and Authorization',
        sections: ['Using JWT', 'Resolver authentication']
      },
    ]
  },
  {
    slug: 'fullstack-react-with-typeScript',
    title: 'Fullstack React with TypeScript',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200515205449509_Book%20Cover-900h.png',
    description: 'Learn Pro Patterns for Hooks, Testing, Redux, SSR, and GraphQL',
    authors: [
      {
        name: 'Maksim Ivanov',
        photo: 'https://pbs.twimg.com/profile_images/1094326896547033088/ebuYQR8s_bigger.jpg',
        bio: `Frontend developer at @mojang, working on @minecraft. Took part in @Battlefield development at @ea_dice. Teacher at @loftschool. Speaker`
      },
      {
        name: 'Alex Bespoyasov',
        photo: 'https://pbs.twimg.com/profile_images/1310853831929090048/TXl02KJZ_200x200.jpg',
        bio: `Sometimes I write, sometimes I don't.`
      },
    ],
    chapters: [
      {
        title: 'Why Use TypeScript with React?',
        sections: ['How to Get the Most Out of This Book', 'Why Types and Tests Prevent Errors', 'A Quick Intro to TypeScript']
      },
      {
        title: 'Your First React and TypeScript Application',
        sections: ['Building Trello with Drag and Drop', 'Creating the Card Component', 'Implementing Drag and Drop', 'State, Hooks, and Events']
      },
      {
        title: 'How to Test React Applications with TypeScript',
        sections: ['Testing the Goblin Digital Goods Store', 'Setting up TypeScript Tests', 'Rendering Components in Tests', 'Testing Custom React Hooks']
      },
      {
        title: 'Common Patterns',
        sections: ['Making Music with React', 'Capturing Keystrokes with React', 'Render-props and Higher-order components']
      },
      {
        title: 'Using Next.js with TypeScript',
        sections: ['Building a Medium-like Blog', 'SSG: Working with Static-site generation', 'SSR: Working with Server-side rendering']
      },
      {
        title: 'Using Redux and TypeScript',
        sections: ['Build a drawing application', 'Implementing Undo and Redo', 'Redux vs. useReducer']
      },
      {
        title: 'Using GraphQL with React, and TypeScript',
        sections: ['Complex GraphQL Queries and Types', 'Generate TypeScript Types from GraphQL', 'Build a CLI-based React application']
      },
    ]
  },
  {
    slug: 'security-from-zero',
    title: 'Security from Zero',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200410212133097_Book%20Cover-900h.png',
    description: 'Practical Security for Busy People',
    authors: [
      {
        name: 'Eric Higgins',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/books/security-from-zero/eric-higgins-transparent%201-666-opt.png',
        bio: `After hearing too many war stories from friends in the industry, I've realized that everyone has the same problems when it comes to cybersecurity.\nI've had a successful 20+ year career as a software engineer in Silicon Valley. I worked for Google and led the security team at Optimizely.\nI currently run a consulting firm to help business leaders understand how to start a security program at their company - and how to help it be successful.\nWhen it comes to cybersecurity, everyone makes the same mistakes and everyone does too little, too late. But it doesn't have to be that way.\nIn this book, Security From Zero, we make these decades of practical security knowledge available to everyone.`
      },
    ],
    chapters: [
      {
        title: 'What is Security?',
        sections: ['Information vs. Operational Security']
      },
      {
        title: 'Kickstarting Your Security Program',
        sections: ['When to Start Thinking About Security', 'Getting Buy-In and Support from Leadership', 'Event Emitters and Streams']
      },
      {
        title: 'The Importance of Security Culture',
        sections: ['Instilling Healthy Security Culture', 'Practices of Security Culture']
      },
      {
        title: 'Your First Security Hire',
        sections: ['Your Job Description is Terrible', 'The Skillset You\'re Looking For', 'Setting Them Up For Success']
      },
      {
        title: 'Prioritizing the Work',
        sections: ['Fibonacci Scale & The Eisenhower Matrix', 'Level of Effort vs. Level of Impact', 'Turning off Easy Mode']
      },
      {
        title: 'Workload Management with Issue tracking',
        sections: ['Ranking Issues', 'Remove Obstacles']
      },
      {
        title: 'A Data-Driven Security Program',
        sections: ['Making Data Presentable', 'Terrible Data Examples (and Some Good Ones)', 'Metrics Aren\'t Goals']
      },
      {
        title: 'Leveraging Security Frameworks',
        sections: ['How A Security Framework Will Help', 'Choosing a Security Framework', 'Establishing a Baseline']
      },
      {
        title: 'Regulation and Compliance',
        sections: ['Keeping Up With New Rules', 'Business Case for Compliance']
      },
      {
        title: 'Tracking Vulnerabilities',
        sections: ['CVE: Common Vulnerabilities and Exposures', 'Vulnerabilities Workflow']
      },
      {
        title: 'Planning Your Security Budget',
        sections: ['Your First Year', 'Example Budgets']
      },
      {
        title: 'Responding to Incidents',
        sections: ['Goals of Incident Response', 'Conducting Post-Mortems']
      },
      {
        title: 'Threat Modeling',
        sections: ['Methodologies and Techniques', 'The Worst Case Scenario']
      },
      {
        title: 'Effective Bug Bounty Programs',
        sections: ['What Similar Companies are Doing', 'The Skillset You\'re Looking For', 'Comparison of Bug Bounty Service Providers']
      },
      {
        title: 'Security Audits	& Penetration Tests',
        sections: ['When should I get a security review?', 'Finding reputable researchers & consultants']
      },
      {
        title: 'Least Privilege & Access Controls',
        sections: ['Onboarding & Offboarding', 'Layered Security with MFA']
      },
      {
        title: 'Monitoring & Alerting',
        sections: ['Smoke Alarms and Monitoring', 'Modern Infrastructure for Monitoring']
      },
    ]
  },
  {
    slug: 'fullstack-rust',
    title: 'Fullstack Rust',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200128180002306_title_page.jpg',
    description: 'The Complete Guide to Building Apps with Rust',
    authors: [
      {
        name: 'Andy Weiss',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/books/fullstack-rust/andrew-weiss@1x.jpg',
        bio: `I started my career as a Data Scientist and Software Engineer at Facebook before becoming the first engineer at Flexport.\nI began working with Rust as a hobby before putting it into production while at Rollbar. I'm now working on Fuchsia at Google. In my work, I try to mix the academic rigor from a PhD at Princeton with pragmatism learned from shipping products at companies big and small.\nIn Fullstack Rust I've put together a book that will show you how to use the Rust ecosystem to build fast, secure, apps and tools.`
      },
    ],
    chapters: [
      {
        title: 'Your First Rust App',
        sections: ['Getting Started With Rust', 'Making Our First Crate', 'Testing Our Code']
      },
      {
        title: 'Making A Web App With Actix',
        sections: ['Rust Web Ecosystem', 'Handling Requests', 'Understanding Rust Closures']
      },
      {
        title: 'Adding State To Our App',
        sections: ['Effectively Working with Locks', 'Custom Error Handling', 'Handling Path Variables']
      },
      {
        title: 'ORMs with Diesel',
        sections: ['The Diesel CLI', 'Migrations', 'How to Organize Your Code']
      },
      {
        title: 'Web Assembly (Wasm) and Rust',
        sections: ['Rust in the Browser', 'The Smallest Wasm Library', 'The Real Way to Write Wasm']
      },
      {
        title: 'Command-Line Rust Applications',
        sections: ['Building an MVP', 'Adding Configuration Files', 'Adding Sessions']
      },
      {
        title: 'Rust Macros',
        sections: ['Declarative Macros', 'Procedural Macros', 'Writing a Custom Derive']
      },
    ]
  },
  {
    slug: 'fullstack-nodejs',
    title: 'Fullstack Node.js',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20191025013737659_Book%20Cover-900h.png',
    description: 'The Complete Guide to Building Production Apps with Node.js',
    authors: [
      {
        name: 'David Guttman',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/books/fullstack-node/david-guttman.png',
        bio: `He's run JS.LA for 8 years (It's one of the largest JavaScript Meetup groups)\nHe's on the Official Node.js Mentorship Team\nHe runs the NodeSchool Los Angeles Chapter\n...and he's built production Node servers that handle 10 billion+ requests per day\nIn Fullstack Node.js, David shares with you his code structure, practices, and styles so that you can build your own high-performance Node.js servers.`
      },
    ],
    chapters: [
      {
        title: 'Your First Node.js API',
        sections: ['Hello Node.js', 'When Node.js May Not Be the Best Choice', 'Your First Node.js API']
      },
      {
        title: 'Mastering Async in Node.js',
        sections: ['Callbacks vs. Promises', 'Using Async and Await', 'Event Emitters and Streams']
      },
      {
        title: 'Creating a Complete Node.js Server',
        sections: ['Modularizing Node Code', 'Filtering with Query Parameters', 'Using POST, PUT, and DELETE']
      },
      {
        title: 'Persisting and Storing Data in Node.js',
        sections: ['Using a Database', 'Model Relationships', 'Handling File Uploads']
      },
      {
        title: 'Users and Authentication',
        sections: ['Private Endpoints', 'Authentication with Passport', 'JWT Tokens and Authorization']
      },
      {
        title: 'Deploying a Node.js App',
        sections: ['Production Considerations', 'Health checks, logging, and security', 'Using a Platform as a Service']
      },
      {
        title: 'Building Command Line (CLI) Apps',
        sections: ['Building a CLI with yargs', 'Rich CLI Login Flows', 'Building a CLI for our Server']
      },
      {
        title: 'Testing Node.js Apps',
        sections: ['Testing Frameworks', 'Unit vs. E2E Tests', 'Writing Robust Tests']
      },
    ]
  },
  {
    slug: 'web-developers-field-guide',
    title: 'How to Become a Web Developer: A Field Guide',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190830200745796_web-developers-field-guide.jpg',
    description: 'A Field Guide to Your New Career',
    authors: [
      {
        name: 'Angel Garbarino',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/books/webdevfg/author/angel.jpg',
        bio: `Not until I was in my early thirties did I seriously consider becoming a web developer. In all honesty, I wasn’t even sure what it meant to work as a web developer. All I knew was that I wanted to work on computers (and I was attracted to the job opportunities).\nI started by reading articles and seeking advice from friends. I continued with more articles, books, and online courses, but I often found that blog posts made too many assumptions about what I knew and they didn't start at the very beginning.\nWithout knowing what to study (or how to study it) my path was convoluted, stressful, and inefficient. But it did not have to be.\nI wrote this book for the “me,” five years ago; for the person who is starting to think about what it might take to become a programmer or web developer.\nIn this book, I will cover the fundamentals. But more importantly, I will talk about why they are the fundamentals.\nMy goal is not to teach you a specific skill like HTML. Instead, I show you how to navigate what’s ahead of you. I get you set up for your next steps, whether that’s a path of self-learning or attending a bootcamp.\nBy the end of this book, you will be able to make an educated decision about your future and understand the steps and commitment it will take to get there.`
      },
    ],
    chapters: [
      {
        title: 'How to Get the Most Out of This Book',
      },
      {
        title: 'Setup and Tooling',
      },
      {
        title: 'What is a Web Page?',
      },
      {
        title: 'Using CSS to Add Style',
      },
      {
        title: 'JavaScript',
      },
      {
        title: 'Programming Languages',
      },
      {
        title: 'Terminal',
      },
      {
        title: 'Git and Version Control',
      },
      {
        title: 'Frontend and Backend Web Development',
      },
      {
        title: 'The Web Developer\'s Field Guide',
      },
    ]
  },
  {
    slug: 'fullstack-d3',
    title: 'Fullstack D3 and Data Visualization',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190514165730060_Book%20Cover-900h.png',
    description: 'The Complete Guide to Developing Data Visualizations with D3',
    authors: [
      {
        name: 'Amelia Wattenberger',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/books/d3/author/amelia.png',
        bio: `I'm a front-end developer and designer with a background in neuroscientific research.\nOver the past ten years that I've been visualizing data, I've been perfecting my method and collecting helpful tricks. I'm here to jump-start your own journey!\nIn Fullstack D3 and Data Visualization, I distill my hard-earned knowledge into bite-sized lessons. We'll start making charts right away, and learn new concepts and design theory as we go.`
      },
    ],
    chapters: [
      {
        title: 'Making your First Chart',
      },
      {
        title: 'Making a Scatterplot',
      },
      {
        title: 'Making a Bar Chart',
      },
      {
        title: 'Animations and Transitions',
      },
      {
        title: 'Interactions',
      },
      {
        title: 'Making a Map',
      },
      {
        title: 'Data Visualization Basics',
      },
      {
        title: 'Common charts',
      },
      {
        title: 'Dashboard Design',
      },
      {
        title: 'Marginal Histogram',
      },
      {
        title: 'Radial Weather Chart',
      },
      {
        title: 'Animated Sankey Diagram',
      },
      {
        title: 'D3 and React.js',
      },
      {
        title: 'D3 and Angular',
      },
    ]
  },
  {
    slug: 'fullstack-react',
    title: 'Fullstack React',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131015240478_fullstack-react-cover-medium%402x.png',
    description: 'The Complete Guide to ReactJS and Friends',
    authors: [
      {
        name: 'Anthony Accomazzo',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/authors/acco.png',
        bio: `Passionate about teaching, Anthony has coached many beginning programmers through their early stages. Before Fullstack React, he led the development of IFTTT's API platform.`
      },
      {
        name: 'Nate Murray',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/authors/nate-murray.png',
        bio: `Nate is a full-stack developer and writes code for everything from deep-learning image recognition to mobile games for cats. Nate formerly worked at IFTTT and his background is in data mining and scaling web services.`
      },
      {
        name: 'Ari Lerner',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/authors/auser.png',
        bio: `Hi, I'm Ari. I'm the author of ng-book and I've been teaching Web Development for a long time. I like to speak at conferences and eat spicy food. I technically got paid while I traveled the country as a professional comedian, but have come to terms with the fact that I am not funny.`
      },
      {
        name: 'Clay Allsopp',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/authors/clayallsopp.png',
        bio: `Clay Allsopp builds products at Palantir using React, React Native, and GraphQL. He has worked on chart-topping mobile apps and authored RubyMotion: Beginning iOS Development with Ruby.`
      },
      {
        name: 'David Guttman',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/authors/david-guttman.png',
        bio: `David organizes JS.LA, the premier JavaScript event in Los Angeles, and is the CTO of Interlincx, where he makes sure billions of requests find their home every month. He is the author of numerous open-source modules (including react-pivot) and has presented on a variety of topics at JSFest, JSConf, and other JavaScript events.`
      },
      {
        name: 'Tyler McGinnis',
        photo: 'https://d8dgeb1f3fxgw.cloudfront.net/static/img/authors/tyler-mcginnis.png',
        bio: `Tyler McGinnis is the creator of React.js Program. He's a Google Developer Expert and he organized React.js Utah and ReactWeek. Sometimes he rambles on JavaScript Air as a co-host and he also helps run React Newsletter and Front End Newsletter.`
      },
    ]
  },
  {
    slug: 'fullstack-react-native',
    title: 'Fullstack React Native',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131231429465_fullstack-react-native-cover.png',
    description: 'The Complete Guide to React Native',
    authors: [
      {
        name: 'Devin Abbott',
        photo: 'https://www.fullstackreact.com/assets/images/authors/devin-abbott.png',
        bio: `Devin is the founder of Deco Software, a React Native developer tools company (acquired by Airbnb). He wrote several parts of the official React Native documentation, as well as other open source educational resources for React and React Native.`
      },
      {
        name: 'Houssein Djirdeh',
        photo: 'https://www.fullstackreact.com/assets/images/authors/houssein-djirdeh.png',
        bio: `Houssein is a front-end engineer and author. He is the creator of GitPoint, an open-source Github client, written in React Native.`
      },
      {
        name: 'Anthony Accomazzo',
        photo: 'https://www.fullstackreact.com/assets/images/authors/anthony-accomazzo.png?v=0',
        bio: `Passionate about teaching, Anthony has coached many beginning programmers through their early stages. Before Fullstack React, he led the development of IFTTT's API platform.`
      },
      {
        name: 'Sophia Shoemaker',
        photo: 'https://www.fullstackreact.com/assets/images/authors/sophia-shoemaker.png',
        bio: `Sophia is a software engineer, writer, and conference speaker. She is the editor of the Fullstack React weekly newsletter`
      },
    ]
  },
  {
    slug: 'fullstack-vue',
    title: 'Fullstack Vue',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131231434600_fullstack-vue-cover.png',
    description: 'The Complete Guide to Vue.js',
    authors: [
      {
        name: 'Nate Murray',
        photo: 'https://www.newline.co/assets/images/authors/nate-murray.png',
        bio: `Nate is a full-stack developer and writes code for everything from deep-learning image recognition to mobile games for cats. Nate formerly worked at IFTTT and his background is in data mining and scaling web services.`
      },
      {
        name: 'Ari Lerner',
        photo: 'https://www.newline.co/assets/images/authors/ari-lerner.png',
        bio: `Hi, I'm Ari. I'm the author of ng-book and I've been teaching Web Development for a long time. I like to speak at conferences and eat spicy food. I technically got paid while I traveled the country as a professional comedian, but have come to terms with the fact that I am not funny.`
      },
    ]
  },
  {
    slug: 'react-from-zero',
    title: 'React from Zero',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131231811046_react-from-zero-cover.png',
    description: 'A gentle introduction to React, using the JavaScript you already know',
    authors: [
      {
        name: 'Kay Plößer',
        photo: 'https://www.fullstackreact.com/assets/images/authors/kay.jpg',
        bio: `Kay is an independent software consultant from Stuttgart, Germany with over 10 years of experience, specializing in the development of mobile apps and serverless back-ends.`
      },
      {
        name: 'Nate Murray',
        photo: 'https://www.fullstackreact.com/assets/images/authors/nate-murray.png',
        bio: `Nate is a full-stack developer and writes code for everything from deep-learning image recognition to mobile games for cats. Nate formerly worked at IFTTT and his background is in data mining and scaling web services.`
      },
    ]
},
  {
    slug: 'javascript-algorithms',
    title: 'JavaScript Algorithms',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200701172834088_Book%20Cover-900h.png',
    description: 'Learn Data Structures and Algorithms in JavaScript',
    authors: [
      {
        name: 'Oleksii Trekhleb',
        photo: 'https://pbs.twimg.com/profile_images/1073099401319669760/2fChlS7s_200x200.jpg',
        bio: `Software Engineer at @UBER. Author of 80k star javascript-algorithms repository on GitHub.`
      },
      {
        name: 'Sophia Shoemaker',
        photo: 'https://www.fullstackreact.com/assets/images/authors/sophia-shoemaker.png',
        bio: `Sophia is a software engineer, writer, and conference speaker. She is the editor of the Fullstack React weekly newsletter`
      },
    ]
  },
  {
    slug: 'ng-book',
    title: 'ng-book',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20191126145408141_ng-book.jpg',
    description: 'The Complete Book on Angular',
    authors: [
      {
        name: 'Nate Murray',
        photo: 'https://www.ng-book.com/images/ng2/authors/nate.png',
        bio: `Nate is a full-stack developer and writes code for everything from deep-learning image recognition to mobile games for cats. Nate formerly worked at IFTTT and his background is in data mining and scaling web services.`
      },
      {
        name: 'Felipe Coury',
        photo: 'https://www.ng-book.com/images/ng2/authors/felipe.png',
        bio: `Felipe is the co-founder and CTO of Gistia Labs where he leads an Angular.js and Ruby on Rails culture. He has also worked closely with CTOs on implementing Angular.js strategy for large companies.`
      },
      {
        name: 'Ari Lerner',
        photo: 'https://www.ng-book.com/images/ng2/authors/ari.png',
        bio: `Hi, I'm Ari. I'm the author of ng-book 1 and I've been teaching Angular for a long time. I've been a member of Google's Angular working group and I've spoken at ng-conf, SF Angular, Mountain View AngularJS and more.`
      },
      {
        name: 'Carlos Taborda',
        photo: 'https://www.ng-book.com/images/ng2/authors/carlos.png',
        bio: `Carlos is the co-founder and director of Gistia Labs, a team that specializes in full stack engineering projects as well as training established development teams in Angular and Ruby on Rails.`
      },
    ]
  },
];

const tutorials = [
  {
    title: 'Who is Using GraphQL?',
    date: 'Oct 11th, 2020'
  },
  {
    title: 'Why GraphQL is the new REST',
    date: 'Oct 11th, 2020'
  },
  {
    title: 'Formatting Dates in Node with Moment.js',
    date: 'Sep 23rd, 2020'
  },
  {
    title: 'Node.js Tutorial: How JavaScript on the backend can make your life easier.',
    date: 'Aug 24th, 2020'
  },
  {
    title: 'Building World-class Apps with Angular Material',
    date: 'Aug 21st, 2020'
  },
  {
    title: 'How to build a React drag-and-drop component for file upload',
    date: 'Jul 25th, 2020'
  },
  {
    title: 'How to Use React onClick Events in Class and Functional Components',
    date: 'Jun 23rd, 2020'
  },
  {
    title: 'Angular Directives Demystified',
    date: 'un 10th, 2020'
  },
  {
    title: 'Essential React Lifecycle Methods for Class Components',
    date: 'May 15th, 2020'
  },
  {
    title: 'The Ultimate Guide to Storybook for React Applications - PART II',
    date: 'May 8th, 2020'
  },
  {
    title: 'Jam on your MIDI keyboard in Angular',
    date: 'May 3rd, 2020'
  },
  {
    title: 'Your first Rust server with Rocket',
    date: 'Apr 26th, 2020'
  },
]

app.get('/api/books', (req, res) => {
  const { page, title } = req.query;
  const filteredBooks = books.filter(book => (
    !title || book.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
  ));
  const start = (page - 1) * 5;
  return res.json({
    books: filteredBooks.slice(start, start + 5).map(({authors, chapters, ...book}) => book),
    total: filteredBooks.length
  });
});

app.get('/api/tutorials', (req, res) => {
  const start = (req.query.page - 1) * 5;
  return res.json({
    tutorials: tutorials.slice(start, start + 5),
    total: tutorials.length
  });
});

app.get('/api/book', (req, res) => {
  const {chapters, ...book} = books.find(book => book.slug === req.query.slug);
  return res.json(book);
});

app.listen('3001');
