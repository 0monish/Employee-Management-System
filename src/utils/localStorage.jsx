const employees = [
    {
        "id": 1,
        "firstName": "Samir",
        "email": "samir12@gmail.com",
        "password": "Samir@1234",
        "taskCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Redesign homepage",
                "taskDescription": "Revise the design of the homepage for mobile responsiveness",
                "taskDate": "2025-01-10",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Hold a meeting to discuss project goals",
                "taskDate": "2025-01-08",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Bug fixes",
                "taskDescription": "Fix critical bugs in the latest release",
                "taskDate": "2025-01-15",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Ananya",
        "email": "ananya@gmail.com",
        "password": "Ananya@1234",
        "taskCounts": {
            "active": 2,
            "newTask": 0,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database tuning",
                "taskDescription": "Optimize the database queries for faster performance",
                "taskDate": "2025-01-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Wireframe design",
                "taskDescription": "Create wireframes for the new mobile app",
                "taskDate": "2025-01-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Vikram",
        "email": "vikram@gmail.com",
        "password": "Vikram@1234",
        "taskCounts": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client presentation",
                "taskDescription": "Prepare slides for the upcoming client meeting on product launch",
                "taskDate": "2025-01-14",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code refactor",
                "taskDescription": "Refactor the codebase to improve readability and performance",
                "taskDate": "2025-01-13",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Test the latest build",
                "taskDescription": "Run manual tests on the build for bug identification",
                "taskDate": "2025-01-06",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Meera",
        "email": "meera12@outlook.com",
        "password": "Meera@1234",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update API documentation",
                "taskDescription": "Revise the API documentation to reflect new changes",
                "taskDate": "2025-01-12",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "CI/CD pipeline setup",
                "taskDescription": "Set up the automated deployment pipeline",
                "taskDate": "2025-01-10",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Raj",
        "email": "raj123@yahoo.com",
        "password": "Raj@1234",
        "taskCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Improve UI",
                "taskDescription": "Enhance the user interface for a better user experience",
                "taskDate": "2025-01-13",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Release management",
                "taskDescription": "Deploy the latest release to production",
                "taskDate": "2025-01-07",
                "category": "DevOps"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Gather customer feedback",
                "taskDescription": "Collect feedback from users after product update",
                "taskDate": "2025-01-05",
                "category": "Support"
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