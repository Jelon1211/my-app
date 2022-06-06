import "./chart.css";
import { PieChart, Pie, Cell } from "recharts";
import { AttachMoney, MoreVert } from "@mui/icons-material";

const Chart = () => {
  const data = [
    { name: "Group A", value: 12150 },
    { name: "Group B", value: 12750 },
    { name: "Group C", value: 24900 },
    { name: "Group D", value: 50200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="chart">
      <div className="chartTitleContainer">
        <span className="chartTitle">Sales Overview</span>
        <span className="SettingsIcon">
          <MoreVert />
        </span>
      </div>
      <div className="chartInfoContainer">
        <div className="pieChart">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="chartNumbers">
          <div className="chartSales">
            <div className="chartSalesIcon">
              <span className="chartIcon">
                <AttachMoney />
              </span>
            </div>
            <div>
              <div className="chartSalesHeading">Number of Sales</div>
              <div className="chartSalesNumbers">$84,600</div>
            </div>
          </div>
          <div>
            <hr className="solid" />
          </div>
          <div className="chartDetailedSales">
            <div>
              <div className="firstDetailedElement">
                <span className="salesText" id="apparel">
                  Apparel
                </span>
                <div className="salesNumber">$12,150</div>
              </div>
              <div>
                <span className="salesText" id="fmcg">
                  FMCG
                </span>
                <div className="salesNumber">$12,750</div>
              </div>
            </div>
            <div>
              <div className="firstDetailedElement">
                <span className="salesText" id="electronic">
                  Electronic
                </span>
                <div className="salesNumber">$24,900</div>
              </div>
              <div>
                <span className="salesText" id="otherSales">
                  Other Sales
                </span>
                <div className="salesNumber">$50,200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
