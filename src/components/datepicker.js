import { DatePicker, TimePicker } from "antd"

const DatepickerTest = () => {
  const onChange = (date, dateString) => {
    //Chạy khi xóa hoặc setValue
    console.log(date)
    console.log(dateString)
    console.log(date[0].isAfter("2002-12-31"))
  }
  return (
    <div>
      <DatePicker format="DD MMMM YYYY" onChange={onChange} />
      <br /> <br />
      <DatePicker.RangePicker
        // picker="month"
        disabledDate={(d) => {
          return d.isAfter("2002-12-31") || d.isSameOrBefore("1960-01-01")
        }}
        onChange={onChange}
      />
      <br /> <br />
      <TimePicker />
    </div>
  )
}

export default DatepickerTest
