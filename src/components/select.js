import React, { useState } from "react"
import { Select } from "antd"
const { Option } = Select

const SelectTest = () => {
  // select
  const [loadingSelect, setLoadingSelect] = useState(false)
  const onChangeSelect = (value) => {
    console.log(value)

    setLoadingSelect(true)

    setTimeout(() => {
      setLoadingSelect(false)
    }, 2000)
  }

  // select 2
  const fruits = ["Banana", "Aapple", "Aaaan", "Orange", "Ringle", "Mango"]

  return (
    <div>
      <Select
        showSearch
        placeholder="Choose name"
        defaultValue={"jack"}
        loading={loadingSelect}
        onChange={onChangeSelect}
        onSearch={(value) => console.log(value)}
        allowClear
        style={{ width: 150 }}
      >
        <Option value="jack">Jack</Option>
        <Option value="Holy">Holy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
      </Select>
      <br />
      <br />
      <Select
        mode="multiple"
        placeholder="Selected fruit"
        // filterSort={}
        style={{ width: 300 }}
        showArrow
        allowClear
        maxTagCount={2}
      >
        {fruits.map((fruit, index) => (
          <Select.Option value={fruit} key={index} />
        ))}
      </Select>
    </div>
  )
}

export default SelectTest
