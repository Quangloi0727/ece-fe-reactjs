export function HandleDataDisPlay(key, dataList) {
  const list = dataList;
  const rowData = key && list && list.length ? list.find((cs) => cs.key === key) : '';
  if (rowData) {
    return <p>{rowData.message}</p>;
  }
  return '';
}
