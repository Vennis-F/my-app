import { Button, Spin, Switch } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import React, { useState } from "react"

const SpinTest = () => {
  const [loading, setLoading] = useState(false)
  const onChangeSwitch = (checked) => setLoading(checked)

  return (
    <div>
      <Spin
        spinning={loading}
        indicator={<SearchOutlined spin />}
        size="large"
        delay={0}
      />
      <br />
      <br />
      <Spin spinning={loading}>
        <p>Tag 1</p>
        <p>Tag 2</p>
        <p>Tag 3</p>
      </Spin>
      <br />
      <br />
      <Switch checked={loading} onChange={onChangeSwitch} />
      {/* <Button onClick={() => setLoading(!loading)}>Toggle Spinning</Button> */}
    </div>
  )
}

export default SpinTest
