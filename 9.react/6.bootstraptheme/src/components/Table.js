import { useTheme } from "./ThemeContext";

const Table = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container mt-4 mb-5">
      <table
        className={`table ${isDarkMode ? "table-striped table-dark" : "table-striped"} table-hover`}
      >
        <thead>
          <tr>
            <th>칼럼 1</th>
            <th>칼럼 2</th>
            <th>칼럼 3</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>데이터 1</td>
            <td>데이터 2</td>
            <td>데이터 3</td>
          </tr>
          <tr>
            <td>데이터 4</td>
            <td>데이터 5</td>
            <td>데이터 6</td>
          </tr>
          <tr>
            <td>데이터 7</td>
            <td>데이터 8</td>
            <td>데이터 9</td>
          </tr>
          <tr>
            <td>데이터 10</td>
            <td>데이터 11</td>
            <td>데이터 12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
