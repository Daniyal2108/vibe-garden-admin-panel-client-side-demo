import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { Button } from "../../components";
import ButtonsHeader from "../../components/ButtonsHeader";
import img from "../../assets/images/Rectangle 302.png";
import { useNavigate } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { CgTrashEmpty } from "react-icons/cg";
import { FiEdit, FiEye } from "react-icons/fi";
import apicall from "../../assets/api/axios";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

const Categories = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [deleteCategory, setDeleteCategory] = useState(false);
  const [reload, setReload] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const response = await apicall.get("/categories?type=tools", {
          params: {
            search: filterTerm,
          },
        });
        if (response.status === 200) {
          setCategories(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        setError(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error.message
        );
        setLoading(false);
      }
    };
    getCategories();
  }, [reload, filterTerm]);

  const deleteCategoryFunction = async () => {
    try {
      setLoading(true);
      const response = await apicall.delete(`categories/${deleteId}`);
      if (response.status === 204) {
        setDeleteMessage("deleted Successfully");
        setReload(!reload);
      }
      setLoading(false);
    } catch (error) {
      setError(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error.message
      );
      setLoading(false);
    }
  };

  return (
    <Container
      addButton={true}
      addButtonLink={"/addCategorie"}
      addButtonText={"+ Add More"}
      // isLoading={loading}
      // error={error}
    >
      <div className="flex justify-between flex-wrap">
        <SectionTitle>Tools Category:</SectionTitle>
        <input
          type="text"
          value={filterTerm}
          placeholder="Search here"
          className="rounded bg-[#E5ECE7] md:w-[32rem] w-[90%] h-[50px] font-[14px] focus:outline-none px-5 "
          onChange={(e) => setFilterTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div className=" flex flex-col gap-3">
          {categories.length === 0 ? (
            <h1>No Categories Found</h1>
          ) : (
            categories
              ?.filter((category) => category?.categoryType == "tools")
              .map((category) => (
                <div
                  key={category._id}
                  className="flex items-center justify-between rounded-lg bg-[#E5ECE7] shadow-lg  px-5 py-4"
                >
                  <div className="flex items-center px-4 py-3">
                    <img
                      src={`https://vibe-garden-development.s3.ap-south-1.amazonaws.com/${category.icon}`}
                      alt="category-image"
                      className=" rounded-full object-contain h-12 w-12"
                      height={50}
                      width={50}
                    />
                    <p className="ml-5 font-medium">{category.title}</p>
                  </div>
                  <div className=" relative px-4 ml-5 md:flex space-x-4">
                    <Button
                      borderRadius={10}
                      color="#fff"
                      height={50}
                      bgColor="#EF3A71"
                      icon={<CgTrashEmpty size={25} />}
                      handleClick={() => {
                        setDeleteId(category._id);
                        setDeleteCategory(!deleteCategory);
                      }}
                    />
                    <Button
                      borderRadius={10}
                      color="#fff"
                      height={50}
                      bgColor="#55C595"
                      icon={<FiEdit size={25} />}
                      handleClick={() =>
                        navigate(`/editcategory/${category._id}`)
                      }
                    />
                    <Button
                      borderRadius={10}
                      color="#fff"
                      height={50}
                      bgColor="#215273"
                      icon={<FiEye size={25} />}
                      handleClick={() =>
                        navigate(`/categoryDetail/${category._id}`)
                      }
                    />
                    {deleteCategory && deleteId === category._id ? (
                      <div className=" absolute top-0 left-0 bg-[#E5ECE7]  h-full w-full flex justify-around items-center">
                        <p className=" capitalize">confirm delete?</p>
                        <Button
                          borderRadius={10}
                          color="#fff"
                          height={50}
                          bgColor="#215273"
                          text={"Yes"}
                          handleClick={deleteCategoryFunction}
                        />
                        <Button
                          borderRadius={10}
                          color="#fff"
                          height={50}
                          bgColor="#215273"
                          text={"No"}
                          handleClick={() => setDeleteCategory(false)}
                        />
                      </div>
                    ) : (
                      deleteMessage &&
                      deleteId === category._id && <p>{deleteMessage}</p>
                    )}
                  </div>
                </div>
              ))
          )}
        </div>
      )}
    </Container>
  );
};

export default Categories;
