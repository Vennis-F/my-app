import React, { useState } from "react"
import { HomeOutlined } from "@ant-design/icons"
import { Input } from "antd"
const { Search, Password } = Input

const InputTest = () => {
  // Input
  const [status, setstatus] = useState("")
  const onChangeKey = (value) => {
    const val = value.target.value
    if (val.length === 8) return setstatus("error")
    return setstatus("")
  }

  // Input name
  const [name, setName] = useState("")

  return (
    <div>
      <h1>{name}</h1>
      <Input
        onChange={(e) => {
          console.log(e.target.value)
          setName(e.target.value)
        }}
      />

      <Search
        className="my-search"
        placeholder="input search text"
        prefix={<HomeOutlined />}
        allowClear
        enterButton={true}
        onSearch={(value) => console.log(value)}
        onChange={onChangeKey}
        status={status}
      />
      <br />
      <br />
      <Password
        placeholder="input password"
        maxLength={6}
        size="large"
        allowClear
      />
    </div>
  )
}

export default InputTest
