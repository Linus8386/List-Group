// Import categories list from App component
import categories from "../categories";

// Component props
interface Props {
  setCategory: string; // Currently selected category value
  onSelectCategory: (category: string) => void; // Function to update selected category
}

const ExpenseFilter = ({ onSelectCategory, setCategory }: Props) => {
  return (
    // Category filter dropdown
    <select
      className="form-select"
      value={setCategory} // Controlled select input
      onChange={(event) => onSelectCategory(event.target.value)} // Handle category change
      aria-label="Filter expenses by category" // Accessibility support
    >
      {/* Default option */}
      <option value="">All_Categories</option>

      {/* Category options */}
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
