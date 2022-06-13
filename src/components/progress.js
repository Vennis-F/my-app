import { Progress } from "antd"
import React from "react"

const ProgressTest = () => {
  return (
    <div>
      <Progress status="success" type="circle" percent={20} />
      <Progress status="exception" type="circle" percent={20} />
      <Progress type="dashboard" percent={20} />
      <br />
      <br />
      <Progress
        status="active"
        type="line"
        strokeWidth={20}
        strokeColor={"#237804"}
        percent={20}
      />
    </div>
  )
}

export default ProgressTest
