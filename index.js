<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>Expense Tracker</h1>

    <div class="balance">
        <h3>Your Balance</h3>
        <h2 id="balance">₹0</h2>
    </div>

    <div class="summary">
        <div class="income">
            <h4>Income</h4>
            <p id="income">₹0</p>
        </div>
        <div class="expense">
            <h4>Expense</h4>
            <p id="expense">₹0</p>
        </div>
    </div>

    <h3>Add Transaction</h3>
    <form id="form">
        <input type="text" id="text" placeholder="Enter description" required>
        
        <input type="number" id="amount" placeholder="Enter amount (+income, -expense)" required>
        
        <select id="category">
            <option value="Salary">Salary</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
        </select>

        <button>Add Transaction</button>
    </form>

    <h3>History</h3>
    <ul id="list" class="list"></ul>
</div>

<script src="script.js"></script>
</body>
</html>
