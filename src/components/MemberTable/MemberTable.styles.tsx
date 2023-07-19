import styled from "styled-components";
import { Theme } from "@daohaus/ui";

export const Table = styled.table`
  width: 65%;
  border-collapse: collapse;
  margin: 6rem;
`;

export const TableHead = styled.thead`
  height: 6rem;
  text-align: left;
  background-color: ${({ theme }: { theme: Theme }) => theme.secondary.step3};
`;

export const TableRow = styled.tr`
  height: 5rem;
  &:nth-child(odd) {
    background-color: ${({ theme }: { theme: Theme }) => theme.secondary.step5};
  }
  
  &:nth-child(even) {
    background-color: ${({ theme }: { theme: Theme }) => theme.secondary.step3};
  }
`;

export const TableData = styled.td`
  padding: 1rem;
  text-align: left;
`;
