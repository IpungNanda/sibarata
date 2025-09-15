import { ReactNode } from 'react';

export interface Column {
  header: string;
  accessor: string;
  type?: 'text' | 'date' | 'image';
  render?: (value: any, row: any) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
}

const DataTable = ({ columns, data }: DataTableProps) => {
  const formatValue = (value: any, type?: 'text' | 'date' | 'image') => {
    if (type === 'date' && value instanceof Date) {
      return value.toLocaleDateString('id-ID');
    }
    if (type === 'image' && typeof value === 'string') {
      return <img src={value} alt="Preview" className="w-16 h-16 object-cover rounded" />;
    }
    return value;
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : formatValue(row[column.accessor], column.type)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Tidak ada data yang ditemukan
        </div>
      )}
    </div>
  );
};

export default DataTable;