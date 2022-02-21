import styled from 'styled-components';

import { Color } from '#/utils';

export const StyledButton = styled.button`
    cursor: pointer;
    color: ${({ theme }) => theme.palette.onPrimary};
    background-color: ${({ theme }) => theme.palette.primary};
    height: 2.5rem;
    border: 0;
    border-radius: 1.25rem;
    padding: 0 2rem;
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.button.fontSize()};
    transition: ${({ theme }) => (theme.snappy ? 'none' : 'all 0.2s linear')};

    &:hover {
        background-color: ${({ theme }) => Color.adjust(theme.palette.primary, -10)};
    }

    &:active {
        background-color: ${({ theme }) => Color.adjust(theme.palette.primary, -20)};
    }

    &:disabled {
        color: ${({ theme }) => Color.alpha(theme.palette.onSurface, 0.38)};
        background-color: ${({ theme }) => Color.alpha(theme.palette.onSurface, 0.12)};
    }

    ${(props) =>
        props.size === 'small' &&
        `
        height: 2rem;
        border-radius: 1rem;
        padding: 0 1rem;
        font-size: ${props.theme.typography.button.fontSize(-2)};
    `}

    ${(props) =>
        props.size === 'large' &&
        `
        height: 3.5rem;
        border-radius: 1.75rem;
        padding: 0 3rem;
        font-size: ${props.theme.typography.button.fontSize(8)};
    `}

    ${({ theme, ...props }) =>
        props.type === 'tonal' &&
        `
        color: ${theme.palette.onPrimaryContainer};
        background-color: ${theme.palette.primaryContainer};

        &:hover,
        &:active {
            color: ${theme.palette.onPrimary};
        }
    `}

    ${({ theme, ...props }) =>
        props.type === 'text' &&
        `
        color: ${theme.palette.primary};
        background-color: transparent;

        &:hover {
            background-color: ${theme.palette.primaryContainer};
            color: ${theme.palette.onPrimaryContainer};
        }

        &:active {
            background-color: ${Color.adjust(theme.palette.primaryContainer, -10)};
        }

        &:disabled {
            background-color: transparent;
        }
    `}
`;
