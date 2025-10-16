import { useState } from "react"

export default function State() {
    const [state, setState] = useState(0);

    function buttonClicked() {
        setState(state + 1);
    }
}