// Expense model
interface Expense {
  id: number;
  description: string;
  amount: number;
  categories: string;
}

// Component props
interface props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: props) => {
  // Show message if there are no expenses
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    // Expenses table
    <table className="table table-bordered">
      {/* Table header */}
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Categories</th>
          <th></th>
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.categories}</td>
            <td>
              {/* Delete button */}
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      {/* Table footer */}
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0) // Sum all amounts
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
