const data = {
    tasks: [
        {
            title: "Today task 1",
            description: "Drink water more",
            dueDate: new Date(),
            completed: false,
            tags: ["example", "important", "water"]
        },
        {
            title: "Today task 2",
            description: "Eat more food",
            dueDate: new Date(),
            completed: true,
            tags: ["example", "important", "food"]
        },
        {
            title: "Tomorrow task 1",
            description: "No more food",
            dueDate: new Date().setDate(new Date().getDate() + 1),
            completed: false,
            tags: ["example", "not important", "food"]
        },
        {
            title: "Day after tomorrow task 1",
            description: "No more games",
            dueDate: new Date().setDate(new Date().getDate() + 2),
            completed: true,
            tags: ["example", "important", "game"]
        }
    ]
};

if (localStorage.getItem("data") != null) {
    localStorage.setItem("data", JSON.stringify(data));
}