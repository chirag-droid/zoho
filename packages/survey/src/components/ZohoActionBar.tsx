import styled from "styled-components"
import { XIcon } from "lucide-react"
import useSurvey from "../hooks/useSurvey"

const Bar = styled.div`
    height: 36px;
    width: 100%;
    background-color: #eee;
    color: black;
    display: flex;
    align-items: center;
    justify-content: end;
`

const ZohoActionBar = () => {
    const { closeSurvey } = useSurvey()

    return (
        <Bar>
            <XIcon style={{ padding: "4px", cursor: "pointer" }} onClick={closeSurvey} />
        </Bar>
    )
}

export default ZohoActionBar