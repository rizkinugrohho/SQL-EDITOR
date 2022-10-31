import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { QueryListItem } from "./QueryListItem/QueryListItem";
import classes from "./styles.module.css";

const QuerySidebar = ({ queries, setCurrentQuery }) => {
  const { querySideBarCollapsed } = useAppContext();

  return (
    <>
      <div
        className={`${classes.sidebardesktop} query_sidebar md:sticky overflow-auto px-0 h-full top-0  flex flex-col border-r-2 border-gray-200 dark:border-darkBorder`}
      >
        <div className="query_sidebar_header w-full p-4 border-b-2 border-gray-100 dark:border-darkBorder">
          <h2 className="text-lg font-semibold">
            Pilih Sintaks SQL dibawah ini:
          </h2>
        </div>
        <div className="row_lecture_sidebar">
          <div className="w-full flex flex-col">
            {queries.map((query, index) => {
              return (
                <QueryListItem
                  key={index}
                  query={query}
                  setCurrentQuery={setCurrentQuery}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`${classes.sidebar} query_sidebar overflow-auto px-0 top-0 bottom-0 flex flex-col border-r-2 border-gray-200 dark:border-darkBorder h-full`}
        style={{ height: querySideBarCollapsed && 0 }}
      >
        <div className="query_sidebar_header w-full py-4 px-2">
          <h2 className="text-lg text-center font-semibold">
            Pilih Sintaks SQL dibawah ini:
          </h2>
        </div>
        <div>
          <div className="w-full flex flex-col">
            {queries.map((query, index) => {
              return (
                <QueryListItem
                  key={index}
                  query={query}
                  setCurrentQuery={setCurrentQuery}
                  phoneView={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuerySidebar;
