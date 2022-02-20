import styled from 'styled-components';

import { Color } from '#/utils';

export const StyledButton = styled.button`
    color: ${({theme}) => theme.palette.onPrimary};
    background-color: ${({theme}) => theme.palette.primary};
    border: 0;
    border-radius: 1rem;
    padding: 0.5rem 1rem;

    &:hover {
        background-color: ${({theme}) => Color.adjust(theme.palette.primary, -10)};
    }

    &:active {
        background-color: ${({theme}) => Color.adjust(theme.palette.primary, -20)};
    }
`;
