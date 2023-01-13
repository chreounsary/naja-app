import style from '../styles/Layout.module.css';
export default function Layout({children}){
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols">
        <div className={style.imgStyle}>
          <div className={style.cartoonImg}>
            <div className={style.cloud_one}> </div>
            <div className={style.cloud_two}> </div>
          </div>
        </div>
        <div className="right flex flex-col justify-evenly bg-gray-500">
          <div className="text-center py-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}