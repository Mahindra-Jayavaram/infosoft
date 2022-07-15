import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getSortData } from "../Redux/action";
import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export const Movies = () => {
  const [sort,setSort] = useState("low")
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  // console.log(movies);

  const handleCostSort = (e)=>{
    setSort(e.target.value)
    const {id,value} = e.target;
    if(id === 'sortByCost' && value==='low'){
        movies.sort((a,b)=>a.price-b.price);
        console.log("Low To High",movies);
          dispatch(getSortData(movies));
    }
    if(id === 'sortByCost' && value==='high'){
        movies.sort((a,b)=>b.price-a.price);
        console.log("High To Low",movies);
        dispatch(getSortData(movies));
    }
}

//to sort by rating

const handleRateSort = (e)=>{
  setSort(e.target.value)
  const {id,value} = e.target;
  if(id === 'sortByRate' && value==='low'){
      movies.sort((a,b)=>a.rating-b.rating);
      console.log("Low To High",movies);
        dispatch(getSortData(movies));
  }
  if(id === 'sortByRate' && value==='high'){
      movies.sort((a,b)=>b.rating-a.rating);
      console.log("High To Low",movies);
      dispatch(getSortData(movies));
  }
}
console.log("Sort",sort)
  return (
    <Container w={"80%"} border="5px solid black" m="auto">
      <select
        name=""
        id="sortByCost"
        onChange={(e)=>handleCostSort(e)}
        style={{
          width: "20%",
          marginTop: "20px",
          marginBottom: "20px",
          height: "50px",
          border: "none",
          background: "black",
          color: "white",
          borderRadius: "3px",
          fontSize: "14px",
        }}
      >
        <option value=""> Sort by Price </option>
        <option value="high">high to low</option>
        <option value="low">low to high</option>
      </select>


      {/* //sort by rating */}
      <select
        name=""
        id="sortByRate"
        onChange={(e)=>handleRateSort(e)}
        style={{
          width: "20%",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "20px",
          height: "50px",
          border: "none",
          background: "black",
          color: "white",
          borderRadius: "3px",
          fontSize: "14px",
        }}
      >
        <option value=""> Sort by Rating </option>
        <option value="high">high to low</option>
        <option value="low">low to high</option>
      </select>




      <Grid
        gridTemplateColumns={"repeat(3,1fr)"}
        gridTemplateRows={"repeat(3,500px)"}
        gap={10}
      >
        {movies.map((movie, ind) => (
          <GridItem key={movie._id} border="2px solid black" p={10}>
            <Image src={movie.image} alt="image" w={"100%"} h={"300"} />
            <Text>Title : {movie.movieName}</Text>
            <Text>Rating : {movie.rating}</Text>
            <Text>Category : {movie.category}</Text>
            <Text>Price : {movie.price}</Text>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
