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
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem])) // set the budgets in local storage
}

// delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? []; // get existing expenses or empty array
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



// format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
    })
}