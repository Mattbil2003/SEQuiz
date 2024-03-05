
document.addEventListener('DOMContentLoaded', function() {
      const data = [
    {
        "question": "Which of the following statements related to cloud hosting and private hosting is FALSE?",
        "options": [
          "Cloud computing scalability is generally better than private hosting",
          "Cloud computing reliability is generally higher than private hosting",
          "Cloud computing costs are generally lower than private hosting",
          "Cloud hosting legal contracts are generally easier to navigate than private hosting"
        ],
        "correctAnswer": "Cloud hosting legal contracts are generally easier to navigate than private hosting"
      },
      {
        "question": "Based on our Fox chapter 1 lecture, if it took us 6 months to successfully deploy an Internet-accessible website in 1995, how long would we expect it to cost to set up a comparable website today?",
        "options": [
          "5 minutes",
          "2 months",
          "2 weeks",
          "6 months",
          "4 months"
        ],
        "correctAnswer": "5 minutes"
      },
      {
        "question": "What of the following is NOT a phase of the Waterfall SDLC?",
        "options": [
          "Testing",
          "Implementation",
          "Requirements",
          "Support",
          "Design"
        ],
        "correctAnswer": "Support"
      },
      {
        "question": "Which of the following is NOT a Software Development Lifecycle?",
        "options": [
          "Agile",
          "Rational Unified Process (RUP)",
          "Plan-and-Implement",
          "Waterfall",
          "Spiral"
        ],
        "correctAnswer": "Plan-and-Implement"
      },
      {
        "question": "Which of the following statements relating to Verification and Validation testing is FALSE?",
        "options": [
          "Waterfall often does not include Verification",
          "Both Verification and Validation defects are much less expensive to fix if they are found earlier",
          "Agile addresses Validation testing significantly better than Waterfall and RUP",
          "Agile addresses Verification testing significantly better than Waterfall and RUP"
        ],
        "correctAnswer": "Agile addresses Validation testing significantly better than Waterfall and RUP"
      },
      {
        "question": "Which of the following statements about Software Development Lifecycle team sizes is TRUE?",
        "options": [
          "RUP is designed to work primarily with small teams",
          "Waterfall is designed to work primarily with small teams",
          "Scrum is designed to work primarily with small teams",
          "Spiral is designed to work primarily with small teams"
        ],
        "correctAnswer": "Scrum is designed to work primarily with small teams"
      },
      {
        "question": "Which of the following statements relating to Testing is FALSE?",
        "options": [
          "Performance testing generally occurs before Integration testing",
          "Automated testing can be part of Integration testing",
          "Acceptance testing generally comes after Unit and Integration testing",
          "Unit testing is generally testing by the developer on their local computer",
          "Integration testing is generally testing software across the team in a shared environment"
        ],
        "correctAnswer": "Performance testing generally occurs before Integration testing"
      },
      {
        "question": "Which of the following statements relating Service-Oriented Architecture (SOA) and Software Development Lifecycles is TRUE?",
        "options": [
          "SOA is desirable in Waterfall and Agile but not in RUP",
          "SOA is desirable in Waterfall, RUP, and Agile",
          "SOA is desirable in Waterfall and RUP but not in Agile",
          "SOA is desirable in RUP and Agile but not in Waterfall"
        ],
        "correctAnswer": "SOA is desirable in Waterfall, RUP, and Agile"
      },
      {
        "question": "Which of the following statements relating to SaaS is FALSE?",
        "options": [
          "SaaS applications are better at accessing custom hardware features than native applications",
          "SaaS applications are generally Web applications",
          "SaaS applications are easier to test than native applications",
          "SaaS applications are generally easier to update than native applications",
          "SaaS applications are generally hosted on the Internet"
        ],
        "correctAnswer": "SaaS applications are better at accessing custom hardware features than native applications"
      },
      {
        "question": "What statement relating to Scaled Agile and Scrum is TRUE?",
        "options": [
          "Scaled Agile does not use iterations where Scrum does",
          "Scaled Agile test only in the final phase of the process where Scrum tests each iteration",
          "Scaled Agile supports big teams whereas Scrum is designed to work primarily with small teams",
          "Scaled Agile supports the Agile Manifesto where Scrum does not"
        ],
        "correctAnswer": "Scaled Agile supports big teams whereas Scrum is designed to work primarily with small teams"
      },
      {
          "question": "Based on Fox chapter 1 lecture and Eric’s Rule of Beautiful & Legacy Software, which statement is FALSE?",
          "options": [
            "Verified Code (Tested) + Validated Code (Production) = Beautiful x 2",
            "Successfully rewriting code and applications is ALWAYS much more difficult than you assume!",
            "Cloud hosting of legacy code increases reliability while decreasing costs",
            "Service-Oriented Architecture allows you to reuse Legacy code while gradually replacing/refactoring parts of the application"
          ],
          "correctAnswer": "Cloud hosting of legacy code increases reliability while decreasing costs"
        },
        {
          "question": "Which of the following is NOT a phase of RUP?",
          "options": [
            "Construction",
            "Elaboration",
            "Design",
            "Transition",
            "Inception"
          ],
          "correctAnswer": "Design"
        },
        {
          "question": "What is the Language / Framework / Hosting solution that we will be using?",
          "options": [
            "Java, Sprint, and Tomcat",
            "JavaScript, Express, and Node.js",
            ".NET, ASP.NET, IIS",
            "Python, Django, and Azure",
            "Ruby, Rails, and Rack"
          ],
          "correctAnswer": "JavaScript, Express, and Node.js"
        },
        {
          "question": "What are the three key Software Engineering topics that we will be studying?",
          "options": [
            "Ruby on Rails, Software-as-a-Service, and Java",
            "Agile Software Development, Legacy Software, and Cloud Computing",
            "Agile Software Development, Software-as-a-Service, and Cloud Computing",
            "Java, Spring, and Tomcat",
            "UML, Enterprise Java, and Cloud9"
          ],
          "correctAnswer": "Agile Software Development, Software-as-a-Service, and Cloud Computing"
        },
        {
          "question": "What is the primary benefit of a Blended Classroom environment?",
          "options": [
            "We can make class recordings a higher priority",
            "We can focus our class time on lectures",
            "We can focus on highly asynchronous activities in class",
            "We can utilize our class time to work on assignments and with our teams",
            "We can attend Friday sessions remotely"
          ],
          "correctAnswer": "We can utilize our class time to work on assignments and with our teams"
        },
        {
          "question": "What is the minimum number of points you would need in order to receive an A- in this class?",
          "options": [
            "900",
            "870",
            "90",
            "930"
          ],
          "correctAnswer": "900"
        },
        {
          "question": "When are assignments due?",
          "options": [
            "Nearly all assignments are due at the end of the sprint which is normally at 11:59pm CT Sunday nights; however, we have a grace period until 6am CT the following morning to turn in assignments without losing points",
            "Nearly all assignments are due at the end of the sprint which is normally at 11:59pm CT Sunday nights; however, we have a grace period until 10am CT the following morning to turn in assignments without losing points",
            "Nearly all assignments are due at the end of the sprint which is normally at 11:59pm CT Sunday nights with no exceptions",
            "Assignment due dates are assigned arbitrarily on an assignment by assignment basis"
          ],
          "correctAnswer": "Nearly all assignments are due at the end of the sprint which is normally at 11:59pm CT Sunday nights; however, we have a grace period until 6am CT the following morning to turn in assignments without losing points"
        },
        {
          "question": "How much planning is done in Scrum?",
          "options": [
            "Detail planning looking at possible obstacles",
            "Moderate planning considering likely obstacles",
            "No planning is done before we get started",
            "Enough planning to complete a master project plan",
            "Just enough planning to get started"
          ],
          "correctAnswer": "Just enough planning to get started"
        },
        {
          "question": "What is an Sprint?",
          "options": [
            "A list of required activities",
            "A commitment to deliver a specified set of work by a given date and time",
            "A project plan",
            "A commitment to deliver a specified set of work",
            "A running race featuring short distances"
          ],
          "correctAnswer": "A commitment to deliver a specified set of work by a given date and time"
        },
        {
          "question": "How many points are possible in this class?",
          "options": [
            "900",
            "420",
            "100",
            "640",
            "1000"
          ],
          "correctAnswer": "1000"
        },
        {
          "question": "Which of the following statements relating to finding and fixing defects is FALSE?",
          "options": [
            "Finding and fixing defects earlier leads to lower costs",
            "Waterfall’s extensive documentation leads to finding and fixing defects earlier",
            "Iterative testing leads to finding and fixing defects earlier",
            "Finding and fixing a defect is exponentially more expensive the longer it exists",
            "The evolution of SDLCs has been driven in part by the benefit of finding and fixing defects earlier"
          ],
          "correctAnswer": "Waterfall’s extensive documentation leads to finding and fixing defects earlier"
        },
        {
          "question": "Which of the following statements relating to Software Development Lifecycles (SDLCs) is FALSE?",
          "options": [
            "Spiral, RUP, and Agile utilize iterations",
            "Waterfall, Spiral, and RUP rely on careful planning and measuring progress against the plan",
            "RUP and Agile prioritize responding to change over following a plan",
            "Waterfall, Spiral, and RUP rely on a project manager to be in charge of the project",
            "Waterfall, Spiral, and RUP rely on thorough documentation"
          ],
          "correctAnswer": "RUP and Agile prioritize responding to change over following a plan"
        },
        {
          "question": "What are the three key Software Engineering topics that we will be studying?",
          "options": [
            "Agile Software Development, Software-as-a-Service, and Cloud Computing",
            "Agile Software Development, Legacy Software, and Cloud Computing",
            "Ruby on Rails, Software-as-a-Service, and Java",
            "UML, Enterprise Java, and Cloud9",
            "Java, Spring, and Tomcat"
          ],
          "correctAnswer": "Agile Software Development, Software-as-a-Service, and Cloud Computing"
        },
        {
          "question": "Based on our Fox chapter 1 lecture, if it cost $500,000 to set up a website in 1995, what would we expect it to cost to set up a comparable website today utilizing cloud hosting?",
          "options": [
            "$400,000",
            "$300,000",
            "$100,000",
            "$200,000",
            "$0",
            "$500,000"
          ],
          "correctAnswer": "$0"
        },
        {
          "question": "Which of the following statements related to Testing is FALSE?",
          "options": [
            "Tests that have outlived their usefulness should be discarded",
            "100% test coverage ensures correct implementation",
            "Integration testing generally occurs before Acceptance testing",
            "Integration testing generally works across multiple features",
            "Unit testing typically works within a single feature"
          ],
          "correctAnswer": "100% test coverage ensures correct implementation"
        },
        {
          "question": "Which cloud hosting service will we be focused on using?",
          "options": [
            "GoDaddy",
            "Google App Engine",
            "Amazon AWS",
            "Microsoft Azure",
            "cloud9"
          ],
          "correctAnswer": "Microsoft Azure"
        },
        {
          "question": "Which of the following is NOT a Software Development Lifecycle?",
          "options": [
            "Agile",
            "Plan-and-Implement",
            "Waterfall",
            "Rational Unified Process (RUP)",
            "Spiral"
          ],
          "correctAnswer": "Plan-and-Implement"
        },
        {
          "question": "Which of the following statements related to cloud hosting and private hosting is FALSE?",
          "options": [
            "Cloud computing scalability is generally better than private hosting",
            "Cloud hosting legal contracts are generally easier to navigate than private hosting",
            "Cloud computing reliability is generally higher than private hosting",
            "Cloud computing costs are generally lower than private hosting"
          ],
          "correctAnswer": "Cloud hosting legal contracts are generally easier to navigate than private hosting"
        },
        {
          "question": "If your software was developed in western India, your corporate headquarters was in Chicago, your customers using your website were in France, and your manufacturing was done in China, what “Region” best to select for your Microsoft Azure hosted website?",
          "options": [
            "Japan West",
            "France Central",
            "Western India",
            "Central US",
            "East Asia"
          ],
          "correctAnswer": "France Central"
        },
        {
          "question": "When hosting a simple HTML website on Microsoft Azure which of the following statements relating to “Resource Group” is TRUE?",
          "options": [
            "A resource group is a method of grouping cloud services",
            "A resource group must have the same name as the web application",
            "A resource group is the same as a service plan",
            "A resource group must have the same name as the service plan",
            "A resource group determines the quality of service for a web application"
          ],
          "correctAnswer": "A resource group is a method of grouping cloud services"
        },
        {
          "question": "When hosting a simple HTML website on Microsoft Azure which of the following would be the most appropriate “Runtime stack” to select?",
          "options": [
            "Ruby",
            "Python",
            "PHP",
            "Node",
            "C++"
          ],
          "correctAnswer": "PHP"
        },
        {
          "question": "Which of the following statements relating to deploying a simple static HTML website to Microsoft Azure is FALSE?",
          "options": [
            "You can use GitHub to deploy a website to Microsoft Azure",
            "You can use SMTP to deploy a website to Microsoft Azure",
            "You can use Git to deploy a website to Microsoft Azure",
            "You can use FTP to deploy a website to Microsoft Azure",
            "You can use BitBucket to deploy a website to Microsoft Azure"
          ],
          "correctAnswer": "You can use SMTP to deploy a website to Microsoft Azure"
        },
        {
          "question": "Which of the following statements relating to cookies is FALSE?",
          "options": [
            "Cookies are communicated over DNS",
            "SaaS application sends the appropriate cookie with each request",
            "The server creates and updates cookies",
            "The Browser sends the appropriate cookie with each request",
            "The Browser stores cookies"
          ],
          "correctAnswer": "Cookies are communicated over DNS"
        },
        {
          "question": "Which of the following languages would be a good candidate for implementing the data tier of 3-tier Saas Web application?",
          "options": [
            "SQL",
            "Python",
            "Java",
            "JavaScript",
            "Ruby"
          ],
          "correctAnswer": "SQL"
        },
        {
          "question": "Which of the following statements relating to Internet protocols is FALSE?",
          "options": [
            "HTTPs relies on IP",
            "TCP relies on IP",
            "HTTP relies on TCP",
            "DNS relies on IP",
            "TCP relies on DNS"
          ],
          "correctAnswer": "TCP relies on DNS"
      },
      {
          "question": "Which of the following languages would be good candidates for implementing the presentation tier of a 3-tier Saas Web application?",
          "options": [
            "SQL",
            "Ruby",
            "JavaScript",
            "Java",
            "Python"
          ],
          "correctAnswer": "JavaScript"
        },
        {
          "question": "Which of the following statements relating to mapping data in memory to data structures in a database is FALSE?",
          "options": [
            "In memory data can be manually mapped to relational database structures",
            "Ruby requires or at least encourages the use of data mappers",
            "In memory data most often utilizes relational database structures",
            "Relational databases most often utilize SQL to create and update database data structures"
          ],
          "correctAnswer": "In memory data most often utilizes relational database structures"
        },
        {
          "question": "Which of the following statements is the most accurate relating to Ruby on Rails and Object Relational Mappers?",
          "options": [
            "Ruby on Rails and Object Relational Mappers have no relationship",
            "Ruby on Rails actively discourages the use of Object Relational Mappers",
            "Ruby on Rails can not use an Object Relational Mapper",
            "Ruby on Rails is capable of using an Object Relational Mappers but does not use one by default",
            "Ruby on Rails actively supports the use of Object Relational Mappers"
          ],
          "correctAnswer": "Ruby on Rails actively supports the use of Object Relational Mappers"
        },
        {
          "question": "Which of the following languages would NOT be a reasonable candidate for implementing the logic-tier of a 3-tier Saas Web application?",
          "options": [
            "SQL",
            "Python",
            "JavaScript",
            "Java",
            "Ruby"
          ],
          "correctAnswer": "SQL"
        },
        {
          "question": "Which of the following statement relating to REST is FALSE?",
          "options": [
            "REST leverages JSON",
            "REST stands for Representational State Transfer",
            "REST leverages web technologies",
            "REST leverages HTML"
          ],
          "correctAnswer": "REST leverages HTML"
        },
        {
          "question": "Which of the following statements relating to Verification and Validation testing is FALSE?",
          "options": [
            "Waterfall often does not include Verification",
            "Agile addresses Verification testing significantly better than Waterfall and RUP",
            "Agile addresses Validation testing significantly better than Waterfall and RUP",
            "Both Verification and Validation defects are much less expensive to fix if they are found earlier"
          ],
          "correctAnswer": "Agile addresses Validation testing significantly better than Waterfall and RUP"
        },
        {
          "question": "Which statement is true about the Waterfall, Rational Unified Process (RUP) and Agile Software Development Lifecycles (SDLCs)?",
          "options": [
            "A big difference between Agile and Waterfall is that Agile interacts with customers throughout the process",
            "A big difference between Agile and RUP is that Agile does not use requirements",
            "A big difference between RUP and Waterfall is measuring progress against a plan",
            "You can build SaaS apps using Agile, but cannot build Saas apps with Waterfall or RUP"
          ],
          "correctAnswer": "A big difference between Agile and Waterfall is that Agile interacts with customers throughout the process"
        },
        {
          "question": "What statement relating to Scaled Agile and Scrum is TRUE?",
          "options": [
            "Scaled Agile does not use iterations where Scrum does",
            "Scaled Agile supports big teams whereas Scrum is designed to work primarily with small teams",
            "Scaled Agile supports the Agile Manifesto where Scrum does not",
            "Scaled Agile test only in the final phase of the process where Scrum tests each iteration"
          ],
          "correctAnswer": "Scaled Agile supports big teams whereas Scrum is designed to work primarily with small teams"
        },
        {
          "question": "What of the following is NOT a phase of the Waterfall SDLC?",
          "options": [
            "Design",
            "Requirements",
            "Support",
            "Implementation",
            "Testing"
          ],
          "correctAnswer": "Support"
        },
        {
          "question": "Based on our Fox chapter 1 lecture, if it cost $500,000 to set up a website in 1995, what would we expect it to cost to set up a comparable website today utilizing cloud hosting?",
          "options": [
            "$500,000",
            "$100,000",
            "$400,000",
            "$200,000",
            "$0",
            "$300,000"
          ],
          "correctAnswer": "$0"
        },
        {
          "question": "Which of the following statement relating to REST is FALSE?",
          "options": [
            "REST leverages web technologies",
            "REST leverages JSON",
            "REST leverages HTML",
            "REST stands for Representational State Transfer"
          ],
          "correctAnswer": "REST leverages HTML"
        },
        {
          "question": "Which of the following languages would NOT be a reasonable candidate for implementing the logic-tier of a 3-tier Saas Web application?",
          "options": [
            "Python",
            "JavaScript",
            "Ruby",
            "Java",
            "SQL"
          ],
          "correctAnswer": "SQL"
        },
        {
          "question": "Which of the following statements relating to Internet protocols is FALSE?",
          "options": [
            "TCP relies on DNS",
            "HTTPs relies on IP",
            "TCP relies on IP",
            "DNS relies on IP",
            "HTTP relies on TCP"
          ],
          "correctAnswer": "TCP relies on DNS"
        },
        {
          "question": "Which of the following statements relating to cookies is FALSE?",
          "options": [
            "Cookies are communicated over DNS",
            "SaaS application sends the appropriate cookie with each request",
            "The server creates and updates cookies",
            "The Browser sends the appropriate cookie with each request",
            "The Browser stores cookies"
          ],
          "correctAnswer": "Cookies are communicated over DNS"
        },
        {
          "question": "Which of the following languages would be good candidates for implementing the presentation tier of a 3-tier Saas Web application?",
          "options": [
            "Python",
            "Java",
            "JavaScript",
            "SQL",
            "Ruby"
          ],
          "correctAnswer": "JavaScript"
        },
        {
          "question": "Which of the following statement relating to Change Control on Requirements is FALSE?",
          "options": [
            "Since defects are found early in Scrum, strict Change Control is often beneficial for Stories",
            "Iterative tends to have moderately strict Change Control",
            "Agile promotes early feedback from customers and encourages changing the Requirements based on the customer feedback",
            "Waterfall implements strict Change Control"
          ],
          "correctAnswer": "Since defects are found early in Scrum, strict Change Control is often beneficial for Stories"
        },
        {
          "question": "Which of the following statements relating to Genba is FALSE?",
          "options": [
            "Genba is about application users completing a scripted set of activities",
            "Genba could be used to describe a detective visiting the scene of a crime",
            "Genba is about watching application users do their job",
            "Genba is about visiting application users where they do their job",
            "Genba is a Japanese term that means 'the actual place'"
          ],
          "correctAnswer": "Genba is about application users completing a scripted set of activities"
        },
        {
          "question": "How would a team with a Velocity of 22 story points per sprint handle a very high-priority story that is estimated at 31 story points?",
          "options": [
            "Assign multiple people to the story",
            "Give the story a lower estimate",
            "Split the story into multiple stories",
            "Spread the story across multiple sprints",
            "Push the story to the next sprint"
          ],
          "correctAnswer": "Split the story into multiple stories"
        },
        {
          "question": "Which of the following statements is FALSE?",
          "options": [
            "Scrum utilizes both Stories or Use Cases to gather requirements",
            "Scaled Agile utilizes both Epics and Features to gather requirements",
            "RUP utilizes Use Cases to gather requirements",
            "Scrum utilizes Stories to gather requirements",
            "Scaled Agile utilizes both Features and Stories to gather requirements"
          ],
          "correctAnswer": "Scaled Agile utilizes both Epics and Features to gather requirements"
        },
        {
          "question": "What is the maximum size of a Story a Scrum team could commit to in their Sprint Backlog?",
          "options": [
            "There isn't a limit as the team would just spread the Story across multiple Sprints if needed",
            "The projected team Velocity for the upcoming sprint",
            "99 Story points",
            "As long as the Story is SMART the team can commit to it"
          ],
          "correctAnswer": "The projected team Velocity for the upcoming sprint"
        },
        {
          "question": "Which of the following statements is FALSE?",
          "options": [
            "Epics have Features",
            "Spikes are a type of Story",
            "Stories have Features",
            "Features have Spikes",
            "Features have Stories"
          ],
          "correctAnswer": "Stories have Features"
        },
        {
          "question": "Which of the following statements is FALSE?",
          "options": [
            "A Story is a method of gathering requirements",
            "A Spike is most often a method of gathering requirements from users",
            "A Use Case generally provides more detail than a Story",
            "A Use Case is a method of gathering requirements from users",
            "A Story Point is a measurement for sizing a requirement"
          ],
          "correctAnswer": "A Spike is most often a method of gathering requirements from users"
        },
        {
          "question": "How many stories could a scrum team with a velocity of 22 user story points per sprint deliver in the upcoming sprint?",
          "options": [
            "Exactly 22 stories",
            "At least 22 stories",
            "11 stories",
            "4 stories",
            "At most 22 user stories"
          ],
          "correctAnswer": "At most 22 user stories"
        }
      ]

      let currentQuestionindex = 0
      let score = 0
      let prevScore = 0
      let letterCount = 0
      const letters = ["A","B","C","D","E"]
      function displayQuestion() {
        if (currentQuestionindex >= data.length){
          document.getElementById('header').style.display = 'none'
          document.getElementById('answers').style.display = 'none'
          document.getElementById('results').style.display = 'block'
          document.getElementById('score').textContent = `your score is ${score} out of ${data.length}`
          if (prevScore != 0) document.getElementById('prev_score').textContent = `your previous score was ${prevScore} out of ${data.length}`
          document.getElementById('restart_button').style.display = 'block'
          return
        }
        const question = data[currentQuestionindex]
        document.getElementById("header").textContent = question.question
        const answers = document.getElementById("answers")
        answers.innerHTML = ''

        question.options.forEach(function(option) {
          const button = document.createElement('button')
          button.style.fontSize = "20px"
          button.style.padding = "20px"
          button.style.textAlign = "left"
          button.innerText = letters[letterCount] +". "+ option
          letterCount++
          button.addEventListener('click', function() {
            if (option == question.correctAnswer) {
              score++
            }
            currentQuestionindex++
            displayQuestion()
          })
          answers.appendChild(button)
        })
        letterCount = 0
      }
  const restartButton = document.getElementById('restart_button')
  restartButton.addEventListener('click', function() {
    currentQuestionindex = 0
    prevScore = score
    score = 0
    document.getElementById('header').style.display = 'block'
    document.getElementById('answers').style.display = 'flex'
    document.getElementById('results').style.display = 'none'
    document.getElementById('restart_button').style.display = 'none'
    
    displayQuestion()
  })
  displayQuestion()
})

        
        

