'use client'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "./ui/input"
import Birthday from './Birthday'

function BirthdayInput() {
  const [name, setName] = useState<string>("")
  const [dob, setDob] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [birthdayMessage, setBirthdayMessage] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  const calculateBirthdayStatus = () => {
    if (!dob) return
    const today = new Date()
    const birthDate = new Date(dob)
    const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
    const calculatedAge = today.getFullYear() - birthDate.getFullYear()
    setAge(calculatedAge)

    if (thisYearBirthday.toDateString() === today.toDateString()) {
      setBirthdayMessage("Happy Birthday🎉! 🎂 Have an amazing day! 🎈")
    } else if (thisYearBirthday < today) {
      setBirthdayMessage("Happy Belated Birthday🎉! 🎂 Hope you had a wonderful celebration!🎈")
    } else {
      setBirthdayMessage("Your birthday is coming up🎉! 🎂 Wishing you a joyful day in advance!🎈")
    }
  }

  useEffect(() => {
    calculateBirthdayStatus()
  }, [dob])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    calculateBirthdayStatus()
    setSubmitted(true)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {!submitted ? (
        <Card className="w-full max-w-md mx-auto text-center">
          <CardHeader>
            <CardTitle>Birthday Wish App</CardTitle>
            <CardDescription>
              Enter your name and date of birth to get a personalized message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Enter Your Name:"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              <Input
                type="date"
                placeholder="Enter Your Date of Birth:"
                value={dob}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDob(e.target.value)}
              />
              <Button type="submit" className="shadow-orange-500 shadow-md hover:shadow-none">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Birthday name={name} age={age} birthdayMessage={birthdayMessage} />
      )}
    </div>
  )
}

export default BirthdayInput
