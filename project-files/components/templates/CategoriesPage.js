import styles from "./CategoriesPage.module.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "../modules/Card";

function CategoriesPage({ data }) {
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const router = useRouter();
useEffect(()=>{

  const{difficulty , time} =router.query;
  if(query.difficulty !== difficulty || query.time !== time)
    setQuery({difficulty,time})
  
  
},[])
  const changeHandler = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };
  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value="">Dificulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <select value={query.time} name="time" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More Than 30 min</option>
            <option value="less">Less Than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>

        <div className={styles.cards}>
          {!!data.length ? (
            data.map((food) => (
              <div>
                {" "}
                <Card key={food.id} {...food} />{" "}
              </div>
            ))
          ) : (
            <div>
              <img src="/images/search.png" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
