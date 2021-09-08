import React from "react";
import Nav from './Nav'

const CourseRegister = () => (<div><Nav/>
<form>
    <fieldset>
        <legend> Register Courses </legend>
        <ul>
            <li>
                <span class="reg">Interests : </span>
                <label for="interest"></label>
                <input type="text" id="interest" list="choices" />
                <datalist id="choices">
                    <option value="grammar" label="Grammar"></option>
                    <option value="vocab" label="Vocabulary"></option>
                    <option value="speak" label="Speaking"></option>
                    <option value="listen" label="Listening"></option>
                    <option value="news" label="Listening to News"></option>
                </datalist>
            </li>
        </ul>
    </fieldset>        
</form>
</div>
)
export default CourseRegister;