export const useTabs = (initialTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};
