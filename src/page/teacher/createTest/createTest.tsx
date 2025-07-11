import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label, RadioGroup, RadioGroupItem, ScrollArea, Textarea } from "@/components"

type TestType = {
  question: string
  options: string[]
  correctAnswerIndex: number | null
}

export const CreateTest = () => {
  const [topic, setTopic] = useState("")
  const [tests, setTests] = useState<TestType[]>([])

  const addTest = () => {
    setTests([
      ...tests,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswerIndex: null,
      },
    ])
  }

  const updateTest = (
    testIndex: number,
    type: "question" | "option" | "answer",
    value: string | number,
    optionIndex?: number
  ) => {
    const updatedTests = [...tests]
    if (type === "question") {
      updatedTests[testIndex].question = value as string
    } else if (type === "option" && optionIndex !== undefined) {
      updatedTests[testIndex].options[optionIndex] = value as string
    } else if (type === "answer") {
      updatedTests[testIndex].correctAnswerIndex = Number(value)
    }
    setTests(updatedTests)
  }

  const removeTest = (index: number) => {
    setTests(tests.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    const payload = {
      topic,
      tests,
    }
    console.log("Submit qilinayotgan ma'lumot:", payload)
    // Bu yerga fetch/post qo'shishingiz mumkin
  }

  return (
    <div className="p-6">
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl">Test yaratish</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base mb-1 block">Mavzu nomi</Label>
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Masalan: Algebra"
            />
          </div>

          <ScrollArea className="max-h-[600px] pr-2">
            <div className="space-y-6">
              {tests.map((test, testIndex) => (
                <Card key={testIndex} className="bg-white shadow-md border p-4">
                  <div className="flex justify-between items-start">
                    <Label className="text-lg font-semibold">
                      Savol {testIndex + 1}
                    </Label>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTest(testIndex)}
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </Button>
                  </div>

                  <Textarea
                    placeholder="Savol matni"
                    value={test.question}
                    onChange={(e) =>
                      updateTest(testIndex, "question", e.target.value)
                    }
                    className="mt-2"
                  />

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {test.options.map((opt, optIndex) => (
                      <div key={optIndex}>
                        <Label className="block mb-1">
                          Variant {String.fromCharCode(65 + optIndex)}
                        </Label>
                        <Input
                          value={opt}
                          onChange={(e) =>
                            updateTest(
                              testIndex,
                              "option",
                              e.target.value,
                              optIndex
                            )
                          }
                          placeholder={`Variant ${String.fromCharCode(
                            65 + optIndex
                          )}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Label className="block mb-2">
                      To‘g‘ri javobni tanlang:
                    </Label>
                    <RadioGroup
                      value={
                        test.correctAnswerIndex !== null
                          ? test.correctAnswerIndex.toString()
                          : undefined
                      }
                      onValueChange={(val) =>
                        updateTest(testIndex, "answer", val)
                      }
                      className="flex gap-6"
                    >
                      {["A", "B", "C", "D"].map((label, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <RadioGroupItem value={i.toString()} id={`answer-${testIndex}-${i}`} />
                          <Label htmlFor={`answer-${testIndex}-${i}`}>
                            {label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>

          <div className="flex justify-between items-center pt-4 border-t">
            <Button
              onClick={addTest}
              variant="outline"
              className="flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Yangi test qo‘shish
            </Button>

            <Button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Saqlash
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
