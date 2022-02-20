# Araby-basit

## [Routes](./routes)

### [Auth](./routes/auth) ``` /api/auth ```

#### Included Routes:
- Login Route
  - GET Route
  - POST Route
- Signup Route
  - GET Route
  - POST Route

### [Exams](./routes/exams) ```  /api/exams ```

#### Included Routes:
- All Exams ``` / ```
    - GET Route
- Exam ``` /:id ```
    - GET Route
- New Exam ``` /new ```
    - GET Route
    - POST Route

### [Landing](./routes/landing) ``` / ```

#### Included Routes:
- Landing Route ``` / ```
    - GET Route

### [Lessons](./routes/lessons) ``` /lessons ```

#### Included Routes: 
- All Lessons ``` / ```
    - GET Route
- New Lesson ``` / ```
    - GET Route
    - POST Route

### [Profiles](./routes/profiles) ``` /profiles ```

#### Included Routes:
- Profiles ``` / ```
    - GET Route
- Profile ``` /:id ```
    - GET Route 

-------------------------------------------------------

## [Helper Functions](./helpers)

### [find](./helpers/find)

takes three arguments ```request response next schemaType```

#### Properties

- Finds Instances in DB
- Sends Them As JSON obj.

### [create](./helpers/create) 

takes six arguments ```response next schemaType body errStatus redirectUrl```

#### Properties

- Creates new Instance From Body
- Send Instance in JSON 

### [schemaChecker](./helpers/schemaChecker) 

takes one argument ``` schemaType ```

#### Properties 

- Find Specific Schema using *schemaType*

-----------------------------------------------------

## [DB Models](./models)

### [index](./models/index)

Main File which imports all models

### [User](./models/User)

model for User Schema

#### Schema:
    name: String,
    userName: String,
    number: Number,
    grade: String,
    school: String,
    password: String,

### [Questions](./models/Questions)

Model for Question Schema

#### Schema:
    profile: String, //Student Profile 
    answer: String,
    question: String,

### [Lessons](./models/Lessons)

Model for new Lessons

#### Schema: 
    file: String,
    lesson: String,
    description: {
        title: String,
        description: String,
    },
    homework: String,

### [Exam](./models/Exam)

Model for new exams

#### Schema:
    questions: [],``` { choices: [1,2,3,4], question: "", file: "" } ```
    time: Number,
    title: String,
    passed: [],
    type: {
        unit: Number,
        lesson: String,
        branch: String,
        term: Number,
    }

-------------------------------------------

## Handlers

### [Error Handler](./handlers/errorHandler)
Handles the Errors by using ``` next(err) ```

*error obj:* ``` { status: HTTP Status Code, message: Error } ```