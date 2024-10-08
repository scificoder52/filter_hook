# Feature: Top Rated Restaurant Filter

## Description
When the **Top Rated Restaurant** button is clicked, the system filters and displays only the restaurants with a rating greater than 4.3.

---

### Implementation
In this feature, I utilized the **`useState`** hook to manage the state of the restaurant data and the filter status. This allows the component to re-render whenever the state changes, ensuring that the displayed list updates dynamically based on user interaction.

### Before:
*All restaurants are displayed, regardless of rating.*

![Before Filtering](https://github.com/user-attachments/assets/4b4620b6-bb53-4d44-b781-951f958d8984)

---

### After:
*Only restaurants with ratings higher than 4.3 are displayed.*

![After Filtering](https://github.com/user-attachments/assets/f9f5b599-45a6-4566-aea9-39c2743c85e6)
