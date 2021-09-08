import React from "react";

const NumberRange = () => (<div>
<form>
    <fieldset>
        <legend> 등록 정보</legend>
        <ul>
            <li>
                <label class="reg" for="member">참여인원<small>(최대 10명)</small></label>
                <input type="number" id="member" min="0" max="10" step="1" />
            </li>
            <li>
                <label class="reg" for="stuffs">지원물품<small>(1인당 5개)</small></label>
                <input type="number" id="stuffs" min="0" max="50" step="5" size="5" />
            </li>
            <li>
                <label class="reg" for="satis">희망 단계<small>(하, 중, 상)</small></label>
                <input type="range" id="satis" min="0" max="3" />
            </li>
        </ul>
    </fieldset>
</form>
</div>
)
export default NumberRange;