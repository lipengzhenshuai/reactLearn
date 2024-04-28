import Bottom from "./Bottom";
import { BookPieceContext } from "./Context";

/**
 ** 入口：引入context对象和下面使用数据的子组件
 *
 ** 注册方式：引入Context，然后给Context.Provider传入值
 */

export default function Page() {
  return (
    <section className="section">
      <BookPieceContext.Provider value={{ bookName: "围城" }}>
        <Bottom></Bottom>
      </BookPieceContext.Provider>
    </section>
  );
}
