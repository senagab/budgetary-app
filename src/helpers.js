export const waait = () => new Promise(res => setTimeout(res, Math.random() * 800)) // helper function to simulate a delay

// colors
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0; // get existing budgets or empty array
    return `${existingBudgetLength * 34} 65% 50%`; // generate random color	
}

// Local storage functions
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// Get all items from Local Storage
export const getAllMatchingItems = ({ category, key, value }) => {
    const data = fetchData(category) ?? [];
    return data.filter((item) => item[key] === value); // filter the data by key and value
}

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
    return localStorage.setItem(
        "budgets", 
        JSON.stringify(
            [...existingBudgets, newItem]
        )
    ) // set the budgets in local storage
}

// delete item from local storage
export const deleteItem = ({key, id}) => {
    const existingData = fetchData(key);
    if (id) {
        const newData = existingData.filter((item) => item.id !== id)
        return localStorage.setItem(key, JSON.stringify(newData))
    }
    return localStorage.removeItem(key)
}

// create expense
export const createExpense = ({
    name, amount, budgetId
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    }

    const existingExpenses = fetchData("expenses") ?? []; // get existing Expenses or empty array
    return localStorage.setItem(
        "expenses", 
        JSON.stringify(
            [...existingExpenses, newItem]
        )
    ) // set the budgets in local storage
}

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? []; // get existing expenses or empty array
    console.log("Expenses:", expenses);
    const budgetSpent = expenses.reduce((acc, expense) => {
        // check if the expense.id === budgetId i passed in 
        if (expense.budgetId !== budgetId) return acc

        // add the current amount to my total
        return acc += expense.amount // add the current amount to my total

    }, 0)
    return budgetSpent; // return the total spent by budget
}

// formatting percentages
export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0,
    })
}

// format date
export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();

// format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
    })
}