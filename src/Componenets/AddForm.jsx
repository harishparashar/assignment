import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Store/Reducers/ProductSlice";
import { v4 as uuidv4 } from "uuid";

function AddForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    Category: Yup.string().required("Category is required"),
    Description: Yup.string().required("Description is required"),
    Expire_Date: Yup.date().nullable().required("Expire_Date is required"),
    Cost_Price: Yup.string().required("Cost_Price is required"),
    Sell_Price: Yup.string().required("Sell_Price is required"),
    Discount: Yup.string().required("Discount is required"),
    Discount_Sell_Price: Yup.string().required(
      "Discount_Sell_Price is required"
    ),
    Final_Price: Yup.string().required("Final_Price is required"),
  });
  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      username: "",
      Category: "",
      Description: "",
      Expire_Date: "",
      Cost_Price: "",
      Sell_Price: "",
      Discount: "",
      Discount_Sell_Price: "",
      Final_Price: "",
    },
    validationSchema,
    onSubmit: (data) => {
      dispatch(addProduct(data));
      navigate("/");
    },
  });

  return (
    <div className="register-form" style={{ margin: "20px" }}>
      <form
        onSubmit={formik.handleSubmit}
        style={{ padding: "40px", border: "0.5px solid black" }}
      >
        <h2 style={{ display: "flex" }}>Add Product</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            name="username"
            type="text"
            className={
              "form-control" +
              (formik.errors.username && formik.touched.username
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <div className="invalid-feedback">
            {formik.errors.username && formik.touched.username
              ? formik.errors.username
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            name="Category"
            type="text"
            className={
              "form-control" +
              (formik.errors.Category && formik.touched.Category
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.Category}
          />
          <div className="invalid-feedback">
            {formik.errors.Category && formik.touched.Category
              ? formik.errors.Category
              : null}
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            name="Description"
            type="text"
            className={
              "form-control" +
              (formik.errors.Description && formik.touched.Description
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.Description}
          />
          <div className="invalid-feedback">
            {formik.errors.Description && formik.touched.Description
              ? formik.errors.Description
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Expire Date</label>
          <input
            type="date"
            value={formik.values.Expire_Date}
            className="form-control"
            name="Expire_Date"
            onChange={formik.handleChange}
          />
          <div className="invalid-feedback">
            {formik.errors.Expire_Date && formik.touched.Expire_Date
              ? formik.errors.Expire_Date
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Cost Price</label>
          <input
            name="Cost_Price"
            type="text"
            className={
              "form-control" +
              (formik.errors.Cost_Price && formik.touched.Cost_Price
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.Cost_Price}
          />
          <div className="invalid-feedback">
            {formik.errors.Cost_Price && formik.touched.Cost_Price
              ? formik.errors.Cost_Price
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Sell Price</label>
          <input
            name="Sell_Price"
            type="text"
            className={
              "form-control" +
              (formik.errors.Sell_Price && formik.touched.Sell_Price
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.Sell_Price}
          />
          <div className="invalid-feedback">
            {formik.errors.Sell_Price && formik.touched.Sell_Price
              ? formik.errors.Sell_Price
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Discount</label>
          <input
            name="Discount"
            type="text"
            className={
              "form-control" +
              (formik.errors.Discount && formik.touched.Discount
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.Discount}
          />
          <div className="invalid-feedback">
            {formik.errors.Discount && formik.touched.Discount
              ? formik.errors.Discount
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Discount Sell Price</label>
          <input
            name="Discount_Sell_Price"
            type="text"
            className={
              "form-control" +
              (formik.errors.Discount_Sell_Price &&
              formik.touched.Discount_Sell_Price
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.Discount_Sell_Price}
          />
          <div className="invalid-feedback">
            {formik.errors.Discount_Sell_Price &&
            formik.touched.Discount_Sell_Price
              ? formik.errors.Discount_Sell_Price
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Final Price</label>
          <input
            name="Final_Price"
            type="text"
            className={
              "form-control" +
              (formik.errors.Final_Price && formik.touched.Final_Price
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.Final_Price}
          />
          <div className="invalid-feedback">
            {formik.errors.Final_Price && formik.touched.Final_Price
              ? formik.errors.Final_Price
              : null}
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-warning float-right"
            onClick={formik.handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
