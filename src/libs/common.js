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
