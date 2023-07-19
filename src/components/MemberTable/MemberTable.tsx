import React from "react";

import { Bold, DataLg, H2, ParMd } from "@daohaus/ui";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";


import { MemberProfile } from "./MemberProfile";

import { Table, TableData, TableHead, TableRow } from "./MemberTable.styles";

type Member = {
  address: string;
  yeet: string;
};

const columnHelper = createColumnHelper<Member>();

const columns = [
  columnHelper.accessor("address", {
    header: () => "Address",
    cell: (info) => <MemberProfile address={info.getValue()} />,
  }),
  columnHelper.accessor("yeet", {
    header: () => "Yeet",
    cell: (info) => <ParMd>{`${info.renderValue()}`}</ParMd>,
  }),
];

export const MemberTable = ({ memberList }: { memberList: Member[] }) => {
  // console.log("memberList table", memberList);

  const [data] = React.useState(() => [...memberList]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                <DataLg>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </DataLg>
              </th>
            ))}
          </tr>
        ))}
      </TableHead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableData key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableData>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
