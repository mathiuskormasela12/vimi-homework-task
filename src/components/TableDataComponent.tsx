// ========== TableDataComponent
// import all modules
import React from 'react';
import moment from 'moment';
import { ITableDataComponentProps } from '../interfaces';
import { TableRow, TableData, Title } from '../styles';

export const TableDataComponent: React.FC<ITableDataComponentProps> = (props) => {
  const { loading, data } = props;

  if (loading) {
    return (
      <TableRow>
        <TableData colSpan={5}>
          <Title>
            Please Wait...
          </Title>
        </TableData>
      </TableRow>
    );
  } if (data.length > 0) {
    return (
      <>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableData>
              {item.name}
            </TableData>
            <TableData>
              {item.status.toUpperCase()}
            </TableData>
            <TableData>
              {item.type}
            </TableData>
            <TableData>
              {moment(item.createdOn).format('MMM DD, YYYY')}
            </TableData>
          </TableRow>
        ))}
      </>
    );
  }
  return (
    <TableRow>
      <TableData colSpan={5}>
        <Title>
          Empty
        </Title>
      </TableData>
    </TableRow>
  );
};
