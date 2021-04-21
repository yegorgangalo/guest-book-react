//cache handlers
export const commentsDataAdd = result => oldData => oldData.concat(result);

export const commentsDataUpdate = result => oldData =>
  oldData.map(item => (item._id === result._id ? result : item));

export const commentsDataRemove = result => oldData =>
  oldData.filter(({ _id }) => _id !== result);
