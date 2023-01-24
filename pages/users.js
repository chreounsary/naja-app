import { useReducer, useState, useEffect } from "react";
import Table from "../components/table";
import AddUserForm from "../components/users/addUserForm";
import Layout from "../layout/layout";

function users() {
  const [visible, setVisable] = useState(false);
  const handler = () => {
    console.log('Click add');
    setVisable(visible ? false : true);
  }
  return (
    <Layout>
      {visible ? <AddUserForm/> : <></>}
      <button onClick={handler}>Add user</button>
      User
      <Table/>
    </Layout>
  );
}

export async function getStaticProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

export default users;