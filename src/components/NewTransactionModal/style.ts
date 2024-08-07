import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.50rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    color: #fff;
    background: var(--green);

    border: 0;
    border-radius: 0.50rem;
    margin-top: 1.5rem;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
  gap: 0.5rem;
`;

interface BoxButtonsProps {
  isActive: boolean;
  ActiveColor: 'green' | 'red';
};

const colors = {
  green: '#33CC95',
  red: '#e52e4d'
};

export const BoxButtons = styled.button<BoxButtonsProps>`
  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.50rem;

    background: ${(props) => props.isActive ? transparentize(0.9, colors[props.ActiveColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 25px;
      height: 25px;
    }

    span {
      display: inline-block;
      font-size: 1rem;
      margin-left: 1rem;
      color: var(--text-title);
    }
`;