"use client";
import { useState, ChangeEvent } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function Calculator() {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum2(e.target.value);
    }; const add = (): void => {
        setResult((parseFloat(num1) + parseFloat(num2)).toString());
    };

    const subtract = (): void => {
        setResult((parseFloat(num1) - parseFloat(num2)).toString());
    };
    const multiply = (): void => {
        setResult((parseFloat(num1) * parseFloat(num2)).toString());
    };
    const divide = (): void => {
        if (parseFloat(num2) !== 0) {
            setResult((parseFloat(num1) / parseFloat(num2)).toString());
        } else {
            setResult("Error: Division by zero");
        }
    };const clear = (): void => {
        setNum1("");
        setNum2("");
        setResult("");
      };
    return (
        <>
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Simple Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="num1">Number 1</Label>
            <Input
              id="num1"
              type="number"
              value={num1}
              onChange={handleNum1Change}
              placeholder="Enter a number"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="num2">Number 2</Label>
            <Input
              id="num2"
              type="number"
              value={num2}
              onChange={handleNum2Change}
              placeholder="Enter a number"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        <Button
  variant="outline"
  className="text-2xl font-bold text-white bg-blue-300 hover:text-blue-500 dark:text-blue-300"
  onClick={add}
>
  +
</Button>
<Button
  variant="outline"
  className="text-2xl font-bold text-white hover:bg-white bg-red-300 hover:text-red-500 dark:text-red-300"
  onClick={subtract}
>
  -
</Button>
<Button
  variant="outline"
  className="text-2xl font-bold text-white hover:bg-white bg-green-300 hover:text-green-500 dark:text-green-300"
  onClick={multiply}
>
  *
</Button>
<Button
  variant="outline"
  className="text-2xl font-bold text-white hover:bg-white bg-purple-300 hover:text-purple-500 dark:text-purple-300"
  onClick={divide}
>
  /
</Button>
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="result">Result</Label>
          <Input
            id="result"
            type="text"
            value={result}
            placeholder="Result"
            readOnly
          />
        </div>
        <Button variant="outline" className="w-full" onClick={clear}>
          Clear
        </Button>
      </CardContent>
    </Card>
  </div>
        </>
    )
}

export default Calculator