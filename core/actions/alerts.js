export const ALERT_ADD = "ALERT_ADD";
export const alertAdd = (id, type, blueprintName, error) => ({
  type: ALERT_ADD,
  payload: {
    id,
    type,
    blueprintName,
    error,
  },
});

export const ALERT_DELETE = "ALERT_DELETE";
export const alertDelete = (id) => ({
  type: ALERT_DELETE,
  payload: {
    id,
  },
});
