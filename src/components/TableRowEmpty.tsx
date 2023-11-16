import { CloudQueue } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';

const TableRowEmpty = ({ visible }: { visible: boolean }) => (
  <>
    {visible && (
      <TableRow>
        <TableCell colSpan={100} className='text-center' style={{ color: '#0008' }}>
          <CloudQueue fontSize='large' />
          <div className='text-sm font-medium'>No Data</div>
        </TableCell>
      </TableRow>
    )}
  </>
);

export default TableRowEmpty;
