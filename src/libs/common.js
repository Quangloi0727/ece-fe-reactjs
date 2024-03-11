import ExcelJS from 'exceljs';

export function HandleDataDisPlay(key, dataList, caseId, user, queue) {
  const list = dataList;
  const replacements = {
    '{caseId}': caseId,
    '{lastName}': user?.lastName,
    '{firstName}': user?.firstName,
    '{userName}': user?.userName,
    '{queue}': queue?.queueName,
  };
  const rowData = key && list && list.length ? list.find((cs) => cs.key === key) : '';
  if (rowData) {
    return <p>{rowData.message.replace(/({)([a-zA-Z0-9_-]+)(})/g, (match) => replacements[match])}</p>;
  }

  return '';
}

export const downloadExcelFile = async () => {
  // Đường dẫn đến tệp Excel trong dự án của bạn
  const data = [
    ['name', 'type', 'role', 'password', 'owner'],
    ['manhbd1', 'local', 'user', '123', 'loitest'],
    ['manhbd2', 'sso', 'admin', '', 'loitest'],
    ['manhbd3', 'local', 'admin', '123', 'loitest'],
    ['manhbd4', 'local', 'user', '123', 'loitest'],
  ];

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  data.forEach((row) => {
    worksheet.addRow(row);
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'example_files.xlsx';
  link.click();
};
