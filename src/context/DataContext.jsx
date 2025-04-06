import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [buttons] = useState(["All", "Active", "Inactive"]);
  const [filtres, setFiltres] = useState([
    {
      id: "all",
      label: "All",
      isActive: true,
    },
    {
      id: "active",
      label: "Active",
      isActive: false,
    },
    {
      id: "inactive",
      label: "Inactive",
      isActive: false,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const value = await response.json();

        setData(value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const selectedFilter = filtres.find((filter) => filter.isActive).id;

    switch (selectedFilter) {
      case "all":
        setFilteredData(data);
        break;
      case "active":
        setFilteredData(data.filter((item) => item.isActive));
        break;
      case "inactive":
        setFilteredData(data.filter((item) => !item.isActive));
        break;
      default:
        setFilteredData(data);
    }
  }, [filtres, data]);

  const changeFiltres = (newFilter) => {
    setFiltres((prevFiltres) =>
      prevFiltres.map((filter) => ({
        ...filter,
        isActive: filter.id === newFilter ? !filter.isActive : false,
      }))
    );
  };

  const removeItem = (currentName) => {
    setData((prev) => prev.filter((item) => item.name !== currentName));
  };

  const toggleActivityItem = (currentName) => {
    setData((prev) =>
      prev.map((item) =>
        item.name === currentName ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        changeFiltres,
        filtres,
        filteredData,
        buttons,
        removeItem,
        toggleActivityItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
