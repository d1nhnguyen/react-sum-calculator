import { useState } from "react";

export default function SumCalculator() {

    // Store users inputs for two numbers
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    // Store calculated sum
    const [sum, setSum] = useState(null);

    // Store error message if input is invalid
    const [error, setError] = useState("");

    // Handle calculation when the "Calculate Sum" button is clicked
    const handleCalculate = () => {
        if (num1 === "" || num2 === "") {
        setError("Please enter both numbers!");
        setSum(null);
        return;
        }

        if (isNaN(num1) || isNaN(num2)) {
        setError(" Inputs must be valid numbers!");
        setSum(null);
        return;
        }   

        setError("");
        setSum(Number(num1) + Number(num2));
    };

    return (
        // Main container for the calculator UI
        <div className="sum-app">
            <h2>Sum Calculator</h2>

            <input
            type="text"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            />

            <input
            type="text"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            />

            <button onClick={handleCalculate}>Calculate Sum</button>

            {error && <p className="error-message">{error}</p>}
            {sum !== null && <p>Result: {sum}</p>}
        </div>
    );
}
