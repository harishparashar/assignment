import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DemoTable = () => {
  let navigate = useNavigate();
  const product = useSelector((state) => state.product.Productdata);

  const columns = [
    {
      name: "username",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Category",
      label: "Category",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Description",
      label: "Discription",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Expire_Date",
      label: "Expire_Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Cost_Price",
      label: "Cost_Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Sell_Price",
      label: "Sell_Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Discount",
      label: "Discount",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Discount_Sell_Price",
      label: "Discount_Sell_Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Final_Price",
      label: "Final_Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "id",
      label: "Action",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <button onClick={() => editData(value)}>Edit</button>;
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
  };

  const handleSubmit = () => {
    console.log("first");
    navigate("/add");
  };

  const editData = (value) => {
    navigate(`/edit/${value} `, { state: { query: value } });
  };

  return (
    <>
      <div style={{ marginBottom: "10px", display: "flex" }}>
        <button onClick={handleSubmit} className="btn btn-primary">
          Add Product
        </button>
      </div>
      <MUIDataTable
        title={"Product List"}
        data={product}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default DemoTable;
