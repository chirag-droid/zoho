import styled, { css } from "styled-components";

const positions = {
    "bottomLeft": css`bottom:0;left:0;`,
    "bottomRight": css`bottom:0;right:0;`,
    "topLeft": css`top:0;left:0;`,
    "topRight": css`top:0;right:0;`,
}

export interface ZohoContainerProps {
    height?: string;
    width?: string;
    position?: keyof typeof positions
}

const ZohoContainer = styled.div<ZohoContainerProps>`
    z-index: 99999999;
    margin: 0.75rem;
    position: fixed;
    border-radius: 0.375rem;
    overflow: hidden;

    ${props => css`width: ${props.width ?? "320px"};`}
    ${props => css`height: ${props.height ?? "450px"};`}

    ${prop => prop.position ? positions[prop.position] : positions['bottomRight']}
`

export default ZohoContainer
