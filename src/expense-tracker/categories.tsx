// Define available categories
const categories = ["Groceries", "Utilities", "Housing", "Health"] as const;

export default categories;

{/*// Import React useState hook
import { useState } from "react";

// Import child components
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  // State for currently selected category in the filter
  const [selectedCategory, setSelectedCategory] = useState("");

  // State for all expenses
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Cereals", amount: 100, categories: "Groceries" },
    { id: 2, description: "Rent", amount: 120.567, categories: "Housing" },
    { id: 3, description: "Gym Membership", amount: 50, categories: "Health" },
    { id: 4, description: "Power", amount: 75.25, categories: "Utilities" },
    {
      id: 5,
      description: "Vegetables",
      amount: 40.75,
      categories: "Groceries",
    },
    {
      id: 6,
      description: "Internet Bill",
      amount: 60,
      categories: "Utilities",
    },
  ]); // Placeholder data for expenses

  // Filter expenses based on selected category
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.categories === selectedCategory)
    : expenses;

  // Delete expense by id
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      {/* Expense input form */
      /*
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([
              ...expenses,
              {
                id: expenses.length + 1,
                description: expense.description,
                amount: expense.amount,
                categories: expense.category,
              },
            ])
          }
        />
      </div>

      {/* Category filter dropdown */}
      /*
      <div className="mb-3">
        <ExpenseFilter
          setCategory={selectedCategory} // Current selected category
          onSelectCategory={(category) => setSelectedCategory(category)} // Update selected category
        />
      </div>

      {/* List of expenses */}/*
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
*/}
