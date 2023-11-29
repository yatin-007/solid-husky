import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@suid/material';
import { Component, For, JSXElement } from 'solid-js';

export type Row = Record<string, string>;

export type Column = {
  name: string;
  key: string;
  renderCell?: (arg?: Row) => string | JSXElement;
  minWidth?: number;
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
};
export interface Props {
  column: Column[];
  rows: Row[];
}

export const CustomizedTable: Component<Props> = (props) => {
  const headers = (array: Column[]) => {
    return (
      <For each={array}>
        {(item) => (
          <TableCell
            sx={{
              textAlign: item.textAlign ? item.textAlign : 'left',
              minWidth: item.minWidth ?? item.minWidth,
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '24px',
              letterSpacing: '0.17px',
              color: '#000000',
              background: '#b9b9b9bd',
              textTransform: 'capitalize',
            }}
          >
            {item.name}
          </TableCell>
        )}
      </For>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead class="head">
          <TableRow>{headers(props.column)}</TableRow>
        </TableHead>
        <TableBody>
          <For each={props.rows}>
            {(rowItem) => (
              <TableRow
                sx={{
                  '&:hover': {
                    background: '#b9b9b911',
                    '& .MuiSvgIcon-root': {
                      visibility: 'visible',
                    },
                  },
                }}
              >
                <For each={props.column}>
                  {(columnItem) => (
                    <TableCell
                      sx={{
                        textAlign: columnItem.textAlign
                          ? columnItem.textAlign
                          : 'left',
                        minWidth: columnItem.minWidth ?? columnItem.minWidth,
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: 400,
                        color: '#000000',
                        textTransform: 'capitalize',
                        borderBottom: '1px solid #b9b9b9a8',
                      }}
                    >
                      {columnItem.renderCell
                        ? columnItem.renderCell(rowItem)
                        : rowItem[columnItem.key]}
                    </TableCell>
                  )}
                </For>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
