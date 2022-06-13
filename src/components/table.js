import React, { useState } from "react"
import { Table } from "antd"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
]

const data = []

for (let i = 0; i < 46; i++) {
  data.push({
    key: i * 10,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}
const TableTest = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL],
  }

  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  )
}

export default TableTest
