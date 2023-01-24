function action() {
  return (
    <div>
      Enter
    </div>
  );
}

export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

export default action;