const employees = [
    {
        "id": 1,
        "firstName": "Samir",
        "email": "samir12@gmail.com",
        "password": "Samir@1234",
        "taskCounts": {
            "activeTask": 1 ,
            "newTask": 1,
            "completedTask": 1,
            "failedTask": 1
        },
        "tasks": [
            {
                "activeTask": false,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Redesign homepage",
                "taskDescription": "Revise the design of the homepage for mobile responsiveness",
                "taskDate": "2025-01-10",
                "taskCategory": "Design" 
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Hold a meeting to discuss project goals",
                "taskDate": "2025-01-08",
                "taskCategory": "Meeting"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "Update Documentation",
                "taskDescription": "Add new features and updates to the project documentation.",
                "taskDate": "2025-01-10",
                "taskCategory": "Documentation"
            },
            {
                "activeTask": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Bug fixes",
                "taskDescription": "Fix critical bugs in the latest release",
                "taskDate": "2025-01-15",
                "taskCategory": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Ananya",
        "email": "ananya@gmail.com",
        "password": "Ananya@1234",
        "taskCounts": {
            "activeTask": 1,
            "newTask": 0,
            "completedTask": 1,
            "failedTask": 0
        },
        "tasks": [
            {
                "activeTask": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Database tuning",
                "taskDescription": "Optimize the database queries for faster performance",
                "taskDate": "2025-01-11",
                "taskCategory": "Database"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Wireframe design",
                "taskDescription": "Create wireframes for the new mobile app",
                "taskDate": "2025-01-09",
                "taskCategory": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Vikram",
        "email": "vikram@gmail.com",
        "password": "Vikram@1234",
        "taskCounts": {
            "activeTask": 1,
            "newTask": 1,
            "completedTask": 1,
            "failedTask": 0
        },
        "tasks": [
            {
                "activeTask": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Client presentation",
                "taskDescription": "Prepare slides for the upcoming client meeting on product launch",
                "taskDate": "2025-01-14",
                "taskCategory": "Presentation"
            },
            {
                "activeTask": false,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Code refactor",
                "taskDescription": "Refactor the codebase to improve readability and performance",
                "taskDate": "2025-01-13",
                "taskCategory": "Development"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Test the latest build",
                "taskDescription": "Run manual tests on the build for bug identification",
                "taskDate": "2025-01-06",
                "taskCategory": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Meera",
        "email": "meera12@outlook.com",
        "password": "Meera@1234",
        "taskCounts": {
            "activeTask": 1,
            "newTask": 0,
            "completedTask": 0,
            "failedTask": 1
        },
        "tasks": [
            {
                "activeTask": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Update API documentation",
                "taskDescription": "Revise the API documentation to reflect new changes",
                "taskDate": "2025-01-12",
                "taskCategory": "Documentation"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "CI/CD pipeline setup",
                "taskDescription": "Set up the automated deployment pipeline",
                "taskDate": "2025-01-10",
                "taskCategory": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Raj",
        "email": "raj123@yahoo.com",
        "password": "Raj@1234",
        "taskCounts": {
            "activeTask": 1,
            "newTask": 3,
            "completedTask": 3,
            "failedTask": 1
        },
        "tasks": [
            {
                "activeTask": false,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Improve UI",
                "taskDescription": "Enhance the user interface for a better user experience",
                "taskDate": "2025-01-13",
                "taskCategory": "Design"
            },
            {
                "activeTask": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve the issue with the login button not working on mobile devices.",
                "taskDate": "2025-01-14",
                "taskCategory": "Development"
            },
            {
                "activeTask": false,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create a presentation for the upcoming stakeholder meeting.",
                "taskDate": "2025-01-15",
                "taskCategory": "Management"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code submission for the payment gateway module.",
                "taskDate": "2025-01-12",
                "taskCategory": "Quality Assurance"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "Data Migration",
                "taskDescription": "Migrate user data from the old system to the new database.",
                "taskDate": "2025-01-11",
                "taskCategory": "Data Management"
            },
            {
                "activeTask": false,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Improve UI",
                "taskDescription": "Enhance the user interface for a better user experience",
                "taskDate": "2025-01-13",
                "taskCategory": "Design"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Release management",
                "taskDescription": "Deploy the latest release to production",
                "taskDate": "2025-01-07",
                "taskCategory": "DevOps"
            },
            {
                "activeTask": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Gather customer feedback",
                "taskDescription": "Collect feedback from users after product update",
                "taskDate": "2025-01-05",
                "taskCategory": "Support"
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin1@gmail.com",
    "password": "Admin@123"
}];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    // GETTING THE DATA AS AN ARRAY OF OBJECTS
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
}