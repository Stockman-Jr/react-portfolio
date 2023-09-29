export const useScrollY = () => {
  return (event, element, currentPage, setCurrentPage, scroll) => {
    // Number of pages available to view
    const totalPages = element.current.clientHeight / window.innerHeight - 1;

    // Determines which direction user scrolled
    const userScrolledUp = event.deltaY < 0 ? true : false;
    const userScrolledDown = event.deltaY > 100 ? true : false;

    let newScroll = scroll;

    // Update scroll based on user scrolling direction
    if (userScrolledUp && currentPage !== 0) {
      setCurrentPage(currentPage - 1);
      newScroll = (currentPage - 1) * 100;
    } else if (userScrolledDown && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      newScroll = (currentPage + 1) * 100;
    }

    return newScroll;
  };
};
