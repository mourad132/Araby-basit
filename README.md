# Araby-basit

## Routes

### Auth ``` /api/auth ```

#### Included Routes:
- Login Route
  - GET Route
  - POST Route
- Signup Route
  - GET Route
  - POST Route

### Exams ```  /api/exams ```

#### Included Routes:
- All Exams ``` / ```
    - GET Route
- Exam ``` /:id ```
    - GET Route
- New Exam ``` /new ```
    - GET Route
    - POST Route

### Landing ``` / ```

#### Included Routes:
- Landing Route ``` / ```
    - GET Route

### Lessons ``` /lessons ```

#### Included Routes: 
- All Lessons ``` / ```
    - GET Route
- New Lesson ``` / ```
    - GET Route
    - POST Route

### Profiles ``` /profiles ```

#### Included Routes:
- Profiles ``` / ```
    - GET Route
- Profile ``` /:id ```
    - GET Route 

-------------------------------------------------------

## Helper Functions

### find

takes three arguments ```request response next schemaType```

#### Properties

- Finds Instances in DB
- Sends Them As JSON obj.

### create 

takes six arguments ```response next schemaType body errStatus redirectUrl```

#### Properties

- Creates new Instance From Body
- Send Instance in JSON 

### schemaChecker 

takes one argument ``` schemaType ```

#### Properties 

- Find Specific Schema using *schemaType*