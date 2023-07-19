import styled from "styled-components";
import { Theme } from "@daohaus/ui";

export const Table = styled.table`
  width: 65%;
  border-collapse: collapse;
  margin: 6rem;
`;

export const TableHead = styled.thead`
  height: 6rem;
  padding-left: 20px;
  text-align: left;
  background-color: #8e5a37;
`;

export const TableRow = styled.tr`
  height: 5rem;
  &:nth-child(odd) {
    background-color: #764f35;
  }
  
  &:nth-child(even) {
    background-color: #8e5a37;
  }
`;

export const TableData = styled.td`
  padding: 1rem;
  text-align: left;
`;
