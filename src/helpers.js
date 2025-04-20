export const waait = () => new Promise(res => setTimeout(res, Math.random() * 2000)) // helper function to simulate a delay

// colors
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0; // get existing budgets or empty array
    return `${existingBudgetLength * 34} 65% 50%`; // generate random color	
}

// Local storage functions
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({
    name, amount
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor(), // generate random color
    }

    const existingBudgets = fetchData("budgets") ?? []; // get existing budgets or empty array
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem])) // set the budgets in local storage
}

// delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}