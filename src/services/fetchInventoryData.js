export const fetchInventoryData = async () => {
    const response = await fetch('/data/inventory.json'); // Adjust the path as necessary
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };