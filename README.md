# Scheduler Project

Scheduler is a single-page scheduling app. based on React.

It allows the user to book an appointment with a student's name and an interviewer

<br>

## Getting Started

Note that the application is dependant on an another project to run the server and the database. Feel free to set it up [here](https://github.com/Just-Hosam/scheduler-api).

<br>

1. Install all dependencies.

```
npm install
```

2. Run the development web server using the following command.

```
npm start
```

3. Visit the following URL to start navigating the web application _after_ running the server

```
http://localhost:8000/
```

<br>

## Final Product

!["Screenshot of Base page"](https://github.com/Just-Hosam/scheduler/blob/master/docs/Screen%20Shot%202021-03-24%20at%208.12.57%20PM.png)

## Known Issues/Bugs

- Trying to save an interview without selecting an interviewer will crash the application. So I strongly advise to test the app on a day other than 'Monday', as that will still allow the user to use the other days within the app.

## Future Features

- Hosting the application on Heroku

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts
