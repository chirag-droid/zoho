import useSurvey from "../hooks/useSurvey";
import ZohoActionBar from "./ZohoActionBar";
import ZohoContainer, { ZohoContainerProps } from "./ZohoContainer";
import ZohoFrame from "./ZohoFrame";

export interface ZohoSurveyProps extends ZohoContainerProps {
    id: string;
}

const ZohoSurvey = ({ id, ...props }: ZohoSurveyProps) => {
    const { isOpen } = useSurvey()

    const frameURL = `https://survey.zohopublic.in/zsc/${id}`
    return (
        <ZohoContainer {...props} hidden={!isOpen}>
            <ZohoActionBar />
            <ZohoFrame allow="geolocation" src={frameURL} />
        </ZohoContainer>
    )
}

export default ZohoSurvey
