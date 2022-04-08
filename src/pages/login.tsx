import Router from "next/router";

export default function login() {
  const click = () => {
    Router.push({
      pathname: '/home'
      
    })
  }

  return (
    <div className="bg-gray">
      
      <main>
        <div className="flex flex-col">
          <div className="text-center py-2 m-2">
            <p className="text-3xl">ログイン</p>
          </div>

          <div className="text-center py-2 m-2">
            <form>
              <label>
                <input className="border border-black text" />
              </label>
            </form>
          </div>
          <div className="text-center py-2 m-2">
            <form>
              <label>
                <input className="border border-black text" />
              </label>
            </form>
          </div>
          <div className="text-center py-2 m-2">
            <span onClick={click}>
            <button className="px-2 py-1  bg-red text-lg text-white rounded-full border border-black">
              ログイン
            </button>
            </span>
          </div>

          

          

        </div>
      </main>

    </div>
  )
}