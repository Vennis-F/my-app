import React, { useState } from "react"
import { PoweroffOutlined } from "@ant-design/icons"
import { Button } from "antd"

const ButtonTest = () => {
  // Button
  const [loading, setLoading] = useState(false)
  const onButtonClick = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div>
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        shape="round"
        size="large"
        // style={{ backgroundColor: "#090979", fontWeight: "bolder" }}
        className="my-button"
        block
        loading={loading}
        onClick={onButtonClick}
      >
        Click me!
      </Button>
    </div>
  )
}

export default ButtonTest
