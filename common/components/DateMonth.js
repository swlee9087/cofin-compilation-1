import React from "react";

const DateMonth = () => (
<div>
    <form>
        <h3>Select time range</h3>
        <label><input type="date" id="start"/></label>
        <label><input type="date" id="end"/></label>
    </form>
    <form>
        <h3>Select time range</h3>
        <label><input type="month" id="start"/></label>
        <label><input type="month" id="end"/></label>
    </form>
    <form>
        <h3>Select time range</h3>
        <label><input type="week" id="start"/></label>
        <label><input type="week" id="end"/></label>
    </form>
</div>
)
export default DateMonth;