import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Form, Button } from 'react-bootstrap';

export const StyledSearchInputParagraph = styled.p `
    max-width: 100vw;
    line-height: 28px;
    font-size: 15px;
    color: #667375;
    margin-top: 15px;
    padding: 0 10px;
    text-align: center;

    ${sizes.tablet} {
        font-size: 20px;
    }
`;

export const StyledSearchInputField = styled(Form.Control) `
    width: 200px;
    height: 48px;
    margin: 0;
    color: #c4c4c4;
    margin: 0 8px;

    ${sizes.desktop} {
        width: 340px;
        margin: 0 10px;
    }
`;

export const StyledSubmitBtn = styled(Button) `
    height: 48px;
    background-color: #fca311;
    color: #14213d;
    padding: 10px;
    border-radius: 4px;
    border-color: #fca311;
    font-weight: bold;
    line-height: 28px;
    margin: 0 8px;

    ${sizes.desktop} {
        width: 150px;
    }
`;