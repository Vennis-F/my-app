import React, { useState } from "react"
import { Table } from "antd"

const data = []
for (let i = 0; i < 25; i++) {
  data.push({
    name: `Edward King ${i}`,
    age: i + 2,
    address: `London, Park Lane no. ${i}`,
    key: i * 10, //ID
  })
}
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a href="https://anime47.com">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Adult?",
    key: "key",
    render: (payload) => <p>{payload.age > 18 ? "True" : "False"}</p>,
  },
]

const TableTest2 = () => {
  const onSelect = (data) => {
    console.log(data)
  }
  return <Table rowSelection={onSelect} columns={columns} dataSource={data} />
}

export default TableTest2
// responsive: xem video comment
