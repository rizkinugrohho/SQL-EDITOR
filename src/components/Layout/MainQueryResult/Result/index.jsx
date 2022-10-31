import React from "react";
import classes from "./styles.module.css";

const Result = ({ result }) => {
  return (
    <>
      <table
        className={`${classes.tableStyle} sm:my-2 mb-10 h-full w-full text-center text-xs sm:text-base border-4 shadow-md border-gray-100 dark:border-darkBorder overflow-x-auto border-collapse`}
      >
        <thead>
          <tr className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-50">
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Kode_Barang
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Nama_Barang
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Satuan
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Harga
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Jumlah
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Subharga
            </th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((row, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.Kode_Barang}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.Nama_Barang}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.Satuan}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.Harga}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.Jumlah}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.Subharga}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Result;
