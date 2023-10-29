export function deactivateCells(newOrder, setIsDeactivating, setOrder) {
  console.log("called");
  const timer = setInterval(() => {
    setOrder((origOrder) => {
      const newOrder = origOrder.slice();
      newOrder.pop();
      if (newOrder.length === 0) {
        clearInterval(timer);
        setIsDeactivating(false);
      }
      return newOrder;
    });
  }, 300);
}

export function activateCells(
  config,
  index,
  order,
  setOrder,
  setIsDeactivating
) {
  const newOrder = [...order, index];
  setOrder(newOrder);

  if (newOrder.length === config.filter(Boolean).length) {
    setIsDeactivating(true);
    deactivateCells(newOrder, setIsDeactivating, setOrder);
  }
}
