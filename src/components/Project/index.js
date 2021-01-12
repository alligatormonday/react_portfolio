import "./style.css";
import Quizzical_Image from "./quizzical_DEMO.png"
import React_Directory_Image from "./react_directory_DEMO.png"
import PWA_Budget_Image from "./PWA_budget_DEMO.png"
import Mongoose_Fitness_Image from "./mongoose_fitness_DEMO.png"
import Burger_Express_Image from "./burger_express_DEMO.png"
import MySQL_Employee_Image from "./mysql_employee_DEMO.png"


function Hero() {
    return (
        <>
            <img className="project-img" src={Quizzical_Image} alt="Quizzical_Demo_Image" />
            <p>Quizzical is a collaborative project built with three other team members. We created a full-stack web application that allows users to create quizzes, take quizzes, and track user progress for each quiz. Uses MySQL, Sequelize, express-handlebars, Node.js. <a href="https://magic-gathering-app.herokuapp.com/" rel="noreferrer" target="_blank">Deployed</a> with Heroku. View the <a href="https://github.com/Sltang0815/projectTwo" rel="noreferrer" target="_blank">repository here!</a></p>

            <img className="project-img" src={React_Directory_Image} alt="React_Directory_Demo_Image" />
            <p>This is a simple application that utilizes the Random User Generator API. This data provides an employee name, email, phone number, and picture. A user can sort employees from alphabetically, and filter an employee by name. This application utilizes React.js, Node.js, ESlint, CSS, HTML. <a href="https://alligatormonday.github.io/Employee_React_Directory/" rel="noreferrer" target="_blank">Deployed</a> with GitHub Pages. View the <a href="https://github.com/alligatormonday/Employee_React_Directory" rel="noreferrer" target="_blank">repository here!</a></p>

            <img className="project-img" src={PWA_Budget_Image} alt="PWA_Budget_Demo_Image" />
            <p>A PWA that lets a user track their budget. Users can add funds or subtract funds. If a user doesn't have access to the internet or goes offline, then this application will still allow them to input their information. Once they have online access again, their input will have been received and the data sent during offline use will be rendered, then saved as if it was taken in during online functionality. This application utilizes MongoDB, MongoDB Atlas, Mongoose, and Node.js. <a href="https://whispering-ridge-63266.herokuapp.com/" rel="noreferrer" target="_blank">Deployed</a> with Heroku. View the <a href="https://github.com/alligatormonday/PWA_Budget_Tracker" rel="noreferrer" target="_blank">repository here!</a></p>

            <img className="project-img" src={Mongoose_Fitness_Image} alt="Mongoose_Fitness_Demo_Image" />
            <p>Fitness tracker that lets users create a workout and add exercises to it. Users can add exercises to a previous workout plan, and also view their progress/stats! This application utilizes MongoDB, MongoDB Atlas, Mongoose, and Node.js. <a href="https://shrouded-reaches-87956.herokuapp.com/?id=5fd560de238e940017352d6d" rel="noreferrer" target="_blank">Deployed</a> with Heroku. View the <a href="https://github.com/alligatormonday/Mongoose_Fitness" rel="noreferrer" target="_blank">repository here!</a></p>

            <img className="project-img" src={Burger_Express_Image} alt="Burger_Express_Demo_Image" />
            <p>Node.js Express app, using MySQL as a database with Handlebars to serve the HTML page. When a user visits this application, they can enter a burger that they would like to eat! Then they can click the 'devour' button to eat the burger they submitted! <a href="https://floating-plateau-77667.herokuapp.com/" rel="noreferrer" target="_blank">Deployed</a> with Heroku. View the <a href="https://github.com/alligatormonday/burger_express_logger" rel="noreferrer" target="_blank">repository here!</a></p>

            <img className="project-img" src={MySQL_Employee_Image} alt="MySQL_Employee_Demo_Image" />
            <p>CLI application that allows users to manage their business. Users can view/add/remove departments, view/add/remove/update roles, view/add/remove employees. This application uses MySQL, and Node.js <a href="https://drive.google.com/file/d/1A7vlyTgxvLf7moCUhghVpJKEeEMBKIyD/view" rel="noreferrer" target="_blank">View </a> the demo. View the <a href="https://github.com/alligatormonday/mysql_employee_tracker" rel="noreferrer" target="_blank">repository here!</a></p>
        </>
    );
}

export default Hero;