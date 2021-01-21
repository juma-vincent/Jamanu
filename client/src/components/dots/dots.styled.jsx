import styled from 'styled-components';

export const DotContainer = styled.span`
    padding: 7px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${(props)=> props.active ? 'rgba(21, 189, 26, 0.78)' : 'rgba(21, 28, 58, 0.68)'};
`;

export const DotsContainer = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
